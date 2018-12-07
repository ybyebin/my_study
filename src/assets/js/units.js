import $https from './request'
import API from './api'




function setRemFont() {
  let docWidth = 750;
  let doc = window.document,
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  let recalc = (function refreshRem() {
    let clientWidth = docEl.getBoundingClientRect().width;

    /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
    docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';

    return refreshRem;
  })();

  /* 添加倍屏标识，安卓为1 */
  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
    /* 添加IOS标识 */
    doc.documentElement.classList.add('ios');
    /* IOS8以上给html添加hairline样式，以便特殊处理 */
    if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
      doc.documentElement.classList.add('hairline');
  }

  if (!doc.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}
// 拼接字符串
const setUrlParam = (obj) => {
  let params = []
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined') {
      value = ''
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    params.push([key, encodeURIComponent(value)].join('='))
  })
  return '?' + params.join('&')
}
// 获取url中"?"符后的字串
const getRequest = () => {
  let url = location.href
  console.log('查看url:' + url)
  let theRequest = {}
  let index = url.indexOf('?')
  if (index !== -1) {
    let str = url.substr(index + 1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1])
    }
    return theRequest
  } else {
    return theRequest
  }
}

// 更新全局数据
const vuexStoreSet = (that, key, value) => {
  let str = Object.prototype.toString.call(value)
  if (str === '[object Array]' || str === '[object Object]') {
    value = JSON.stringify(value)
  }
  that.$store.commit(key, value);
}


// 深拷贝
const deepClone = (obj) => {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  switch (Object.prototype.toString.call(obj)) {
    case '[object Array]':
      {
        var result = new Array(obj.length);
        for (var i = 0; i < result.length; ++i) {
          result[i] = deepClone(obj[i]);
        }
        return result;
      }

    case '[object Error]':
      {
        var result = new obj.constructor(obj.message);
        result.stack = obj.stack; // hack...
        return result;
      }

    case '[object Date]':
    case '[object RegExp]':
    case '[object Int8Array]':
    case '[object Uint8Array]':
    case '[object Uint8ClampedArray]':
    case '[object Int16Array]':
    case '[object Uint16Array]':
    case '[object Int32Array]':
    case '[object Uint32Array]':
    case '[object Float32Array]':
    case '[object Float64Array]':
    case '[object Map]':
    case '[object Set]':
      return new obj.constructor(obj);

    case '[object Object]':
      {
        var keys = Object.keys(obj);
        var result = {};
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          result[key] = deepClone(obj[key]);
        }
        return result;
      }

    default:
      {
        throw new Error("Unable to copy obj! Its type isn't supported.");
      }
  }
}
//    校验手机号
const checkPhone = (phone) => {
  if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
    return false;
  }
  return true;
}
// 线上搜索城市
const gaoDeWebApiSearch = (parma, fun) => {
  console.log('调用线上搜索')
  console.log(JSON.stringify(parma))
  let data = {
    keywords: parma.value,
    city: parma.city,
    citylimit: true,
    key: API.gdak
  };
  let urls = API.gaoDeInputtips + setUrlParam(data);
  $https.https(urls, res => {
    if (res && res.tips) {
      let tips = res.tips;
      let searchData = [];
      if (tips.length !== 0) {
        for (let i in tips) {
          if (
            Object.prototype.toString.call(tips[i].address) !==
            "[object Array]"
          ) {
            searchData.push(tips[i]);
          }
        }
        fun(searchData)
      }
    }
  })

}

/**
 * 转换 高德坐标---->百度坐标
 * lng  经度
 * lat  纬度
 */
const changeGDtoBD = (locaition, fun) => {
  let data = {
    coords: locaition,
    from: 3,
    to: 5,
    ak: API.bdak
  };
  let urls = API.baiDuGeoconv + setUrlParam(data);
  $https.https(urls, res => {
    fun(res)
  })

}
const getDistance = (moveout, movein, fun) => {
  let data = {
    origin: moveout.location, //	出发点
    destination: movein.location, //  目的地
    originid: moveout.id, //出发点poiid
    destinationid: movein.id, //目的地poiid
    strategy: 10, //驾车选择策略
    key: API.gdak
  };
  let urls = API.gaoDeDriving + setUrlParam(data);

  $https.https(urls, res => {
    fun(res)
  })
}

const pushOrder = (that, parma) => {
  let dic = {
    sission_id: parma.token,
    orderNum: parma.orderNum,
  }
  let urls = API.directPay + setUrlParam(dic);

  $https.https(urls, (res) => {
    if (res.code === 0) {
      that.$router.push({
        path: '/orderDetail',
        query: {
          orderNum: parma.orderNum
        }
      })
    }
  })
}




export default ({

  init: function () {
    setRemFont();
  },
  setUrlParam: setUrlParam,
  getRequest: getRequest,
  vuexStoreSet: vuexStoreSet,
  deepClone: deepClone,
  checkPhone: checkPhone,
  gaoDeWebApiSearch: gaoDeWebApiSearch,
  changeGDtoBD: changeGDtoBD,
  getDistance: getDistance,
  pushOrder:pushOrder,

  // 仅用于全局数据存储在本地
  spaSetStorage: function (value) {
    if (value) {
      let key = 'lxnSPAData'
      localStorage.setItem(key, JSON.stringify(value.userInfo))
    }
  },
  // 仅用于获取存储在本地的全局数据
  spaGetStorage: function () {
    let key = 'lxnSPAData'
    let value = localStorage.getItem(key);
    if (value) {
      let obj = JSON.parse(value);
      return obj
    } else {
      return null
    }

  },
  removeStorage: function (key) {
    sessionStorage.removeItem(key);
  },
  // 按钮点击百度统计
  baiduClickCount: function (name, des) {
    console.log('调用百度统计了~')
    if (window._hmt) {
      let str = 'bdh5' + name
      window._hmt.push(['_trackEvent', str, "click", des]);
    } else {
      console.log('未载入百度统计')
    }
  },

  //  检测是否是微信内打开
  checkIsWeixin() {
    let ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true
    } else {
      return false
    }
  },
  //微信授权
  weiXinAuth(sessionID) {
    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      console.log('调用了微信授权')
      let hrefs = location.href;
      let index1 = hrefs.indexOf('#/')
      var href = hrefs.substring(0, index1 + 2);
        console.log(href)
      let str =
        "https://www.lanxiniu.com/Weixin/auth?session_id=" +
        sessionID +
        "&redirect_url=" +
        encodeURIComponent(href);
      console.log(str);
      window.location.href = str;
    }
  },
     //根据链接配置订单来源  fr=aaa   
     setOrderFr() {
        let urls = window.location.href;
        let theRequest = {}
        let index1 = urls.indexOf('fr')
        if (index1 > 0) {
          let index2 = urls.indexOf('#')
          let strs = urls.substr(index1, (index2 - index1)).split('&');
          for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1])
          }
          console.log('查看取得fr值:' + JSON.stringify(theRequest, null, 2))
          return theRequest.fr
        } else {
          return null
        }
      },
})
