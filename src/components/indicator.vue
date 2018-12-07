<template>
    <div @touchmove.stop.prevent :class="{hide:display}"   class="ball-clip-rotate">
            <div>
                <div></div>
            </div>
    </div>

</template>

<script>
export default {
  props: {},
  mounted() {},
  data() {
    return {
        display:true
    };
  },
  methods: {
      show(data){
          console.log('查看传回的值：'+data)
          this.display = false;
      },
      hide(){
          this.display = true;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ball-clip-rotate {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
}
.ball-clip-rotate.hide{
    display: none;
}

.ball-clip-rotate > div {
  top: 50%;
  left: 50%;
  position: fixed;
  padding: 15px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  box-sizing: border-box;
  text-align: center;
}
.ball-clip-rotate > div > div {
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  border: 4px solid rgb(204, 204, 204);
  border-bottom-color: transparent;
  height: 32px;
  width: 32px;
  display: inline-block;
  -webkit-animation: rotate 0.75s 0s linear infinite;
  animation: rotate 0.75s 0s linear infinite;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
