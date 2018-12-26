<template>
  <div class="main-content">
    <div class="title">js隐式转换</div>
    <div class="rich_media_content" id="js_content">
      <p
        style
      >你有没有在面试中遇到特别奇葩的js隐形转换的面试题，第一反应是怎么会是这样呢？难以自信，js到底是怎么去计算得到结果，你是否有深入去了解其原理呢？下面将深入讲解其实现原理。</p>
      <p
        style
      >其实这篇文章初稿三个月前就写好了，在我读一些源码库时，遇到了这些基础知识，想归档整理下，就有了这篇文章。由于一直忙没时间整理，最近看到了这个比较热的题，决定把这篇文章整理下。</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">const</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;i</span><span
  class
  style=""
>:</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;toString</span><span
  class
  style=""
>:</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>function</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>return</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>i</span><span
  class
  style=""
>++;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;</span><span
  class
  style=""
>}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>if</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>a </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>&amp;&amp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>&amp;&amp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;console</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>log</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>'hello world!'</span><span
  class
  style=""
>);</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>}</span></code></pre>
      <p style>网上给出了很多不错的解析过程，读了下面内容，你将更深入的了解其执行过程。</p>
      <h2
        style="box-sizing: border-box;margin-top: 1em;margin-bottom: 16px;line-height: 1.225;font-size: 1.5em;font-weight: bold;padding-bottom: 0.3em;border-bottom: 1px solid rgb(238, 238, 238);color: rgb(51, 51, 51);"
      >1、js数据类型</h2>
      <p style>js中有7种数据类型，可以分为两类：原始类型、对象类型：</p>
      <p style>基础类型(原始值)：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(102, 0, 102);">Undefined</span><span
  class
  style=""
>、</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Null</span><span
  class
  style=""
>、</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String</span><span
  class
  style=""
>、</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>、</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Boolean</span><span
  class
  style=""
>、</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Symbol</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>es6</span><span
  class
  style=""
>新出的，本文不讨论这种类型)</span></code></pre>
      <p style>复杂类型(对象值)：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">object</span></code></pre>
      <h2
        style="box-sizing: border-box;margin-top: 1em;margin-bottom: 16px;line-height: 1.225;font-size: 1.5em;font-weight: bold;padding-bottom: 0.3em;border-bottom: 1px solid rgb(238, 238, 238);color: rgb(51, 51, 51);"
      >2、三种隐式转换类型</h2>
      <p style>js中一个难点就是js隐形转换，因为js在一些操作符下其类型会做一些变化，所以js灵活，同时造成易出错，并且难以理解。</p>
      <p style>涉及隐式转换最多的两个运算符 + 和 ==。</p>
      <p
        style
      >+运算符即可数字相加，也可以字符串相加。所以转换时很麻烦。== 不同于===，故也存在隐式转换。- * / 这些运算符只会针对number类型，故转换的结果只能是转换成number类型。</p>
      <p style>既然要隐式转换，那到底怎么转换呢，应该有一套转换规则，才能追踪最终转换成什么了。</p>
      <p style>隐式转换中主要涉及到三种转换：</p>
      <p style>1、将值转为原始值，ToPrimitive()。</p>
      <p style>2、将值转为数字，ToNumber()。</p>
      <p style>3、将值转为字符串，ToString()。</p>
      <section class style="box-sizing: border-box;color: rgb(51, 51, 51);">
        <section class style="box-sizing: border-box;">
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
          <h3
            style="box-sizing: border-box;margin: 0.3em 0px;line-height: 1.43;font-size: 1.0625em;font-weight: 700;"
          >2.1、通过ToPrimitive将值转换为原始值</h3>
          <p>
            <br>
          </p>
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
        </section>
      </section>
      <p style>js引擎内部的抽象操作ToPrimitive有着这样的签名：</p>
      <p style>ToPrimitive(input, PreferredType?)</p>
      <p
        style
      >input是要转换的值，PreferredType是可选参数，可以是Number或String类型。他只是一个转换标志，转化后的结果并不一定是这个参数所值的类型，但是转换结果一定是一个原始值（或者报错）。</p>
      <h4
        style="box-sizing: border-box;margin-top: 1em;margin-bottom: 16px;line-height: 1.4;font-size: 1.15em;font-weight: bold;color: rgb(51, 51, 51);"
      >2.1.1、如果PreferredType被标记为Number，则会进行下面的操作流程来转换输入的值。</h4>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 102, 102);">1</span><span
  class
  style=""
