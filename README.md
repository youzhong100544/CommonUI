# CommonUI

- [CommonUI](#commonui)
  - [1. 相关官方网址](#1-相关官方网址)
  - [2. 参考博文](#2-参考博文)
  - [3. 模块总览](#3-模块总览)
  - [4. 基础知识](#4-基础知识)
  - [5. 模块说明](#5-模块说明)
  - [6. SVG 制作](#6-svg-制作)
  - [7. SVG 转 Font](#7-svg-转-font)
  - [8. 相关问题](#8-相关问题)
    - [8.1. reset.css  和 normalize.css](#81-resetcss--和-normalizecss)
    - [8.2. HTML 中空格导致 li 标签间隙的问题](#82-html-中空格导致-li-标签间隙的问题)
    - [8.3. CSS 选择器是否区分大小写](#83-css-选择器是否区分大小写)
    - [8.4. height: 0 -\> auto; display: none -\> block; visibility: hidden -\> visible; 区别](#84-height-0---auto-display-none---block-visibility-hidden---visible-区别)
    - [8.5. ES6 class 私有属性](#85-es6-class-私有属性)

## 1. 相关官方网址

> W3C 官网: [https://www.w3.org/](https://www.w3.org/)  
> CSS Tools: Reset CSS: [https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)  
> Normalize.css: [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)  
> MDNMDN Web Docs: [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)  
> MDNMDN Web Docs: [https://developer.mozilla.org/zh-CN/](https://developer.mozilla.org/zh-CN/)  

---
---

> jQuery: [https://jquery.com/](https://jquery.com/)  
> jQuery 中文: [https://jqueryjs.cn/](https://jqueryjs.cn/)  

---
---

> CodeMirror: [https://codemirror.net/](https://codemirror.net/)  

```text
https://github.com/codemirror

https://github.com/codemirror/legacy-modes/tags
```

---

> SyntaxHighlighter: [https://prismjs.com/](https://prismjs.com/)  

```text
https://github.com/syntaxhighlighter/syntaxhighlighter

https://www.bootcdn.cn/SyntaxHighlighter/
```

---

> Prism: [https://prismjs.com/](https://prismjs.com/)  

```text
https://prismjs.com/docs/index.html

https://github.com/PrismJS/prism

https://www.bootcdn.cn/prism/
```

---

> highlight.js: [https://highlightjs.org/](https://highlightjs.org/)  

## 2. 参考博文

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)  

[IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)  
[立即调用函数表达式](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE)

[Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)  
[继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

[Private elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)  
[私有元素](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)  
[解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)

[Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  
[箭头函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)  
[Generator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)  

[yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)  
[yield](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield)  

[async function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)  
[异步函数（async function）表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)  

[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)  
[await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)  

[Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)  
[Navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)

[Navigator: userAgentData property](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData)  
[Navigator：userAgentData 属性](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/userAgentData)

[NavigatorUAData: getHighEntropyValues() method](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues)  
[NavigatorUAData：getHighEntropyValues() 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/getHighEntropyValues)

[transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)  
[transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

[::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

[scrollbar-color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)

---
---

[阮一峰 ECMAScript 6 入门教程（201801）](https://www.bookstack.cn/read/es6/docs-intro.md)  
[阮一峰 ECMAScript 6 (ES6) 标准入门教程 第三版](https://www.bookstack.cn/read/es6/docs-intro.md)

---
---

[undefined与null的区别](https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html?20160813230532)

[2.2 ES6 解构赋值](https://es6.ruanyifeng.com/#docs/destructuring)

[变量的解构赋值](https://www.runoob.com/w3cnote/deconstruction-assignment.html)

[js 如何动态给对象属性赋值](https://docs.pingcode.com/baike/2336404)

[window对象](https://juejin.cn/post/7522673883956838415)

[JS/JavaScript中的概念区分：global对象、window对象、document对象](https://blog.csdn.net/chenchunlin526/article/details/78908592)  

[JS中通过var定义全局变量与在window对象上直接定义属性的区别](https://blog.csdn.net/PrisonersDilemma/article/details/89030284)

[JavaScript中的Window对象：全局对象的实现与使用](https://edu.51cto.com/article/note/29555.html)

[深入浅出 JavaScript 箭头函数：简洁、灵活、强大的函数表达方式](https://blog.csdn.net/weixin_63490470/article/details/141232015)

[别再用旧方法了！Chrome 121对CSS滚动条样式的影响](https://juejin.cn/post/7330826811491287059)

[JavaScript 中的高阶函数——初学者指南](https://www.freecodecamp.org/chinese/news/higher-order-functions-in-javascript/)

[JavaScript中的高阶函数：实例详解](https://juejin.cn/post/7482617280670875688)

[高阶函数](https://liaoxuefeng.com/books/javascript/function/higher-order-function/)

[动态加载与异步加载 JavaScript 详解：加载远程js，加载成功后执行回调函数](https://developer.aliyun.com/article/1510496)

[拒绝js阻塞—defer、async作用和区别分析](https://segmentfault.com/a/1190000017257370)

[JS中通过var定义全局变量与在window对象上直接定义属性的区别](https://blog.csdn.net/PrisonersDilemma/article/details/89030284)

[jQuery学习之六-----重命名jQuery库](https://www.cnblogs.com/caishuhua226/archive/2012/05/03/2480826.html)

[4 JS函数（箭头函数、立即执行函数）](https://blog.csdn.net/qq_40282016/article/details/115937091)

[ES6：几种get和set的使用](https://blog.csdn.net/yivisir/article/details/114270332)

[深入理解JavaScript单例模式：从ES6 Class到闭包的实现与应用](https://juejin.cn/post/7527199538877726730)

[从ES6重新认识JavaScript设计模式(一): 单例模式](https://segmentfault.com/a/1190000013864944)

[ES6 类聊 JavaScript 设计模式之创建型模式](https://www.devpoint.cn/knowledge/45.shtml)

[JavaScript 模块化设计模式：单例模式、工厂模式与依赖注入](https://www.zhifeiya.cn/post/2025/7/1/3b23d09e)

[深入理解 JavaScript 原型与原型链：从关系图到核心逻辑](https://www.cnblogs.com/hesw/p/18925246)

[彻底搞懂JavaScript原型和原型链](https://www.cnblogs.com/easy1996/p/18208431)

[一文读懂 es6 中class方法中的this绑定](https://www.cnblogs.com/nianzhilian/p/18676913)

[async/await和Promise的关系](https://www.bilibili.com/video/BV1TUWVzhEC8/?spm_id_from=333.1391.0.0&vd_source=b7efa61752db0691ad13f4d9e7912ea4)

[彻底整懂了JavaScript中的Promise、async和await](https://blog.csdn.net/lyx16631019912/article/details/140162870)

[详解JS的四种异步解决方案：回调函数、Promise、Generator、async/await（干货满满）...](https://blog.csdn.net/lunahaijiao/article/details/124185543)

[js中【异步编程】超详细解读，看这一篇就够了](https://blog.csdn.net/2301_79858914/article/details/142076101)

[JavaScript高级深入浅出：Promise 详解](https://juejin.cn/post/7063377198014529572)

[js异步函数如何转换成同步执行](https://docs.pingcode.com/baike/2508355)

[javascript动态创建script，并监听onload、onerror](https://www.cnblogs.com/gaobing/p/12755498.html)

[ES6 系列(六)：Generator 函数和 yield 关键字](https://zhuanlan.zhihu.com/p/159492400)

---
---

```text
SyntaxHighlighter Autoloader(自动加载)最优方式
https://www.daimabuluo.cc/wangyebianjiqi/1408.html

通用代码高亮插件（SyntaxHighlighter）
https://www.cnblogs.com/yangmingyu/p/6908718.html

SyntaxHighlighter 3.0.83使用笔记
https://www.zhangshengrong.com/p/q0arJ6oaxr/

syntaxhighlighter 去掉右上角问号图标的三种方法
https://www.zhangshengrong.com/p/QrXedBLNdJ/


Prism.js使用：代码高亮、行号显示以及复制按钮
https://www.luxiyue.com/server/prism-js%e4%bd%bf%e7%94%a8%ef%bc%9a%e4%bb%a3%e7%a0%81%e9%ab%98%e4%ba%ae%e3%80%81%e8%a1%8c%e5%8f%b7%e6%98%be%e7%a4%ba%e4%bb%a5%e5%8f%8a%e5%a4%8d%e5%88%b6%e6%8c%89%e9%92%ae/

【前端】语法高亮 Prism.js 使用
https://blog.csdn.net/lsdqyz/article/details/134667940

2025最强前端工具Prism：代码美化新标准
https://blog.csdn.net/gitblog_00042/article/details/152261110

```

## 3. 模块总览

```text
CommonUI
├─CommonUI-Admin
├─CommonUI-Weblog
├─CommonUI-Test
│  ├─CommonUI-Test-100
│  ├─CommonUI-Test-200
│  │  ├─CommonUI-Test-201
│  │  └─CommonUI-Test-202
│  └─CommonUI-Test-300
└─CommonUI-Demo
```

## 4. 基础知识

## 5. 模块说明

## 6. SVG 制作

## 7. SVG 转 Font

## 8. 相关问题

### 8.1. reset.css  和 normalize.css

1. CSS Reset vs Normalize.css: 两者的区别及如何选择

一般来说，每一个项目初始化阶段都需要样式重置和样式定制化。样式重置最常用的就是 normalize.css 和 reset.css 这两个文件。

他们的区别：

- Normalize.css更加注重保留有用的浏览器默认样式，仅修复浏览器之间的不一致性，适用于需要一致性、可访问性和可用性的项目。
- Reset CSS则取消了所有浏览器的默认样式，并使用开发者自己定义的样式来构建网页，适用于需要更多自定义的项目。

选择使用哪种方式？

选择使用 CSS Reset 还是 Normalize.css 取决于你的需求和个人喜好。如果你需要完全控制网站的样式，并且不需要保留任何浏览器的默认样式，那么 CSS Reset 可能更适合你。如果你希望保留浏览器的默认样式，并且只需要修复一些常见的浏览器默认样式问题，那么 Normalize.css 可能更适合你。

另外，如果你使用了某些 CSS 框架（例如 Bootstrap），那么它们可能已经包含了一个 CSS Reset 或 Normalize.css，因此你不需要再自己编写一个。

### 8.2. HTML 中空格导致 li 标签间隙的问题

当使用 &lt;ul&gt; 和 &lt;li&gt; 创建导航栏或列表时，HTML 代码中的换行和空格会在 inline-block 或 inline 显示的元素之间产生间隙。

### 8.3. CSS 选择器是否区分大小写

CSS在某些情况下是区分大小写的，而在其他情况下则不是。

具体来说：

01. ID选择器和类选择器：ID选择器和类选择器是区分大小写的。这意味着在HTML文档中定义的ID和类名必须与CSS中使用的名称完全匹配。

    例如：

    ```html
    <div id="case"></div>

    <style>
        #Case {
            background: blue;
        }
    </style>
    ```

02. 标签选择器：标签选择器不区分大小写。这意味着无论是大写还是小写，CSS都能正确识别。

    例如：

    ```html
    <div class="box"></div>

    <style>
        DIV {
            width: 100px;
            height: 100px;
            border: 1px solid;
        }
    </style>
    ```

03. 属性名和属性值：CSS中的属性名和属性值通常不区分大小写。

    例如：

    ```html
    <style>
        .test {
            Height: 100px;
            width: 100px;
            Background: red;
            color: Blue;
            font-size: 33PX;
        }
    </style>
    ```

总结来说，ID选择器和类选择器是区分大小写的，而标签选择器和属性名、属性值则不区分大小写。为了保持代码的一致性和可读性，建议在编写CSS时尽量使用小写字母。

### 8.4. height: 0 -> auto; display: none -> block; visibility: hidden -> visible; 区别

尽管CSS3 transition属性极大地拓宽了可实现平滑过渡的CSS属性范围，但并非所有CSS属性都能应用过渡效果。  
以下是部分不支持过渡的CSS属性类别及实例：

01. 不可动画的CSS属性

    某些CSS属性因其自身的性质决定了它们无法产生连续、平滑的动画效果，因此不支持过渡。  
    这些属性通常涉及非数值型或离散状态的改变，  
    如：

    - 非数值型属性：

      - display：切换显示模式（如none与block之间）。
      - visibility：切换可见性（如hidden与visible之间）。
      - content（仅适用于:before和:after伪元素）：更改生成内容。

    - 散状态属性：

      - background-image：更换背景图（从一张图片切换到另一张图片）。
      - cursor：更改光标样式。
      - filter中的部分滤镜，如blur()、brightness()等，当其值为none与具体数值之间切换时，无法过渡。

02. CSS层叠上下文和层叠顺序相关的属性

    影响元素层叠上下文和层叠顺序的属性，如z-index，由于它们改变的是元素在堆叠顺序上的相对位置，而非视觉上的连续变化，因此不支持过渡。

03. 部分布局属性

    一些涉及布局计算和重排的属性，由于浏览器需要重新计算布局以适应新的值，导致无法平滑过渡。
    例如：

    - width、height（在某些情况下，如元素从auto到固定值的过渡可能可以实现，但依赖于其他条件，如已知初始尺寸或使用max-width、max-height作为限制）。
    - left、top、right、bottom（在绝对定位或固定定位元素中，从一个精确值过渡到另一个精确值通常是可以的，但如果涉及auto值，则可能无法过渡）。
    - float、clear、columns等布局相关属性。

04. 部分Flexbox和Grid布局属性

    尽管Flexbox和Grid布局为现代网页设计带来了强大的灵活性，但其中某些属性由于涉及复杂的布局计算，可能无法平滑过渡。  
    例如：

    - flex-basis、flex-grow、flex-shrink
    - grid-template-columns、grid-template-rows、grid-gap、grid-auto-columns、grid-auto-rows等

05. SVG属性

    SVG（Scalable Vector Graphics）相关的属性，尤其是那些影响图形形状或路径的属性，通常不支持CSS过渡。  
    例如：

    - d属性（用于定义SVG路径数据）
    - cx、cy、r等圆形属性
    - x、y、width、height等矩形属性

### 8.5. ES6 class 私有属性
