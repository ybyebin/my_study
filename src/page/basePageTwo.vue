<template>
  <div class="main-content">
    <div class="title">执行上下文</div>
    <div class="has-img">
      <img src="../assets/image/basePageTwo/1.png" alt>
    </div>
    <p>我们在JS学习初期或者面试的时候常常会遇到考核变量提升的思考题。比如先来一个简单一点的。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-built_in">console</span>.log(a);   <span class="hljs-comment">// 这里会打印出什么？</span>
    <span class="hljs-keyword">var</span> a = <span class="hljs-number">20</span>;</div>
      </pre>
    </div>
    <p>
      暂时先不管这个例子，我们先引入一个JavaScript中最基础，但同时也是最重要的一个概念
      <strong>执行上下文（Execution Context）</strong>。
    </p>
    <p>每次当控制器转到可执行代码的时候，就会进入一个执行上下文。执行上下文可以理解为当前代码的执行环境，它会形成一个作用域。JavaScript中的运行环境大概包括三种情况。</p>
    <div class="ul-des">
      <ul>
        <li>1 全局环境：JavaScript代码运行起来会首先进入该环境</li>
        <li>2 函数环境：当函数被调用执行时，会进入当前函数中执行代码</li>
        <li>3 eval（不建议使用，可忽略）</li>
      </ul>
    </div>
    <p>因此在一个JavaScript程序中，必定会产生多个执行上下文，在我的上一篇文章中也有提到，JavaScript引擎会以栈的方式来处理它们，这个栈，我们称其为函数调用栈(call stack)。栈底永远都是全局上下文，而栈顶就是当前正在执行的上下文。</p>
    <p>当代码在执行过程中，遇到以上三种情况，都会生成一个执行上下文，放入栈中，而处于栈顶的上下文执行完毕之后，就会自动出栈。为了更加清晰的理解这个过程，根据下面的例子，结合图示给大家展示。</p>
    <blockquote>
      <p>执行上下文可以理解为函数执行的环境，每一个函数执行时，都会给对应的函数创建这样一个执行环境。</p>
    </blockquote>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> color = <span class="hljs-string">'blue'</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeColor</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">     var</span> anotherColor = <span class="hljs-string">'red'</span>;

    <span class="hljs-function"><span class="hljs-keyword">     function</span> <span class="hljs-title">swapColors</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">         var</span> tempColor = anotherColor;
             anotherColor = color;
             color = tempColor;
         }

         swapColors();
    }

    changeColor();</div>
      </pre>
    </div>
    <p>我们用ECStack来表示处理执行上下文组的堆栈。我们很容易知道，第一步，首先是全局上下文入栈。</p>
    <div class="has-img">
      <img src="../assets/image/basePageTwo/2.png" alt>
    </div>
    <p>
      全局上下文入栈之后，其中的可执行代码开始执行，直到遇到了
      <code>changeColor()</code>，这一句激活函数
      <code>changeColor</code>创建它自己的执行上下文，因此第二步就是changeColor的执行上下文入栈。
    </p>

    <div class="has-img">
      <img src="../assets/image/basePageTwo/3.png" alt>
    </div>
    <p>
      changeColor的上下文入栈之后，控制器开始执行其中的可执行代码，遇到
      <code>swapColors()</code>之后又激活了一个执行上下文。因此第三步是swapColors的执行上下文入栈。
    </p>
    <div class="has-img">
      <img src="../assets/image/basePageTwo/4.png" alt>
    </div>
    <p>在swapColors的可执行代码中，再没有遇到其他能生成执行上下文的情况，因此这段代码顺利执行完毕，swapColors的上下文从栈中弹出。</p>
    <div class="has-img">
      <img src="../assets/image/basePageTwo/5.png" alt>
    </div>

    <p>swapColors的执行上下文弹出之后，继续执行changeColor的可执行代码，也没有再遇到其他执行上下文，顺利执行完毕之后弹出。这样，ECStack中就只身下全局上下文了。</p>
    <div class="has-img">
      <img src="../assets/image/basePageTwo/6.png" alt>
    </div>
    <p>全局上下文在浏览器窗口关闭后出栈。</p>
    <blockquote>
      <p>注意：函数中，遇到return能直接终止可执行代码的执行，因此会直接将当前上下文弹出栈。</p>
    </blockquote>
    <div class="has-img">
      <img src="../assets/image/basePageTwo/7.png" alt>
    </div>
    <p>详细了解了这个过程之后，我们就可以对执行上下文总结一些结论了。</p>
    <div class="ul-des">
      <ul>
        <li>单线程</li>
        <li>同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待</li>
        <li>全局上下文只有唯一的一个，它在浏览器关闭时出栈</li>
        <li>函数的执行上下文的个数没有限制</li>
        <li>每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此。</li>
      </ul>
    </div>

    <p>为了巩固一下执行上下文的理解，我们再来绘制一个例子的演变过程，这是一个简单的闭包例子。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">   var</span> n=<span class="hljs-number">999</span>;
    <span class="hljs-function"><span class="hljs-keyword">   function</span> <span class="hljs-title">f2</span>(<span class="hljs-params"></span>)</span>{
          alert(n);
       }
    <span class="hljs-keyword">   return</span> f2;
    }
  <span class="hljs-keyword">  var</span> result=f1();
    result(); <span class="hljs-comment">// 999</span></div>
      </pre>
    </div>
    <p>因为f1中的函数f2在f1的可执行代码中，并没有被调用执行，因此执行f1时，f2不会创建新的上下文，而直到result执行时，才创建了一个新的。具体演变过程如下。</p>

    <div class="has-img">
      <img src="../assets/image/basePageTwo/8.png" alt>
    </div>
    <p>最后留一个简单的例子，大家可以自己脑补一下这个例子在执行过程中执行上下文的变化情况。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> name = <span class="hljs-string">"window"</span>;

    <span class="hljs-keyword">var</span> p = {
      name: <span class="hljs-string">'Perter'</span>,
      getName: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

        <span class="hljs-comment">// 利用变量保存的方式保证其访问的是p对象</span>
        <span class="hljs-keyword">var</span> self = <span class="hljs-keyword">this</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> self.name;
        }
      }
    }

    <span class="hljs-keyword">var</span> getName = p.getName();
    <span class="hljs-keyword">var</span> _name = getName();
    <span class="hljs-built_in">console</span>.log(_name);</div>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "basePageTwo",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},

  methods: {}
};
</script>

<style scoped lang="less">
@import "../assets/less/basePage.less";
</style>