>、如果输入的值已经是一个原始值，则直接返回它</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>、否则，如果输入的值是一个对象，则调用该对象的</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>()方法，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; </span><span
  class
  style=""
>如果</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>()方法的返回值是一个原始值，则返回这个原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>、否则，调用这个对象的</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>()方法，如果</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>()方法返回的是一个原始值，则返回这个原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>、否则，抛出</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>TypeError</span><span
  class
  style=""
>异常。</span></code></pre>
      <h4
        style="box-sizing: border-box;margin-top: 1em;margin-bottom: 16px;line-height: 1.4;font-size: 1.15em;font-weight: bold;color: rgb(51, 51, 51);"
      >2.1.2、如果PreferredType被标记为String，则会进行下面的操作流程来转换输入的值。</h4>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 102, 102);">1</span><span
  class
  style=""
>、如果输入的值已经是一个原始值，则直接返回它</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>、否则，调用这个对象的</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>()方法，如果</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>()方法返回的是一个原始值，则返回这个原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>、否则，如果输入的值是一个对象，则调用该对象的</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>()方法，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; </span><span
  class
  style=""
>如果</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>()方法的返回值是一个原始值，则返回这个原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>、否则，抛出</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>TypeError</span><span
  class
  style=""
>异常。</span></code></pre>
      <p style>既然PreferredType是可选参数，那么如果没有这个参数时，怎么转换呢？PreferredType的值会按照这样的规则来自动设置：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 102, 102);">1</span><span
  class
  style=""
>、该对象为</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Date</span><span
  class
  style=""
>类型，则</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>PreferredType</span><span
  class
  style=""
>被设置为</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String2</span><span
  class
  style=""
>、否则，</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>PreferredType</span><span
  class
  style=""
>被设置为</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span></code></pre>
      <h4
        style="box-sizing: border-box;margin-top: 1em;margin-bottom: 16px;line-height: 1.4;font-size: 1.15em;font-weight: bold;color: rgb(51, 51, 51);"
      >2.1.3、valueOf方法和toString方法解析</h4>
      <p
        style
      >上面主要提及到了valueOf方法和toString方法，那这两个方法在对象里是否一定存在呢？答案是肯定的。在控制台输出Object.prototype，你会发现其中就有valueOf和toString方法，而Object.prototype是所有对象原型链顶层原型，所有对象都会继承该原型的方法，故任何对象都会有valueOf和toString方法。</p>
      <p style>
        先看看对象的valueOf函数，其转换结果是什么？对于js的常见内置对象：
        <code
          style="box-sizing: border-box;font-size: 14px;"
        >Date, Array, Math, Number, Boolean, String, Array, RegExp, Function</code>。
      </p>
      <p style>1、Number、Boolean、String这三种构造函数生成的基础值的对象形式，通过valueOf转换后会变成相应的原始值。如：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">var</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> num </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> newNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>'123'</span><span
  class
  style=""
>);</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">num</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// 123var str = newString('12df');</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">str</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// '12df'var bool = newBoolean('fd');</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>bool</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// true</span></code></pre>
      <p style>2、Date这种特殊的对象，其原型Date.prototype上内置的valueOf函数将日期转换为日期的毫秒的形式的数值。</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">var</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> newDate</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">a</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// 1515143895500</span></code></pre>
      <p style>3、除此之外返回的都为this，即对象本身：(有问题欢迎告知)</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">var</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> newArray</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">a</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>===</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a</span><span
  class
  style=""
