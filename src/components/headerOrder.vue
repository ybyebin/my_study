<template>
   <div>
        <div class="lxn-public-header ">
            <div class="header-left">
                <div>
                    <img @click.stop.prevent="openSideBar"  class="user_msg actives" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAMAAACS/WnbAAAAe1BMVEUAAABmZmZycnJnZ2dsbGxmZmZmZmZmZmZnZ2dnZ2dnZ2dmZmZnZ2dpaWlmZmZmZmZmZmZnZ2dnZ2doaGhmZmZnZ2dmZmZqamppaWlsbGxsbGyqqqpmZmZnZ2dmZmZmZmZnZ2dmZmZoaGhnZ2dra2tmZmZnZ2dnZ2dmZmYWGkvoAAAAKHRSTlMA+wjwFPbz5stL2bkpGuDPwquMMupvZSQiIQ4DoJqVgoB4cTsrHlRFpe6DPAAAAPFJREFUOMt90ddyxCAUA1CBG+49Lttbov//wngmOxswNudZzNUgaPw+LYJOXTJsOtw8/hFHH7Y55b8is9+n1EU5Vq40VTDlAVe+YbhwTcFQ0uJDI2mLoXnR9gXN5Ag4TugSWl7QNVwrYRiEXcF0pik5wCQVdaE9Z65/pveATZ4/PdIBm7ImWTLR8Qc75mkcHtk4TjNseV95Woeqz6HzG8EV0Wh7txE3RC3e4oCbgvdez5A7wicWMuGuRC6BOx3ugOzo0EnEdIpxotMJik4KEZ0iCDoJhHTyUNOphl/RIfUBtNe6LLwwEOJzWAShV6j61gK/tV505cYlijkAAAAASUVORK5CYII=" alt="">
                </div>
            </div>
        </div>
        <div class="lxn-public-header lxn-public-header-logo">
            <div class="header-center">
                <img  class="lxn-header-logo" :src="logoSrc">
            </div>
        </div>   
        <Sidebar ref="sidebar"></Sidebar>
   </div>
</template>

<script>
import Sidebar from "./sideba";

export default {
  components: { Sidebar },
  computed: {
    city() {
      return this.$store.state.ordercity;
    },
    userInfo() {
      return this.$store.state.userInfo;
    }
  },

  data() {
    return {
      logoSrc: "//h5.lanxiniu.com/public/image/wap/lxn-logo.png"
    };
  },
  created() {},
  mounted() {},

  methods: {
    // 打开 侧边栏
    openSideBar() {
      this.$refs.sidebar.open();
    }
  }
};
</script>

<style scoped lang="less">
.lxn-public-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  box-shadow: 0 0 1px 0 rgba(163, 163, 163, 0.1);
}
.lxn-public-header-logo {
  z-index: 999998;
  background: #fff;
  justify-content: center;
}

.lxn-public-header > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lxn-public-header > div:nth-child(1) {
  justify-content: flex-start;
}

.lxn-public-header .header-left {
  > div {
    height: 44px;
    padding: 0 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user_msg {
    width: 16px;
    height: 19px;
  }
  > div:active {
    background: rgba(0, 0, 0, 0.02);
  }
  .header-arow {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border-top: 0.02rem solid #000;
    border-left: 0.02rem solid #000;
    transform: rotate(-45deg);
  }
}

.header-center .lxn-header-logo {
  height: 40px;
  width: 180px;
}

.header-center .lxn-header-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}
</style>
