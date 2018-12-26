<template>
  <div class="main-content">
    <div class="title">变量对象</div>
    <div class="has-img">
      <img src="../../assets/image/basePageThree/1.png" alt>
    </div>
    <p>在JavaScript中，我们肯定不可避免的需要声明变量和函数，可是JS解析器是如何找到这些变量的呢？我们还得对执行上下文有一个进一步的了解。</p>
    <p>在上一篇文章中，我们已经知道，当调用一个函数时（激活），一个新的执行上下文就会被创建。而一个执行上下文的生命周期可以分为两个阶段。</p>
    <div class="ul-des">
      <ul>
        <li>
         <strong>创建阶段</strong>
            在这个阶段中，执行上下文会分别创建变量对象，建立作用域链，以及确定this的指向。
        </li>
        <li>
         <strong>代码执行阶段</strong>
            创建完成之后，就会开始执行代码，这个时候，会完成变量赋值，函数引用，以及执行其他代码。
        </li>
      </ul>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageThree/2.png" alt>
    </div>
    <p>从这里我们就可以看出详细了解执行上下文极为重要，因为其中涉及到了变量对象，作用域链，this等很多人没有怎么弄明白，但是却极为重要的概念，它关系到我们能不能真正理解JavaScript。在后面的文章中我们会一一详细总结，这里我们先重点了解变量对象。</p>
    <div class="session">
      <h5>变量对象（Variable Object）</h5>
    </div>
    <p>变量对象的创建，依次经历了以下几个过程。</p>
    <div class="ul-des">
      <ul>
        <li>
         建立arguments对象。检查当前上下文中的参数，建立该对象下的属性与属性值。
        </li>
        <li>
          检查当前上下文的函数声明，也就是使用function关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用。如果函数名的属性已经存在，那么该属性将会被新的引用所覆盖。
        </li>
        <li>
          检查当前上下文中的变量声明，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为undefined。如果该变量名的属性已经存在，为了防止同名的函数被修改为undefined，则会直接跳过，原属性值不会被修改。
        </li>
      </ul>
    </div>
    <p>许多读者在阅读到这的时候会因为下面的这样场景对于“跳过”一词产生疑问。既然变量声明的foo遇到函数声明的foo会跳过，可是为什么最后foo的输出结果仍然是被覆盖了？</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'function foo'</span>) }
    <span class="hljs-keyword">var</span> foo = <span class="hljs-number">20</span>;

    <span class="hljs-built_in">console</span>.log(foo); <span class="hljs-comment">// 20</span></div>
      </pre>
    </div>
    <p>
      其实只是大家在阅读的时候不够仔细，因为上面的三条规则仅仅适用于变量对象的创建过程。也就是执行上下文的创建过程。而
      <code>foo = 20</code>是在执行上下文的执行过程中运行的，输出结果自然会是20。对比下例。
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-built_in">console</span>.log(foo); <span class="hljs-comment">// function foo</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'function foo'</span>) }
    <span class="hljs-keyword">var</span> foo = <span class="hljs-number">20</span>;</div>
      </pre>
    </div>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 上栗的执行顺序为</span>

    <span class="hljs-comment">// 首先将所有函数声明放入变量对象中</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'function foo'</span>) }

    <span class="hljs-comment">// 其次将所有变量声明放入变量对象中，但是因为foo已经存在同名函数，因此此时会跳过undefined的赋值</span>
    <span class="hljs-comment">// var foo = undefined;</span>

    <span class="hljs-comment">// 然后开始执行阶段代码的执行</span>
    <span class="hljs-built_in">console</span>.log(foo); <span class="hljs-comment">// function foo</span>
    foo = <span class="hljs-number">20</span>;</div>
      </pre>
    </div>

    <div class="has-img">
      <img src="../../assets/image/basePageThree/3.png" alt>
    </div>
    <p>根据这个规则，理解变量提升就变得十分简单了。在很多文章中虽然提到了变量提升，但是具体是怎么回事还真的很多人都说不出来，以后在面试中用变量对象的创建过程跟面试官解释变量提升，保证瞬间提升逼格。</p>
    <p>在上面的规则中我们看出，function声明会比var声明优先级更高一点。为了帮助大家更好的理解变量对象，我们结合一些简单的例子来进行探讨。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// demo01</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(a);

        <span class="hljs-built_in">console</span>.log(foo());

        <span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    }

    test();</div>
      </pre>
    </div>
    <p>
      在上例中，我们直接从test()的执行上下文开始理解。全局作用域中运行
      <code>test()</code>时，test()的执行上下文开始创建。为了便于理解，我们用如下的形式来表示
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 创建过程</span>
    testEC = {
        <span class="hljs-comment">// 变量对象</span>
        VO: {},
        scopeChain: {}
    }

    <span
  class="hljs-comment"
