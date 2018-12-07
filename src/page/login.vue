<template>
  <div class="login-wrapper">

    <div class='login'>
    <div class='login-title'>
         <img class='login-logo' :src="logo"></image>
    </div>       
     <div class='login-content'>
        <div class='login-msg'>
            <div>手机号</div>
            <div>
                <input v-model="phone"  type='number' placeholder='请输入手机号'></input>
            </div>
        </div>
        <div class='login-msg'>
            <div>图形码</div>
            <div>
                <input v-model="imgCodeStr"  type='number' placeholder='请输入图形码'></input>
            </div>
            <div>
                <img @click="getImgverification"  :src="imgCode">
            </div>
        </div>
        <div class='login-msg'>
            <div>验证码</div>
            <div>
                <input v-model="verificationCode" type='number'  placeholder='请输入验证码'></input>
            </div>
            <div>
                <div @click="getverificationCode" class='yzm-btn'>
                    {{verCode}}
                 </div>
            </div>
        </div>
        <!-- <div class='msg'>
            <div>密&nbsp&nbsp&nbsp&nbsp码</div>
            <div>
                <input v-model="pasword"  type='password' placeholder='请输入密码'></input>
            </div>
        </div> -->
    </div>
            <div class='lxn-regist'>
                <div @click='logIn' class='login-btn btn-regist'>登录</div>
                <div>登录即代表同意
                <span @click='routerToRegistrationagreement'>《蓝犀牛用户注册协议》</span>
                </div>
            </div>
    </div>
         <!-- 弹窗类型一 -->
      <Dialog  :dialog="dialog"></Dialog>
  </div>
</template>

<script>
import Dialog from "../components/dialog";

