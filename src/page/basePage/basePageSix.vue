<template>
  <div class="main-content">
    <div class="title">面向对象</div>

    <p>如果要我总结一下学习前端以来我遇到了哪些瓶颈，那么面向对象一定是第一个毫不犹豫想到的。尽管我现在对于面向对象有了一些的了解，但是当初的那种似懂非懂的痛苦，依然历历在目。</p>

    <p>而这篇文章主要来聊一聊关于面向对象的一些重要的基本功。</p>

    <p>
      <strong>一、对象的定义</strong>
    </p>
    <p>
      在ECMAScript-262中，对象被定义为
      <strong>“无序属性的集合，其属性可以包含基本值，对象或者函数”</strong>。
    </p>
    <p>
      也就是说，在JavaScript中，对象无非就是由一些列无序的
      <code>key-value</code>对组成。其中value可以是基本值，对象或者函数。
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 这里的person就是一个对象</span>
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">'Tom'</span>,
        age: <span class="hljs-number">18</span>,
        getName: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{},
        parent: {}
    }</div>
      </pre>
    </div>

    <h6>创建对象</h6>
    <p>我们可以通过new的方式创建一个对象。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> obj = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Object</span>();</div>
      </pre>
    </div>
    <p>也可以通过对象字面量的形式创建一个简单的对象。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> obj = {};</div>
      </pre>
    </div>

    <p>当我们想要给我们创建的简单对象添加方法时，可以这样表示。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 可以这样</span>
    <span class="hljs-keyword">var</span> person = {};
    person.name = <span class="hljs-string">"TOM"</span>;
    person.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }

    <span class="hljs-comment">// 也可以这样</span>
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">"TOM"</span>,
        getName: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
        }
    }</div>
      </pre>
    </div>
    <h6>访问对象的属性和方法</h6>

    <p>假如我们有一个简单的对象如下：</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">'TOM'</span>,
        age: <span class="hljs-string">'20'</span>,
        getName: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name
        }
    }</div>
      </pre>
    </div>
    <p>当我们想要访问他的name属性时，可以用如下两种方式访问。</p>

    <div>
      <pre>
            <div class="code">
    person.name

    <span class="hljs-comment">// 或者</span>
    person[<span class="hljs-string">'name'</span>]</div>
      </pre>
    </div>

    <p>如果我们想要访问的属性名是一个变量时，常常会使用第二种方式。例如我们要同时访问person的name与age，可以这样写：</p>

    <div>
      <pre>
            <div class="code">
    [<span class="hljs-string">'name'</span>, <span class="hljs-string">'age'</span>].forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item</span>) </span>{
        <span class="hljs-built_in">console</span>.log(person[item]);
    })</div>
      </pre>
    </div>
    <blockquote>
      <p>这种方式一定要重视，记住它以后在我们处理复杂数据的时候会有很大的帮助。</p>
    </blockquote>
    <p>
      <strong>二、工厂模式</strong>
    </p>
    <p>使用上面的方式创建对象很简单，但是在很多时候并不能满足我们的需求。就以person对象为例。假如我们在实际开发中，不仅仅需要一个名字叫做TOM的person对象，同时还需要另外一个名为Jake的person对象，虽然他们有很多相似之处，但是我们不得不重复写两次。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> perTom = {
        name: <span class="hljs-string">'TOM'</span>,
        age: <span class="hljs-number">20</span>,
        getName: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name
        }
    };

    <span class="hljs-keyword">var</span> perJake = {
        name: <span class="hljs-string">'Jake'</span>,
        age: <span class="hljs-number">22</span>,
        getName: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name
        }
    }</div>
      </pre>
    </div>
    <p>很显然这并不是合理的方式，当相似对象太多时，大家都会崩溃掉。</p>
    <p>我们可以使用工厂模式的方式解决这个问题。顾名思义，工厂模式就是我们提供一个模子，然后通过这个模子复制出我们需要的对象。我们需要多少个，就复制多少个。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> createPerson = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, age</span>) </span>{

        <span class="hljs-comment">// 声明一个中间对象，该对象就是工厂模式的模子</span>
        <span class="hljs-keyword">var</span> o = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Object</span>();

        <span class="hljs-comment">// 依次添加我们需要的属性与方法</span>
        o.name = name;
        o.age = age;
        o.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
        }

        <span class="hljs-keyword">return</span> o;
    }

    <span class="hljs-comment">// 创建两个实例</span>
    <span class="hljs-keyword">var</span> perTom = createPerson(<span class="hljs-string">'TOM'</span>, <span class="hljs-number">20</span>);
    <span class="hljs-keyword">var</span> PerJake = createPerson(<span class="hljs-string">'Jake'</span>, <span class="hljs-number">22</span>);</div>
      </pre>
    </div>
    <p>相信上面的代码并不难理解，也不用把工厂模式看得太过高大上。很显然，工厂模式帮助我们解决了重复代码上的麻烦，让我们可以写很少的代码，就能够创建很多个person对象。但是这里还有两个麻烦，需要我们注意。</p>
    <p>第一个麻烦就是这样处理，我们没有办法识别对象实例的类型。使用instanceof可以识别对象的类型，如下例子：</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> obj = {};
    <span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}

    <span class="hljs-built_in">console</span>.log(obj <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Object</span>);  <span class="hljs-comment">// true</span>
    <span class="hljs-built_in">console</span>.log(foo <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Function</span>); <span class="hljs-comment">// true</span></div>
      </pre>
    </div>
    <p>因此在工厂模式的基础上，我们需要使用构造函数的方式来解决这个麻烦。</p>
    <p>
      <strong>三、构造函数</strong>
    </p>

    <p>在JavaScript中，new关键字可以让一个函数变得与众不同。通过下面的例子，我们来一探new关键字的神奇之处。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">demo</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>);
    }

    demo();  <span class="hljs-comment">// window</span>
    <span class="hljs-keyword">new</span> demo();  <span class="hljs-comment">// demo</span></div>
      </pre>
    </div>

    <p>为了能够直观的感受他们不同，建议大家动手实践观察一下。很显然，使用new之后，函数内部发生了一些变化，让this指向改变。那么new关键字到底做了什么事情呢。嗯，其实我之前在文章里用文字大概表达了一下new到底干了什么，但是一些同学好奇心很足，总期望用代码实现一下，我就大概以我的理解来表达一下吧。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 先一本正经的创建一个构造函数，其实该函数与普通函数并无区别</span>
    <span class="hljs-keyword">var</span> Person = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
        <span class="hljs-keyword">this</span>.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
        }
    }

    <span class="hljs-comment">// 将构造函数以参数形式传入</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">New</span>(<span class="hljs-params">func</span>) </span>{

        <span class="hljs-comment">// 声明一个中间对象，该对象为最终返回的实例</span>
        <span class="hljs-keyword">var</span> res = {};
        <span class="hljs-keyword">if</span> (func.prototype !== <span class="hljs-literal">null</span>) {

            <span class="hljs-comment">// 将实例的原型指向构造函数的原型</span>
            res.__proto__ = func.prototype;
        }

        <span
  class="hljs-comment"
>// ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象</span>
        <span class="hljs-keyword">var</span> ret = func.apply(res, <span class="hljs-built_in">Array</span>.prototype.slice.call(<span class="hljs-built_in">arguments</span>, <span class="hljs-number">1</span>));

        <span class="hljs-comment">// 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象</span>
        <span class="hljs-keyword">if</span> ((<span class="hljs-keyword">typeof</span> ret === <span class="hljs-string">"object"</span> || <span class="hljs-keyword">typeof</span> ret === <span class="hljs-string">"function"</span>) &amp;&amp; ret !== <span class="hljs-literal">null</span>) {
            <span class="hljs-keyword">return</span> ret;
        }

        <span class="hljs-comment">// 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象</span>
        <span class="hljs-keyword">return</span> res;
    }

    <span class="hljs-comment">// 通过new声明创建实例，这里的p1，实际接收的正是new中返回的res</span>
    <span class="hljs-keyword">var</span> p1 = New(Person, <span class="hljs-string">'tom'</span>, <span class="hljs-number">20</span>);
    <span class="hljs-built_in">console</span>.log(p1.getName());

    <span class="hljs-comment">// 当然，这里也可以判断出实例的类型了</span>
    <span class="hljs-built_in">console</span>.log(p1 <span class="hljs-keyword">instanceof</span> Person); <span class="hljs-comment">// true</span></div>
      </pre>
    </div>
    <blockquote>
      <p>
        JavaScript内部再通过其他的一些特殊处理，将
        <code>var p1 = New(Person, 'tom', 20);</code> 等效于
        <code>var p1 = new Person('tom', 20);</code>。就是我们认识的new关键字了。具体怎么处理的，我也不知道，别刨根问底了，一直回答下去太难 - -！
      </p>
    </blockquote>
    <p>老实讲，你可能很难在其他地方看到有如此明确的告诉你new关键字到底对构造函数干了什么的文章了。理解了这段代码，你对JavaScript的理解又比别人深刻了一分，所以，一本正经厚颜无耻求个赞可好？</p>
    <p>当然，很多朋友由于对于前面几篇文章的知识理解不够到位，会对new的实现表示非常困惑。但是老实讲，如果你读了我的前面几篇文章，一定会对这里new的实现有似曾相识的感觉。而且我这里已经尽力做了详细的注解，剩下的只能靠你自己了。</p>
    <p>但是只要你花点时间，理解了他的原理，那么困扰了无数人的构造函数中this到底指向谁就变得非常简单了。</p>
    <p>所以，为了能够判断实例与对象的关系，我们就使用构造函数来搞定。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> Person = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
        <span class="hljs-keyword">this</span>.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
        }
    }

    <span class="hljs-keyword">var</span> p1 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'Ness'</span>, <span class="hljs-number">20</span>);
    <span class="hljs-built_in">console</span>.log(p1.getName());  <span class="hljs-comment">// Ness</span>

    <span class="hljs-built_in">console</span>.log(p1 <span class="hljs-keyword">instanceof</span> Person); <span class="hljs-comment">// true</span></div>
      </pre>
    </div>
    <p>关于构造函数，如果你暂时不能够理解new的具体实现，就先记住下面这几个结论吧。</p>
    <div class="ul-des">
      <ul>
        <li>与普通函数相比，构造函数并没有任何特别的地方，首字母大写只是我们约定的小规定，用于区分普通函数；</li>
        <li>new关键字让构造函数具有了与普通函数不同的许多特点，而new的过程中，执行了如下过程：
          <div style="padding-left:30px;">
            <span>1 声明一个中间对象；</span>
            <br>
            <span>2 将该中间对象的原型指向构造函数的原型；</span>
            <br>
            <span>3 将构造函数的this，指向该中间对象；</span>
            <br>
            <span>4 返回该中间对象，即返回实例对象。</span>
          </div>
        </li>
      </ul>
    </div>
    <p>
      <strong>四、原型</strong>
    </p>
    <p>虽然构造函数解决了判断实例类型的问题，但是，说到底，还是一个对象的复制过程。跟工厂模式颇有相似之处。也就是说，当我们声明了100个person对象，那么就有100个getName方法被重新生成。</p>
    <p>这里的每一个getName方法实现的功能其实是一模一样的，但是由于分别属于不同的实例，就不得不一直不停的为getName分配空间。这就是工厂模式存在的第二个麻烦。</p>
    <p>显然这是不合理的。我们期望的是，既然都是实现同一个功能，那么能不能就让每一个实例对象都访问同一个方法？</p>
    <p>当然能，这就是原型对象要帮我们解决的问题了。</p>
    <p>我们创建的每一个函数，都可以有一个prototype属性，该属性指向一个对象。这个对象，就是我们这里说的原型。</p>
    <p>
      当我们在创建对象时，可以根据自己的需求，选择性的将一些属性和方法通过prototype属性，挂载在原型对象上。而每一个new出来的实例，都有一个
      <code>__proto__</code>属性，该属性指向构造函数的原型对象，通过这个属性，让实例对象也能够访问原型对象上的方法。因此，当所有的实例都能够通过
      <code>__proto__</code>访问到原型对象时，原型对象的方法与属性就变成了共有方法与属性。
    </p>
    <p>我们通过一个简单的例子与图示，来了解构造函数，实例与原型三者之间的关系。</p>
    <blockquote>
      <p>由于每个函数都可以是构造函数，每个对象都可以是原型对象，因此如果在理解原型之初就想的太多太复杂的话，反而会阻碍你的理解，这里我们要学会先简化它们。就单纯的剖析这三者的关系。</p>
    </blockquote>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 声明构造函数</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
    }

    <span class="hljs-comment">// 通过prototye属性，将方法挂载到原型对象上</span>
    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }

    <span class="hljs-keyword">var</span> p1 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'tim'</span>, <span class="hljs-number">10</span>);
    <span class="hljs-keyword">var</span> p2 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'jak'</span>, <span class="hljs-number">22</span>);
    <span class="hljs-built_in">console</span>.log(p1.getName === p2.getName); <span class="hljs-comment">// true</span></div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSix/1.png" alt>
    </div>
    <p>
      通过图示我们可以看出，构造函数的prototype与所有实例对象的
      <code>__proto__</code>都指向原型对象。而原型对象的constructor指向构造函数。
    </p>

    <p>除此之外，还可以从图中看出，实例对象实际上对前面我们所说的中间对象的复制，而中间对象中的属性与方法都在构造函数中添加。于是根据构造函数与原型的特性，我们就可以将在构造函数中，通过this声明的属性与方法称为私有变量与方法，它们被当前被某一个实例对象所独有。而通过原型声明的属性与方法，我们可以称之为共有属性与方法，它们可以被所有的实例对象访问。</p>

    <p>
      <strong>当我们访问实例对象中的属性或者方法时，会优先访问实例对象自身的属性和方法。</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
        <span class="hljs-keyword">this</span>.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'this is constructor.'</span>);
        }
    }

    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }

    <span class="hljs-keyword">var</span> p1 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'tim'</span>, <span class="hljs-number">10</span>);

    p1.getName(); <span class="hljs-comment">// this is constructor.</span></div>
      </pre>
    </div>
    <p>在这个例子中，我们同时在原型与构造函数中都声明了一个getName函数，运行代码的结果表示原型中的访问并没有被访问。</p>

    <p>我们还可以通过in来判断，一个对象是否拥有某一个属性/方法，无论是该属性/方法存在与实例对象还是原型对象。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
    }

    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }

    <span class="hljs-keyword">var</span> p1 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">'tim'</span>, <span class="hljs-number">10</span>);

    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'name'</span> <span class="hljs-keyword">in</span> p1); <span class="hljs-comment">// true</span></div>
      </pre>
    </div>
    <p>in的这种特性最常用的场景之一，就是判断当前页面是否在移动端打开。</p>

    <div>
      <pre>
            <div class="code">
    isMobile = <span class="hljs-string">'ontouchstart'</span> <span class="hljs-keyword">in</span> <span class="hljs-built_in">document</span>;

    <span class="hljs-comment">// 很多人喜欢用浏览器UA的方式来判断，但并不是很好的方式</span></div>
      </pre>
    </div>

    <p>
      <strong>更简单的原型写法</strong>
    </p>

    <p>根据前面例子的写法，如果我们要在原型上添加更多的方法，可以这样写：</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params"></span>) </span>{}

    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
    Person.prototype.getAge = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
    Person.prototype.sayHello = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
    ... ...</div>
      </pre>
    </div>
    <p>除此之外，我还可以使用更为简单的写法。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params"></span>) </span>{}

    Person.prototype = {
        <span class="hljs-keyword">constructor</span>: Person,
        getName: function() {},
        getAge: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{},
        sayHello: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}
    }</div>
      </pre>
    </div>
    <p>
      这种字面量的写法看上去简单很多，但是有一个需要特别注意的地方。
      <code>Person.prototype = {}</code>实际上是重新创建了一个
      <code>{}</code>对象并赋值给Person.prototype，这里的
      <code>{}</code>并不是最初的那个原型对象。因此它里面并不包含
      <code>constructor</code>属性。为了保证正确性，我们必须在新创建的
      <code>{}</code>对象中显示的设置
      <code>constructor</code>的指向。即上面的
      <code>constructor: Person</code>。
    </p>

    <p>
      <strong>五、原型链</strong>
    </p>
    <p>原型对象其实也是普通的对象。几乎所有的对象都可能是原型对象，也可能是实例对象，而且还可以同时是原型对象与实例对象。这样的一个对象，正是构成原型链的一个节点。因此理解了原型，那么原型链并不是一个多么复杂的概念。</p>
    <p>我们知道所有的函数都有一个叫做toString的方法。那么这个方法到底是在哪里的呢？</p>

    <p>先随意声明一个函数：</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"></span>) </span>{}</div>
      </pre>
    </div>
    <p>那么我们可以用如下的图来表示这个函数的原型链。</p>
    <div class="has-img">
      <img src="../../assets/image/basePageSix/2.png" alt>
    </div>
    <p>其中add是Function对象的实例。而Function的原型对象同时又是Object原型的实例。这样就构成了一条原型链。原型链的访问，其实跟作用域链有很大的相似之处，他们都是一次单向的查找过程。因此实例对象能够通过原型链，访问到处于原型链上对象的所有属性与方法。这也是foo最终能够访问到处于Object原型对象上的toString方法的原因。</p>
    <p>
      基于原型链的特性，我们可以很轻松的实现
      <strong>继承</strong>。
    </p>
    <p>
      <strong>六、继承</strong>
    </p>

    <p>我们常常结合构造函数与原型来创建一个对象。因为构造函数与原型的不同特性，分别解决了我们不同的困扰。因此当我们想要实现继承时，就必须得根据构造函数与原型的不同而采取不同的策略。</p>
    <p>我们声明一个Person对象，该对象将作为父级，而子级cPerson将要继承Person的所有属性与方法。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
    }

    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }</div>
      </pre>
    </div>
    <p>首先我们来看构造函数的继承。在上面我们已经理解了构造函数的本质，它其实是在new内部实现的一个复制过程。而我们在继承时想要的，就是想父级构造函数中的操作在子级的构造函数中重现一遍即可。我们可以通过call方法来达到目的。</p>
    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 构造函数的继承</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cPerson</span>(<span class="hljs-params">name, age, job</span>) </span>{
        Person.call(<span class="hljs-keyword">this</span>, name, age);
        <span class="hljs-keyword">this</span>.job = job;
    }</div>
      </pre>
    </div>
    <p>而原型的继承，则只需要将子级的原型对象设置为父级的一个实例，加入到原型链中即可。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 继承原型</span>
    cPerson.prototype = <span class="hljs-keyword">new</span> Person(name, age);

    <span class="hljs-comment">// 添加更多方法</span>
    cPerson.prototype.getLive = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{}</div>
      </pre>
    </div>
    <div class="has-img">
      <img src="../../assets/image/basePageSix/3.png" alt>
    </div>

    <p>当然关于继承还有更好的方式。</p>

    <p>
      <strong>七、更好的继承</strong>
    </p>

    <p>
      假设原型链的终点
      <code>Object.prototype</code>为原型链的E(end)端，原型链的起点为S(start)端。
    </p>

    <p>通过前面原型链的学习我们知道，处于S端的对象，可以通过S -&gt; E的单向查找，访问到原型链上的所有方法与属性。因此这给继承提供了理论基础。我们只需要在S端添加新的对象，那么新对象就能够通过原型链访问到父级的方法与属性。因此想要实现继承，是一件非常简单的事情。</p>

    <p>因为封装一个对象由构造函数与原型共同组成，因此继承也会分别有构造函数的继承与原型的继承。</p>

    <p>假设我们已经封装好了一个父类对象Person。如下。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> Person = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
    }

    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }

    Person.prototype.getAge = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.age;
    }</div>
      </pre>
    </div>
    <p>构造函数的继承比较简单，我们可以借助call/apply来实现。假设我们要通过继承封装一个Student的子类对象。那么构造函数可以如下实现。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> Student = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, age, grade</span>) </span>{
        <span class="hljs-comment">// 通过call方法还原Person构造函数中的所有处理逻辑</span>
        Student.call(Person, name, age);
        <span class="hljs-keyword">this</span>.grade = grade;
    }


    <span class="hljs-comment">// 等价于</span>
    <span class="hljs-keyword">var</span> Student = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, age, grade</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
        <span class="hljs-keyword">this</span>.grade = grade;
    }</div>
      </pre>
    </div>
    <p>
      原型的继承则稍微需要一点思考。首先我们应该考虑，如何将子类对象的原型加入到原型链中？我们只需要让子类对象的原型，成为父类对象的一个实例，然后通过
      <code>__proto__</code>就可以访问父类对象的原型。这样就继承了父类原型中的方法与属性了。
    </p>

    <p>因此我们可以先封装一个方法，该方法根据父类对象的原型创建一个实例，该实例将会作为子类对象的原型。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create</span>(<span class="hljs-params">proto, options</span>) </span>{
        <span class="hljs-comment">// 创建一个空对象</span>
        <span class="hljs-keyword">var</span> tmp = {};

        <span class="hljs-comment">// 让这个新的空对象成为父类对象的实例</span>
        tmp.__proto__ = proto;

        <span class="hljs-comment">// 传入的方法都挂载到新对象上，新的对象将作为子类对象的原型</span>
        <span class="hljs-built_in">Object</span>.defineProperties(tmp, options);
        <span class="hljs-keyword">return</span> tmp;
    }</div>
      </pre>
    </div>
    <p>
      简单封装了
      <code>create</code>对象之后，我们就可以使用该方法来实现原型的继承了。
    </p>

    <div>
      <pre>
            <div class="code">
    Student.prototype = create(Person.prototype, {
        <span class="hljs-comment">// 不要忘了重新指定构造函数</span>
        <span class="hljs-keyword">constructor</span>: {
            value: Student
        }
        getGrade: {
            value: <span
  class="hljs-function"
><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.grade
            }
        }
    })</div>
      </pre>
    </div>

    <p>那么我们来验证一下我们这里实现的继承是否正确。</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> s1 = <span class="hljs-keyword">new</span> Student(<span class="hljs-string">'ming'</span>, <span class="hljs-number">22</span>, <span class="hljs-number">5</span>);

    <span class="hljs-built_in">console</span>.log(s1.getName());  <span class="hljs-comment">// ming</span>
    <span class="hljs-built_in">console</span>.log(s1.getAge());   <span class="hljs-comment">// 22</span>
    <span class="hljs-built_in">console</span>.log(s1.getGrade()); <span class="hljs-comment">// 5</span></div>
      </pre>
    </div>
    <p>
      全部都能正常访问，没问题。在ECMAScript5中直接提供了一个
      <code>Object.create</code>方法来完成我们上面自己封装的
      <code>create</code>的功能。因此我们可以直接使用
      <code>Object.create</code>.
    </p>

    <div>
      <pre>
            <div class="code">
    Student.prototype = create(Person.prototype, {
        <span class="hljs-comment">// 不要忘了重新指定构造函数</span>
        <span class="hljs-keyword">constructor</span>: {
            value: Student
        }
        getGrade: {
            value: <span
  class="hljs-function"
><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.grade
            }
        }
    })</div>
      </pre>
    </div>
    <p>完整代码如下：</p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
    }
    Person.prototype.getName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name
    }
    Person.prototype.getAge = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.age;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Student</span>(<span class="hljs-params">name, age, grade</span>) </span>{
        <span class="hljs-comment">// 构造函数继承</span>
        Person.call(<span class="hljs-keyword">this</span>, name, age);
        <span class="hljs-keyword">this</span>.grade = grade;
    }

    <span class="hljs-comment">// 原型继承</span>
    Student.prototype = <span class="hljs-built_in">Object</span>.create(Person.prototype, {
        <span class="hljs-comment">// 不要忘了重新指定构造函数</span>
        <span class="hljs-keyword">constructor</span>: {
            value: Student
        }
        getGrade: {
            value: <span
  class="hljs-function"
><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.grade
            }
        }
    })


    <span class="hljs-keyword">var</span> s1 = <span class="hljs-keyword">new</span> Student(<span class="hljs-string">'ming'</span>, <span class="hljs-number">22</span>, <span class="hljs-number">5</span>);

    <span class="hljs-built_in">console</span>.log(s1.getName());  <span class="hljs-comment">// ming</span>
    <span class="hljs-built_in">console</span>.log(s1.getAge());   <span class="hljs-comment">// 22</span>
    <span class="hljs-built_in">console</span>.log(s1.getGrade()); <span class="hljs-comment">// 5</span></div>
      </pre>
    </div>

    <p>
      <strong>八、属性类型</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    getGrade: {
        value: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.grade
        }
    }</div>
      </pre>
    </div>

    <p>
      这其实是对象中的属性类型。在我们平常的使用中，给对象添加一个属性时，直接使用
      <code>object.param</code>的方式就可以了，或者直接在对象中挂载。
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">'TOM'</span>
    }</div>
      </pre>
    </div>

    <p>在ECMAScript5中，对每个属性都添加了几个属性类型，来描述这些属性的特点。他们分别是</p>

    <div class="ul-des">
      <ul>
        <li>
          <strong>
            <code>configurable</code>
          </strong>: 表示该属性是否能被delete删除。当其值为false时，其他的特性也不能被改变。默认值为true
        </li>
        <li>
          <strong>
            <code>enumerable</code>
          </strong>: 是否能枚举。也就是是否能被for-in遍历。默认值为true
        </li>
        <li>
          <strong>
            <code>writable</code>
          </strong>: 是否能修改值。默认为true
        </li>
        <li>
          <strong>
            <code>value</code>
          </strong>: 该属性的具体值是多少。默认为undefined
        </li>
        <li>
          <strong>
            <code>get</code>
          </strong>: 当我们通过
          <code>person.name</code>访问name的值时，get将被调用。该方法可以自定义返回的具体值时多少。get默认值为undefined
        </li>
        <li>
          <strong>
            <code>set</code>
          </strong>: 当我们通过
          <code>person.name = 'Jake'</code>设置name的值时，set方法将被调用。该方法可以自定义设置值的具体方式。set默认值为undefined
        </li>
      </ul>
    </div>

    <blockquote>
      <p>需要注意的是，不能同时设置value、writable 与 get、set的值。</p>
    </blockquote>
    <p>
      我们可以通过
      <code>Object.defineProperty</code>方法来修改这些属性类型。
    </p>
    <p>下面我们用一些简单的例子来演示一下这些属性类型的具体表现。</p>
    <p>
      <strong>configurable</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-comment">// 用普通的方式给person对象添加一个name属性，值为TOM</span>
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">'TOM'</span>
    }

    <span class="hljs-comment">// 使用delete删除该属性</span>
    <span class="hljs-keyword">delete</span> person.name;  <span class="hljs-comment">// 返回true 表示删除成功</span>

    <span class="hljs-comment">// 通过Object.defineProperty重新添加name属性</span>
    <span class="hljs-comment">// 并设置name的属性类型的configurable为false，表示不能再用delete删除</span>
    <span class="hljs-built_in">Object</span>.defineProperty(person, <span class="hljs-string">'name'</span>, {
        configurable: <span class="hljs-literal">false</span>,
        value: <span class="hljs-string">'Jake'</span>  <span class="hljs-comment">// 设置name属性的值</span>
    })

    <span class="hljs-comment">// 再次delete，已经不能删除了</span>
    <span class="hljs-keyword">delete</span> person.name   <span class="hljs-comment">// false</span>

    <span class="hljs-built_in">console</span>.log(person.name)    <span class="hljs-comment">// 值为Jake</span>

    <span class="hljs-comment">// 试图改变value</span>
    person.name = <span class="hljs-string">"alex"</span>;
    <span class="hljs-built_in">console</span>.log(person.name) <span class="hljs-comment">// Jake 改变失败</span></div>
      </pre>
    </div>
    <p>
      <strong>enumerable</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">'TOM'</span>,
        age: <span class="hljs-number">20</span>
    }

    <span class="hljs-comment">// 使用for-in枚举person的属性</span>
    <span class="hljs-keyword">var</span> params = [];

    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> key <span class="hljs-keyword">in</span> person) {
        params.push(key);
    }

    <span class="hljs-comment">// 查看枚举结果</span>
    <span class="hljs-built_in">console</span>.log(params);  <span class="hljs-comment">// ['name', 'age']</span>

    <span class="hljs-comment">// 重新设置name属性的类型，让其不可被枚举</span>
    <span class="hljs-built_in">Object</span>.defineProperty(person, <span class="hljs-string">'name'</span>, {
        enumerable: <span class="hljs-literal">false</span>
    })

    <span class="hljs-keyword">var</span> params_ = [];
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> key <span class="hljs-keyword">in</span> person) {
        params_.push(key)
    }

    <span class="hljs-comment">// 再次查看枚举结果</span>
    <span class="hljs-built_in">console</span>.log(params_); <span class="hljs-comment">// ['age']</span></div>
      </pre>
    </div>
    <p>
      <strong>writable</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {
        name: <span class="hljs-string">'TOM'</span>
    }

    <span class="hljs-comment">// 修改name的值</span>
    person.name = <span class="hljs-string">'Jake'</span>;

    <span class="hljs-comment">// 查看修改结果</span>
    <span class="hljs-built_in">console</span>.log(person.name); <span class="hljs-comment">// Jake 修改成功</span>

    <span class="hljs-comment">// 设置name的值不能被修改</span>
    <span class="hljs-built_in">Object</span>.defineProperty(person, <span class="hljs-string">'name'</span>, {
        writable: <span class="hljs-literal">false</span>
    })

    <span class="hljs-comment">// 再次试图修改name的值</span>
    person.name = <span class="hljs-string">'alex'</span>;

    <span class="hljs-built_in">console</span>.log(person.name); <span class="hljs-comment">// Jake 修改失败</span></div>
      </pre>
    </div>
    <p>
      <strong>value</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {}

    <span class="hljs-comment">// 添加一个name属性</span>
    <span class="hljs-built_in">Object</span>.defineProperty(person, <span class="hljs-string">'name'</span>, {
        value: <span class="hljs-string">'TOM'</span>
    })

    <span class="hljs-built_in">console</span>.log(person.name)  <span class="hljs-comment">// TOM</span></div>
      </pre>
    </div>

    <p>
      <strong>get/set</strong>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {}

    <span class="hljs-comment">// 通过get与set自定义访问与设置name属性的方式</span>
    <span class="hljs-built_in">Object</span>.defineProperty(person, <span class="hljs-string">'name'</span>, {
        get: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-comment">// 一直返回TOM</span>
            <span class="hljs-keyword">return</span> <span class="hljs-string">'TOM'</span>
        },
        set: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">value</span>) </span>{
            <span class="hljs-comment">// 设置name属性时，返回该字符串，value为新值</span>
            <span class="hljs-built_in">console</span>.log(value + <span class="hljs-string">' in set'</span>);
        }
    })

    <span class="hljs-comment">// 第一次访问name，调用get</span>
    <span class="hljs-built_in">console</span>.log(person.name)   <span class="hljs-comment">// TOM</span>

    <span class="hljs-comment">// 尝试修改name值，此时set方法被调用</span>
    person.name = <span class="hljs-string">'alex'</span>   <span class="hljs-comment">// alex in set</span>

    <span class="hljs-comment">// 第二次访问name，还是调用get</span>
    <span class="hljs-built_in">console</span>.log(person.name) <span class="hljs-comment">// TOM</span></div>
      </pre>
    </div>

    <blockquote>
      <p>请尽量同时设置get、set。如果仅仅只设置了get，那么我们将无法设置该属性值。如果仅仅只设置了set，我们也无法读取该属性的值。</p>
    </blockquote>

    <p>
      <code>Object.defineProperty</code>只能设置一个属性的属性特性。当我们想要同时设置多个属性的特性时，需要使用我们之前提到过的
      <code>Object.defineProperties</code>
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {}

    <span class="hljs-built_in">Object</span>.defineProperties(person, {
        name: {
            value: <span class="hljs-string">'Jake'</span>,
            configurable: <span class="hljs-literal">true</span>
        },
        age: {
            get: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.value || <span class="hljs-number">22</span>
            },
            set: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">value</span>) </span>{
                <span class="hljs-keyword">this</span>.value = value
            }
        }
    })

    person.name   <span class="hljs-comment">// Jake</span>
    person.age    <span class="hljs-comment">// 22</span></div>
      </pre>
    </div>

    <h6 id="读取属性的特性值">读取属性的特性值</h6>

    <p>我们可以使用
      <code>Object.getOwnPropertyDescriptor</code>方法读取某一个属性的特性值。
    </p>

    <div>
      <pre>
            <div class="code">
    <span class="hljs-keyword">var</span> person = {}

    <span class="hljs-built_in">Object</span>.defineProperty(person, <span class="hljs-string">'name'</span>, {
        value: <span class="hljs-string">'alex'</span>,
        writable: <span class="hljs-literal">false</span>,
        configurable: <span class="hljs-literal">false</span>
    })

    <span class="hljs-keyword">var</span> descripter = <span class="hljs-built_in">Object</span>.getOwnPropertyDescriptor(person, <span class="hljs-string">'name'</span>);

    <span class="hljs-built_in">console</span>.log(descripter);  <span class="hljs-comment">// 返回结果如下</span>

    descripter = {
        configurable: <span class="hljs-literal">false</span>,
        enumerable: <span class="hljs-literal">false</span>,
        value: <span class="hljs-string">'alex'</span>,
        writable: <span class="hljs-literal">false</span>
    }</div>
      </pre>
    </div>

    <p>
      <strong>九、总结</strong>
    </p>

    <p>关于面向对象的基础知识大概就是这些了。我从最简单的创建一个对象开始，解释了为什么我们需要构造函数与原型，理解了这其中的细节，有助于我们在实际开发中灵活的组织自己的对象。因为我们并不是所有的场景都会使用构造函数或者原型来创建对象，也许我们需要的对象并不会声明多个实例，或者不用区分对象的类型，那么我们就可以选择更简单的方式。</p>

    <p>我们还需要关注构造函数与原型的各自特性，有助于我们在创建对象时准确的判断我们的属性与方法到底是放在构造函数中还是放在原型中。如果没有理解清楚，这会给我们在实际开发中造成非常大的困扰。</p>
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