>// 因为本文暂时不详细解释作用域链，所以把变量对象专门提出来说明</span>

    <span class="hljs-comment">// VO 为 Variable Object的缩写，即变量对象</span>
    VO = {
        <span class="hljs-built_in">arguments</span>: {...},  <span class="hljs-comment">//注：在浏览器的展示中，函数的参数可能并不是放在arguments对象中，这里为了方便理解，我做了这样的处理</span>
        foo: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">foo</span> <span class="hljs-attr">reference</span>&gt;</span>  // 表示foo的地址引用
        a: undefined
    }
    </span></div>
      </pre>
    </div>

    <p>未进入执行阶段之前，变量对象中的属性都不能访问！但是进入执行阶段之后，变量对象转变为了活动对象，里面的属性都能被访问了，然后开始进行执行阶段的操作。</p>
    <blockquote>
      <p>这样，如果再面试的时候被问到变量对象和活动对象有什么区别，就又可以自如的应答了，他们其实都是同一个对象，只是处于执行上下文的不同生命周期。不过只有处于函数调用栈栈顶的执行上下文中的变量对象，才会变成活动对象。</p>
    </blockquote>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 执行阶段</span>
    VO -&gt;  AO   <span class="hljs-comment">// Active Object</span>
    AO = {
        <span class="hljs-built_in">arguments</span>: {...},
        foo: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">foo</span> <span class="hljs-attr">reference</span>&gt;</span>,
        a: 1,
        this: Window
    }
    </span></div>
      </pre>
    </div>
    <p>因此，上面的例子demo1，执行顺序就变成了这样</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
           
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;

        }
        <span class="hljs-keyword">var</span> a;

        <span class="hljs-built_in">console</span>.log(a);

        <span class="hljs-built_in">console</span>.log(foo());

        a = <span class="hljs-number">1</span>;
    }

    test();</div>
      </pre>
    </div>
    <p>再来一个例子，巩固一下我们的理解。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// demo2</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
        
        <span class="hljs-built_in">console</span>.log(foo);
        
        <span class="hljs-built_in">console</span>.log(bar);

        <span class="hljs-keyword">var</span> foo = <span class="hljs-string">'Hello'</span>;
        
        <span class="hljs-built_in">console</span>.log(foo);
        
        <span class="hljs-keyword">var</span> bar = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        
            <span class="hljs-keyword">return</span> <span class="hljs-string">'world'</span>;
        
        }

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
            
            <span class="hljs-keyword">return</span> <span class="hljs-string">'hello'</span>;
        
        }
        
    }

    test();</div>
      </pre>
    </div>

    <div>
      <pre>
            <div class="code">
   <span class="hljs-comment">// 创建阶段</span>
    VO = {
        <span class="hljs-built_in">arguments</span>: {...},
        foo: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">foo</span> <span class="hljs-attr">reference</span>&gt;</span>,
        bar: undefined
    }
    // 这里有一个需要注意的地方，因为var声明的变量当遇到同名的属性时，会跳过而不会覆盖
    </span></div>
      </pre>
    </div>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 执行阶段</span>
    VO -&gt; AO
    VO = {
        <span class="hljs-built_in">arguments</span>: {...},
        foo: <span class="hljs-string">'Hello'</span>,
        bar: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">bar</span> <span class="hljs-attr">reference</span>&gt;</span>,
        this: Window
    }
    </span></div>
      </pre>
    </div>
    <p>需要结合上面的知识，仔细对比这个例子中变量对象从创建阶段到执行阶段的变化，如果你已经理解了，说明变量对象相关的东西都已经难不倒你了。</p>
    <div class="session">
      <h5>全局上下文的变量对象</h5>
    </div>
    <p>
      以浏览器中为例，全局对象为window。
      全局上下文有一个特殊的地方，它的变量对象，就是window对象。而这个特殊，在this指向上也同样适用，this也是指向window。
    </p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 以浏览器中为例，全局对象为window</span>
    <span class="hljs-comment">// 全局上下文</span>
    windowEC = {
        VO: Window,
        scopeChain: {},
        <span class="hljs-keyword">this</span>: Window
    }</div>
      </pre>
    </div>
    <p>除此之外，全局上下文的生命周期，与程序的生命周期一致，只要程序运行不结束，比如关掉浏览器窗口，全局上下文就会一直存在。其他所有的上下文环境，都能直接访问全局上下文的属性。</p>
  </div>
</template>

<script>
export default {
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
@import "../../assets/less/basePage.less";
</style>
