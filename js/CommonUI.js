/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - CommonUI.js #");
console.log("#################################################################################################################");


class Person {
	// 1. 实例属性（类字段语法）
	name = "Default Name";
	age;

	// 2. 静态属性
	static version = "1.0.0";

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get name() {
		return this.name;
	}

	set name(name) {
		this.name = name;
	}

	// 3. 原型方法（自动加到 prototype）
	greet() {
		console.log(`Hi, I'm ${this.name}`);
	}
}

const _CommonUI = {
	id: '_CommonUI',
	name: '_CommonUI',

	// foo
	foo() {
		console.log(this.name);
		console.log(_CommonUI.name);
	},
	
	// bar
	bar: function () {
		console.log(this.name);
		console.log(_CommonUI.name);

	}
}


// =====================================================================================
// =====================================================================================
// =====================================================================================


// 用户配置
const User_Config_Options = {
	// 是否在模块请求时加入版本号参数（以更新模块缓存）
	version: false, 
	
	// 是否开启调试模式
	b_enable_debug: true, 
};


// 常量
const CommonUI_Constant = {
	// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
	environment_array: ['local', 'development ', 'test', 'production'],

	// 部署环境; browser-浏览器, server_local-本地服务器, server_test-测试服务器
	run_environment_array: ['browser', 'server_local', 'server_test'],

	// 模块
	module_array: ['all', 'admin', 'blog'],
};


// 基础配置
const CommonUI_Config = {
	// 是否在模块请求时加入版本号参数（以更新模块缓存）
	version: false, 

	// 是否开启调试模式
	b_enable_debug: true,

	// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
	environment: CommonUI_Constant.environment_array[0],

	// 部署环境; browser-浏览器, server_local-本地服务器, server_test-测试服务器
	run_environment: CommonUI_Constant.run_environment_array[0],

	// 路径
	path: 'local',

	// 是否引入了 jQuery
	b_introduced_jQuery: false,
};


// 模块加载缓存信息
const CommonUI_Cache = {

};


class CommonUI {

	// 2. 静态属性
	static version = "1.0.0";

	// 基础配置
	CommonUI_Config = {

		// 是否开启调试模式
		b_enable_debug: true,

		// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
		environment: CommonUI_Constant.environment_array[0],

		// =======================================================
		// =======================================================

		// 部署环境; browser-浏览器, server_local-本地服务器, server_test-测试服务器
		run_environment: CommonUI_Constant.run_environment_array[0],

		// 路径
		path: 'local',

		// 是否引入了 jQuery
		b_introduced_jQuery: false,
	};
	
	constructor(User_Config_Options = {}) {
		console.log("class CommonUI 构造函数");

		// JavaScript：输出对象的不同方法及实例
		
		// 1、
		// 打印变量 CommonUI_Config:[object Object]
		// console.log(`打印变量 CommonUI_Config:${this.CommonUI_Config}`);

		// 2、
		// console.log("打印变量 CommonUI_Config:", this.CommonUI_Config);

		// 3、
		// 打印变量 CommonUI_Config:[object Object]
		// console.dir("打印变量 CommonUI_Config:" + this.CommonUI_Config);

		// 4、
		// console.log("打印变量 CommonUI_Config:", this.CommonUI_Config);

		// 5、
		console.log("打印变量 CommonUI_Config:" + JSON.stringify(this.CommonUI_Config));
		console.log("打印变量 CommonUI_Config:" + JSON.stringify(User_Config_Options));
		
		/*
			判断 JavaScript 对象是否为空对象的方法
				
				使用 Object.keys()

					Object.keys() 方法返回一个包含对象所有可枚举属性的数组。通过判断该数组的长度是否为 0，可以判断对象是否为空。

					let data = {};
					console.log(Object.keys(data).length === 0); // true
		*/
		if (Object.keys(User_Config_Options).length === 0) {
			console.log("CommonUI 初始化 -> 用户设置参数 User_Config_Options 为空");
		} else {
			if (User_Config_Options.b_enable_debug) {
				this.CommonUI_Config.b_enable_debug = User_Config_Options.b_enable_debug;
			}

			if (User_Config_Options.environment) {
				this.CommonUI_Config.environment = User_Config_Options.environment;
			}
			
		}

		console.log("打印变量 CommonUI_Config:" + JSON.stringify(this.CommonUI_Config));

		this.getApplicationRunEnvironment();

	}