export default {
  name: "login",
  data() {
    return {
      baseUrl: "http://wap.lanxiniu.com",
      header: {
        title: "登录",
        isHomePage: false
      },
      //   弹窗配置
      dialog: {
        type: 1,
        msg: "",
        show: false
      },
      logo: require("../assets/image/login-logo.png"),
      phone: null,
      verificationCode: null,
      //   pasword: null,
      verCode: "获取验证码",
      verCodeFlag: true,
      imgCode: "", //图形验证码,
      imgCodeStr: "",
      user: {},
      time: 59,
      timeInterval: null,
      onlyOne: true
    };
  },
  components: { Dialog },

  computed: {},

  mounted() {
    this.getImgverification();
  },
  methods: {
    // 获取图片验证码
    getImgverification: function() {
      this.imgCode =
        this.API.getVerifyCode + "?rand=" + Math.ceil(Math.random() * 10000);
    },
    //   获取手机验证码
    getverificationCode() {
      if (this.onlyOne) {
        if (this.verCodeFlag) {
          let phone = this.phone;
          if (phone) {
            if (this.checkPhone(phone)) {
              //发送请求

              if (this.imgCodeStr) {
                this.onlyOne = false;
                this.countDown();
                // 校验 图形验证码
                this.checkImgverification({
                  type: 1,
                  Telephone: this.phone,
                  verify: this.imgCodeStr
                });
              } else {
                this.openDialog("请输入图形验证码");
              }
            } else {
              this.openDialog("手机号码不符合规范");
            }
          } else {
            this.openDialog("请输入手机号");
          }
        }
      }
    },
    // 校验图片验证码
    checkImgverification: function(parma) {
      var urls = this.API.getwapDynamicCode + this.units.setUrlParam(parma);
        console.log('验证码:'+urls)
      this.$https(urls,res=>{
            console.log(res);
          if (+res.code !== 0) {
            this.openDialog(res.msg);
            this.countDownTwo();
          } else {
            console.log("正确");
            // this.countDown(60);
            this.user = res.data;
          }
      })
    },
    // 倒计时
    countDown: function(num) {
      console.log(num);
      this.countDownOne();
      this.timeInterval = setInterval(() => {
        this.countDownOne();
        if (this.time === 0) {
          this.countDownTwo();
        }
      }, 1000);
    },
    countDownOne() {
      this.time -= 1;
      this.verCode = this.time + "s后重新获取";
      this.verCodeFlag = false;
    },
    countDownTwo() {
      clearInterval(this.timeInterval);
      this.time = 60;
      this.verCode = "获取验证码";
      this.verCodeFlag = true;
      this.onlyOne = true;
    },
    // 请求数据
    goRegist: function(parma) {
      var url = this.API.asyncDynamicLogin + this.units.setUrlParam(parma);
      this.$https(url,res=>{
           console.log(res);
          if (res.code === 0) {

            let userInfo = JSON.parse(JSON.stringify(this.user))
            userInfo.phoneOrder = this.user.phone;
            userInfo.phone = userInfo.phone.replace(
              /^(\d{4})\d{4}(\d+)/,
              "$1****$2"
            );
            console.log('查看用户信息：'+JSON.stringify(userInfo,null,2))
            this.storeSet("setUser", userInfo);
            clearInterval(this.timeInterval);
            this.units.spaSetStorage(this.$store.state);
            this.$router.back(-1);

            setTimeout(() => {
                this.units.weiXinAuth(this.user.token)
            }, 300);
          } else {
            this.openDialog(res.msg);
          }
      },this)
        
    },
    // 检查数据
    checkData: function() {
      var phone = this.phone;
      var pasword = this.pasword;
      if (this.phone) {
        console.log("=====");
        if (this.verificationCode) {
          if (this.checkPhone(phone)) {
            this.goRegist({
              Telephone: this.phone,
              DynamicCode: this.verificationCode
              //   password: this.pasword
            });
          } else {
            this.openDialog("手机号码不符合规范");
          }
        } else {
          this.openDialog("验证码不能为空");
        }
      } else {
        this.openDialog("请输入手机号");
      }
    },

    //电话校验
    checkPhone(phone) {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
        return false;
      }
      return true;
    },
    logIn() {
      this.checkData();
    },
    //   跳转用户注册协议
    routerToRegistrationagreement() {
      this.$router.push({ name: "serviceAgreement" });
    },
    // 打开弹窗一
    openDialog(msg) {
      this.dialog.msg = msg;
      this.dialog.show = true;
    },
    storeSet(key, value) {
      this.$store.commit(key, value);
    }
  }
};
</script>

