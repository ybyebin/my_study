<template>
    <div @touchmove.stop.prevent :class="{show:display}"  class="pay">
        <div class="pay-content">
            <div v-show="display" class="pay-type-one">
                <div class="header">
                     
                    <div class="title">
                        支付订单
                    </div>
                    <div >
                        <span  @click="closePay" class="close"></span>
                    </div>
                </div>
                <div class="content">
                    <div v-show="!isWeiXinBrowser" @click="checkPayType(payType[0])" class="aplay">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAnFBMVEUAAAAAoOoAoeoAoOkAoesAoeoAoekAoeoAouoAoekApe4AqO8Ao+wAoOkAoeoAoeoAoOoAqPIAqfIAoeoAoeoAo+wAo+wAoekAoeoAoOoAoeoAouwAouwAv/8AoOoAoesAoesAouwAouwAp+0AoeoAoOoAoeoAoeoAousAoesAoeoAouoAoesAoeoAousAyP8AoeoAousAoOoAoOmLOSH5AAAAM3RSTlMA5dntoiP3gEfTHQ80mfTwzhML+6dBL9++uWs7KASyfGZPGhjJw6udloh3YVmRcwXVWlYuDgnkAAAB+0lEQVRIx9WW2ZKjIBSGT4xBifvWcYsmmn3p9DTv/25TQmpEhXTrzMX0d0nVB4fDLwIMU4vx7BvgRDOhxdyTESRv8GQTkFGgX0+PjIaaWTBeRE21OzKBBCAikzDhNE3UABMJd71BldY6l4lLaNCIGAxkmjj7oSKa81RUvPBDjkQM4QvMfy06Ck8NDSk/tPpvuvo34qJlTUWvHXBfiWuQ4r1cURWhU/EqE+XkVCxGi5h6PhotllTcvuwqwsWhcLuXQsDO5SAX0VF/AMXPbyfcTfAikIpWDR2M7Z1mk/0pLCIR0RYEvJVuAg01kolbusY5VNWjphucyyJxJhIxBKiO7ay4XHbLtiWiXUHmkA7xjY9fpNpC0YLF8GJepT6n+tdYIH7CUfjt6MCzKD/6ovewReLeH7T5rHTEhyHyPgzhEWluK/o+EhS6ZAXiS3+C6hrumbiEYtibnH2/CiHOuYY+TEzB7C8Ze+wEdyxYVi4U4/6bxX4HitdeNEUmEEkEkLF+sfkroOQK4djd1gNx5gGsI2s3C+xVuDGA8Wn3+8X1id9Sl/pAhtinvCuSldnVDM0hYhKWpz8ZRSq3++zuEDlKk2LMD1jlNdJvl8OMfIGTgjX1gaRPfZKBO8Xbw7RXIKJX3/t4cQMwxQxSeBKN2qfLR0W38Pw7koNPOjN+A97Ku0lKDTLNAAAAAElFTkSuQmCC" alt="">
                        </div>
                        <div>支付宝</div>
                        <div>
                            <div>
                                <span :class="{check:payType[0].check}"></span>
                            </div>
                        </div>
                    </div>
                    <div v-show="WeiXinPay"  @click="checkPayType(payType[1])" class="weixin">
                        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAilBMVEUAAABat05Zt01at05Zt0xat01at01cuU5hu1B4yV9at0xauE1buU9Zt0xauE1mxlJat0xZt0xat0xZt0xculBZt0xat01Zt01Zt0xhu1dZt0xZt0xbt01buE1fuFBgulBgvFRat01at0xZt0xat01at01cuU5dulCA4GBat01Zt0xcuU9btk9ZtkxCF9gCAAAALXRSTlMA5tTs+p6PNBUGxF4822UK9tCkdCHuh+G8DfGyllccGhHzyqxtUEgoBHzWLyrIMcCNAAAB60lEQVRIx52W13aDMAxABcUMsyGsBLJH01b//3s9CSOByGbc94slS8iCln3F8h9FipqXlwL6bJmGk9B0892LA5zMwe40i+Es9O9GjHAmehMnzuYZ7UqbL6730kDlwe5wCYEPHi7iChthvVzOQ0Ucq0q1B787PjwpnNSlxBMkOCRJTejxm65xCIePtOMCPjAZDlCH4vEGJEYoF0sLBBS5TCxBjLURiwxk7BSR+GNJtK0eCE90xNrtOSFCQpQGapweWuLBhhQNoHHy+rsmgEOJKq1dOT4I6zxcQry3l5ew7pK+qzqtw7kZMzohXqDGDzAv6sp5zQHRDhpsQuxSZIjhFsCPm7q517d8CdHs7hAR14wlTdPfLXjxJxPhiC82q35hCPEPWjxsyS7QpyLEClr8Jkot9WFATIg61HSXnhO/5okQv16fv2mIig2f7DVCRA86bJ4WQHBGSgxhDN8lRTyPiSnSombIPUMTiJjtZd5KODrqHhV6mWw8KsJonUw+kAPatFIN5SJ6lGariGOi/ZlcnCGOiyaAdebH0nZ+tyvj4rGHRYkJ9jgCOC6Ow4cPq24ynMJp+JQra5yEvnh5WLyuLF2Qlq5k5tIlcPHaWWNF8xfdhnhGngev18jRRFUrTehj2hF3v6S4nFXdcPkHk49hyGchP74AAAAASUVORK5CYII=" alt=""></div>
                        <div>微信</div>
                        <div>
                            <div>
                                <span :class="{check:payType[1].check}"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pay-footer">
                    <div @click="btnSurePay" class="pay-btn"  v-text="btntext"></div>
                </div>
            </div>           
        </div>
    </div>