>;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// truevar b = newObject({});</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">b</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>===</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> b</span><span
  class
  style=""
>;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// true</span></code></pre>
      <p style>
        再来看看toString函数，其转换结果是什么？对于js的常见内置对象：
        <code
          style="box-sizing: border-box;font-size: 14px;"
        >Date, Array, Math, Number, Boolean, String, Array, RegExp, Function</code>。
      </p>
      <p
        style
      >1、Number、Boolean、String、Array、Date、RegExp、Function这几种构造函数生成的对象，通过toString转换后会变成相应的字符串的形式，因为这些构造函数上封装了自己的toString方法。如：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(102, 0, 102);">Number</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>prototype</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>hasOwnProperty</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>'toString'</span><span
  class
  style=""
>);</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// trueBoolean.prototype.hasOwnProperty('toString'); // trueString.prototype.hasOwnProperty('toString'); // trueArray.prototype.hasOwnProperty('toString'); // trueDate.prototype.hasOwnProperty('toString'); // trueRegExp.prototype.hasOwnProperty('toString'); // trueFunction.prototype.hasOwnProperty('toString'); // truevar num = newNumber('123sd');</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">num</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// 'NaN'var str = newString('12df');</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">str</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// '12df'var bool = newBoolean('fd');</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>bool</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// 'true'var arr = newArray(1,2);</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">arr</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// '1,2'var d = newDate();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">d</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// "Wed Oct 11 2017 08:00:00 GMT+0800 (中国标准时间)"var func = function () {}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">func</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// "function () {}"</span></code></pre>
      <p style>除这些对象及其实例化对象之外，其他对象返回的都是该对象的类型，(有问题欢迎告知)，都是继承的Object.prototype.toString方法。</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">var</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> obj </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> newObject</span><span
  class
  style=""
>({});</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">obj</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>();</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// "[object Object]"Math.toString(); // "[object Math]"</span></code></pre>
      <p
        style
      >从上面valueOf和toString两个函数对对象的转换可以看出为什么对于ToPrimitive(input, PreferredType?)，PreferredType没有设定的时候，除了Date类型，PreferredType被设置为String，其它的会设置成Number。</p>
      <p
        style
      >因为valueOf函数会将Number、String、Boolean基础类型的对象类型值转换成 基础类型，Date类型转换为毫秒数，其它的返回对象本身，而toString方法会将所有对象转换为字符串。显然对于大部分对象转换，valueOf转换更合理些，因为并没有规定转换类型，应该尽可能保持原有值，而不应该想toString方法一样，一股脑将其转换为字符串。</p>
      <p style>所以对于没有指定PreferredType类型时，先进行valueOf方法转换更好，故将PreferredType设置为Number类型。</p>
      <p
        style
      >而对于Date类型，其进行valueOf转换为毫秒数的number类型。在进行隐式转换时，没有指定将其转换为number类型时，将其转换为那么大的number类型的值显然没有多大意义。（不管是在+运算符还是==运算符）还不如转换为字符串格式的日期，所以默认Date类型会优先进行toString转换。故有以上的规则：</p>
      <p style>PreferredType没有设置时，Date类型的对象，PreferredType默认设置为String，其他类型对象PreferredType默认设置为Number。</p>
      <section class style="box-sizing: border-box;color: rgb(51, 51, 51);">
        <section class style="box-sizing: border-box;">
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
          <h3
            style="box-sizing: border-box;margin: 0.3em 0px;line-height: 1.43;font-size: 1.0625em;font-weight: 700;"
          >2.2、通过ToNumber将值转换为数字</h3>
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
        </section>
      </section>
      <p style>根据参数类型进行下面转换：
        <br style="box-sizing: border-box;">参数结果undefinedNaNnull+0布尔值true转换1，false转换为+0数字无须转换字符串有字符串解析为数字，例如：‘324’转换为324，‘qwer’转换为NaN对象(obj)先进行 ToPrimitive(obj, Number)转换得到原始值，在进行ToNumber转换为数字
      </p>
      <section class style="box-sizing: border-box;color: rgb(51, 51, 51);">
        <section class style="box-sizing: border-box;">
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
          <h3
            style="box-sizing: border-box;margin: 0.3em 0px;line-height: 1.43;font-size: 1.0625em;font-weight: 700;"
          >2.3、通过ToString将值转换为字符串</h3>
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
        </section>
      </section>
      <p style>根据参数类型进行下面转换：
        <br style="box-sizing: border-box;">参数结果undefined’undefined’null’null’布尔值转换为’true’ 或 ‘false’数字数字转换字符串，比如：1.765转为’1.765’字符串无须转换对象(obj)先进行 ToPrimitive(obj, String)转换得到原始值，在进行ToString转换为字符串
        <br style="box-sizing: border-box;">讲了这么多，是不是还不是很清晰，先来看看一个例子：
      </p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="">({}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>+</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{})</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>?</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>两个对象的值进行+运算符，肯定要先进行隐式转换为原始类型才能进行计算。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>、进行</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>转换，由于没有指定</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>PreferredType</span><span
  class
  style=""
