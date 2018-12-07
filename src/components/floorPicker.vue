<template>
  <div>
       <div>
           <div class="picker " :class="{open:floorSet.show}">
           <header>
              <button @click="close" class="picker-cancel">取消</button>
              <!-- <h3>选择楼层</h3> -->
              <button @click="sure" class="picker-ok">确定</button>
           </header>
           <div class="picker-body" >
                <div class="picker-col" :id="floorId" style="min-width: 100%; max-width: 100%;">
                    <ul style="transition: none; transform: translate(0px, 0px);">
                        <li></li>
                        <li></li>
                        <li v-for="item in floorData">
                            {{item.name}}
                        </li>
                        <li></li>
                        <li></li>
                        </ul>
                </div>
                <div class="picker-mask-top"></div>
                <div class="picker-mask-middle"></div>
                <div class="picker-mask-bottom"></div>
            </div>
        </div>
       <div @touchmove.stop.prevent  @click="close" class="picker-mask"></div>
       </div>
       
  </div>
</template>

<script>
import Scroll from "../assets/js/scroll";
import "../assets/css/picker.css";

export default {
  props: {
    floorData: "",
    floorSet: {
      show: "",
      type: ""
    }
  },
  data() {
    return {
      floorId: "floorpicker0",
      Scrlll: null,
      floor: null,
      currentItem: 0
    };
  },
  watch: {
    floorData: {
      handler(cval, oval) {
        // console.log("监控到楼层数据改变了");
        this.$nextTick(() => {
          let id = this.floorId;
          if (document.getElementById(id)) {
              this.init();
          }
        });
      },
      deep: true
    }
  },

  mounted() {
    this.$nextTick(() => {
      let random_number =
        new Date().getTime().toString(8) + Math.floor(Math.random() * 10);
      this.floorId += random_number;
      this.Scrlll = Scroll.Scroll();
      setTimeout(() => {
        this.init();
      }, 1000);
    });
  },
  methods: {
    init() {
      let that = this;
      let id = this.floorId;
      let wrapperList = document.getElementById(id).childNodes[0];

      let itemHeight = wrapperList.childNodes[0].clientHeight;
      this.floor = new this.Scrlll(id, {
        // 步长（每次滚动固定距离）
        step: itemHeight,

        // 列表默认位置(默认为0)
        defaultPlace: 0,
        // 滚动结束回调函数
        callback: function(params) {
          //   console.log("滚动结束后的回调");
          let index = params.index; //当前第几个位置  从 0 开始
          that.setItemList(index);
        }
      });
    },
    setItemList(index) {
      this.currentItem = index;
    },
    close() {
      this.floor.scrollTo(0, 0, 500);
      this.setItemList(0);
      this.floorSet.show = false;
    },
    sure() {
      let dic = {
        type: this.floorSet.type,
        val: this.currentItem
      };

      this.$emit("setFloorPicker", dic);
      this.close();
    }
  }
};
</script>

<style scoped lang="less">
</style>