	getApplicationRunEnvironment() {

		// console.log(this.CommonUI_Config.environment);

		// console.log(window.location);

		// console.log(window.document.location);
		// console.log(document.location);
		
		// 这种写法是 ES6 (ECMAScript 2015) 引入的对象解构赋值语法。
		// 这是一种从对象中提取属性值并赋值给变量的简洁方式。
		const { protocol, hostname } = window.location;

		// 属性			示例值					描述
		// protocol		"https:"				协议部分
		// hostname		"www.example.com"		域名
		// port			"8080"					端口号
		// pathname		"/products"				路径部分
		// search		"?id=123"				查询字符串
		// hash			"#section1"				锚点部分

		// 浏览器
		// hash: ""
		// host: ""
		// hostname: ""
		// href: "file:///D:/Develop/My%20Repositories/Github/CommonUI/html/index.html"
		// origin: "file://"
		// pathname: "/D:/Develop/My%20Repositories/Github/CommonUI/html/index.html"
		// port: ""
		// protocol: "file:"
		
		// Live Server - http://127.0.0.1:5500/html/index.html
		// hash: ""
		// host: "127.0.0.1:5500"
		// hostname: "127.0.0.1"
		// href: "http://127.0.0.1:5500/html/index.html"
		// origin: "http://127.0.0.1:5500"
		// pathname: "/html/index.html"
		// port: "5500"
		// protocol: "http:"
		
		// Live Server - http://localhost:5500/html/index.html
		// hash: ""
		// host: "localhost:5500"
		// hostname: "localhost"
		// href: "http://localhost:5500/html/index.html"
		// origin: "http://localhost:5500"
		// pathname: "/html/index.html"
		// port: "5500"
		// protocol: "http:"
		
		if (protocol === 'file:') {
			console.log("部署环境:" + "browser");
			// this.CommonUI_Config.environment = 'browser';
			this.CommonUI_Config.environment = CommonUI_Constant.run_environment_array[0];
		}

		if (protocol === 'http:') {
			if (hostname === 'localhost' || hostname === '127.0.0.1') {
				console.log("部署环境:" + "server_local");
				// this.CommonUI_Config.environment = 'server_local';
				this.CommonUI_Config.environment = CommonUI_Constant.run_environment_array[1];
			}
		}

		// console.log(this.CommonUI_Config.environment);
	}
}

// new CommonUI();
// new CommonUI({});
new CommonUI({b_enable_debug: false,});
// const _obj_CommonUI = new CommonUI();
// const _obj_CommonUI = new CommonUI({});
// const _obj_CommonUI = new CommonUI({});
  
