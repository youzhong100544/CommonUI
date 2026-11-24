/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */

"use strict";

console.log("#################################################################################################################");
console.log("# Start - CommonUI.js #");
console.log("#################################################################################################################");


/*
	BOM, Window 对象, DOM, Document 对象

	
	参看文献
		DOM 概述
		https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction

		Window
		https://developer.mozilla.org/en-US/docs/Web/API/Window
		https://developer.mozilla.org/zh-CN/docs/Web/API/Window

		Document
		https://developer.mozilla.org/en-US/docs/Web/API/Document
		https://developer.mozilla.org/zh-CN/docs/Web/API/Document


	
	DOM
		定义：
			DOM (Document Object Model，文档对象模型)。

			DOM 是 W3C 标准，表示和操作 HTML/XML 文档的 API，将文档解析为树形结构。
		
		是什么：
			DOM是将HTML/XML文档表示为树形结构的API，W3C标准。

		主要功能：
			● 获取/修改 HTML 元素
			● 修改元素属性和样式
			● 添加/删除元素和事件
			● 操作文档结构

		核心概念：
			● 文档树结构（节点树）
			● 跨浏览器一致性标准
			● 提供对文档内容的编程访问方式

		核心接口：
			● Document：整个文档的入口
			● Element：HTML 元素
			● Node：DOM 树中的节点
			● Event：事件处理
 	
		典型应用场景：
			● 动态修改页面内容
			● 响应用户交互
			● 实现单页应用(SPA)
	
	Document对象
		定义：
			Document 是 DOM 的核心对象，代表加载在窗口中的网页文档。
		
		是什么：
			Document 是 DOM 树的入口点，代表加载在窗口中的网页文档。
		
		特点：
			● 文档树的入口点
			● 提供访问和操作页面内容的方法
			● 是 window 对象的一个属性
	
		关键点：
			● 是window对象的一个属性：window.document
			● 每个文档（包括iframe）有自己的document对象
			● 提供文档操作的基本方法
	
	BOM
		定义：
			BOM (Browser Object Model，浏览器对象模型)。

			BOM 是浏览器提供的用于访问和操作浏览器窗口的 API，它不是 W3C 标准，而是由各个浏览器厂商实现。

		是什么：
			BOM 是浏览器提供的用于与浏览器窗口交互的对象模型，它允许 JavaScript 与浏览器 "对话"。
		
		主要对象和功能：
			● window：浏览器窗口的顶级对象
			● navigator：浏览器信息（用户代理、平台等）
			● location：当前 URL 信息和控制页面跳转
			● history：访问浏览器历史记录
			● screen：用户屏幕信息
			● alert()/confirm()/prompt()：浏览器对话框


			window对象（核心对象）
				页面一旦加载，就会创建windows对象，无需自行创。通过该对象可以做的事情比如：

		特点：
			● 非W3C标准，由浏览器厂商各自实现
			● 操作浏览器窗口而非文档内容
			● 不同浏览器实现可能有差异/不同浏览器可能存在兼容性差异
			● 包含一些与浏览器交互的核心功能

	Window对象
		是什么：
			Window对象代表浏览器窗口，是 BOM 的核心，也是 JavaScript 的全局对象。

		window对象（核心对象）
			页面一旦加载，就会创建windows对象，无需自行创。

		特点：
			● 全局变量和函数实际上是 window 的属性和方法
			● 包含 DOM 的 document 对象
			● 控制浏览器窗口（大小、位置等）
			● 管理框架(iframe)和弹出窗口
	
		双重身份：
			● 浏览器窗口的 JavaScript 接口
			● 全局对象（所有全局变量/函数都是它的属性/方法）

		关键特性：
			● 每个浏览器标签页/窗口都是一个独立的window对象
			● iframe也有自己的window对象
			● 全局变量实际是 window 的属性：var a = 1; ≈ window.a = 1;
	
	
	四者关系图示
		[浏览器窗口]
			└── Window (BOM)
				├── document (DOM根节点)
				│    ├── html
				│    │   ├── head
				│    │   └── body
				│    │       └── div等元素...
				├── navigator (BOM)
				├── location (BOM)
				└── history (BOM)
	
	关键区别总结
	概念		标准		作用域		主要用途			典型API
	------------------------------------------------------------------------------------
	BOM			非标准		浏览器窗口	控制浏览器行为		 window.open(), location.href
	DOM			W3C标准		文档内容	操作页面元素		getElementById(), appendChild()
	Window		BOM核心		全局范围	浏览器窗口控制		innerWidth, setTimeout()
	Document	DOM入口		文档范围	页面内容操作		querySelector(), createElement()

	小结
		1、window是BOM中的一个对象
		2、document是DOM中的一个对象，同时也是BOM中的一个对象
		3、DOM的对象document可以通过BOM的对象window来访问，即window.document。所以可以通过BOM访问DOM。
		4、在DOM树中，html是document下的节点，而body又是html下面的节点。所以html和body是html文件中的具体内容。
		5、可以不严谨地得到这样一个层级关系：window→document→html→body

	常见误区
		1、认为 DOM 包含 BOM：实际上 BOM 包含 DOM（通过 window.document）
		2、混淆全局变量归属：所有全局变量实际都是 window 的属性
		3、忽略浏览器兼容性：BOM 部分 API 在不同浏览器中表现可能不同

	常见混淆澄清
		1、为什么document.write()能直接使用？
		  因为是window.document.write() 的简写，window 通常可省略

		2、BOM和DOM的包含关系？
		  BOM包含访问DOM的能力（通过window.document），但两者是不同的概念体系

		3、jQuery属于BOM还是DOM？
		  主要是DOM操作库，但也封装了部分BOM功能（如AJAX）

*/


