<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="header">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">一直进行中</div>
        <div class="layout-nav">
          <!-- <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>Item 1
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>Item 2
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>Item 3
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-paper"></Icon>Item 4
          </MenuItem>-->
        </div>
      </Menu>
    </div>
    <div class="side">
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="routerTo">
        <Submenu v-for="(item,index) in sideData" :key="index" :name="index">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{item.title}}
          </template>
          <MenuItem
            v-for="(items,indexs) in item.detail"
            :key="indexs"
            :name="items.name"
          >{{items.title}}</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="body">
      <div>
        <router-view>
          <!-- 这里是不被缓存的视图组件，比如 page3 -->
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      sideData: [
        {
          title: "基础进阶(搬砖)",
          detail: [
            {
              title: "内存空间详解",
              name: "basePageOne"
            },
            {
              title: "执行上下文",
              name: "basePageTwo"
            },
            {
              title: "变量对象",
              name: "basePageThree"
            },
            {
              title: "作用域链与闭包",
              name: "basePageFour"
            },
            {
              title: "this",
              name: "basePageFive"
            },
            {
              title: "面向对象",
              name: "basePageSix"
            },
            {
              title: "事件循环机制",
              name: "basePageSeven"
            },
            {
              title: "Promise",
              name: "basePageEight"
            },
            {
              title: "js隐式转换",
              name: "basePageNine"
            }
          ]
        },
        {
          title: "js代码片段",
          detail: [
            { title: "常用", name: "jsPageOne" },
            {
              title: "Option 2",
              name: "2-2"
            }
          ]
        },
        {
          title: "css代码片段",
          detail: [
            { title: "常用", name: "csPageOne" },
            {
              title: "Option 2",
              name: "2-2"
            }
          ]
        },
        {
          title: "开发问题解决方案",
          detail: [
            { title: "基础进阶", name: "bookmark" },
            {
              title: "Option 2",
              name: "2-2"
            }
          ]
        },
        {
          title: "学习资料",
          detail: [
            { title: "JavaScript变量", name: "JPageOne" },
            {
              title: "JavaScript运算符",
              name: "JPageTwo"
            },
            {
              title: "JavaScript数组",
              name: "JPageThree"
            },
             {
              title: "JavaScript字符串",
              name: "JPageFour"
            },
            {
              title: "JavaScript函数基础",
              name: "JPageFive"
            },
           
            {
              title: "JavaScript基本操作",
              name: "JPageSix"
            },
            {
              title: "JavaScript正则表达式",
              name: "JPageSeven"
            },
             {
              title: "JavaScript流程语句",
              name: "JPageEight"
            },
          ]
        },
        {
          title: "基本编码规范",
          detail: [
            { title: "编码规范", name: "codeRule" },
           
          ]
        },
      ]
    };
  },
  created() {},
  methods: {
    routerTo(name) {
      this.$router.push({
        path: "/" + name,
        query: {}
      });
    }
  }
};
</script>

<style scoped lang="less">
.side {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 200px;
  overflow-x: hidden;
  width: 220px;

  background: #f5f7f9;
}
.body {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 210px;
  right: 0;
  z-index: 998;
  width: auto;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  background: #fff;
}
.body > div {
  padding: 15px;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  line-height: unset;
  text-align: center;
  line-height: 30px;
  color: #edfdf8;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
// .layout-nav {
//   width: 420px;
//   margin: 0 auto;
//   margin-right: 20px;
// }
</style>