(function (window) {
	'use strict';

	/* 
		问题
			如何判断一个前端项目是在浏览器中直接打开（如 file:// 协议），
			还是通过本地服务器（如 http://localhost）启动的？
		
		解答
			1、判断原理
				可以通过 JavaScript 检查当前页面的 协议（protocol） 或 域名（host） 来判断运行环境
	
				常见协议类型：
				+-------------------+------------------------------+----------------------------------------------+
				|协议				|含义							|示例
				+-------------------------------------------------------------------------------------------------+
				|file:				|浏览器直接打开本地 HTML 文件	 |file:///C:/project/index.html
				|http:/https:		|通过本地或远程服务器加载网页	  |http://localhost:3000,https://example.com
				+-------------------+------------------------------+----------------------------------------------+
			2、使用
				方法一：
					const isRunningOnServer = 
						window.location.protocol === 'http:' || 
						window.location.protocol === 'https:'
					;

					console.log('是否通过服务器运行:', isRunningOnServer);

					输出说明：
						● 如果你在浏览器中直接双击 .html 文件打开，输出为 false
						● 如果你使用 Live Server、Vite、Webpack Dev Server、Node.js 等服务器打开，输出为 true

				方法二：结合 host 判断是否是本地开发服务器
					const isLocalhost = 
						window.location.hostname === 'localhost' || 
						window.location.hostname === '127.0.0.1'
					;

					console.log('是否运行在 localhost:', isLocalhost);

				方法一与方法二结合
					结合上面两个判断，可以更精确控制逻辑：
						function checkEnvironment() {
							const protocol = window.location.protocol;
							const host = window.location.host;

							if (protocol === 'file:') {
								console.log('当前是本地文件模式（file://）');
							} else if (protocol.startsWith('http') && host.includes('localhost')) {
								console.log('当前运行在本地服务器（如 Vite、Live Server）');
							} else {
								console.log('当前运行在正式服务器上');
							}
						}

						checkEnvironment();

				封装成通用函数（推荐）
					function getRunEnvironment() {
						const { protocol, hostname } = window.location;

						if (protocol === 'file:') {
							return 'local-file'; // 本地文件打开
						} else if (hostname === 'localhost' || hostname === '127.0.0.1') {
							return 'dev-server'; // 本地开发服务器
						} else {
							return 'production'; // 生产环境服务器
						}
					}

					// 使用
					const env = getRunEnvironment();
					console.log('运行环境:', env);

					if (env === 'local-file') {
						alert('请使用服务器运行此页面，部分功能可能受限。');
					}
			3、Vue / React 中的使用建议
				如果你使用的是 Vue、React 等现代框架：
					● 在组件生命周期钩子中使用（如 mounted() 或 useEffect()）
					● 可以封装成一个全局插件或自定义 Hook

				使用
					import { useEffect, useState } from 'react';

					function useAppEnvironment() {
						const [env, setEnv] = useState(null);

						useEffect(() => {
							const { protocol } = window.location;
							if (protocol === 'file:') {
								setEnv('local-file');
							} else if (window.location.hostname === 'localhost') {
								setEnv('dev-server');
							} else {
								setEnv('production');
							}
						}, []);

						return env;
					}

					// 使用
					function App() {
						const env = useAppEnvironment();

						if (env === 'local-file') {
							return <div>请使用服务器运行本应用</div>;
						}

						return <div>欢迎使用本应用！</div>;
					}
		总结
			+-----------------------+----------------------------------------+
			|目标				    |方法							          |
			+----------------------------------------------------------------+
			|判断是否本地文件打开    |window.location.protocol === 'file:'
			|判断是否本地服务器运行  |hostname === 'localhost'
			|封装判断逻辑           |写成通用函数或 React Hook
			|多环境支持             |支持local-file、dev-server、production
			+----------------------------------------------------------------+

	*/
	/**
	 * 查看部署环境 
	 */
	let _fn_get_run_environment = (function (window) {
		const { protocol, hostname } = window.location;

		// console.log(protocol);
		// console.log(hostname);
		// console.log(protocol, hostname);

		// 浏览器
		// file:
		// 
		// file: 
		
		// Live Server - http://127.0.0.1:5500/html/index.html
		// http:
		// 127.0.0.1
		// http: 127.0.0.1
		
		// Live Server - http://localhost:5500/html/index.html
		// http:
		// localhost
		// http: localhost
		
		if (protocol === 'file:') {
			console.log("部署环境:" + "browser");
			// CommonUI_Config.environment = 'browser';
			CommonUI_Config.environment = CommonUI_Constant.run_environment_array[0];
		}

		if (protocol === 'http:') {
			if (hostname === 'localhost' || hostname === '127.0.0.1') {
				console.log("部署环境:" + "server_local");
				// CommonUI_Config.environment = 'server_local';
				CommonUI_Config.environment = CommonUI_Constant.run_environment_array[1];
			}
		}

		// console.log(CommonUI_Config.environment);
		
	})(window);

	/**
	 * 加载 script 脚本 
	 */
	let _fn_load_script = (function () {

		/* 1、获取当前 CommonUI.js 的文件路径 */
		// 1.1、获取当前正在执行的 script 标签
		const currentScriptElement = document.currentScript;
		// 1.2、用 getAttribute() 获取原始值
		// 获取原始 src 属性值（未解析）
		const currentScriptSrcAttributeValue = currentScriptElement.getAttribute('src');
		// 输出当前脚本的完整路径
		// 当前 CommonUI.js 的文件路径:../js/CommonUI.js
		// 当前 CommonUI.js 的文件路径:../js/CommonUI.js
		// 当前 CommonUI.js 的文件路径:../js/CommonUI.js
		console.log(`当前 CommonUI.js 的文件路径:${currentScriptSrcAttributeValue}`); 
		// 1.3、
		const currentScriptPath = currentScriptElement.src;
		// 输出当前脚本的完整路径
		// 当前 CommonUI.js 的文件路径:file:///D:/Develop/My%20Repositories/Github/CommonUI/js/CommonUI.js
		// 当前 CommonUI.js 的文件路径:http://127.0.0.1:5500/js/CommonUI.js
		// 当前 CommonUI.js 的文件路径:http://localhost:5500/js/CommonUI.js
		console.log(`当前 CommonUI.js 的文件路径:${currentScriptPath}`); 


		const strIndex = currentScriptSrcAttributeValue.indexOf("/js/CommonUI.js");
		// console.log(`strIndex:${strIndex}`); 
		const pathPrefix = currentScriptSrcAttributeValue.substring(0, strIndex);
		// console.log(`pathPrefix:${pathPrefix}`);

		const jQuery_path = pathPrefix + "/lib/jquery/jquery-3.7.1.js";
		
		const CommonUI_Debug_path = pathPrefix + "/js/CommonUI-Debug.js";
		const CommonUI_Common_path = pathPrefix + "/js/CommonUI-Common.js"
		const CommonUI_Util_path = pathPrefix + "/js/CommonUI-Util.js"
		
		// const CommonUI_Admin_path = pathPrefix + "/js/CommonUI-Admin/CommonUI-Admin.js"
		
		const CommonUI_Module_Menus_path = pathPrefix + "/js/modules/menus.js"
		const CommonUI_Module_Tabs_path = pathPrefix + "/js/modules/tabs.js"
		
		// 2、设置要加载的 js 文件路径

		// 判断是否加载了 jQuery， 如果没有在加载 jQuery
		if (typeof jQuery !== 'undefined') {
			// jQuery 已加载
			// console.log('jQuery 已加载，版本：' + jQuery.fn.jquery);
			
			// 设置全局变量
			CommonUI_Config['b_introduced_jQuery'] = true;			
			// CommonUI_Config.b_introduced_jQuery = true;
		} else {
			// jQuery 未加载
			// console.error('jQuery 未加载！');
			// console.log('jQuery 未加载！');
			
			// 设置全局变量
			// CommonUI_Config['b_introduced_jQuery'] = false;			
			CommonUI_Config.b_introduced_jQuery = false;

			// 加载 jQuery
			let scriptElementjQuery = document.createElement("script");
			scriptElementjQuery.setAttribute("type", "text/javascript");
			scriptElementjQuery.setAttribute("src", jQuery_path);
			
			// 方式一：在第一个 script 标签前 加载 jQuery
			function insertBeforeFirstScriptElement() {
				let scriptElementArray = document.scripts;
				// console.log(scriptElementArray.length);
				if (scriptElementArray && scriptElementArray.length > 0) {
					scriptElementArray[0].parentNode.insertBefore(scriptElementjQuery, scriptElementArray[0]);
				}
			}
			// insertBeforeFirstScriptElement();
			
			// 方式二：在当前 script 标签前 加载 jQuery
			function insertBeforeCurrentScriptElement() {
				let currentScriptElement = document.currentScript;
				currentScriptElement.parentNode.insertBefore(scriptElementjQuery, currentScriptElement);
			}
			
			insertBeforeCurrentScriptElement();
			
		}

		if (CommonUI_Config.b_enable_debug) {
			let scriptElementCommonUIDebug = document.createElement("script");
			scriptElementCommonUIDebug.setAttribute("type", "text/javascript");
			scriptElementCommonUIDebug.setAttribute("src", CommonUI_Debug_path);
			document.head.appendChild(scriptElementCommonUIDebug);
		}

		let scriptElementCommonUICommon = document.createElement("script");
		scriptElementCommonUICommon.setAttribute("type", "text/javascript");
		scriptElementCommonUICommon.setAttribute("src", CommonUI_Common_path);
		document.head.appendChild(scriptElementCommonUICommon);

		let scriptElementCommonUIUtil = document.createElement("script");
		scriptElementCommonUIUtil.setAttribute("type", "text/javascript");
		scriptElementCommonUIUtil.setAttribute("src", CommonUI_Util_path);
		document.head.appendChild(scriptElementCommonUIUtil);

		let scriptElementCommonUIAdmin = document.createElement("script");
		scriptElementCommonUIAdmin.setAttribute("type", "text/javascript");
		scriptElementCommonUIAdmin.setAttribute("src", CommonUI_Admin_path);
		document.head.appendChild(scriptElementCommonUIAdmin);
	}());
	
})(window);