/*
	HTML DOM readyState 属性

	Document: readyState property
	https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
	https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState

	幸好document.readyState还是有点锤子用的
	https://www.zhangxinxu.com/wordpress/2019/10/document-readystate/#:~:text=document.readyState%20%E6%98%AF%E4%B8%80%E4%B8%AA%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7%EF%BC%8C%E5%8F%AF%E4%BB%A5%E8%BF%94%E5%9B%9E%E5%BD%93%E5%89%8D%E6%96%87%E6%A1%A3%E7%9A%84%E5%87%86%E5%A4%87%E7%8A%B6%E6%80%81%E3%80%82%20%E5%85%B6%E4%B8%AD%20state%20%E5%80%BC%E5%8C%85%E5%90%AB%E4%B8%8B%E9%9D%A2%E4%B8%89%E4%B8%AA%E5%80%BC%EF%BC%9A,%E8%A1%A8%E7%A4%BA%E6%96%87%E6%A1%A3%E6%AD%A3%E5%9C%A8%E5%8A%A0%E8%BD%BD%E4%B8%AD%E3%80%82%20%E8%A1%A8%E7%A4%BA%E6%96%87%E6%A1%A3%E5%B7%B2%E5%AE%8C%E6%88%90%E5%8A%A0%E8%BD%BD%EF%BC%8C%E6%96%87%E6%A1%A3%E5%B7%B2%E8%A2%AB%E8%A7%A3%E6%9E%90%EF%BC%8C%E4%BD%86%E5%9B%BE%E5%83%8F%E3%80%81%E6%A0%B7%E5%BC%8F%E8%A1%A8%E5%92%8C%E6%A1%86%E6%9E%B6%E7%AD%89%E5%AD%90%E8%B5%84%E6%BA%90%E4%BB%8D%E5%9C%A8%E5%8A%A0%E8%BD%BD%E3%80%82%20%E8%A1%A8%E7%A4%BA%E6%96%87%E6%A1%A3%E5%92%8C%E6%89%80%E6%9C%89%E5%AD%90%E8%B5%84%E6%BA%90%E5%B7%B2%E5%AE%8C%E6%88%90%E5%8A%A0%E8%BD%BD%E3%80%82%20%E5%A6%82%E6%9E%9C%E7%8A%B6%E6%80%81%E5%8F%98%E6%88%90%E8%BF%99%E4%B8%AA%EF%BC%8C%E8%A1%A8%E6%98%8E%20load%20%E4%BA%8B%E4%BB%B6%E5%8D%B3%E5%B0%86%E8%A7%A6%E5%8F%91%E3%80%82

	js如何判断网页是否完成加载
	https://docs.pingcode.com/baike/2625712

	Document.readyState 属性描述了document 的加载状态。

	当该属性值发生变化时，会在 document 对象上触发 readystatechange 事件。

	值
		一个文档的 readyState 可以是以下之一：

			loading（正在加载）
				document 仍在加载。

			interactive（可交互）
				文档已被解析，正在加载状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载。

			complete（完成）
				文档和所有子资源已完成加载。表示 load 状态的事件即将被触发。

*/

  
(function (window) {
	'use strict';

})(window);

/**
 * JavaScript 中检查 jQuery 是否导入成功
 * 
 * 
 * 
 * 可以通过以下几种方法：检查window.jQuery对象、使用typeof运算符、结合try-catch语句。
 * 
 * 这里我们将详细介绍如何使用这几种方法来确保你的jQuery库已正确导入，并解释每种方法的优缺点。
 * 
 */