>类型，{}会使默认值为</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>，进行</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>input</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>)运算。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>、所以会执行</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>方法，({}).</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>(),返回的还是{}对象，不是原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>、继续执行</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>方法，({}).</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>(),返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>"[object Object]"</span><span
  class
  style=""
>，是原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>故得到最终的结果，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>"[object Object]"</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>+</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>"[object Object]"</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>"[object Object][object Object]"</span></code></pre>
      <p style>再来一个指定类型的例子：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 102, 102);">2</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>?</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>、首先*运算符只能对</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>number</span><span
  class
  style=""
>类型进行运算，故第一步就是对{}进行</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>类型转换。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>、由于{}是对象类型，故先进行原始类型转换，</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>input</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>)运算。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>、所以会执行</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>方法，({}).</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>(),返回的还是{}对象，不是原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>、继续执行</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>方法，({}).</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>(),返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>"[object Object]"</span><span
  class
  style=""
>，是原始值。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>5</span><span
  class
  style=""
>、转换为原始值后再进行</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>运算，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>"[object Object]"</span><span
  class
  style=""
>就转换为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>NaN</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>故最终的结果为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>NaN</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>NaN</span></code></pre>
      <h2
        style="box-sizing: border-box;margin-top: 1em;margin-bottom: 16px;line-height: 1.225;font-size: 1.5em;font-weight: bold;padding-bottom: 0.3em;border-bottom: 1px solid rgb(238, 238, 238);color: rgb(51, 51, 51);"
      >3、== 运算符隐式转换</h2>
      <p style>
        <strong style="box-sizing: border-box;font-weight: bold;">== 运算符的规则规律性不是那么强，按照下面流程来执行,es5文档</strong>
      </p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="">比较运算</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x</span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>其中</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>和</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>是值，返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>或者</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。这样的比较按如下方式进行：</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>与</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>相同，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>则</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">
 &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Undefined</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Null</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>则</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">
 &nbsp; &nbsp; &nbsp; &nbsp;</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>)、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>NaN</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>)、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>NaN</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>)、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>与</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为相等数值，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>)、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>+</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>−</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>5</span><span
  class
  style=""
>)、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>−</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>+</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>6</span><span
  class
  style=""
>)、返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;">
 &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>则当</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>和</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为完全相同的字符序列（长度相等且相同字符在相同位置）时返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>否则，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>5</span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Boolean</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>当</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>和</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为同为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>或者同为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>时返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>否则，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>6</span><span
  class
  style=""
>*</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> &nbsp;</span><span
  class
  style=""