</template>

<script>
export default {
  props: {},
  data() {
    return {
      pay: {
        orderNum: "",
        session_id: "",
        remark: "",
        ver: 2.0
      },
      display: false,
      isWeiXinBrowser: false,
      WeiXinPay: true,
      payType: [
        {
          url: "https://www.lanxiniu.com/Pay/aliH5",
          check: true,
          type: "ali"
        },
        {
          url: "https://www.lanxiniu.com/Pay/wxH5",
          check: false,
          show: true,
          type: "wexin"
        }
      ],
      current: null,
      btntext: "确认支付"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.checkIsWeiXin();
    });
  },
  methods: {
    show(parma) {
        console.log('传过来的值：'+JSON.stringify(parma,null,2))
      for (const key in parma) {
        if (this.pay.hasOwnProperty(key)) {
          this.pay[key] = parma[key];
        }
      }
      if (this.isWeiXinBrowser) {
        this.checkPayType(this.payType[1]);
      } else {
        this.checkPayType(this.payType[0]);
      }
      if (parma.money) {
        this.btntext = "确认支付(" + parma.money + "元)";
      }
        console.log('传过来的值：'+JSON.stringify(this.pay,null,2))

      this.display = true;
    },
    closePay() {
      this.display = false;
    },
    // 选择支付方式
    checkPayType(item) {
      this.payType.forEach(ele => {
        ele.check = 0;
      });
      item.check = true;
      this.setCurrent(item);
    },

    setCurrent(item) {
      this.current = item;
      console.log(
        "查看当前选择支付方式:" + JSON.stringify(this.current, null, 2)
      );
    },
    btnSurePay() {
      let hrefs = location.href;
      let index1 = hrefs.indexOf("#/");
      let href = hrefs.substring(0, index1 + 2);
      // 支付时 保存数据()
      //   this.units.spaSetStorage(this.$store.state);
      let redirectUrl = href + "orderdetail?orderNum=" + this.pay.orderNum;
      console.log("查看跳转url:" + redirectUrl);
      let parma = this.pay;
      parma.testUrl = redirectUrl;
      let urlsParam = this.units.setUrlParam(parma);
      let urls = this.current.url + urlsParam;
      console.log("查看数据:" + urls);

      this.$https(urls, res => {
        let data = res.data;
        console.log(res);
        if (res.status === 0) {
          if (this.isWeiXinBrowser) {
            this.checkWeixinJSBridge(data);
          } else {
            window.location.href = data.url;
          }
        } else {
          console.log("支付失败");
        }
      });
    },
    // 检查是否是在微信内打开
    checkIsWeiXin() {
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        console.log("微信内浏览器");
        this.isWeiXinBrowser = true;
      }
    },
    onBridgeReady(param) {
      let that = this;
      let key = "timeStamp";
      if (param.hasOwnProperty(key)) {
        param[key] = String(param[key]);
      }
      WeixinJSBridge.invoke("getBrandWCPayRequest", param, function(res) {
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          // 使用以上方式判断前端返回,微信团队郑重提示：
          //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          that.$router.push({
            path: "/orderdetail",
            query: { orderNum: that.pay.orderNum }
          }); //类似post传参
        } else {
          console.log("支付失败");
        }
      });
    },
    checkWeixinJSBridge(param) {
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            this.onBridgeReady,
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", this.onBridgeReady);
          document.attachEvent("onWeixinJSBridgeReady", this.onBridgeReady);
        }
      } else {
        this.onBridgeReady(param);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  z-index: 999999;
}
.pay.show {
  display: flex;
}
.pay-content {
  text-align: center;
  width: 5.9rem;
  background: #ffffff;
  border-radius: 4px;
  font-size: 0.3rem;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-name: zoomIn;
  animation-iteration-count: 1;
}