let _fn_check_jQuery = function () { 

	/*
	 * jquery中 $ 和 jQuery 及 $() 的区别
	 */

	// 方法1: 使用 typeof 运算符直接检查全局 jQuery 对象
	// typeof 运算符可以用来检查 $ 或 jQuery 是否被定义。
	// 这种方法稍微更为灵活，因为它不仅可以检测到 window.jQuery，还可以检查 $ 符号。
	// 优势：
	// 		能够检测更多的情况，比如 jQuery 库被别名化的情况。
	// 劣势：
	// 		依赖于typeof运算符的准确性，如果存在命名冲突，可能会导致误判。
	if (typeof jQuery !== 'undefined') {
		// jQuery 已加载
		console.log('jQuery 已加载，版本：' + jQuery.fn.jquery);
		return true;
	} else {
		// jQuery 未加载
		console.error('jQuery 未加载！');
		return false;
	}

	// 检查 $ 别名
	if (typeof window.$ === 'function') {
		// jQuery 已加载
		console.log('jQuery ($) 可用');
		return true;
	} else {
		// jQuery 未加载或$被其他库占用
		console.warn('jQuery ($) 不可用');
		return false;
	}

	// 方法2: 检查 window.jQuery 对象
	// 最直接的方法是通过检查全局对象 window 是否包含 jQuery 对象。
	// 这是一种快速且有效的方法，可以立即判断 jQuery 是否存在于全局命名空间中。
	// 优势：
	// 		这种方法简单直观，适合快速检测。
	// 劣势：
	// 		如果jQuery库被重命名或者被其他库覆盖，那么这种方法将无法检测。
	if (window.jQuery) {
		console.log("jQuery 已导入");
		console.log("jQuery is loaded!");
		// CommonUI_Config['b_introduced_jQuery'] = true;
		CommonUI_Config.b_introduced_jQuery = true;
		return true;
	} else {
		console.log("jQuery 未导入");
		console.log("jQuery is not loaded.");
		return false;
	}

	

	// 方法3: 结合 try-catch 语句
	// 结合 try-catch 语句可以在代码执行过程中动态检测 jQuery 是否已正确加载。
	// 这种方法适用于在更复杂的环境中进行检测。
	try {
		jQuery.noConflict();
		console.log('jQuery 已加载');
		return true;
	} catch (e) {
		console.error('jQuery 未加载: ' + e.message);
		return false;
	}
}

/**
 * 在JavaScript中获取当前文件路径
 * 获取当前正在运行的js脚本的地址与HTMLScriptElement.prototype.readyState
 * 
 * 
 * Document.currentScript 属性返回当前正在处理其脚本（并且该脚本不是 JavaScript 模块）的 <script> 元素。（对于模块，请改用 import.meta）。
 * 
 * 值得注意的是，如果脚本中的代码是作为回调或事件处理器调用的，则不会引用 <script> 元素；它只会在最初处理时引用该元素。
 * 
 * Document：currentScript 属性
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/currentScript
 * 
 * 【速记】获取当前正在运行的js脚本的地址与HTMLScriptElement.prototype.readyState
 * https://segmentfault.com/a/1190000017252793
 * 
 */
let _fn_get_path = function () { 
	// 使用原生JavaScript获取当前JS文件路径
	var scripts = document.scripts;
	var jsPath = scripts[scripts.length - 1].src;
	console.log(jsPath);


	document.currentScript

	// document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT'
}

// _fn_get_path();

/*
const MathModule = (function () {
	var privateCount = 0;              // 私有变量
	function add(a, b) { return a + b; }
	return { add: add };               // 只暴露 add
})();
*/


const _common_ui_global_variable = {
	/** 开启 Debug 模式 */
	b_enable_debug: true,
};