/* Start - fetch 函数 异步获取数据 */
// 1、封装 fetch 函数
async function getDataByFetchAPI(url, options = {}) {
	try {
		const response = await fetch(url, options);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		// 根据响应内容类型自动解析 
		/*
		const contentType = response.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			return await response.json();
		}
		return await response.text();
		*/
		return await response.json();
	} catch (error) {
		console.error('Fetch error:', error);
		throw error; // 重新抛出错误以便调用者处理
	}
}

// 2、使用封装的函数
/*
async function test_getDataByFetchAPI() {
	try {
		// 等待fetch完成
		const data = await getDataByFetchAPI('https://api.example.com/data');
		
		// 拿到结果后继续执行
		console.log('获取的数据:', data);
		processData(data);
		
	} catch (error) {
		console.error('处理数据出错:', error);
	}
}

test_getDataByFetchAPI();
*/

/* End - fetch 函数 异步获取数据 */

/* Start - 判断应用的运行环境 */

/**
 * 判断应用的运行环境
 * Determine the running environment of the application
 */
function _fn_determine_the_running_environment_of_the_application() {
	
	console.log("判断应用的运行环境");

	// 1、使用 window 对象判断是否运行在浏览器环境中
	if (typeof window != 'undefined' && window.document) {
		console.log("在浏览器环境中运行");
	}

	// 2、使用 process 对象判断是否运行在 Node.js 环境中
	if (typeof process != 'undefined' && process.release.name === 'node') {
		console.log("在 Node.js 环境中运行");
	}

	// 3、使用 module 对象判断是否在 ES6 模块中运行。
	if (typeof module != 'undefined' && module.exports) {
		console.log("在 ES6 模块中运行");
	}
}
/* End - 判断前端应用的运行环境 */