.header {
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 18px;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
  > div:first-child {
    flex: 1;
    width: 100%;
  }
  > div:last-child {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 16px;
    //   padding-left: 1px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
.close {
  color: #666666;
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  z-index: 1;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAARVBMVEUAAABnZ2doaGhnZ2dnZ2eAgIBmZmZnZ2doaGhqampmZmZnZ2doaGhra2toaGhmZmZnZ2dmZmZmZmZoaGhmZmZnZ2dmZmb1YdKiAAAAFnRSTlMA+lZIpga0s4EV8mVcKCHqwcCTe3g5FacVyAAAALxJREFUSMft1TkSwjAQBdGPjYy8YHbd/6i4lHTcIVX8eF40QSfr8xO3stY9qa2dBuem1m5zHq1L5Y6NebUupVvm5KxkufTzMUFKh7QOKZyTOCdxTuKcxDmJcxLnJM5JnJNlwhmJcxLnJM5JnJM4J3FO4pzccE42nJE4Kb3jD7YOOKRwXvJ3Vwec7QoOKR3SOqRwTuKcxDmJcxLnJM5JnJM4J8v078ovdyUVZ+SeO87IIW+ckMucDPUaue0gX2CwKSyJBMTYAAAAAElFTkSuQmCC);
  background-size: 100%;
}
.close:active {
  background: rgba(0, 0, 0, 0.1);
}

.content {
  //   margin-top: 5px;
  padding: 0 20px;
  > div {
    display: flex;
    align-items: center;
    padding-top: 26px;
    padding-bottom: 18px;
    > div:first-child {
      padding-right: 10px;
    }
    > div:nth-child(2) {
      flex: 1;
      text-align: left;
    }
    > div:last-child {
      div {
        padding: 5px;
      }
    }
  }
  > div:last-child {
    padding-top: 18px;
    padding-bottom: 26px;
  }
  > div:first-child {
    border-bottom: 1px solid #f1f1f1;
    // background: red;
  }
  img {
    width: 28px;
    height: 28px;
  }
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAWlBMVEUAAAA2oek3oew7re02oOk3ouo2oek2oek3oeo3oOk3ouk2oes3oeo7pO1Vqv82oOo3oOk3oek2oeo3oOo2oek3oeo3ous4ouo2oOk4oeo3o+k4pOk9qvM2oOnXu56JAAAAHXRSTlMA6zEO1ID59u7fjodhHAbmsODLxKWdc25eV1M7FVXQtPYAAAGcSURBVFjDnJRZtoMgEERLEJyiUeOs7H+b79DgO3GKwv3xh266yqJxxTKJpk4CKYOkbsS0wAmWhmpHmDI8hHdUfSTs+JNyEatLYnHb4hVsCqowrDYNgxd+kX/UStIOjIPgbGgTtfLJccm8Xv/O2MHX7L0OMV+OL+2JvsAJRW/7y3MZRaqIKOOXBmeRItLipL5URJn/NGk9dexg7xe4QdgZDvrN+CNuGY2MnQ+zJPMZHsDe5OS8kRbQ/QyPYDRD8G2Wyc+Ih4wmUXsDBB4jtjZwElDCgZJE8O9+UQ4H8uhrZk7PLYMTGT1WM0Jnx3HByu6gof3Tw5GedhT9VYpQAUcKihMDkP474OFCuipgcIZZDQvtL3hAW27BpD8tPGh15WRSNMCDwWSpsRZ4mtCg1h8OD7iurMmKGF7EZL+OZAUvKv0EIG0i3aEEyb/S64AGABiGYRh/1gZhApf+b23SB/QV+hH7G3uQepR7mXqdN1A60jpUN9a7WLratly73hcwFnEashbzFjQXdRu2H/dfOF55Xrpe+148X31fvlv/AcQbXT3SfiKxAAAAAElFTkSuQmCC);
    background-size: 20px 20px;
  }
  span.check {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAAA2oek2oek3oOk3ouk3ouo3oeo+sO43oeo3oOk2oeo3oOo2oek3ous3o+k4pOk3oOs8ou49qvNVqv83oek2oOn////3+/6PyvJot+5Lqus4oelpuO7h8fu94Pfk8vzB4vlYsO253vft9v06oume0fSIx/KA4Lb6AAAAFXRSTlMA6/nUjn9hDu7fy8Slc1M7Mx4VA7EwGLduAAABoUlEQVRYw6WX3XKCMBBGNwnhH0T0oy3Wqq32/R+xM5ppFIxJ2HPtOQOoZJdc9K2uy0JIKYqy1m1PUXSJwgSVdKF21hh71miyEF3ncJJrbyIVeIlIX+rrCl6qtdtfCQQgVs7LlwhCPr+NTYJgks0Tf4sItvNCgiiS2f0jknTy/CUikauH718gGrEmS4UFVMsewO9p/hiyiBt4H37+CyIzAR3jD3cFbS4gj/HvC/ntEpoI/8ZhhxvNNaBi/bdPGNT1/bfcBzoiSpb59i+hGD4UUc/xgZ5alo92+isaj2OMD031o78fDmOEj5rKiT+YQpiPkoqJbwqBPgoSsFyGwRZm/geeIEjCsvs2H96PgT6kCcwLHt8GBNwFvw9BBdwFv4+CSkwKX7bg91FSDWfh4vdRk4azEOBDUwt3we+jpR7ugt9HT6TcBb+vXK+03dHn21daB1fB76Nzv9bPxwBfmYPFUfD6aF4ebeeTzzdHG2ksRNvjfREiswPGIlLuiMMesrhjHnfQ5I667GGbP+7zFw7+ysNfuvhrH3/x5K++/OWbvf7/ARNOCOSeCFgVAAAAAElFTkSuQmCC);
  }
}
.pay-footer {
  padding: 0 16px;
  padding-bottom: 16px;
}
.pay-btn {
  height: 0.76rem;
  line-height: 0.76rem;
  font-size: 0.34rem;
  color: #ffffff;
  background: #36a0e9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  text-align: center;
}
.pay-btn:active {
  background: rgba(54, 160, 233, 0.9);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
</style>