const _common_ui_global_function = {
	numberHeadings: {
		/**
		 * 标题编号
		 * 
		 * 需求1：
		 * body
		 * ├─ h1 -> 1. 
		 * ├─ h2 -> 1.1. 
		 * ├─ h3 -> 1.1.1. 
		 * ├─ h1 -> 2. 
		 * ├─ h2 -> 2.1. 
		 * ├─ h3 -> 2.1.1. 
		 * ├─ h2 -> 2.2. 
		 * └─ h3 -> 2.2.1. 
		 * 
		 * 需求2：
		 * class="container"
		 * ├─ class="title_1" -> 1. 
		 * ├─ class="title_2" -> 1.1. 
		 * ├─ class="title_1" -> 2. 
		 * ├─ class="title_2" -> 2.1. 
		 * ├─ class="title_2" -> 2.2. 
		 * ├─ class="title_3" -> 2.2.1. 
		 * ├─ class="title_2" -> 2.3. 
		 * └─ class="title_3" -> 2.3.1. 
		 * 
		 * 思路：
		 *     初始化计数器数组，长度与层级数一致，初始值全为0
		 *         [0,  0,  0,  0,  0,  0] 
		 *         对应 
		 *         [h1, h2, h3, h4, h5, h6]
		 *     1. 遍历父元素的直接子元素
		 *     2. 判断当前元素是否属于需要编号的层级（根据标签名或 class 名）
		 *     3. 若是目标元素，则：
		 *         a. 当前层级计数 +1
		 *         b. 重置所有更低层级的计数器（保证层级回退时编号正确）
		 *         c. 构建编号字符串：取从第0级到当前级的计数，拼接为 "1.2.3." 格式
		 * 
		 * @param {Element} parentNode 父元素，只编号它的直接子元素
		 * @param {string[]} elements 按层级从高到低排列的套编号元素的数组，如 ['h1','h2','h3']
		 * 
		 * @returns 
		 */
		v1: function (parentNode, elements) {

			// 参数默认值处理
			// const parentNode = parentNode || document.body;
			// const elements = elements || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

			if (!parentNode) {
				console.warn("parentNode not provided. No headings will be processed.");
				return;
			}
			if (!elements || !Array.isArray(elements) || elements.length === 0) {
				console.warn("elements not provided. No headings will be processed.");
				return;
			}

			// 将标签名统一转为小写，便于匹配（class选择器保持原样）
			// const normalizedTags = elements.map(item => item.toLowerCase());

			// 1、初始化计数器数组，长度与层级数一致，初始值全为0
			//    计数器数组：counters[0] 对应 elements[0]，依此类推
			// const counters: number[] = new Array(elements.length).fill(0);
			const counters = new Array(elements.length).fill(0);
			
			// 2. 仅遍历直接子元素
			// const children: HTMLCollection<HTMLElement> = parentNode.children;
			const children = parentNode.children;

			for (let i = 0; i < children.length; i++) {
				// const child:HTMLElement = children[i];
				const child = children[i];

				// 3、判断当前元素是否属于需要编号的层级
				let levelIndex = -1;

				// 3.1、优先按标签名匹配
				const tagName = child.tagName.toLowerCase();
				levelIndex = elements.indexOf(tagName);
				// console.log("child.tagName: %s", child.tagName);                              // child.tagName: H1
				// console.log("child.tagName.toLowerCase(): %s", child.tagName.toLowerCase());  // child.tagName.toLowerCase(): h1
				// console.log(`levelIndex: ${levelIndex}`);                                     // levelIndex: 0

				// 3.2、若标签名未命中，尝试按 class 名匹配（支持案例2中的 .title_1 等）
				if (levelIndex === -1) {
					for (let j = 0; j < elements.length; j++) {
						// 支持传入 '.className' 或 'className' 两种格式
						const selector = elements[j].startsWith('.') ? elements[j] : '.' + elements[j];
						if (child.matches(selector)) {
							levelIndex = j;
							break;
						}
					}
				}


				// 3.3、不是目标元素则跳过当前循环
				if (levelIndex === -1) continue;

				/* 
					此时
						情况1：3.1 和 3.2 都未命中，则跳过当前元素
						情况2：匹配到目标元素，levelIndex 对应 elements 中的索引，表示当前元素的层级
				*/

				// 当前层级计数 +1
				counters[levelIndex]++;
				
				// 重置所有更低层级的计数器（保证层级回退时编号正确）
				for (let k = levelIndex + 1; k < counters.length; k++) {
					counters[k] = 0;
				}

				// 构建编号字符串：取从第0级到当前级的计数，拼接为 "1.2.3." 格式
				const numberStr = counters.slice(0, levelIndex + 1).join('.') + '. ';
				
				/*
				// 将编号写入元素的 data-number 属性，避免污染原始文本内容
				// 如需直接插入文本，可改为: child.textContent = numberStr + child.textContent;
				child.setAttribute('data-number', numberStr);
				*/

				// 1、插入编号， 用 span 标签插入
				// 1.1、插入前先查询，避免重复执行时重复插入
				// if (child.querySelector('.heading-number')) return;
				// 1.2、插入
				const span = document.createElement('span');
				// span.className = 'heading-number';
				span.textContent = numberStr;
				child.insertBefore(span, child.firstChild);
			}
		}
	},
};

console.log("= End - CommonUI.js =============================================================================================");