>当</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>和</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为引用同一对象时返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。否则，返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>null</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>undefined</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>undefined</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>null</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String</span><span
  class
  style=""
>，返回比较</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>的结果。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>5</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>，返回比较</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>的结果。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>6</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Boolean</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回比较</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>的结果。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>7</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Boolean</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回比较</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>的结果。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>8</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>或</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>，且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Object</span><span
  class
  style=""
>，返回比较</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> x </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>的结果。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>9</span><span
  class
  style=""
>、若</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Object</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>且</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Type</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>String</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>或</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回比较</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> y </span><span
  class
  style=""
>的结果。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>10</span><span
  class
  style=""
>、返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>。</span></code></pre>
      <p style>上面主要分为两类，x、y类型相同时，和类型不相同时。</p>
      <p style>类型相同时，没有类型转换，主要注意NaN不与任何值相等，包括它自己，即NaN !== NaN。</p>
      <p style>类型不相同时，</p>
      <p style>1、x,y 为null、undefined两者中一个 // 返回true</p>
      <p style>2、x、y为Number和String类型时，则转换为Number类型比较。</p>
      <p style>3、有Boolean类型时，Boolean转化为Number类型比较。</p>
      <p style>4、一个Object类型，一个String或Number类型，将Object类型进行原始转换后，按上面流程进行原始值比较。</p>
      <section class style="box-sizing: border-box;color: rgb(51, 51, 51);">
        <section class style="box-sizing: border-box;">
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
          <h3
            style="box-sizing: border-box;margin: 0.3em 0px;line-height: 1.43;font-size: 1.0625em;font-weight: 700;"
          >3.1、== 例子解析</h3>
          <section class style="box-sizing: border-box;"></section>
          <section class style="box-sizing: border-box;"></section>
        </section>
      </section>
      <p style>所以类型不相同时，可以会进行上面几条的比较，比如：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">var</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;valueOf</span><span
  class
  style=""
>:</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>function</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; return1</span><span
  class
  style=""
>;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;</span><span
  class
  style=""
>},</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;toString</span><span
  class
  style=""
>:</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>function</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp; </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>return</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>'123'</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;</span><span
  class
  style=""
>}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>// true;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>首先，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>与</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>类型不同，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>boolean</span><span
  class
  style=""
>类型，则进行</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>转换为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>,为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>number</span><span
  class
  style=""
>类型。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>接着，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x</span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>number</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>object</span><span
  class
  style=""
>类型，对</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y</span><span
  class
  style=""
>进行原始转换，</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>a</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>?),没有指定转换类型，默认</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>number</span><span
  class
  style=""
>类型。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>而后，</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>a</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>Number</span><span
  class
  style=""
>)首先调用</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>方法，返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>，得到原始类型</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>最后</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>。</span></code></pre>
      <p style>我们再看一段很复杂的比较，如下：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="">[]</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>!{}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(136, 0, 0);"
>//1、! 运算符优先级高于==，故先进行！运算。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style=""
>、!{}运算结果为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>，结果变成</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>[]</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>比较。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>、根据上面第</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>7</span><span
  class
  style=""
>条，等式右边</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>y </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>false</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>。结果变成</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>[]</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>4</span><span
  class
  style=""
>、按照上面第</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>9</span><span
  class
  style=""
>条，比较变成</span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToPrimitive</span><span
  class
  style=""
>([])</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style=""
>按照上面规则进行原始值转换，[]会先调用</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>valueOf</span><span
  class
  style=""
>函数，返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>this</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; </span><span
  class
  style=""
>不是原始值，继续调用</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>方法，</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>[].</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>toString</span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>''</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; </span><span
  class
  style=""
>故结果为</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>''</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>比较。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>5</span><span
  class
  style=""
>、根据上面第</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>5</span><span
  class
  style=""
>条，等式左边</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>x </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(102, 0, 102);"
>ToNumber</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>''</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>。</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; </span><span
  class
  style=""
