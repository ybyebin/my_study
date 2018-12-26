<template>
  <div class="main-content">
    <div class="title">作用域链与闭包</div>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/1.png" alt>
    </div>

    <p>初学JavaScript的时候，我在学习闭包上，走了很多弯路。而这次重新回过头来对基础知识进行梳理，要讲清楚闭包，也是一个非常大的挑战。</p>

    <p>
      闭包有多重要？如果你是初入前端的朋友，我没有办法直观的告诉你闭包在实际开发中的无处不在，但是我可以告诉你，
      <strong>前端面试，必问闭包</strong>。面试官们常常用对闭包的了解程度来判定面试者的基础水平，保守估计，10个前端面试者，至少5个都死在闭包上。
    </p>
    <p>可是为什么，闭包如此重要，还是有那么多人没有搞清楚呢？是因为大家不愿意学习吗？还真不是，而是我们通过搜索找到的大部分讲解闭包的中文文章，都没有清晰明了的把闭包讲解清楚。要么浅尝辄止，要么高深莫测，要么干脆就直接乱说一通。包括我自己曾经也写过一篇关于闭包的总结，回头一看，不忍直视[捂脸]。</p>
    <p>因此本文的目的就在于，能够清晰明了得把闭包说清楚，让读者朋友们看了之后，就把闭包给彻底学会了，而不是似懂非懂。</p>
    <div class="session">
      <h5>一、作用域与作用域链</h5>
    </div>
    <p>在详细讲解作用域链之前，我默认你已经大概明白了JavaScript中的下面这些重要概念。这些概念将会非常有帮助。</p>
    <div class="ul-des">
      <ul>
        <li>基础数据类型与引用数据类型</li>
        <li>内存空间</li>
        <li>垃圾回收机制</li>
        <li>执行上下文</li>
        <li>变量对象与活动对象</li>
      </ul>
    </div>

    <p>
      <strong>作用域</strong>
    </p>

    <div class="ul-des">
      <ul>
        <li>
          在JavaScript中，我们可以将作用域定义为一套规则,这套规则用来管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。
          <blockquote>
            <p>这里的标识符，指的是变量名或者函数名</p>
          </blockquote>
        </li>
        <li>
          JavaScript中只有全局作用域与函数作用域(因为eval我们平时开发中几乎不会用到它，这里不讨论)。
        </li>
        <li>
          作用域与执行上下文是完全不同的两个概念。我知道很多人会混淆他们，但是一定要仔细区分。
          <blockquote>
            <p>JavaScript代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段作用域规则会确定。执行阶段由引擎完成，主要任务是执行可执行代码，执行上下文在这个阶段创建。</p>
          </blockquote>
        </li>
      </ul>
    </div>

    <div class="has-img">
      <img src="../../assets/image/basePageFour/2.png" alt>
    </div>

    <p>
      <strong>作用域链</strong>
    </p>
    <p>回顾一下上一篇文章我们分析的执行上下文的生命周期，如下图。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/3.png" alt>
    </div>
    <p>我们知道函数在调用激活时，会开始创建对应的执行上下文，在执行上下文生成的过程中，变量对象，作用域链，以及this的值会分别被确定。之前一篇文章我们详细说明了变量对象，而这里，我们将详细说明作用域链。</p>
    <p>
      <strong>作用域链，是由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。</strong>
    </p>
    <p>为了帮助大家理解作用域链，我我们先结合一个例子，以及相应的图示来说明。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> a = <span class="hljs-number">20</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> b = a + <span class="hljs-number">10</span>;

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">innerTest</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">var</span> c = <span class="hljs-number">10</span>;
            <span class="hljs-keyword">return</span> b + c;
        }

        <span class="hljs-keyword">return</span> innerTest();
    }

    test();</div>
      </pre>
    </div>

    <p>在上面的例子中，全局，函数test，函数innerTest的执行上下文先后创建。我们设定他们的变量对象分别为VO(global)，VO(test), VO(innerTest)。而innerTest的作用域链，则同时包含了这三个变量对象，所以innerTest的执行上下文可如下表示。</p>
    <div>
      <pre>
            <div class="code">
    innerTestEC = {
        VO: {...},  <span class="hljs-comment">// 变量对象</span>
        scopeChain: [VO(innerTest), VO(test), VO(global)], <span class="hljs-comment">// 作用域链</span>
    }</div>
      </pre>
    </div>
    <p>我们可以直接用一个数组来表示作用域链，数组的第一项scopeChain[0]为作用域链的最前端，而数组的最后一项，为作用域链的最末端，所有的最末端都为全局变量对象。</p>
    <p>很多人会误解为当前作用域与上层作用域为包含关系，但其实并不是。以最前端为起点，最末端为终点的单方向通道我认为是更加贴切的形容。如图。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/4.png" alt>
    </div>
    <blockquote>
      <p>注意，因为变量对象在执行上下文进入执行阶段时，就变成了活动对象，这一点在上一篇文章中已经讲过，因此图中使用了AO来表示。Active Object</p>
    </blockquote>
    <p>是的，作用域链是由一系列变量对象组成，我们可以在这个单向通道中，查询变量对象中的标识符，这样就可以访问到上一层作用域中的变量了。</p>
    <div class="session">
      <h5>二、闭包</h5>
    </div>
    <p>对于那些有一点 JavaScript 使用经验但从未真正理解闭包概念的人来说，理解闭包可以看作是某种意义上的重生，突破闭包的瓶颈可以使你功力大增。</p>
    <p>
      <strong>闭包是一种特殊的对象。</strong>
    </p>
    <p>
      <strong>它由两部分组成。执行上下文(代号A)，以及在该执行上下文中创建的函数（代号B）。</strong>
    </p>
    <p>
      <strong>当B执行时，如果访问了A中变量对象中的值，那么闭包就会产生。</strong>
    </p>
    <p>
      <strong>在大多数理解中，包括许多著名的书籍，文章里都以函数B的名字代指这里生成的闭包。而在chrome中，则以执行上下文A的函数名代指闭包。</strong>
    </p>
    <p>因此我们只需要知道，一个闭包对象，由A、B共同组成，在以后的篇幅中，我将以chrome的标准来称呼。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// demo01</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> a = <span class="hljs-number">20</span>;
        <span class="hljs-keyword">var</span> b = <span class="hljs-number">30</span>;

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> a + b;
        }

        <span class="hljs-keyword">return</span> bar;
    }

    <span class="hljs-keyword">var</span> bar = foo();
    bar();</div>
      </pre>
    </div>
    <p>上面的例子，首先有执行上下文foo，在foo中定义了函数bar，而通过对外返回bar的方式让bar得以执行。当bar执行时，访问了foo内部的变量a，b。因此这个时候闭包产生。</p>

    <p>
      在
      <a target="_blank">基础进阶（一）</a>中，我总结了JavaScript的垃圾回收机制。JavaScript拥有自动的垃圾回收机制，关于垃圾回收机制，有一个重要的行为，那就是，当一个值，在内存中失去引用时，垃圾回收机制会根据特殊的算法找到它，并将其回收，释放内存。
    </p>
    <p>而我们知道，函数的执行上下文，在执行完毕之后，生命周期结束，那么该函数的执行上下文就会失去引用。其占用的内存空间很快就会被垃圾回收器释放。可是闭包的存在，会阻止这一过程。</p>
    <p>先来一个简单的例子。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> fn = <span class="hljs-literal">null</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">innnerFoo</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(a);
        }
        fn = innnerFoo; <span class="hljs-comment">// 将 innnerFoo的引用，赋值给全局变量中的fn</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{
        fn(); <span class="hljs-comment">// 此处的保留的innerFoo的引用</span>
    }

    foo();
    bar(); <span class="hljs-comment">// 2</span></div>
      </pre>
    </div>
    <p>
      在上面的例子中，
      <code>foo()</code>执行完毕之后，按照常理，其执行环境生命周期会结束，所占内存被垃圾收集器释放。但是通过
      <code>fn = innerFoo</code>，函数innerFoo的引用被保留了下来，复制给了全局变量fn。这个行为，导致了foo的变量对象，也被保留了下来。于是，函数fn在函数bar内部执行时，依然可以访问这个被保留下来的变量对象。所以此刻仍然能够访问到变量a的值。
    </p>
    <p>这样，我们就可以称foo为闭包。</p>
    <p>下图展示了闭包foo的作用域链。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/5.png" alt>
    </div>

    <p>我们可以在chrome浏览器的开发者工具中查看这段代码运行时产生的函数调用栈与作用域链的生成情况。如下图。</p>
    <blockquote>
      <p>关于如何在chrome中观察闭包，以及更多闭包的例子，请阅读基础系列（六）</p>
    </blockquote>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/6.png" alt>
    </div>
    <p>在上面的图中，红色箭头所指的正是闭包。其中Call Stack为当前的函数调用栈，Scope为当前正在被执行的函数的作用域链，Local为当前的局部变量。</p>
    <p>
      <strong>所以，通过闭包，我们可以在其他的执行上下文中，访问到函数的内部变量。</strong>比如在上面的例子中，我们在函数bar的执行环境中访问到了函数foo的a变量。个人认为，从应用层面，这是闭包最重要的特性。利用这个特性，我们可以实现很多有意思的东西。
    </p>
    <p>不过读者朋友们需要注意的是，虽然例子中的闭包被保存在了全局变量中，但是闭包的作用域链并不会发生任何改变。在闭包中，能访问到的变量，仍然是作用域链上能够查询到的变量。</p>
    <p>对上面的例子稍作修改，如果我们在函数bar中声明一个变量c，并在闭包fn中试图访问该变量，运行结果会抛出错误。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> fn = <span class="hljs-literal">null</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;
        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">innnerFoo</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(c); <span class="hljs-comment">// 在这里，试图访问函数bar中的c变量，会抛出错误</span>
            <span class="hljs-built_in">console</span>.log(a);
        }
        fn = innnerFoo; <span class="hljs-comment">// 将 innnerFoo的引用，赋值给全局变量中的fn</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> c = <span class="hljs-number">100</span>;
        fn(); <span class="hljs-comment">// 此处的保留的innerFoo的引用</span>
    }

    foo();
    bar();</div>
      </pre>
    </div>
    <blockquote>
      <p>关于这一点，很多同学把函数调用栈与作用域链没有分清楚，所以有的大神看了我关于介绍执行上下文的文章时就义正言辞的说我的例子有问题，而这些评论有很大的误导作用，为了帮助大家自己拥有能够辨别的能力，所以我写了基础（六），教大家如何在chrome中观察闭包，作用域链，this等。当然我也不敢100%保证我文中的例子就一定正确，所以教大家如何去辨认我认为才是最重要的。</p>
    </blockquote>
    <p>
      <strong>闭包的应用场景</strong>
    </p>
    <p>除了面试，在实践中，闭包有两个非常重要的应用场景。分别是模块化与柯里化。</p>

    <div class="ul-des">
      <ul>
        <li>柯里化</li>
      </ul>
    </div>
    <p>
      在函数式编程中，利用闭包能够实现很多炫酷的功能，柯里化便是其中很重要的一种。
      <a
        href="http://www.jianshu.com/p/5e1899fe7d6b"
        target="_blank"
      >点击了解更多关于柯里化的知识</a>
    </p>

    <div class="ul-des">
      <ul>
        <li>模块</li>
      </ul>
    </div>
    <p>在我看来，模块是闭包最强大的一个应用场景。如果你是初学者，对于模块的了解可以暂时不用放在心上，因为理解模块需要更多的基础知识。但是如果你已经有了很多JavaScript的使用经验，在彻底了解了闭包之后，不妨借助本文介绍的作用域链与闭包的思路，重新理一理关于模块的知识。这对于我们理解各种各样的设计模式具有莫大的帮助。</p>

    <div>
      <pre>
            <div class="code">
    (<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">var</span> a = <span class="hljs-number">10</span>;
        <span class="hljs-keyword">var</span> b = <span class="hljs-number">20</span>;

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">num1, num2</span>) </span>{
            <span class="hljs-keyword">var</span> num1 = !!num1 ? num1 : a;
            <span class="hljs-keyword">var</span> num2 = !!num2 ? num2 : b;

            <span class="hljs-keyword">return</span> num1 + num2;
        }

        <span class="hljs-built_in">window</span>.add = add;
    })();

    add(<span class="hljs-number">10</span>, <span class="hljs-number">20</span>);</div>
      </pre>
    </div>

    <p>在上面的例子中，我使用函数自执行的方式，创建了一个模块。add是模块对外暴露的一个公共方法。而变量a，b被作为私有变量。在面向对象的开发中，我们常常需要考虑是将变量作为私有变量，还是放在构造函数中的this中，因此理解闭包，以及原型链是一个非常重要的事情。模块十分重要，因此我会在以后的文章专门介绍，这里就暂时不多说啦。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/7.png" alt>
    </div>

    <p>为了验证自己有没有搞懂作用域链与闭包，这里留下一个经典的思考题，常常也会在面试中被问到。</p>
    <p>利用闭包，修改下面的代码，让循环输出的结果依次为1， 2， 3， 4， 5</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i=<span class="hljs-number">1</span>; i&lt;=<span class="hljs-number">5</span>; i++) {
        setTimeout( <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timer</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(i);
        }, i*<span class="hljs-number">1000</span> );
    }
    add(<span class="hljs-number">10</span>, <span class="hljs-number">20</span>);</div>
      </pre>
    </div>

    <p>
      <strong>题目详解</strong>
    </p>

    <p>在最初学习setTimeout的时候，我们很容易知道setTimeout有两个参数，第一个参数为一个函数，我们通过该函数定义将要执行的操作。第二个参数为一个时间毫秒数，表示延迟执行的时间。</p>

    <div>
      <pre>
            <div class="code">
    setTimeout(function() {
        console.log('一秒钟之后我将被打印出来')
    }, 1000)</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/8.png" alt>
    </div>
    <p>可能不少人对于setTimeout的理解止步于此，但还是有不少人发现了一些其他的东西，并在评论里提出了疑问。比如上图中的这个数字7，是什么？</p>

    <p>每一个setTimeout在执行时，会返回一个唯一ID，上图中的数字7，就是这个唯一ID。我们在使用时，常常会使用一个变量将这个唯一ID保存起来，用以传入clearTimeout，清除定时器。</p>

    <div>
      <pre>
            <div class="code">
    var timer = setTimeout(function() {
        console.log('如果不清除我，我将会一秒之后出现。');
    }, 1000)

    clearTimeout(timer);  // 清除之后，通过setTimeout定义的操作并不会执行</div>
      </pre>
    </div>

    <p>接下来，我们还需要考虑另外一个重要的问题，那就是setTimeout中定义的操作，在什么时候执行？为了引起大家的重视，我们来看看下面的例子。</p>

    <div>
      <pre>
            <div class="code">
    var timer = setTimeout(function() {
        console.log('setTimeout actions.');
    }, 0);

    console.log('other actions.');

    // 思考一下，当我将setTimeout的延迟时间设置为0时，上面的执行顺序会是什么？</div>
      </pre>
    </div>
    <p>在浏览器中的console中运行试试看，很容易就能够知道答案，如果你没有猜中答案，那么我这篇文章就值得你点一个赞了，因为接下来我分享的小知识，可能会在笔试中救你一命。</p>

    <p>
      在对于
      <a target="_blank">执行上下文</a>的介绍中，我与大家分享了函数调用栈这种特殊数据结构的调用特性。在这里，将会介绍另外一个特殊的
      <strong>队列</strong>结构，页面中所有由setTimeout定义的操作，都将放在同一个队列中依次执行。
    </p>
    <p>我用下图跟大家展示一下队列数据结构的特点。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/9.png" alt>
    </div>
    <p>
      <strong>而这个队列执行的时间，需要等待到函数调用栈清空之后才开始执行。</strong>即所有可执行代码执行完毕之后，才会开始执行由setTimeout定义的操作。而这些操作进入队列的顺序，则由设定的延迟时间来决定。
    </p>

    <p>因此在上面这个例子中，即使我们将延迟时间设置为0，它定义的操作仍然需要等待所有代码执行完毕之后才开始执行。这里的延迟时间，并非相对于setTimeout执行这一刻，而是相对于其他代码执行完毕这一刻。所以上面的例子执行结果就非常容易理解了。</p>

    <p>为了帮助大家理解，再来一个结合变量提升的更加复杂的例子。如果你能够正确看出执行顺序，那么你对于函数的执行就有了比较正确的认识了，如果还不能，就回过头去看看其他几篇文章。</p>

    <div>
      <pre>
            <div class="code">
    setTimeout(function() {
        console.log(a);
    }, 0);

    var a = 10;

    console.log(b);
    console.log(fn);

    var b = 20;

    function fn() {
        setTimeout(function() {
            console.log('setTImeout 10ms.');
        }, 10);
    }

    fn.toString = function() {
        return 30;
    }

    console.log(fn);

    setTimeout(function() {
        console.log('setTimeout 20ms.');
    }, 20);

    fn();</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/10.png" alt>
    </div>
    <p>OK，关于setTimeout就暂时先介绍到这里，我们回过头来看看那个循环闭包的思考题。</p>

    <div>
      <pre>
            <div class="code">
    for (var i=1; i&lt;=5; i++) {
        setTimeout( function timer() {
            console.log(i);
        }, i*1000 );
    }</div>
      </pre>
    </div>
    <p>如果我们直接这样写，根据setTimeout定义的操作在函数调用栈清空之后才会执行的特点，for循环里定义了5个setTimeout操作。而当这些操作开始执行时，for循环的i值，已经先一步变成了6。因此输出结果总为6。而我们想要让输出结果依次执行，我们就必须借助闭包的特性，每次循环时，将i值保存在一个闭包中，当setTimeout中定义的操作执行时，则访问对应闭包保存的i值即可。</p>
    <p>而我们知道在函数中闭包判定的准则，即执行时是否在内部定义的函数中访问了上层作用域的变量。因此我们需要包裹一层自执行函数为闭包的形成提供条件。</p>
    <p>因此，我们只需要2个操作就可以完成题目需求，一是使用自执行函数提供闭包条件，二是传入i值并保存在闭包中。</p>
    <div>
      <pre>
            <div class="code">
    for (var i=1; i&lt;=5; i++) {

        (function(i) {
            setTimeout( function timer() {
                console.log(i);
            }, i*1000 );
        })(i)
    }</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageFour/11.png" alt>
    </div>
    <p>当然，也可以在setTimeout的第一个参数处利用闭包。</p>
    <div>
      <pre>
            <div class="code">
    for (var i=1; i&lt;=5; i++) {
        setTimeout( (function(i) {
            return function() {
                console.log(i);
            }
        })(i), i*1000 );
    }</div>
      </pre>
    </div>
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
