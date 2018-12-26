<template>
  <div class="main-content">
    <div class="title">事件循环机制</div>
    <p>前端基础进阶正是围绕这条线索慢慢展开，而事件循环机制(Event Loop)，则是这条线索的最关键的知识点。所以，我就马不停蹄的去深入的学习了事件循环机制，并总结出了这篇文章跟大家分享。</p>
    <p>事件循环机制从整体上的告诉了我们所写的JavaScript代码的执行顺序。但是在我学习的过程中，找到的许多国内博客文章对于它的讲解浅尝辄止，不得其法，很多文章在图中画个圈就表示循环了，看了之后也没感觉明白了多少。但是他又如此重要，以致于当我们想要面试中高级岗位时，事件循环机制总是绕不开的话题。特别是ES6中正式加入了Promise对象之后，对于新标准中事件循环机制的理解就变得更加重要。这就很尴尬了。</p>
    <blockquote>
      <p>最近有两篇比较火的文章也表达了这个问题的重要性。</p>
      <p>
        <a href="https://zhuanlan.zhihu.com/p/25407758" target="_blank">这个前端面试在搞事</a>
        <a
          href="https://juejin.im/post/58cf180b0ce4630057d6727c"
          target="_blank"
        >80% 应聘者都不及格的 JS 面试题</a>
      </p>
      <p>但是很遗憾的是，大神们告诉了大家这个知识点很重要，却并没有告诉大家为什么会这样。所以当我们在面试时遇到这样的问题时，就算你知道了结果，面试官再进一步问一下，我们依然懵逼。</p>
    </blockquote>

    <p>在学习事件循环机制之前，我默认你已经懂得了如下概念，如果仍然有疑问，可以回过头去看看我以前的文章。</p>
    <div class="ul-des">
      <ul>
        <li>执行上下文(Execution context)</li>
        <li>函数调用栈(call stack)</li>
        <li>队列数据结构(queue)</li>
        <li>Promise(我会在下一篇文章专门总结Promise的详细使用)</li>
      </ul>
    </div>

    <blockquote>
      <p>因为chrome浏览器中新标准中的事件循环机制与nodejs类似，因此此处就整合nodejs一起来理解，其中会介绍到几个nodejs有，但是浏览器中没有的API，大家只需要了解就好，不一定非要知道她是如何使用。比如process.nextTick，setImmediate</p>
    </blockquote>
    <p>OK，那我就先抛出结论，然后以例子与图示详细给大家演示事件循环机制。</p>
    <div class="ul-des">
      <ul>
        <li>
          <p>我们知道JavaScript的一大特点就是单线程，而这个线程中拥有唯一的一个事件循环。</p>
          <blockquote>
            <p>当然新标准中的web worker涉及到了多线程，我对它了解也不多，这里就不讨论了。</p>
          </blockquote>
        </li>
        <li>
          <p>JavaScript代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)来搞定另外一些代码的执行。</p>
        </li>
      </ul>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/1.png" alt>
    </div>
    <div class="ul-des">
      <ul>
        <li>
          <p>一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。</p>
        </li>
        <li>
          <p>任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs。</p>
        </li>
        <li>
          <p>macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。</p>
        </li>
        <li>
          <p>micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)</p>
        </li>
        <li>
          <p>setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务。</p>
        </li>
      </ul>
    </div>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// setTimeout中的回调函数才是进入任务队列的任务</span>
    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'xxxx'</span>);
    })
    <span class="hljs-comment">// 非常多的同学对于setTimeout的理解存在偏差。所以大概说一下误解：</span>
    <span class="hljs-comment">// setTimeout作为一个任务分发器，这个函数会立即执行，而它所要分发的任务，也就是它的第一个参数，才是延迟执行</span></div>
      </pre>
    </div>

    <div class="ul-des">
      <ul>
        <li>
          <p>来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。</p>
        </li>
        <li>
          <p>事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去。</p>
        </li>
        <li>
          <p>其中每一个任务的执行，无论是macro-task还是micro-task，都是借助函数调用栈来完成。</p>
        </li>
      </ul>
    </div>
    <p>纯文字表述确实有点干涩，因此，这里我们通过2个例子，来逐步理解事件循环的具体顺序。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// demo01  出自于上面我引用文章的一个例子，我们来根据上面的结论，一步一步分析具体的执行过程。</span>
    <span class="hljs-comment">// 为了方便理解，我以打印出来的字符作为当前的任务名称</span>
    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1'</span>);
    })

    <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise1'</span>);
        <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">1000</span>; i++) {
            i == <span class="hljs-number">99</span> &amp;&amp; resolve();
        }
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise2'</span>);
    }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'then1'</span>);
    })

    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'global1'</span>);</div>
      </pre>
    </div>
    <p>首先，事件循环从宏任务队列开始，这个时候，宏任务队列中，只有一个script(整体代码)任务。每一个任务的执行顺序，都依靠函数调用栈来搞定，而当遇到任务源时，则会先分发任务到对应的队列中去，所以，上面例子的第一步执行如下图所示。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/2.png" alt>
    </div>
    <p>第二步：script任务执行时首先遇到了setTimeout，setTimeout为一个宏任务源，那么他的作用就是将任务分发到它对应的队列中。</p>

    <div>
      <pre>
            <div class="code">
    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1'</span>);
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/3.png" alt>
    </div>
    <p>第三步：script执行时遇到Promise实例。Promise构造函数中的第一个参数，是在new的时候执行，因此不会进入任何其他的队列，而是直接在当前任务直接执行了，而后续的.then则会被分发到micro-task的Promise队列中去。</p>
    <p>因此，构造函数执行时，里面的参数进入函数调用栈执行。for循环不会进入任何队列，因此代码会依次执行，所以这里的promise1和promise2会依次输出。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/4.png" alt>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/5.png" alt>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/6.png" alt>
    </div>
    <p>script任务继续往下执行，最后只有一句输出了globa1，然后，全局任务就执行完毕了。</p>
    <p>第四步：第一个宏任务script执行完毕之后，就开始执行所有的可执行的微任务。这个时候，微任务中，只有Promise队列中的一个任务then1，因此直接执行就行了，执行结果输出then1，当然，他的执行，也是进入函数调用栈中执行的。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/7.png" alt>
    </div>
    <p>第五步：当所有的micro-tast执行完毕之后，表示第一轮的循环就结束了。这个时候就得开始第二轮的循环。第二轮循环仍然从宏任务macro-task开始。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/8.png" alt>
    </div>
    <p>这个时候，我们发现宏任务中，只有在setTimeout队列中还要一个timeout1的任务等待执行。因此就直接执行即可。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/9.png" alt>
    </div>
    <p>这个时候宏任务队列与微任务队列中都没有任务了，所以代码就不会再输出其他东西了。</p>
    <p>那么上面这个例子的输出结果就显而易见。大家可以自行尝试体会。</p>
    <p>这个例子比较简答，涉及到的队列任务并不多，因此读懂了它还不能全面的了解到事件循环机制的全貌。所以我下面弄了一个复杂一点的例子，再给大家解析一番，相信读懂之后，事件循环这个问题，再面试中再次被问到就难不倒大家了。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// demo02</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'golb1'</span>);

    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1_then'</span>)
        })
    })

    setImmediate(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1_then'</span>)
        })
    })

    process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob1_nextTick'</span>);
    })
    <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob1_promise'</span>);
        resolve();
    }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob1_then'</span>)
    })

    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2_then'</span>)
        })
    })

    process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob2_nextTick'</span>);
    })
    <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob2_promise'</span>);
        resolve();
    }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob2_then'</span>)
    })

    setImmediate(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2_then'</span>)
        })
    })</div>
      </pre>
    </div>
    <p>这个例子看上去有点复杂，乱七八糟的代码一大堆，不过不用担心，我们一步一步来分析一下。</p>
    <p>第一步：宏任务script首先执行。全局入栈。glob1输出。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/10.png" alt>
    </div>
    <p>第二步，执行过程遇到setTimeout。setTimeout作为任务分发器，将任务分发到对应的宏任务队列中。</p>

    <div>
      <pre>
            <div class="code">
    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout1_then'</span>)
        })
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/11.png" alt>
    </div>
    <p>第三步：执行过程遇到setImmediate。setImmediate也是一个宏任务分发器，将任务分发到对应的任务队列中。setImmediate的任务队列会在setTimeout队列的后面执行。</p>

    <div>
      <pre>
            <div class="code">
    setImmediate(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate1_then'</span>)
        })
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/12.png" alt>
    </div>
    <p>第四步：执行遇到nextTick，process.nextTick是一个微任务分发器，它会将任务分发到对应的微任务队列中去。</p>

    <div>
      <pre>
            <div class="code">
    process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob1_nextTick'</span>);
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/13.png" alt>
    </div>
    <p>第五步：执行遇到Promise。Promise的then方法会将任务分发到对应的微任务队列中，但是它构造函数中的方法会直接执行。因此，glob1_promise会第二个输出。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob1_promise'</span>);
    resolve();
}).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob1_then'</span>)
})</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/14.png" alt>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/15.png" alt>
    </div>
    <p>第六步：执行遇到第二个setTimeout。</p>
    <div>
      <pre>
            <div class="code">
    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'timeout2_then'</span>)
        })
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/16.png" alt>
    </div>
    <p>第七步：先后遇到nextTick与Promise</p>
    <div>
      <pre>
            <div class="code">
    process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob2_nextTick'</span>);
    })
    <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob2_promise'</span>);
        resolve();
    }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'glob2_then'</span>)
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/17.png" alt>
    </div>
    <p>第八步：再次遇到setImmediate。</p>
    <div>
      <pre>
            <div class="code">
    setImmediate(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2'</span>);
        process.nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2_nextTick'</span>);
        })
        <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve</span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2_promise'</span>);
            resolve();
        }).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'immediate2_then'</span>)
        })
    })</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/18.png" alt>
    </div>
    <p>这个时候，script中的代码就执行完毕了，执行过程中，遇到不同的任务分发器，就将任务分发到各自对应的队列中去。接下来，将会执行所有的微任务队列中的任务。</p>

    <p>其中，nextTick队列会比Promie先执行。nextTick中的可执行任务执行完毕之后，才会开始执行Promise队列中的任务。</p>

    <p>当所有可执行的微任务执行完毕之后，这一轮循环就表示结束了。下一轮循环继续从宏任务队列开始执行。</p>

    <p>这个时候，script已经执行完毕，所以就从setTimeout队列开始执行。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSeven/19.png" alt>
    </div>
    <p>setTimeout任务的执行，也依然是借助函数调用栈来完成，并且遇到任务分发器的时候也会将任务分发到对应的队列中去。</p>

    <p>只有当setTimeout中所有的任务执行完毕之后，才会再次开始执行微任务队列。并且清空所有的可执行微任务。</p>

    <p>setTiemout队列产生的微任务执行完毕之后，循环则回过头来开始执行setImmediate队列。仍然是先将setImmediate队列中的任务执行完毕，再执行所产生的微任务。</p>
    <p>当setImmediate队列执行产生的微任务全部执行之后，第二轮循环也就结束了。</p>
    <blockquote>
      <p>大家需要注意这里的循环结束的时间节点。</p>
      <p>当我们在执行setTimeout任务中遇到setTimeout时，它仍然会将对应的任务分发到setTimeout队列中去，但是该任务就得等到下一轮事件循环执行了。例子中没有涉及到这么复杂的嵌套，大家可以动手添加或者修改他们的位置来感受一下循环的变化。</p>
    </blockquote>
    <p>OK，到这里，事件循环我想我已经表述得很清楚了，能不能理解就看读者老爷们有没有耐心了。我估计很多人会理解不了循环结束的节点。</p>
    <p>当然，这些顺序都是v8的一些实现。我们也可以根据上面的规则，来尝试实现一下事件循环的机制。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 用数组模拟一个队列</span>
    <span class="hljs-keyword">var</span> tasks = [];

    <span class="hljs-comment">// 模拟一个事件分发器</span>
    <span class="hljs-keyword">var</span> addFn1 = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">task</span>) </span>{
        tasks.push(task);
    }

    <span class="hljs-comment">// 执行所有的任务</span>
    <span class="hljs-keyword">var</span> flush = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        tasks.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">task</span>) </span>{
            task();
        })
    }

    <span
  class="hljs-comment"