>所以结果变为：</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>0</span><span
  class
  style=""
>，返回</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>true</span><span
  class
  style=""
>，比较结束。</span></code></pre>
      <p style>最后我们看看文章开头说的那道题目：</p>
      <pre
        class
        style="box-sizing: border-box;overflow: auto;font-size: 13.6px;margin-top: 0px;margin-bottom: 16px;padding: 10px;line-height: 1.6;background: rgb(246, 246, 246) none repeat scroll 0% 0%;border-radius: 3px;overflow-wrap: break-word;border-color: rgb(221, 221, 221);border-style: solid;border-width: 1px;-moz-border-top-colors: none;-moz-border-left-colors: none;-moz-border-bottom-colors: none;-moz-border-right-colors: none;white-space: pre-wrap;color: rgb(51, 51, 51);font-style: normal;font-variant-ligatures: normal;font-variant-caps: normal;font-weight: normal;letter-spacing: normal;text-align: left;text-indent: 0px;text-transform: none;word-spacing: 0px;-webkit-text-stroke-width: 0px;text-decoration-style: initial;text-decoration-color: initial;"
      ><code style="box-sizing: border-box;font-size: 13.6px;"><span class style="box-sizing: border-box;color: rgb(0, 0, 136);">const</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>=</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;i</span><span
  class
  style=""
>:</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style=""
>,</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;toString</span><span
  class
  style=""
>:</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>function</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>()</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp; &nbsp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>return</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>i</span><span
  class
  style=""
>++;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;</span><span
  class
  style=""
>}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>}</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 136);"
>if</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>a </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>1</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>&amp;&amp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>2</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>&amp;&amp;</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> a </span><span
  class
  style=""
>==</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style="box-sizing: border-box;color: rgb(0, 102, 102);"
>3</span><span
  class
  style=""
>)</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
> </span><span
  class
  style=""
>{</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"> &nbsp;console</span><span
  class
  style=""
>.</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
>log</span><span
  class
  style=""
>(</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 136, 0);"
>'hello world!'</span><span
  class
  style=""
>);</span><span
  class
  style="box-sizing: border-box;color: rgb(0, 0, 0);"
><br style="box-sizing: border-box;"></span><span
  class
  style=""
>}</span></code></pre>
      <p
        style
      >1、当执行a == 1 &amp;&amp; a == 2 &amp;&amp; a == 3 时，会从左到右一步一步解析，首先 a == 1，会进行上面第9步转换。ToPrimitive(a， Number) == 1。</p>
      <p
        style
      >2、ToPrimitive(a, Number)，按照上面原始类型转换规则，会先调用valueOf方法，a的valueOf方法继承自Object.prototype。返回a本身，而非原始类型，故会调用toString方法。</p>
      <p
        style
      >3、因为toString被重写，所以会调用重写的toString方法，故返回1，注意这里是i++，而不是++i，它会先返回i，在将i+1。故ToPrimitive(a, Number) = 1。也就是1 == 1，此时i = 1 + 1 = 2。</p>
      <p
        style
      >4、执行完a == 1返回true，会执行a == 2，同理，会调用ToPrimitive(a, Number)，同上先调用valueOf方法，在调用toString方法，由于第一步，i = 2此时，ToPrimitive(a, Number) = 2， 也就是2 == 2, 此时i = 2 + 1。</p>
      <p style>5、同上可以推导 a == 3也返回true。故最终结果 a == 1 &amp;&amp; a == 2 &amp;&amp; a == 3返回true</p>
      <p style>其实了解了以上隐形转换的原理，你有没有发现这些隐式转换并没有想象中那么难。</p>
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
span {
  box-sizing: border-box;
  color: rgb(102, 102, 0);
}
p {
  box-sizing: border-box;
  margin: 0px 0px 1.125em;
  color: rgb(51, 51, 51);
}
</style>
