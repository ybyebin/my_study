
<template>
    <div @touchmove.stop.prevent :class="{show:dialogShow}"  class="dialog">
        <div class="dialog-content">
            <div v-if="dialogOne.show" class="dialog-type-one">
                <div class="dialog-tips">
                    <div v-text="dialogOne.msg" class="tips-text"></div>
                </div>
                <div class="dialog-footer">
                    <div @click="btnCancel" v-text="dialogOne.sure"></div>
                </div>
            </div>

            <div v-if="dialogTwo.show" class="dialog-type-one">
                <div class="dialog-tips">
                    <div v-text="dialogTwo.msg" class="tips-text"></div>
                </div>
                <div class="dialog-footer">
                    <div @click="btnCancel" v-text="dialogTwo.cancel"></div>
                    <div @click="btnSure" v-text="dialogTwo.sure"></div>
                </div>
            </div>
        
            <div v-if="dialogThree.show" class="dialog-type-two">
                <div class="dialog-tips-two">
                    <div v-text="dialogThree.title" class="dialog-title"></div>
                    <div class="tips-text">
                        <p v-text="dialogThree.msg"></p>
                    </div>
                </div>
                <div class="dialog-footer">
                    <div @click="btnCancel" v-text="dialogThree.sure"></div>
                </div>
            </div>

            <div v-if="dialogFour.show" class="dialog-type-two">
                <div class="dialog-tips-two">
                    <div v-text="dialogFour.title" class="dialog-title"></div>
                    <div class="tips-text">
                        <p v-text="dialogFour.msg"></p>
                    </div>
                </div>
                <div class="dialog-footer">
                    <div @click="btnCancel" v-text="dialogFour.cancel"></div>
                    <div @click="btnSure"  v-text="dialogFour.sure"></div>
                </div>
            </div>
           
        </div>
    </div>

</template>

<script>
/*
 * @Author: yb 
 * @Last Modified by: yb
 * @Last Modified time: 2018-11-23 11:02:08
 * @des    4种弹窗
 *  type 1   仅提示        确认
 *  type 2   提示          确认/取消
 *  type 3   带title提示   确认
 *  type 4   带title提示   确认/取消
 */

export default {
  props: {},
  mounted() {},
  watch: {},
  data() {
    return {
      dialogShow: false,
      typeKey: "",
      dialogOne: {
        show: false,
        msg: "",
        sure: "确定",
        id:'',
      },
      dialogTwo: {
        show: false,
        msg: "",
        hasCancel: false,
        cancel: "取消",
        sure: "确定",
        id: ""
      },
      dialogThree: {
        show: false,
        title: "",
        msg: "",
        sure: "确定",
         id:'',
      },
      dialogFour: {
        show: false,
        title: "123",
        msg: "",
        cancel: "取消",
        sure: "确定",
        id: ""
      }
    };
  },
  methods: {
    btnCancel() {
      this.hide();
    },
    btnSure() {
      let dic = {
        id:  this[this.typeKey].id
      };
      this.$emit("dialogSure",dic);
      this.hide();
    },
    show(parma) {
      let type = 1;
      if (parma.type) {
        type = parma.type;
      }

      var typeKey = null;
      switch (type) {
        case 1:
          typeKey = "dialogOne";
          break;
        case 2:
          typeKey = "dialogTwo";
          break;
        case 3:
          typeKey = "dialogThree";
          break;
        case 4:
          typeKey = "dialogFour";
          break;
        default:
          break;
      }
      this.typeKey = typeKey;
      this[typeKey].show = true;
      for (const key in parma) {
        if (this[typeKey].hasOwnProperty(key)) {
          this[typeKey][key] = parma[key];
        }
      }
      this.dialogShow = true;
    },
    hide() {
      this[this.typeKey].show = false;
      this.dialogShow = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dialog {
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
.dialog.show {
  display: flex;
}
.dialog-content {
  width: 5.9rem;
  background: #ffffff;
  border-radius: 4px;
  font-size: 0.3rem;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-name: zoomIn;
  animation-iteration-count: 1;
}
.dialog-tips {
  text-align: center;
  .tips-text {
    padding: 0.65rem 0.3rem;
    padding-bottom: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666666;
  }
}
.dialog-tips-two {
  text-align: center;
  padding-top: 0.46rem;
  padding-bottom: 0.4rem;
  font-size: 0.3rem;
  color: #888888;
  .dialog-title {
    font-size: 0.36rem;
    color: #333333;
    margin-bottom: 0.25rem;
  }
  .tips-text {
    padding: 0 0.2rem;
  }
}
.dialog-footer {
  border-top: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  text-align: center;
  > div {
    flex: 1;
    padding: 0.34rem 0;
    color: #666666;
  }
  > div:active {
    background: rgba(0, 0, 0, 0.03);
  }
  > div:last-child {
    color: #1390f4;
    position: relative;
  }
  > div:nth-child(2)::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 55.6%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: #e1e1e1;
  }
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