/* Start - 加载 SVG 图像，并替换 img 标签 */

// SVG缓存
const _map_cache_of_svg = new Map();

function replaceImgElementWithSVG(imgElement, svgText) {
	const div = document.createElement('div');
	div.innerHTML = svgText;
	const svgElement = div.querySelector('svg');

	// 替换 SVG
	imgElement.parentNode.replaceChild(svgElement, imgElement);
}

function _fn_load_svg_and_replace_img_method_1() { 
	// 1、获取所有 img 标Element签
	let imgElementArray = document.querySelectorAll('img[src$=".svg"]');
	// console.log(imgElementArray.length);
	
	// 2、遍历 img 标签数组
	imgElementArray.forEach(img => {
		
		// 2.1、加载 SVG 文件，并缓存在 map 中
		// console.log(img);
		// console.log(img.src);
		// console.log(typeof img.src);
		const src = img.src;

		if (_map_cache_of_svg.has(src)) {
			replaceImgElementWithSVG(img, _map_cache_of_svg.get(src));
			return;
		}

		/*
		Fetch API
			Fetch API 是一种现代的、功能强大的网络请求工具，它允许你通过 JavaScript 异步地请求资源，而不需要使用传统的 XMLHttpRequest 对象。
			Fetch API 可以简洁地发起 HTTP 请求，并处理服务器的响应。
			Fetch API 基于 Promise 设计，使得异步操作更加简洁和易于理解。
		*/
		fetch(src, {method: 'get'})
			.then(
				function (response) {
					//response.status表示响应的http状态码
					if (response.status === 200) {
						return response.text();
						// 这种写法 必须加上 return 才能回去到数据
						// 这种写法 必须加上 return 才能回去到数据
						// 这种写法 必须加上 return 才能回去到数据
					} else {
						return {};
					}
				}
			)
			/*
			.then(
				// response => response.text()
				// 这种写法 相当于有 return 了
			) // 解析 数据
			.then(
				// (response) => response.text()
			) // 解析 数据
			.then(
				// (response) => {response.text();}
			) // 解析 数据
			.then(
				(response) => {
					return response.text();
					// 这种写法 必须加上 return 才能回去到数据
					// 这种写法 必须加上 return 才能回去到数据
					// 这种写法 必须加上 return 才能回去到数据
				}
			) // 解析 数据
			*/
			.then(
				// data => console.log(data)
				// (data) => {console.log(data);}
				data => {
					// console.log(data);
					_map_cache_of_svg.set(src, data);
					replaceImgElementWithSVG(img, data);
				}
			)	 // 处理数据
			.catch(
				error => console.error('Error:', error)
				// error => {console.error('Error:', error)}
			); // 错误处理
		
		// 2.2、替换 img 标签
		// 不能写在 fetch 函数外面，因为 fetch 异步执行
		// replaceImgElementWithSVG(img, _map_cache_of_svg.get(img.src));
	});
}

