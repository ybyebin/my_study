<template>
  <div class="body-div">
    <div class="list-guide">
      <ul>
        <li v-for="(item,index) in listGuide" :key="index">
          <a :href="item.href">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <div id="vconsole">
        <blockquote>移动端调试插件</blockquote>

        <pre>&lt;script src="https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js"&gt;&lt;/script&gt;
    &lt;script&gt;
      <span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> con = <span style="color: #0000FF;" data-mce-style="color: #0000ff;">new</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> VConsole();
    </span>&lt;/script&gt; </pre>
      </div>

      <div id="iostimestr">
        <blockquote>ios时间字符串格式兼容</blockquote>
        <pre>
    <span>let time = Date.parse(new Date(val.replace(/-/g, "/"))) / 1000;</span>
        </pre>
      </div>

      <div id="time">
        <blockquote>时间格式化函数</blockquote>
        <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> timeformat (date, format,week) {
    </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 全局时间格式化输出    .format('yyyy-MM-dd hh:mm:ss')</span>
    let args =<span style="color: #000000;" data-mce-style="color: #000000;"> {
       </span>"M+": date.getMonth() + 1<span style="color: #000000;" data-mce-style="color: #000000;">,
       </span>"d+"<span style="color: #000000;" data-mce-style="color: #000000;">: date.getDate(),
       </span>"h+"<span style="color: #000000;" data-mce-style="color: #000000;">: date.getHours(),
       </span>"m+"<span style="color: #000000;" data-mce-style="color: #000000;">: date.getMinutes(),
       </span>"s+"<span style="color: #000000;" data-mce-style="color: #000000;">: date.getSeconds(),
       </span>"q+": Math.floor((date.getMonth() + 3) / 3), <span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> quarter</span>
<span style="color: #000000;" data-mce-style="color: #000000;">       S: date.getMilliseconds()
     };
     </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (/(y+)/<span style="color: #000000;" data-mce-style="color: #000000;">.test(format)) {
       format </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> format.replace(
         RegExp.$</span>1<span style="color: #000000;" data-mce-style="color: #000000;">,
         (date.getFullYear() </span>+ "").substr(4 - RegExp.$1<span style="color: #000000;" data-mce-style="color: #000000;">.length)
       );
     }
     </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>for</span> (let i <span style="color: #0000FF;" data-mce-style="color: #0000ff;">in</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> args) {
       let n </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> args[i];
       </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (<span style="color: #0000FF;" data-mce-style="color: #0000ff;">new</span> RegExp("(" + i + ")"<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>).test(format)) {
         format </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> format.replace(
           RegExp.$</span>1<span style="color: #000000;" data-mce-style="color: #000000;">,
           RegExp.$</span>1.length === 1 ? n : ("00" + n).substr(("" +<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> n).length)
         );
       }
     }

     </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>(week){
         let day </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> date.getDay() ;
         console.log(</span>'查看'+<span style="color: #000000;" data-mce-style="color: #000000;">day)
        let show_day</span>=['周日','周一','周二','周三','周四','周五','周六'<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>][day]; 
        format </span>= show_day +<span style="color: #000000;" data-mce-style="color: #000000;"> format;
     }

     </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> format;
}</span></pre>

        <div id="rem">
          <blockquote>移动端简单自适应</blockquote>
          <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> setRemFont() {
  let docWidth </span>= 750<span style="color: #000000;" data-mce-style="color: #000000;">;
  let doc </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> window.document,
    docEl </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> doc.documentElement,
    resizeEvt </span>= 'orientationchange' <span style="color: #0000FF;" data-mce-style="color: #0000ff;">in</span> window ? 'orientationchange' : 'resize'<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;

  let recalc </span>= (<span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> refreshRem() {
    let clientWidth </span>=<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> docEl.getBoundingClientRect().width;

    </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>/*</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 8.55：小于320px不再缩小，11.2：大于420px不再放大 </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>*/</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>
    docEl.style.fontSize </span>= Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px'<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;

    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> refreshRem;
  })();

  </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>/*</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 添加倍屏标识，安卓为1 </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>*/</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>
  docEl.setAttribute(</span>'data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>);

  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (/iP(hone|od|ad)/<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>.test(window.navigator.userAgent)) {
    </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>/*</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 添加IOS标识 </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>*/</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>
    doc.documentElement.classList.add(</span>'ios'<span style="color: #000000;" data-mce-style="color: #000000;">);
    </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>/*</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> IOS8以上给html添加hairline样式，以便特殊处理 </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>*/</span>
    <span style="color: #0000FF;" data-mce-style="color: #0000ff;">if</span> (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) &gt;= 8<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>)
      doc.documentElement.classList.add(</span>'hairline'<span style="color: #000000;" data-mce-style="color: #000000;">);
  }

  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (!doc.addEventListener) <span style="color: #0000FF;" data-mce-style="color: #0000ff;">return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
  window.addEventListener(resizeEvt, recalc, </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>false</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>);
  doc.addEventListener(</span>'DOMContentLoaded', recalc, <span style="color: #0000FF;" data-mce-style="color: #0000ff;">false</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>);
}</span></pre>
        </div>

        <div id="getrequest">
          <blockquote>获取url参数</blockquote>

          <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>   getRequest () {
  let url </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> location.href
  console.log(</span>'查看url:' +<span style="color: #000000;" data-mce-style="color: #000000;"> url)
  let theRequest </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> {}
  let index </span>= url.indexOf('?'<span style="color: #000000;" data-mce-style="color: #000000;">)
  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (index !== -1<span style="color: #000000;" data-mce-style="color: #000000;">) {
    let str </span>= url.substr(index + 1<span style="color: #000000;" data-mce-style="color: #000000;">)
    let strs </span>= str.split('&amp;'<span style="color: #000000;" data-mce-style="color: #000000;">)
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>for</span> (let i = 0; i &lt; strs.length; i++<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>) {
      theRequest[strs[i].split(</span>'=')[0]] = decodeURIComponent(strs[i].split('=')[1<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>])
    }
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> theRequest
  } </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>else</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> {
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> theRequest
  }
}</span></pre>
        </div>

        <div id="seturlparam">
          <blockquote>设置url参数</blockquote>
          <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> setUrlParam (obj) {
  let params </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> []
  Object.keys(obj).forEach((key) </span>=&gt;<span style="color: #000000;" data-mce-style="color: #000000;"> {
    let value </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> obj[key]
    </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 如果值为undefined我们将其置空</span>
    <span style="color: #0000FF;" data-mce-style="color: #0000ff;">if</span> (<span style="color: #0000FF;" data-mce-style="color: #0000ff;">typeof</span> value === 'undefined'<span style="color: #000000;" data-mce-style="color: #000000;">) {
      value </span>= ''<span style="color: #000000;" data-mce-style="color: #000000;">
    }
    </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 对于需要编码的文本（比如说中文）我们要进行编码</span>
    params.push([key, encodeURIComponent(value)].join('='<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>))
  })
  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> '?' + params.join('&amp;'<span style="color: #000000;" data-mce-style="color: #000000;">)
}</span></pre>
        </div>

        <div id="deepclone">
          <blockquote>深拷贝</blockquote>
          <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> deepClone (obj) {
  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (obj == <span style="color: #0000FF;" data-mce-style="color: #0000ff;">null</span> || <span style="color: #0000FF;" data-mce-style="color: #0000ff;">typeof</span> obj !== 'object'<span style="color: #000000;" data-mce-style="color: #000000;">) {
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> obj;
  }
  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>switch</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> (Object.prototype.toString.call(obj)) {
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
      {
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> result = <span style="color: #0000FF;" data-mce-style="color: #0000ff;">new</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> Array(obj.length);
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>for</span> (<span style="color: #0000FF;" data-mce-style="color: #0000ff;">var</span> i = 0; i &lt; result.length; ++<span style="color: #000000;" data-mce-style="color: #000000;">i) {
          result[i] </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> deepClone(obj[i]);
        }
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> result;
      }

    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Error]'<span style="color: #000000;" data-mce-style="color: #000000;">:
      {
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> result = <span style="color: #0000FF;" data-mce-style="color: #0000ff;">new</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> obj.constructor(obj.message);
        result.stack </span>= obj.stack; <span style="color: #008000;" data-mce-style="color: #008000;">//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> hack...</span>
        <span style="color: #0000FF;" data-mce-style="color: #0000ff;">return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> result;
      }

    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Date]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object RegExp]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Int8Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Uint8Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Uint8ClampedArray]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Int16Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Uint16Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Int32Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Uint32Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Float32Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Float64Array]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Map]'<span style="color: #000000;" data-mce-style="color: #000000;">:
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Set]'<span style="color: #000000;" data-mce-style="color: #000000;">:
      </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> <span style="color: #0000FF;" data-mce-style="color: #0000ff;">new</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> obj.constructor(obj);

    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> '[object Object]'<span style="color: #000000;" data-mce-style="color: #000000;">:
      {
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> keys =<span style="color: #000000;" data-mce-style="color: #000000;"> Object.keys(obj);
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> result =<span style="color: #000000;" data-mce-style="color: #000000;"> {};
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>for</span> (<span style="color: #0000FF;" data-mce-style="color: #0000ff;">var</span> i = 0; i &lt; keys.length; ++<span style="color: #000000;" data-mce-style="color: #000000;">i) {
          </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> key =<span style="color: #000000;" data-mce-style="color: #000000;"> keys[i];
          result[key] </span>=<span style="color: #000000;" data-mce-style="color: #000000;"> deepClone(obj[key]);
        }
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> result;
      }

    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>default</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>:
      {
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>throw</span> <span style="color: #0000FF;" data-mce-style="color: #0000ff;">new</span> Error("Unable to copy obj! Its type isn't supported."<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>);
      }
  }
}</span></pre>
        </div>

        <div id="checkphone">
          <blockquote>校验手机号</blockquote>
          <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> checkPhone  (phone)  {
  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (!/^1(3|4|5|7|8)\d{9}$/<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>.test(phone)) {
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> <span style="color: #0000FF;" data-mce-style="color: #0000ff;">false</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
  }
  </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> <span style="color: #0000FF;" data-mce-style="color: #0000ff;">true</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
}</span></pre>
        </div>

        <div id="random">
          <blockquote>随机数</blockquote>
          <pre> <span style="color: #008000;" data-mce-style="color: #008000;">
       /*</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>*
         * @description 随机数生成
         * @param  [number]  开始值 
         * @param  [number]  结束值 
         * @param  [number]  需要的类型 
         * type 1 生成n-m，包含n但不包含m的整数
         *      2 生成n-m，不包含n但包含m的整数
         *      3 生成n-m，不包含n和m的整数
         *      4 生成n-m，包含n和m的随机数 
         * @return [number] 
         </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>*/</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>
        randomNumber: </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>(n, m, type) {
            </span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
>//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> Math.round(Math.random())//可均衡获取0到1的随机整数。</span>
            <span style="color: #008000;" data-mce-style="color: #008000;">//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> Math.floor(Math.random() * 10);// 可均衡获取0到9的随机整数。</span>
            <span style="color: #008000;" data-mce-style="color: #008000;">//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> Math.ceil() //返回大于等于数字参数的最小整数(取整函数)， 对数字进行上舍入</span>
            <span style="color: #008000;" data-mce-style="color: #008000;">//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> Math.floor() //返回小于等于数字参数的最大整数， 对数字进行下舍入　</span>
            <span style="color: #008000;" data-mce-style="color: #008000;">//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> Math.round() //返回数字最接近的整数， 四舍五入</span>
            <span style="color: #0000FF;" data-mce-style="color: #0000ff;">var</span> type = type || 4<span style="color: #000000;" data-mce-style="color: #000000;">;
            </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> n = n || 0<span style="color: #000000;" data-mce-style="color: #000000;">;
            </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> m = m || 9<span style="color: #000000;" data-mce-style="color: #000000;">;
            </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>switch</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> (type) {
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> 1<span style="color: #000000;" data-mce-style="color: #000000;">:
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> parseInt(Math.random() * (m - n) + n, 10<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>);
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>break</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> 2<span style="color: #000000;" data-mce-style="color: #000000;">:
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> Math.floor(Math.random() * (m - n) + n) + 1<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>break</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> 3<span style="color: #000000;" data-mce-style="color: #000000;">:
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> Math.round(Math.random() * (m - n - 2) + n + 1<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>);
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>break</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>case</span> 4<span style="color: #000000;" data-mce-style="color: #000000;">:
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> Math.round(Math.random() * (m - n) +<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> n);
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>break</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>default</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>:
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> Math.floor(Math.random() * 10); <span style="color: #008000;" data-mce-style="color: #008000;">//</span><span
  style="color: #008000;"
  data-mce-style="color: #008000;"
> 可均衡获取0到9的随机整数。</span>
                    <span style="color: #0000FF;" data-mce-style="color: #0000ff;">break</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
            }
        },</span></pre>
        </div>

        <div id="loadjs">
          <blockquote>动态加载JS</blockquote>
          <pre><span style="color: #0000FF;" data-mce-style="color: #0000ff;">function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> loadJs  (sid, jsurl, callback) {
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> doc =<span style="color: #000000;" data-mce-style="color: #000000;"> document
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> nodeHead = doc.getElementsByTagName('head')[0<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>];
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>var</span> nodeScript = <span style="color: #0000FF;" data-mce-style="color: #0000ff;">null</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (doc.getElementById(sid) == <span style="color: #0000FF;" data-mce-style="color: #0000ff;">null</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>) {
        nodeScript </span>= doc.createElement('script'<span style="color: #000000;" data-mce-style="color: #000000;">);
        nodeScript.setAttribute(</span>'type', 'text/javascript'<span style="color: #000000;" data-mce-style="color: #000000;">);
        nodeScript.setAttribute(</span>'src'<span style="color: #000000;" data-mce-style="color: #000000;">, jsurl);
        nodeScript.setAttribute(</span>'id'<span style="color: #000000;" data-mce-style="color: #000000;">, sid);
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (callback != <span style="color: #0000FF;" data-mce-style="color: #0000ff;">null</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>) {
            nodeScript.onload </span>= nodeScript.onreadystatechange = <span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>function</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> () {
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> (nodeScript.ready) {
                    </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>return</span> <span style="color: #0000FF;" data-mce-style="color: #0000ff;">false</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                }
                </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (!nodeScript.readyState || nodeScript.readyState == "loaded" || nodeScript.readyState == 'complete'<span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>) {
                    nodeScript.ready </span>= <span style="color: #0000FF;" data-mce-style="color: #0000ff;">true</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>;
                    callback();
                }
            };
        }
        nodeHead.appendChild(nodeScript);
    } </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>else</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
> {
        </span><span
  style="color: #0000FF;"
  data-mce-style="color: #0000ff;"
>if</span> (callback != <span style="color: #0000FF;" data-mce-style="color: #0000ff;">null</span><span
  style="color: #000000;"
  data-mce-style="color: #000000;"
>) {
            callback();
        }
    }
}</span></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jsPageOne",
  components: {},
  data() {
    return {
      listGuide: [
        {
          name: "移动端调试插件",
          href: "#vconsole"
        },
        {
          name: "ios时间字符串格式兼容",
          href: "#iostimestr"
        },
        {
          name: "时间格式化函数",
          href: "#time"
        },
        {
          name: "移动端简单自适应",
          href: "#rem"
        },
        {
          name: "获取url参数",
          href: "#getrequest"
        },
        {
          name: "设置url参数",
          href: "#seturlparam"
        },
        {
          name: "深拷贝",
          href: "#deepclone"
        },
        {
          name: "校验手机号",
          href: "#checkphone"
        },
        {
          name: "随机数",
          href: "#random"
        },
        {
          name: "动态加载JS",
          href: "#loadjs"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},

  methods: {}
};
</script>

<style scoped lang="less">
@import "../../assets/less/codeStyle.less";
</style>
