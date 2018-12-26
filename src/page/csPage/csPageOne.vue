<template>
  <div class="body-div">
    <div class="list-guide">
      <ul>
        <li v-for="(item,index) in listGuide" :key="index">
          <a :href="item.href">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <div id="resetcss">
        <blockquote>reset</blockquote>
        <pre>
        *,
        *:before,
        *:after {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        html,
        body {
        height: 100%;
        }
        body {
        font-size: 12px;
        -webkit-font-smoothing: antialiased;
        font-family: arial, sans-serif;
        }
        body,
        img,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        blockquote,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        pre,
        form,
        fieldset,
        legend,
        button,
        input,
        textarea,
        th,
        td,
        iframe {
        margin: 0;
        padding: 0;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        menu,
        nav,
        section,
        summary,
        time,
        mark,
        audio,
        video {
        display: block;
        margin: 0;
        padding: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
        font-size: 100%;
        }
        fieldset,
        img {
        border: 0;
        }
        address,
        caption,
        cite,
        dfn,
        em,
        th,
        var,
        i,
        em {
        font-style: normal;
        font-weight: normal;
        }
        ol,
        ul {
        list-style: none;
        }
        a {
        text-decoration: none;
        color: inherit;
        }
        a:hover {
        text-decoration: none;
        }
        a,
        label,
        button,
        input,
        select {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        input,
        select,
        button {
        font: 100% tahoma, \5b8b\4f53, arial;
        vertical-align: baseline;
        border-radius: 0;
        background-color: transparent;
        }
        select {
        -webkit-appearance: none;
        -moz-appearance: none;
        }
        button::-moz-focus-inner,
        input[type="reset"]::-moz-focus-inner,
        input[type="button"]::-moz-focus-inner,
        input[type="submit"]::-moz-focus-inner,
        input[type="file"] > input[type="button"]::-moz-focus-inner {
        border: none;
        }
        input[type=checkbox],
        input[type=radio] {
        vertical-align: middle;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        margin: 0;
        }
        input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
        }
        textarea {
        outline: none;
        border-radius: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        overflow: auto;
        resize: none;
        font: 100% tahoma, \5b8b\4f53, arial;
        }
            </pre>
      </div>

      <div id="ios">
        <blockquote>ios相关</blockquote>
        <pre>
    <span class="des">// 点击背景高亮</span>
    <span>  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);</span>

    <span class="des">// 弹性滚动</span>
    <span>  -webkit-overflow-scrolling: touch;</span>

        </pre>
      </div>

      <div id="textover">
        <blockquote>文本超出隐藏</blockquote>
        <pre>
    <span class="des">// 单行文本隐藏</span>
    <span>.text-overflow {
        word-wrap: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }</span>
        
    <span class="des">// 多行文本隐藏</span>
    <span>.line-clamp {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        line-height: .38rem;
    }</span>
        </pre>
      </div>

      <div id="loading">
        <blockquote>loading相关</blockquote>
        <pre>
    <span class="des">// html</span>
    <span>
        div   class="ball-clip-rotate">
            div
                div div
            div
        div
    </span>
    <span class="des">// css</span>
    <span>.ball-clip-rotate {
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
    </span>
          </pre>
      </div>

      <div id="useanimate">
        <blockquote>使用animate.css</blockquote>
        <pre>
    .a {
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-name: zoomIn;
        animation-timing-function: cubic-bezier(0.74, 1.38, 1, 0.43)
    }

    .a {
        animation-duration: .2s;
        animation-fill-mode: both;
        animation-name: shake;
    }

    .a {
        animation: finger .6s infinite;
        -webkit-animation: finger .6s infinite;
    }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "csPageOne",
  components: {},
  data() {
    return {
      listGuide: [
        {
          name: "reset.css",
          href: "#resetcss"
        },
        {
          name: "ios相关",
          href: "#ios"
        },
        {
          name: "文本超出隐藏",
          href: "#textover"
        },
        {
          name: "loading相关",
          href: "#loading"
        },
        {
          name: "使用animate.css",
          href: "#useanimate"
        }
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
@import "../../assets/less/codeStyle.less";

.des {
  color: #008000;
}
</style>