function _fn_load_svg_and_replace_img_method_2() { 
	// 1、获取所有 img 标Element签
	let imgElementArray = document.querySelectorAll('img[src$=".svg"]');
	// console.log(imgElementArray.length);

	// 2、遍历 img 标签数组
	imgElementArray.forEach(img => {
		
		// 2.1、加载 SVG 文件，并缓存在 map 中
		// console.log(img);
		console.log(img.src);
		// console.log(typeof img.src);
		const src = img.src;

		if (_map_cache_of_svg.has(src)) {
			replaceImgElementWithSVG(img, _map_cache_of_svg.get(src));
			return;
		}

		const xhr = new XMLHttpRequest();
		xhr.open('GET', src, true);
		/* 
			属性 					描述
			onreadystatechange 		存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
			readyState					存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
									0: 请求未初始化
									1: 服务器连接已建立
									2: 请求已接收
									3: 请求处理中
									4: 请求已完成，且响应已就绪
				status				200: "OK"
									404: 未找到页面
		 	
			onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。
			当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
		*/
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 0) {
				console.log(xhr.responseText);
			}
		};
		xhr.send();
	});
}


/**
 * 加载 SVG 图像，并替换 img 标签
 * Load the svg image and replace the img tag
 */
function _fn_load_svg_and_replace_img() {
	_fn_load_svg_and_replace_img_method_1();
	// _fn_load_svg_and_replace_img_method_2();
}

/* End - 加载 SVG 图像，并替换 img 标签 */


/*
	window.onload 等同于 window.addEventListener("load")
 */

document.addEventListener('DOMContentLoaded', function () {
	console.log("CommonUI.js - document.addEventListener\('DOMContentLoaded'\)");
});

window.onload = function () {
	console.log("CommonUI.js - window.onload");

	let a = 123;
	let b = "str";

	console.log(_CommonUI_Util.typeUtils.isNumber(a));
	console.log(_CommonUI_Util.typeUtils.isNumber(b));

	console.log(_CommonUI_Util.typeUtils.isString(a));
	console.log(_CommonUI_Util.typeUtils.isString(b));
	

	_fn_determine_the_running_environment_of_the_application();

	// 把 img 标签引入的 SVG 替换为内嵌 SVG
	// _fn_load_svg_and_replace_img();
}

window.addEventListener('load', function () {
	console.log("CommonUI.js - window.addEventListener\('load'\)");
})



console.log("= End - CommonUI.js =============================================================================================");

