<template>
  <div class="main-content">
    <div class="pre">
      <pre v-for="(item,index) in listGuide" :key="index">
<span class="des">{{item.name}}</span>   <a :href="item.href">{{item.href}}</a>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      listGuide: [
       
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},

  methods: {}
};
</script>

<style scoped lang="less">
.des {
  color: #008000;
  display: inline-block;
  min-width: 150px;
}
.pre {
  box-sizing: border-box;
  overflow: auto;
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 16px;
  padding: 10px;
  line-height: 1.6;
  background: rgb(246, 246, 246) none repeat scroll 0% 0%;
  border-radius: 3px;
  overflow-wrap: break-word;
  border-color: rgb(221, 221, 221);
  border-style: solid;
  border-width: 1px;
  white-space: pre-wrap;
  color: rgb(51, 51, 51);
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-weight: normal;
  letter-spacing: normal;
  text-align: left;
  text-indent: 0px;
  text-transform: none;
  word-spacing: 0px;
  -webkit-text-stroke-width: 0px;
  text-decoration-style: initial;
  text-decoration-color: initial;
  margin-bottom: 50px;
}
</style>
