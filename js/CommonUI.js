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


// 基础配置
const CommonUI_Config = {
	version: false, // 是否在模块请求时加入版本号参数（以更新模块缓存）
	b_enable_debug: true, // 是否开启调试模式
	b_introduced_jQuery: false, // 是否引入了 jQuery
	module_enum: {
		Admin: 'Admin',
		Blog: 'Blog',
	},
	
};


// 模块加载缓存信息
const CommonUI_Cache = {

};
  
(function (window) {
	'use strict';

	/**
	 * 加载 script 脚本 
	 */
	let _fn_load_script = (function () {

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
			scriptElementjQuery.setAttribute("src", "../../lib/jquery/jquery-3.7.1.js");
			
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
			scriptElementCommonUIDebug.setAttribute("src", "../../js/CommonUI-Debug.js");
			document.head.appendChild(scriptElementCommonUIDebug);
		}

		let scriptElementCommonUICommon = document.createElement("script");
		scriptElementCommonUICommon.setAttribute("type", "text/javascript");
		scriptElementCommonUICommon.setAttribute("src", "../../js/CommonUI-Common.js");
		document.head.appendChild(scriptElementCommonUICommon);

		let scriptElementCommonUIUtil = document.createElement("script");
		scriptElementCommonUIUtil.setAttribute("type", "text/javascript");
		scriptElementCommonUIUtil.setAttribute("src", "../../js/CommonUI-Util.js");
		document.head.appendChild(scriptElementCommonUIUtil);

		let scriptElementCommonUIAdmin = document.createElement("script");
		scriptElementCommonUIAdmin.setAttribute("type", "text/javascript");
		scriptElementCommonUIAdmin.setAttribute("src", "../../js/CommonUI-Admin/CommonUI-Admin.js");
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

