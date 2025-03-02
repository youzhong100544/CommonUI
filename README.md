# CommonUI

- [CommonUI](#commonui)
	- [1. 相关官方网址](#1-相关官方网址)
	- [2. 模块总览](#2-模块总览)
	- [3. 模块说明](#3-模块说明)
	- [4. SVG 制作](#4-svg-制作)
	- [5. SVG 转 Font](#5-svg-转-font)
	- [6. 相关问题](#6-相关问题)
		- [6.1. reset.css  和 normalize.css](#61-resetcss--和-normalizecss)

## 1. 相关官方网址

> W3C 官网: [https://www.w3.org/](https://www.w3.org/)  
> CSS Tools: Reset CSS: [https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)  
> Normalize.css: [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)  

## 2. 模块总览

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

## 3. 模块说明

## 4. SVG 制作

## 5. SVG 转 Font

## 6. 相关问题

### 6.1. reset.css  和 normalize.css

1. CSS Reset vs Normalize.css: 两者的区别及如何选择

一般来说，每一个项目初始化阶段都需要样式重置和样式定制化。样式重置最常用的就是 normalize.css 和 reset.css 这两个文件。

他们的区别：

- Normalize.css更加注重保留有用的浏览器默认样式，仅修复浏览器之间的不一致性，适用于需要一致性、可访问性和可用性的项目。
- Reset CSS则取消了所有浏览器的默认样式，并使用开发者自己定义的样式来构建网页，适用于需要更多自定义的项目。

选择使用哪种方式？

选择使用 CSS Reset 还是 Normalize.css 取决于你的需求和个人喜好。如果你需要完全控制网站的样式，并且不需要保留任何浏览器的默认样式，那么 CSS Reset 可能更适合你。如果你希望保留浏览器的默认样式，并且只需要修复一些常见的浏览器默认样式问题，那么 Normalize.css 可能更适合你。

另外，如果你使用了某些 CSS 框架（例如 Bootstrap），那么它们可能已经包含了一个 CSS Reset 或 Normalize.css，因此你不需要再自己编写一个。
