<template>
  <div>
    <div>
      <div class="picker" :class="{open:display}">
        <header>
          <button @click="hide" class="picker-cancel">取消</button>
          <!-- <h3>选择时间</h3> -->
          <button @click="sure" class="picker-ok">确定</button>
        </header>
        <div class="picker-body">
          <div class="picker-col" :id="pickerIds[0].id">
            <ul style="transition: all 500ms; transform: translate(0px, 0px);">
              <li></li>
              <li></li>
              <li v-for="item in pickerData[0]">{{item.name}}</li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="picker-col" :id="pickerIds[1].id">
            <ul
              style="transition: all 500ms cubic-bezier(0.1, 0.57, 0.1, 1); transform: translate(0px, 0px);"
            >
              <li></li>
              <li></li>
              <li v-for="item in pickerData[1]">{{item}}</li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="picker-col" :id="pickerIds[2].id">
            <ul style="transition: none; transform: translate(0px, 0px);">
              <li></li>
              <li></li>
              <li v-for="item in pickerData[2]">{{item}}</li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="picker-mask-top"></div>
          <div class="picker-mask-middle"></div>
          <div class="picker-mask-bottom"></div>
        </div>
      </div>
      <div @touchmove.stop.prevent @click="hide" class="picker-mask"></div>
    </div>
  </div>
</template>

<script>
import Scroll from "../assets/js/scroll";
import "../assets/css/picker.css";
export default {
  props: {},
  data() {
    return {
      display: false,
      type: "",
      itemHeight: 36,
      Scrlll: null,
      pickerIds: [
        {
          id: "rtimepicker0"
        },
        {
          id: "rtimepicker1"
        },
        {
          id: "rtimepicker2"
        }
      ],
      pickerScroll: [
        {
          scroll: null
        },
        {
          scroll: null
        },
        {
          scroll: null
        }
      ],
      pickerData: [
        [],
        [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        ["00", "30"]
      ],
      currentValue: [0, 0, 0],
      timeValue: "",
      serverTime:null

    };
  },
  watch: {},

  mounted() {
    // this.$nextTick(function() {});

    this.Scrlll = Scroll.Scroll();
    // this.setTimeData();
    // this.setPickerId();
    this.getServerTime();
  },
  methods: {
    init() {
      let that = this;

      this.pickerIds.forEach((ele, index) => {
        let id = ele.id;
        let wrapperList = document.getElementById(id).childNodes[0];
        let itemHeight = wrapperList.childNodes[0].clientHeight;
        this.itemHeight = itemHeight;
        this.pickerScroll[index].scroll = new this.Scrlll(id, {
          // 步长（每次滚动固定距离）
          step: itemHeight,
          // 列表默认位置(默认为0)
          defaultPlace: 0,
          // 滚动结束回调函数
          callback: function(params) {
            let currentIndex = params.index; //当前第几个位置  从 0 开始
            let index1 = that.currentValue[0];
            let index2 = that.currentValue[1];
            let index3 = that.currentValue[2];

            // let hours = new Date().getHours() + 1;
            // let minnuteNow = +new Date().getMinutes();

            if (index === 0) {
              console.log("第一排时间");
              index1 = currentIndex;
            } else if (index === 1) {
              index2 = currentIndex;
            } else {
              index3 = currentIndex;
            }
            let pickerData = that.pickerData;
            that.currentValue = [index1, index2, index3];
            that.timeValue =
              pickerData[0][index1].value +
              " " +
              pickerData[1][index2] +
              ":" +
              pickerData[2][index3];
          }
        });
      });
      this.setDefaultValue();
    },
    setPickerId() {
      this.pickerIds.forEach(ele => {
        let random_number =
          new Date().getTime().toString(8) + Math.floor(Math.random() * 10);
        ele.id += random_number;
      });
      setTimeout(() => {
        this.init();
      }, 300);
    },
    // 获取服务器时间
    getServerTime() {
      let data = {
        orderCity: "北京",
        kilometer: 0,
        orderTime: null,
        orderType: 5,
        deliverInfo: [
          {
            type: 1,
            stairs_num: 0
          },
          {
            type: 2,
            stairs_num: 0
          }
        ]
      };
      data.deliverInfo = JSON.stringify(data.deliverInfo);

      let urls = this.API.calPrice + this.units.setUrlParam(data);

      this.$https(urls, res => {
         let st = res.st *1000;
        console.warn(st);
        this.setTimeData(st);
        this.serverTime = st;
           this.setPickerId();
      });
    },
    setTimeData(st) {
      let oneDay = 86400000;
      //   let now = new Date();
      let now = new Date(st);

      let dayMap = ["日", "一", "二", "三", "四", "五", "六"];
      for (let j = 0; j <= 7; j++) {
        let year = new Date(now.getTime() + oneDay * j).getFullYear();
        let month = new Date(now.getTime() + oneDay * j).getMonth() + 1;
        let date = new Date(now.getTime() + oneDay * j).getDate();
        let day = new Date(now.getTime() + oneDay * j).getDay();
        let value = year + "-" + month + "-" + date;
        let show = month + "月" + date + "日";
        if (j === 0) {
          //   show = "今天" + " " + show;
        } else if (j === 1) {
          //   show = "明天" + " " + show;
        } else if (j === 2) {
          show = "后天" + " " + show;
        } else {
          show = "周" + dayMap[day] + " " + show;
        }
        if (j !== 0 && j !== 1) {
          this.pickerData[0].push({ value: value, name: show });
        }
      }
      //   console.log(JSON.stringify(this.pickerData[0],null,2))
    },
    setItemList(index) {
      this.currentItem = index;
    },
    // 设置默认值
    setDefaultValue() {
      let st = this.serverTime;
      let hours = new Date(st).getHours() + 1;
      let minnuteNow = +new Date(st).getMinutes();

      let index1 = 0;
      let index2 = 9;
      let index3 = 0;

      let pickerData = this.pickerData;

      let itemHeight = this.itemHeight;
      this.pickerScroll[0].scroll.scrollTo(0, itemHeight * index1, 500);
      this.pickerScroll[1].scroll.scrollTo(0, itemHeight * index2, 500);
      this.pickerScroll[2].scroll.scrollTo(0, itemHeight * index3, 500);
      this.currentValue = [index1, index2, index3];
      this.timeValue =
        pickerData[0][index1].value +
        " " +
        pickerData[1][index2] +
        ":" +
        pickerData[2][index3];

      console.log("查看默认时间:" + this.timeValue);
    },
    show(type) {
      this.display = true;
      this.type = type;
    },
    hide() {
      this.display = false;
      this.setDefaultValue();
    },
    sure() {
      let val = this.timeValue;
      let time = Date.parse(new Date(val.replace(/-/g, "/"))) / 1000;

      let dic = {
        type: this.type,
        val: val,
        time: time
      };
      console.log("查看时间" + JSON.stringify(dic, null, 2));
      this.$emit("setTimePicker", dic);
      this.hide();
    }
  }
};
</script>

<style scoped lang="less">
</style>
