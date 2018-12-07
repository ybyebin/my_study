<template>
  <div>
    <div class="lxn-public-header">
      <div class="header-left">
        <div @click.stop.prevent="back">
          <span class="header-arow"></span>
        </div>
      </div>
      <div class="header-center">
        <slot name="logo"></slot>
        <span class="lxn-header-title">{{header.title}}</span>
      </div>
      <div class="header-right">
        <!-- <div v-show="header.isHomePage"  class="actives">
                    <div></div>
                    <div class="arrow"></div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: Object
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 返回上一页
    back() {
    //   this.$store.commit("setTransition", "turn-off");

      this.$router.go(-1);
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
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(163, 163, 163, 0.5);
}

.lxn-public-header > div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.lxn-public-header > div:nth-child(1) {
  justify-content: flex-start;
}

.lxn-public-header .header-left {
  > div {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  height: 32px;
  width: 32px;
  margin: 0 8px 0 0;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
}

.header-center .lxn-header-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}

.lxn-public-header .header-right {
  justify-content: flex-end;
  font-size: 14px;

  > div {
    padding-left: 15px;
    padding-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    > div:first-child {
      height: 100%;
    }
  }

  .arrow {
    margin-left: 5px;
    top: -2px;
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    border: 1px solid #666;
    border-right: none;
    border-bottom: none;
    transform: rotate(225deg);
  }
}

.user_msg {
  height: 35px;
  width: 35px;
}
</style>
