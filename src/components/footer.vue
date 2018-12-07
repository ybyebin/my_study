<template>
  <div>
    <div class="service">
      <div v-if="isPutong" class="div-kefu">
        <div>
          <img :src="footImg" alt>
        </div>
      </div>
      <div v-if="notcompany" class="option">
        <div @click="routerToCostDes">
          <div>
            <img class="option-img" :src="zfsm">
          </div>
          <div>资费说明</div>
        </div>

        <div @click="call">
          <a href="tel:4006785966">
            <img class="option-img" :src="kfrx">
            <div>
              <p>客服热线</p>
              <p>8:00-20:00</p>
            </div>
          </a>
        </div>

        <div @click="routerToUserGuide">
          <div>
            <img class="option-img" :src="yhzn">
          </div>
          <div>用户指南</div>
        </div>
      </div>

      <div v-if="!notcompany" class="option option-qiye">
        <div @click="call">
          <a href="tel:4006785966">
            <img class="option-img" :src="kfrx">
            <div>
              <p>客服热线</p>
              <p>8:00-20:00</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderType: {
      type: Number,
      value: 0
    },
    city: {
      type: String,
      value: "北京"
    },
    swiperIndex: {
      type: Number,
      value: 0 
    }
  },
  mounted() {
    this.init();
  },
  
  data() {
    return {
      footImg: require("../assets/image/foot-img.png"),
      zfsm: require("../assets/image/zfsm.png"),
      kfrx: require("../assets/image/kfrx.png"),
      yhzn: require("../assets/image/yyzn.png"),
      notcompany: true,
      isPutong: false
    };
  },
  methods: {
    init() {
      if (+this.orderType === 7) {
        this.notcompany = false;
      }
      if (+this.orderType === 5) {
        this.isPutong = true;
      }
    },
    call() {
      //   this.units.baiduClickCount("call400", "首页底部客服按钮");
    },
    routerToCostDes() {
        console.log('查看swiperIndex：'+this.swiperIndex)
      this.$router.push({
        path: "/getPriceInfo",
        query: { 
            city: this.city,
            orderType:this.orderType,
            swiperIndex:this.swiperIndex
         }
      });

      //   this.units.baiduClickCount("costDes", "首页底部资费说明按钮");
    },
    routerToUserGuide() {
      if (+this.orderType === 6) {
        this.$router.push({ name: "userGuideRiShi" });
      } else {
        this.$router.push({ name: "userGuide" });
      }

      //   this.units.baiduClickCount("userGuide", "首页底部用户指南");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.service {
  //   padding: 0.4rem 0.24rem;
  //   margin-bottom: 0.3rem;
  //   background: #ffffff;
  //   box-shadow: 0 0 3px 0 rgba(163, 163, 163, 0.5);
  //   border-radius: 0.04rem;
  .div-kefu {
    img {
      width: 6.44rem;
      height: 0.26rem;
    }
  }
  .option {
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      font-size: 0.24rem;
      color: #666666;
      letter-spacing: 0.05px;
      text-align: center;
      width: 31.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 0.02rem solid #e1e1e1;
      border-radius: 0.12rem;
      padding: 0.12rem 0;
      padding-bottom: 0.1rem;
      a {
        display: flex;
        align-items: center;
        div {
          text-align: left;
        }
      }
    }
    > div:active {
      background: rgba(0, 0, 0, 0.02);
    }
    .option-img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.14rem;
      //   margin: 0 auto;
    }
  }
}

.option-qiye {
  > div {
    width: 100% !important;
  }
  a > div {
    display: flex;
    align-items: center;
  }
}
</style>
