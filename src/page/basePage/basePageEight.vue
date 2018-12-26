<template>
  <div class="main-content">
    <div class="title">Promise</div>
    <p>Promise的重要性我认为我没有必要多讲，概括起来说就是必须得掌握，而且还要掌握透彻。这篇文章的开头，主要跟大家分析一下，为什么会有Promise出现。</p>
    <p>在实际的使用当中，有非常多的应用场景我们不能立即知道应该如何继续往下执行。最重要也是最主要的一个场景就是ajax请求。通俗来说，由于网速的不同，可能你得到返回值的时间也是不同的，这个时候我们就需要等待，结果出来了之后才知道怎么样继续下去。</p>

    <div>
      <pre>
            <div class="code">
    // 简单的ajax原生实现
    var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
    var result;

    var XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.send();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 &amp;&amp; XHR.status == 200) {
            result = XHR.response;
            console.log(result);
        }
    }</div>
      </pre>
    </div>

    <p>在ajax的原生实现中，利用了onreadystatechange事件，当该事件触发并且符合一定条件时，才能拿到我们想要的数据，之后我们才能开始处理数据。</p>
    <p>这样做看上去并没有什么麻烦，但是如果这个时候，我们还需要做另外一个ajax请求，这个新的ajax请求的其中一个参数，得从上一个ajax请求中获取，这个时候我们就不得不如下这样做：</p>

    <div>
      <pre>
            <div class="code">
    var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
    var result;

    var XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.send();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 &amp;&amp; XHR.status == 200) {
            result = XHR.response;
            console.log(result);

            // 伪代码
            var url2 = 'http:xxx.yyy.com/zzz?ddd=' + result.someParams;
            var XHR2 = new XMLHttpRequest();
            XHR2.open('GET', url, true);
            XHR2.send();
            XHR2.onreadystatechange = function() {
                ...
            }
        }
    }   
    </div>
      </pre>
    </div>

    <p>
      当出现第三个ajax(甚至更多)仍然依赖上一个请求的时候，我们的代码就变成了一场灾难。这场灾难，往往也被称为
      <strong>回调地狱</strong>。
    </p>

    <p>因此我们需要一个叫做Promise的东西，来解决这个问题。</p>

    <p>
      当然，除了回调地狱之外，还有一个非常重要的需求：
      <strong>为了我们的代码更加具有可读性和可维护性，我们需要将数据请求与数据处理明确的区分开来</strong>。上面的写法，是完全没有区分开，当数据变得复杂时，也许我们自己都无法轻松维护自己的代码了。这也是模块化过程中，必须要掌握的一个重要技能，请一定重视。
    </p>

    <p>从前面几篇文中的知识我们可以知道，当我们想要确保某代码在谁谁之后执行时，我们可以利用函数调用栈，将我们想要执行的代码放入回调函数中。</p>

    <div>
      <pre>
            <div class="code">
    // 一个简单的封装
    function want() {
        console.log('这是你想要执行的代码');
    }

    function fn(want) {
        console.log('这里表示执行了一大堆各种代码');

        // 其他代码执行完毕，最后执行回调函数
        want &amp;&amp; want();
    }

    fn(want);</div>
      </pre>
    </div>

    <p>利用回调函数封装，是我们在初学JavaScript时常常会使用的技能。</p>
    <p>确保我们想要的代码压后执行，除了利用函数调用栈的执行顺序之外，我们还可以利用上一篇文章所述的队列机制。</p>

    <div>
      <pre>
            <div class="code">
    function want() {
        console.log('这是你想要执行的代码');
    }

    function fn(want) {
        // 将想要执行的代码放入队列中，根据事件循环的机制，我们就不用非得将它放到最后面了，由你自由选择
        want &amp;&amp; setTimeout(want, 0);
        console.log('这里表示执行了一大堆各种代码');
    }

    fn(want);</div>
      </pre>
    </div>
    <p>如果浏览器已经支持了原生的Promise对象，那么我们就知道，浏览器的js引擎里已经有了Promise队列，这样就可以利用Promise将任务放在它的队列中去。</p>

    <div>
      <pre>
            <div class="code">
    function want() {
        console.log('这是你想要执行的代码');
    }

    function fn(want) {
        console.log('这里表示执行了一大堆各种代码');

        // 返回Promise对象
        return new Promise(function(resolve, reject) {
            if (typeof want == 'function') {
                resolve(want);
            } else {
                reject('TypeError: '+ want +'不是一个函数')
            }
        })
    }

    fn(want).then(function(want) {
        want();
    })

    fn('1234').catch(function(err) {
        console.log(err);
    })</div>
      </pre>
    </div>
    <p>看上去变得更加复杂了。可是代码变得更加健壮，处理了错误输入的情况。</p>
    <p>为了更好的往下扩展Promise的应用，这里需要先跟大家介绍一下Promsie的基础知识。</p>

    <p>一、 Promise对象有三种状态，他们分别是：</p>
    <div class="ul-des">
      <ul>
        <li>pending: 等待中，或者进行中，表示还没有得到结果</li>
        <li>resolved(Fulfilled): 已经完成，表示得到了我们想要的结果，可以继续往下执行</li>
        <li>rejected: 也表示得到结果，但是由于结果并非我们所愿，因此拒绝执行</li>
      </ul>
    </div>

    <p>这三种状态不受外界影响，而且状态只能从pending改变为resolved或者rejected，并且不可逆。在Promise对象的构造函数中，将一个函数作为第一个参数。而这个函数，就是用来处理Promise的状态变化。</p>

    <div>
      <pre>
            <div class="code">
    new Promise(function(resolve, reject) {
        if(true) { resolve() };
        if(false) { reject() };
    })</div>
      </pre>
    </div>
    <p>上面的resolve和reject都为一个函数，他们的作用分别是将状态修改为resolved和rejected。</p>
    <p>二、 Promise对象中的then方法，可以接收构造函数中处理的状态变化，并分别对应执行。then方法有2个参数，第一个函数接收resolved状态的执行，第二个参数接收reject状态的执行。</p>

    <div>
      <pre>
            <div class="code">
    function fn(num) {
        return new Promise(function(resolve, reject) {
            if (typeof num == 'number') {
                resolve();
            } else {
                reject();
            }
        }).then(function() {
            console.log('参数是一个number值');
        }, function() {
            console.log('参数不是一个number值');
        })
    }

    fn('hahha');
    fn(1234);</div>
      </pre>
    </div>
    <p>then方法的执行结果也会返回一个Promise对象。因此我们可以进行then的链式执行，这也是解决回调地狱的主要方式。</p>

    <div>
      <pre>
            <div class="code">
    function fn(num) {
        return new Promise(function(resolve, reject) {
            if (typeof num == 'number') {
                resolve();
            } else {
                reject();
            }
        })
        .then(function() {
            console.log('参数是一个number值');
        })
        .then(null, function() {
            console.log('参数不是一个number值');
        })
    }

    fn('hahha');
    fn(1234);</div>
      </pre>
    </div>

    <blockquote>
      <p>then(null, function() {}) 就等同于catch(function() {})</p>
    </blockquote>

    <p>三、Promise中的数据传递</p>

    <p>大家自行从下面的例子中领悟吧。</p>

    <div>
      <pre>
            <div class="code">
    var fn = function(num) {
    return new Promise(function(resolve, reject) {
            if (typeof num == 'number') {
                resolve(num);
            } else {
                reject('TypeError');
            }
        })
    }

    fn(2).then(function(num) {
        console.log('first: ' + num);
        return num + 1;
    })
    .then(function(num) {
        console.log('second: ' + num);
        return num + 1;
    })
    .then(function(num) {
        console.log('third: ' + num);
        return num + 1;
    });

    // 输出结果
    first: 2
    second: 3
    third: 4</div>
      </pre>
    </div>
    <p>OK，了解了这些基础知识之后，我们再回过头，利用Promise的知识，对最开始的ajax的例子进行一个简单的封装。看看会是什么样子。</p>

    <div>
      <pre>
            <div class="code">
    var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';

    // 封装一个get请求的方法
    function getJSON(url) {
        return new Promise(function(resolve, reject) {
            var XHR = new XMLHttpRequest();
            XHR.open('GET', url, true);
            XHR.send();

            XHR.onreadystatechange = function() {
                if (XHR.readyState == 4) {
                    if (XHR.status == 200) {
                        try {
                            var response = JSON.parse(XHR.responseText);
                            resolve(response);
                        } catch (e) {
                            reject(e);
                        }
                    } else {
                        reject(new Error(XHR.statusText));
                    }
                }
            }
        })
    }

    getJSON(url).then(resp =&gt; console.log(resp));</div>
      </pre>
    </div>
    <p>为了健壮性，处理了很多可能出现的异常，总之，就是正确的返回结果，就resolve一下，错误的返回结果，就reject一下。并且利用上面的参数传递的方式，将正确结果或者错误信息通过他们的参数传递出来。</p>

    <blockquote>
      <p>现在所有的库几乎都将ajax请求利用Promise进行了封装，因此我们在使用jQuery等库中的ajax请求时，都可以利用Promise来让我们的代码更加优雅和简单。这也是Promise最常用的一个场景，因此我们一定要非常非常熟悉它，这样才能在应用的时候更加灵活。</p>
    </blockquote>

    <p>四、Promise.all</p>
    <p>当有一个ajax请求，它的参数需要另外2个甚至更多请求都有返回结果之后才能确定，那么这个时候，就需要用到Promise.all来帮助我们应对这个场景。</p>
    <p>Promise.all接收一个Promise对象组成的数组作为参数，当这个数组所有的Promise对象状态都变成resolved或者rejected的时候，它才会去调用then方法。</p>

    <div>
      <pre>
            <div class="code">
    var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
    var url1 = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-06-10';

    function renderAll() {
        return Promise.all([getJSON(url), getJSON(url1)]);
    }

    renderAll().then(function(value) {
        // 建议大家在浏览器中看看这里的value值
        console.log(value);
    })</div>
      </pre>
    </div>
    <p>五、 Promise.race</p>

    <p>与Promise.all相似的是，Promise.race都是以一个Promise对象组成的数组作为参数，不同的是，只要当数组中的其中一个Promsie状态变成resolved或者rejected时，就可以调用.then方法了。而传递给then方法的值也会有所不同，大家可以再浏览器中运行下面的例子与上面的例子进行对比。</p>

    <div>
      <pre>
            <div class="code">
    function renderRace() {
        return Promise.race([getJSON(url), getJSON(url1)]);
    }

    renderRace().then(function(value) {
        console.log(value);
    })</div>
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