<style scoped  lang="less">
.login-wrapper {
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.login {
  padding-left: 0.76rem;
  padding-right: 0.76rem;
  background: #fff;
}

.login-title {
  margin-top: 1.52rem;
}

.login-logo {
  width: 3.82rem;
  height: 0.84rem;
}

.login-content {
  margin-top: 0.5rem;
  background: #fff;
}

.login-msg {
  display: flex;
  font-size: 0.32rem;
  color: #333;
  padding: 0.4rem 0;
  border-bottom: 0.02rem solid #efefef;
  align-items: center;
}

.login-msg input {
  font-size: 0.3rem;
}

.login-msg > div:nth-child(2) {
  flex: 1;
}
.login-msg > div:nth-child(2) input {
  padding-left: 0.3rem;
  box-sizing: border-box;
  width: 100%;
}
.login-msg image {
  width: 100rem;
  height: 0.44rem;
}

.yzm-btn {
  border: 0.02rem solid #2199fa;
  color: #2199fa;
  border-radius: 2rem;
  font-size: 0.2rem;
  padding: 0.1rem 0.2rem;
}

.yzm-btn:active {
  opacity: 0.8;
}
.login-icons {
  margin-left: 10rem;
}
.login-wrong {
  width: 0.27rem;
  height: 0.27rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAXVBMVEUAAAD/RET/SEj/SEj/RET/RET/RUX/RUX/RUX/R0f/Tk7/RET/RUX/RUX/RET/RUX/RET/Rkb/RUX/Rkb/RUX/RET/RET/RUX/SUn/RUX/RUX/RUX/Rkb/SUn+RERYU8nZAAAAHnRSTlMA2Bgi+ezGluNADc3q3L+2nW1nVz8trJEmuoV6bjEqrVt2AAABfUlEQVRIx53WV5KDMBAE0AEka1mCDRhw2r7/MbfYUKPgtin1p8rP+hAT5FnmwfWdNcZ2vRtm2ZXzqUWQ9nR+i6YCT1JML1HdgKSpKaqOeJFjRa6yeBn79MLR4E3MmCqHHXE5KnUjdmb0VW32MlOrqix2x+o7kPci7/evamgat5jkgvV+hab+Y94XdRORSxGqQykiD++ff9UUn5RFoD5ly0FPJtni/WgVdaGS1auHn/qCZhF1oZIFmq3+TtCYi7pQfRloTiLSBvVYqvNV9RHUu8gMEJcozSwDqKMKgzhQRxWc9KCOKvTSgTmu0IkFc1zBigFzXMGkTN9L3y9llivurHRccddJzxV3vTiqqpI6JwNVHwV1g8xUAdTNIi1V1LVRmdrSV767xGXqN4XVU+rSphC1oLuq2DnvKG54V1Wxa/yGF588tm6zKd9tfenmN9O0mR/WtJmbZW2gqfNGR+agyhuLeUM4d+RnOJe3zuQtT7mrWv5imL+G5i+9mSv2N8mz0unhijkCAAAAAElFTkSuQmCC);
  background-size: 0.27rem 0.27rem;
}

.login-right {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAUVBMVEUAAABWxUNRwT9RwT9RwUBSw0BRwT9SwT9SwUBX2FRUwkJSwUJTwkBSwkBRwEBSwT9RwT9RwUBRwUBSwUBSwkBSwUBVwURRxUBSwj9TwkBRwD/AEp1nAAAAGnRSTlMAG9n2s0j56pkFPD5sVOzeyb+QfGN1LSyJXBPOxWAAAAFJSURBVEjHndbbcsMgDATQNaGACb7l2u7/f2gf0omagIFo3+yZMwYbWUIptxS2ZXZuXraQ7ujKMXi+xIfYRJNhIWaqP2nlTtbjLhosK7FDWUXPanxxixfHRtwlQ+OJHTmNb0xU3b2tkJ15WWd0vcxFUYNnd7x8B8sPYp9ngx8l/rGV7RyMnLOHmjqUGXB9XjzOtelSEGdkZ20FnP/vLvQqjAc+EgD4XiUvwQO3bvV1eN67IykUE4JCMWAjJdZ2KW5YKLkC5x7FBfOLEldTnCGV9g2Iqyo6YYwQt6OEySLtKK6uOGNhwTUUF2wsubrihsCSS1XFgMSiqyom3Ji5puId8JlrKi9lmrmikjKNzFxFycEwuasrI7WeuX3Fae/3aoeffbXqfuZHXetQNipdW9Q1YV3LVw4YqnFGNzxpRzX9YKgfQ/VDr3LE/gVOncYUIJovmgAAAABJRU5ErkJggg==);
}

.lxn-regist {
  margin-top: 1rem;
  font-size: 0.24rem;
  color: rgba(21, 21, 21, 0.87);
  text-align: center;
  //   padding-right: 0.45rem;
  background: #fff;
}

.login-btn {
  padding: 0.2rem 0;
  font-size: 0.3rem;
  border-radius: 2rem;
  line-height: unset;
}
.login-btn:active {
  opacity: 0.8;
}

.btn-regist {
  color: #fff;
  background-image: linear-gradient(-225deg, #299ffe 0%, #0b8bf1 100%);
  margin-bottom: 0.16rem;
}

.lxn-regist span {
  color: #0b8bf1;
}
</style>
