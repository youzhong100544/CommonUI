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

## 1. 相关官方网址

> W3C 官网: [https://www.w3.org/](https://www.w3.org/)  
> CSS Tools: Reset CSS: [https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)  
> Normalize.css: [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)  

## 2. 参考博文

[解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)

[2.2 ES6 解构赋值](https://www.runoob.com/w3cnote/deconstruction-assignment.html)

[js 如何动态给对象属性赋值](https://docs.pingcode.com/baike/2336404)

[window对象](https://juejin.cn/post/7522673883956838415)

[JS/JavaScript中的概念区分：global对象、window对象、document对象](https://blog.csdn.net/chenchunlin526/article/details/78908592)  

[JS中通过var定义全局变量与在window对象上直接定义属性的区别](https://blog.csdn.net/PrisonersDilemma/article/details/89030284)

[JavaScript中的Window对象：全局对象的实现与使用](https://edu.51cto.com/article/note/29555.html)

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