>// 最后利用setTimeout/或者其他你认为合适的方式丢入事件循环中</span>
    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        flush();
    })

    <span class="hljs-comment">// 当然，也可以不用丢进事件循环，而是我们自己手动在适当的时机去执行对应的某一个方法</span>

    <span class="hljs-keyword">var</span> dispatch = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name</span>) </span>{
        tasks.map(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item</span>) </span>{
            <span class="hljs-keyword">if</span>(item.name == name) {
                item.handler();
            }
        })
    }

    <span
  class="hljs-comment"
>// 当然，我们把任务丢进去的时候，多保存一个name即可。</span>
    <span class="hljs-comment">// 这时候，task的格式就如下</span>
    demoTask =  {
        name: <span class="hljs-string">'demo'</span>,
        handler: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
    }

    <span class="hljs-comment">// 于是，一个订阅-通知的设计模式就这样轻松的被实现了</span></div>
      </pre>
    </div>

    <p>这样，我们就模拟了一个任务队列。我们还可以定义另外一个队列，利用上面的各种方式来规定他们的优先级。</p>
    <blockquote>
      <p>需要注意的是，这里的执行顺序，或者执行的优先级在不同的场景里由于实现的不同会导致不同的结果，包括node的不同版本，不同浏览器等都有不同的结果。</p>
    </blockquote>
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
