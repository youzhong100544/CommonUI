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
	
	// 是否开启调试模式
	b_enable_debug: true, 

	// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
	environment: 'local',

	// 模块
	modules: ['all'],
	
};


class CommonUI {

	// 私有 - 项目通用常量
	#application_common_constant = {

		// 部署环境; browser-浏览器, server-本地服务器
		deployment_environment_info_array: ['browser', 'server'],
		
		// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
		environment_array: ['local', 'development ', 'test', 'production'],

		// 模块
		module_object: {
			icon: '/js/modules/icon.js',
			menu: '/js/modules/menu.js',
			tab: '/js/modules/tab.js',

			admin: '/js/CommonUI-Admin/CommonUI-Admin.js',
			blog: '/js/CommonUI-Blog/CommonUI-blog.js',

			lib: {
				jQuery: '/lib/jQuery/jquery-3.7.1/jquery-3.7.1.js',
				jQuery_UI: {
					css: '/lib/jQuery/jquery-ui-1.14.1/jquery-ui.css',
					js: '/lib/jQuery/jquery-ui-1.14.1/jquery-ui.js',
				}
			}
		},
	};

	// 1. 静态属性 - 版本号
	static version = "1.0.0";

	// 项目配置信息 configuration 
	application_config_info = {

		// 是否开启调试模式
		b_enable_debug: true,

		// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
		// environment: this.#application_common_constant.environment_array[0],
		environment: undefined,

		// 模块
		modules: ['all'],
	};

	
	// 部署环境; browser-浏览器, server-本地服务器
	// application_deployment_environment = this.#application_common_constant.deployment_environment_info_array[0];
	application_deployment_environment;
	
	// 项目运行环境; 
	application_run_environment = {
		platform: 'Windows',
		platform_version: '',

		device_name: '',

		browser: 'Google',
		browser_version: '',
	}
	
	// 项目基础信息
	application_base_info = {

		// 路径
		path: 'local',

		// 第三方库
		other_library: {
			// 是否引入了 jQuery
			b_introduced_jQuery: false,
		}

	}

	
	constructor(User_Config_Options = {}) {
		console.log("class CommonUI 构造函数");

		this.initConfigurationInformation(User_Config_Options);

		this.getApplicationRunEnvironment();

		this.getDeviceInfo();

		// this.loadScript();

	}


	/**
	 * 初始化配置信息(Initialize configuration information)
	 */
	initConfigurationInformation(User_Config_Options) { 
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
		console.log("打印变量 CommonUI_Config:" + JSON.stringify(this.application_config_info));
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
			if (!_CommonUI_Util.typeUtils.isUndefined(User_Config_Options.b_enable_debug)) {
				// 判断参数是否为字符串
				if (_CommonUI_Util.typeUtils.isBoolean(User_Config_Options.b_enable_debug)) { 
					this.application_config_info.b_enable_debug = User_Config_Options.b_enable_debug;
				}
			}

			if (User_Config_Options.environment) {
				this.application_config_info.environment = User_Config_Options.environment;
			}

			if (User_Config_Options.modules) {
				// 判断参数是否为字符串
				if (_CommonUI_Util.typeUtils.isString(User_Config_Options.modules)) { 
					console.log("用户设置参数 User_Config_Options -> modules为字符串");

					// 'all'.toLowerCase();
					// 'all'.toLocaleLowerCase();
					if (User_Config_Options.modules === 'all') { 
						console.log("加载所有模块");
					}
				}
				// 判断参数是否为数组
				if (_CommonUI_Util.typeUtils.isArray(User_Config_Options.modules)) { 
					console.log("用户设置参数 User_Config_Options -> modules为数组");
					console.log("加载指定模块");

					let moduleArray = User_Config_Options.modules;
					
					for (let index = 0; index < moduleArray.length; index++) {
						const element = moduleArray[index];
					}
				}
				
				
			}
			
		}

		console.log("打印变量 CommonUI_Config:" + JSON.stringify(this.application_config_info));

	}

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
	getApplicationRunEnvironment() {

		// console.log(this.application_deployment_environment);

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
			console.log("部署环境:" + "browser 浏览器");
			// this.application_deployment_environment = 'browser';
			this.application_deployment_environment = this.#application_common_constant.deployment_environment_info_array[0];
		}

		if (protocol === 'http:' || protocol === 'https:') {
			console.log("部署环境:" + "server 服务器");
			// this.application_deployment_environment = 'server';
			this.application_deployment_environment = this.#application_common_constant.deployment_environment_info_array[1];
		
			if (hostname === 'localhost' || hostname === '127.0.0.1') {
				console.log("部署环境:" + "server_local");
			}
		}

		// console.log(this.application_deployment_environment);
	}

	/**
	 * 获取运行设备信息
	 */
	getDeviceInfo() {
		// lib.dom.d.ts
		// /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/userAgent) */
		// readonly userAgent: string;
		if (window.navigator.userAgent) {
			let ua = window.navigator.userAgent;

			// Edge
			// 	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0
			// 
			// Google
			// 	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36
			// 
			// Firefox
			// 	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0
			
			// console.log(ua);
			
			// Edge
			// 	userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0
			// 
			// Google
			// 	userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36
			// 
			// Firefox
			// 	userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0
			
			// console.log(`userAgent: ${ua}`);
		}

		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData
		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/platform
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/platform
		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/getHighEntropyValues
		if (window.navigator.userAgentData) {
			let uad = window.navigator.userAgentData;
			// console.log(uad);

			// Edge
			// 	userAgentData:{"brands":[{"brand":"Chromium","version":"140"},{"brand":"Not=A?Brand","version":"24"},{"brand":"Microsoft Edge","version":"140"}],"mobile":false,"platform":"Windows"}
			// 
			// Google
			// 	userAgentData:{"brands":[{"brand":"Chromium","version":"140"},{"brand":"Not=A?Brand","version":"24"},{"brand":"Google Chrome","version":"140"}],"mobile":false,"platform":"Windows"}
				
			// console.log('userAgentData:' + JSON.stringify(uad));
			
			// console.log(uad.toJSON());
			// console.log('userAgentData toJSON():' + JSON.stringify(uad.toJSON()));

			// Uncaught (in promise) TypeError: Failed to execute 'getHighEntropyValues' on 'NavigatorUAData': 1 argument required, but only 0 present.
			// console.log('userAgentData.getHighEntropyValues:' + JSON.stringify(uad.getHighEntropyValues()));
			
		}


		this.getDeviceInfoByUserAgent();

		this.getDeviceInfoByUserAgentData();
		
	}

	getDeviceInfoByUserAgent() {
		if (window.navigator.userAgent) {
			let userAgentStr = navigator.userAgent;
			
			// Edge
			// 	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0
			// 
			// Google
			// 	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36
			// 
			// Firefox
			// 	Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0
			
			// console.log(userAgentStr);

			const userAgentObj = {
				OS_name: '', // 操作系统名称
				OS_version: '', // 操作系统版本

				device_name: '', // 设备名称

				browser_name: '', // 浏览器名称
				browser_version: '', // 浏览器版本
			};

			// 定义浏览器和设备的正则表达式
			const browserReg = {
				Chrome: /Chrome/,
				Firefox: /Firefox/,
				Opera: /Opera/,
				Safari: /Safari/,
				Edge: /Edge/,
				IE: /MSIE/,
			};

			const deviceReg = {
				Windows: /Windows NT/,
				Mac: /Mac OS X/,
				Linux: /Linux/,
				iPhone: /iPhone/,
				iPad: /iPad/,
				Android: /Android/
			};

			// 提取操作系统和设备信息
			for (let key in deviceReg) {
				if (deviceReg[key].test(userAgentStr)) {
					userAgentObj.OS_name = key;
					if (key === 'Windows') {
						userAgentObj.OS_version = userAgentStr.split('Windows NT ')[1].split(';')[0];
					} else if (key === 'Mac') {
						userAgentObj.OS_version = userAgentStr.split('Mac OS X ')[1].split(')')[0];
					} else if (key === 'Linux') {
						userAgentObj.OS_version = userAgentStr.split('Linux ')[1].split(')')[0];
					} else if (key === 'iPhone') {
						userAgentObj.OS_version = userAgentStr.split('iPhone OS ')[1].split(' ')[0];
					} else if (key === 'iPad') {
						userAgentObj.OS_version = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0];
					} else if (key === 'Android') {
						userAgentObj.OS_version = userAgentStr.split('Android ')[1].split(';')[0];
						userAgentObj.device_name = userAgentStr.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0];
					}
				}
			}

			// 提取浏览器信息
			Object.entries(browserReg).forEach(([key, value]) => {
				// console.log(key, value);
				// console.log(`key: ${key}, value: ${value}`);

				if (browserReg[key].test(userAgentStr)) {
					userAgentObj.browser_name = key;
					if (key === 'Chrome') {
						userAgentObj.browser_version = userAgentStr.split('Chrome/')[1].split(' ')[0];
					} else if (key === 'Firefox') {
						userAgentObj.browser_version = userAgentStr.split('Firefox/')[1];
					} else if (key === 'Opera') {
						// userAgentObj.browser_version = userAgentStr.split('Version/')[1];
					} else if (key === 'Safari') {
						// userAgentObj.browser_version = userAgentStr.split('Version/')[1].split(' ')[0];
					} else if (key === 'Edge') {
						userAgentObj.browser_version = userAgentStr.split('Edg/')[1].split(' ')[0];
					} else if (key === 'IE') {
						userAgentObj.browser_version = userAgentStr.split('MSIE ')[1].split(' ')[0];
					} else {
						return "Unknown browser"; // 其他浏览器...（可根据自己需要确定是否新增其他浏览器的判断）
					}
				}
			});

			return userAgentObj;
		}
	}
	getDeviceInfoByUserAgentData() {
		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData
		
		
		if (navigator.userAgentData) {

			/*
				https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/platform
				https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/platform
		
				Instance properties - 实例属性

					NavigatorUAData: brands property
						The brands read-only property of the NavigatorUAData interface returns an array of brand information.
						NavigatorUAData 接口的 brands 只读属性返回一个包含品牌信息的数组。
						
					NavigatorUAData: mobile property
						The mobile read-only property of the NavigatorUAData interface returns a value indicating whether the device is a mobile device.
						NavigatorUAData 接口的 mobile 只读属性返回一个值，指示设备是否是移动设备。

					NavigatorUAData: platform property
						The platform read-only property of the NavigatorUAData interface returns the platform brand information.
						NavigatorUAData 接口的 platform 只读属性返回平台的品牌信息。
			*/
			console.log(navigator.userAgentData.brands);
			console.log(navigator.userAgentData.mobile);
			console.log(navigator.userAgentData.platform);

			/*
				https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues
				https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/getHighEntropyValues
				
				Instance methods - 实例方法

					NavigatorUAData: getHighEntropyValues() method
						The getHighEntropyValues() method of the NavigatorUAData interface is a Promise that resolves with a dictionary object containing the high entropy values the user-agent returns.
						NavigatorUAData 接口的 getHighEntropyValues() 方法是一个 Promise，它使用包含用户的高熵值的字典对象进行解析代理返回。

					NavigatorUAData: toJSON() method
						The toJSON() method of the NavigatorUAData interface is a serializer that returns a JSON representation of the low entropy properties of the NavigatorUAData object.
						NavigatorUAData 接口的 toJSON() 方法是一个序列化器，它返回 NavigatorUAData 对象的低熵属性的 JSON 表示形式。

			*/
			navigator.userAgentData.getHighEntropyValues(
				[
					// brands
					// 返回包含 brand 和 version 属性的对象数组，指定浏览器品牌及其版本（与 NavigatorUAData.brands 提供的信息相同）。
					// 请注意，此信息可以在 Sec - CH - UA 标头中发送到服务器（一个低熵客户端提示）。
					"brands",
					
					// mobile
					// 如果用户代理在移动设备上运行，则返回 true（与 NavigatorUAData.mobile 提供的信息相同）。
					// 请注意，此信息可以在 Sec - CH - UA - Mobile 标头中发送到服务器（一个低熵客户端提示）。
					"mobile",

					// platform
					// 返回一个描述用户代理的运行平台的字符串，例如 "Windows"（与 NavigatorUAData.platform 提供的信息相同）。
					// 请注意，此信息可以在 Sec-CH-UA-Platform 标头中发送到服务器（一个低熵客户端提示）。
					"platform",

					// architecture
					// 一个包含平台架构的字符串。例如，"x86"。请注意，当服务器在 Accept-CH 标头中显式请求该信息后，可以在 Sec-CH-UA-Arch 标头中将该信息发送到服务器。
					"architecture",

					// bitness
					// 一个包含平台架构位数的字符串。例如，"32" 或 "64"。请注意，如果服务器在 Accept-CH 标头中明确请求该信息，则可以在 Sec-CH-UA-Bitness 标头中将该信息发送到服务器。
					"bitness",
					
					// formFactor
					// 一个包含设备外形规格的字符串。例如，"Tablet" 或 "VR"。请注意，如果服务器在 Accept-CH 中明确请求该信息，则可以在 Sec-CH-UA-Form-Factors 标头中将该信息发送到服务器。
					"formFactor",

					// fullVersionList
					// 一个具有 "brand" 和 "version" 属性的对象数组，分别表示浏览器名称和完整版本。
					// 例如，{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}。
					// 请注意，一个对象可能故意包含无效信息，以防止网站依赖固定的浏览器列表。
					// 请注意，如果服务器在 Accept-CH 中明确请求该信息，则可以在 Sec-CH-UA-Full-Version-List 标头中将该信息发送到服务器。
					"fullVersionList",

					// model
					// 一个包含移动设备型号的字符串。例如，"Pixel 2XL"。
					// 如果设备不是移动设备或者设备型号未知，则 model 将为 ""。
					// 请注意，如果服务器在 Accept-CH 标头中明确请求该信息，则可以在 Sec-CH-UA-Model 标头中将该信息发送到服务器。
					"model",

					// platformVersion
					// 一个包含平台版本的字符串。平台名称本身始终可通过低熵提示 platform 提供。例如，"10.0"。
					// 请注意，如果服务器在 Accept-CH 中明确请求该信息，则可以在 Sec-CH-UA-Platform-Version 标头中将该信息发送到服务器。
					"platformVersion",

					// uaFullVersion
					// 一个包含完整浏览器版本的字符串。例如，"103.0.5060.134"。已弃用，请使用 fullVersionList 替代。
					// 请注意，如果服务器在 Accept - CH 中明确请求该信息，则可以在 Sec - CH - UA - Full - Version 标头中将该信息发送到服务器。
					"uaFullVersion",

					// wow64
					// 一个布尔值，指示用户代理的二进制文件是否在 64 位 Windows 上以 32 位模式运行。
					// 请注意，如果服务器在 Accept-CH 标头中明确请求该信息，则可以在 Sec-CH-UA-WoW64 标头中将该信息发送到服务器。

				]
			).then(
				// (values) => { console.log(values) }
				// values => { console.log(values) }
				// values => console.log(values)

				values => {
					console.log(`平台: ${values.platform}`);
					console.log(`平台版本: ${values.platformVersion}`);
					console.log(`架构: ${values.architecture}`);
					console.log(`设备型号: ${values.model}`);
					console.log(`完整版本: ${values.uaFullVersion}`);
				}
			);

			// console.log(navigator.userAgentData.toJSON());

		} else {
			console.log("当前浏览器不支持 navigator.userAgentData");
		}
	}


	/**
	 * 动态加载与异步加载 JavaScript 详解
	 */
	loadScript() {

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

		const jQuery_path = pathPrefix + "/lib/jQuery/jquery-3.7.1.js";
		
		const CommonUI_Debug_path = pathPrefix + "/js/CommonUI-Debug.js";
		const CommonUI_Common_path = pathPrefix + "/js/CommonUI-Common.js"
		const CommonUI_Util_path = pathPrefix + "/js/CommonUI-Util.js"
		
		// const CommonUI_Admin_path = pathPrefix + "/js/CommonUI-Admin/CommonUI-Admin.js"
		
		const CommonUI_Module_Icon_path = pathPrefix + "/js/modules/icon.js"

		const CommonUI_Module_Menu_path = pathPrefix + "/js/modules/menu.js"
		const CommonUI_Module_Tab_path = pathPrefix + "/js/modules/tab.js"
		
		// 2、设置要加载的 js 文件路径

		// 判断是否加载了 jQuery， 如果没有在加载 jQuery
		if (typeof jQuery !== 'undefined') {
			// jQuery 已加载
			// console.log('jQuery 已加载，版本：' + jQuery.fn.jquery);
			
			this.application_base_info['b_introduced_jQuery'] = true;
			// this.application_base_infob_introduced_jQuery = true;
		} else {
			// jQuery 未加载
			// console.error('jQuery 未加载！');
			// console.log('jQuery 未加载！');
			
			// this.application_base_info['b_introduced_jQuery'] = false;
			this.application_base_infob_introduced_jQuery = false;

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
			// 例如：我想把 a 元素插入到 b 元素之前，只需要执行下面语句即可。
			// b.parentNode.insertBefore(a, b)
			function insertBeforeCurrentScriptElement() {
				// let currentScriptElement = document.currentScript;
				// console.log(currentScriptElement);
				currentScriptElement.parentNode.insertBefore(scriptElementjQuery, currentScriptElement);
			}
			
			insertBeforeCurrentScriptElement();
			
		}

		if (this.application_config_info.b_enable_debug) {
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

		// let scriptElementCommonUIAdmin = document.createElement("script");
		// scriptElementCommonUIAdmin.setAttribute("type", "text/javascript");
		// scriptElementCommonUIAdmin.setAttribute("src", CommonUI_Admin_path);
		// document.head.appendChild(scriptElementCommonUIAdmin);
	}

	
	
}

// new CommonUI();
// new CommonUI({});
// new CommonUI({b_enable_debug: false,});

// const _obj_CommonUI = new CommonUI();
// const _obj_CommonUI = new CommonUI({});
// const _obj_CommonUI = new CommonUI({b_enable_debug: false,});


(function (window) {
	'use strict';

	const application_common_constant = {
		
		// 部署环境; browser-浏览器, server-本地服务器
		deployment_environment_info_array: ['browser', 'server'],
		
		// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
		environment_array: ['local', 'development ', 'test', 'production'],
		
		// 定义平台设备的正则表达式
		platform_device_regular_expressions: {
			Windows: /Windows NT/,
			Mac: /Mac OS X/,
			Linux: /Linux/,
			iPhone: /iPhone/,
			iPad: /iPad/,
			Android: /Android/
		},
		
		// 定义浏览器的正则表达式
		browser_regular_expressions: {
			Edge: /Edge/,
			Chrome: /Chrome/,
			Firefox: /Firefox/,
			Opera: /Opera/,
			Safari: /Safari/,
			Edge: /Edge/,
			IE: /MSIE/,
		},

		// 模块
		module_object: {
			icon: '/js/modules/icon.js',
			menu: '/js/modules/menu.js',
			tab: '/js/modules/tab.js',

			admin: '/js/CommonUI-Admin/CommonUI-Admin.js',
			blog: '/js/CommonUI-Blog/CommonUI-blog.js',

			lib: {
				jQuery: '/lib/jQuery/jquery-3.7.1/jquery-3.7.1.js',
				jQuery_UI: {
					css: '/lib/jQuery/jquery-ui-1.14.1/jquery-ui.css',
					js: '/lib/jQuery/jquery-ui-1.14.1/jquery-ui.js',
				},

				Lodash: '/lib/Lodash/4.17.21/lodash.js',
			}
		},
	}

	const application_config_info = {

		// 项目根路径
		project_root_path: undefined,

		// 项目部署环境; browser-浏览器, server-本地服务器
		deployment_environment_info: undefined,

		// 平台浏览器信息
		platform_browser_info: undefined,
		
		// 第三方库
		libraries_loaded: {
			// 是否引入了 jQuery
			b_loaded_jQuery: false,

			// 是否引入了 Lodash
			b_loaded_Lodash: false,
		}
	};

	const default_user_configuration_information = {

		// 是否开启调试模式
		b_enable_debug: true,

		// 环境; local-本地, development-开发环境, test-测试环境, production-生产环境
		// environment: application_common_constant.environment_array[0],
		environment: undefined,

		// 模块
		modules: ['all'],
	};

	/**
	 * 查看部署环境 
	 */
	const showDebugInfo = function (info) {
		window.addEventListener('load', function () {
			let divDebugInfo = document.createElement('div');
			divDebugInfo.innerHTML += '<h2>Debug Console</h2>';
			divDebugInfo.innerHTML += '<p>' + info + '</p>';
			document.body.appendChild(divDebugInfo);
		})
	}

	/**
	 * 获取 当前 script 标签的路径
	 */
	const getCurrentScriptPath = {

		/*
			在 JavaScript 的 class 中使用 document.currentScript 返回 null（或 undefined）是很常见的现象，原因如下：
		
			📌 原因分析
			
				document.currentScript 是一个只读属性，它返回当前正在被解析执行的 <script> 元素。
				但它有以下限制：

					1、仅在脚本同步执行期间有效
					  一旦脚本执行完毕（比如进入事件回调、类定义完成之后、异步代码中等），document.currentScript 就会被设为 null。
					
					2、在 class 构造函数或方法中调用时，脚本早已执行完毕
					  当你定义一个 class，JavaScript 引擎会先解析整个脚本，然后才可能实例化类。此时 document.currentScript 已经失效。
					
					3、在模块（ESM）中始终为 null
					  如果你的脚本是以 <script type="module"> 方式加载的，document.currentScript 永远返回 null，这是规范行为。

		*/

		/**
		 * 获取 当前 script 标签的路径
		 * 
		 * @returns {string} 路径。
		 */
		method_1: function () {

			// 1、获取当前正在执行的 script 标签
			const currentScriptElement = document.currentScript;

			// 2、用 getAttribute() 方法 获取原始值
			// 获取原始 src 属性值（未解析）
			const currentScriptSrcAttributeValue = currentScriptElement.getAttribute('src');
			// 输出当前脚本的完整路径
			// 当前 CommonUI.js 的文件路径: ../js/CommonUI.js
			// 当前 CommonUI.js 的文件路径: ../js/CommonUI.js
			// 当前 CommonUI.js 的文件路径: ../js/CommonUI.js
			// console.log(`当前 CommonUI.js 的文件路径: ${currentScriptSrcAttributeValue}`);

			return currentScriptSrcAttributeValue;
		}, 

		/**
		 * 获取 当前 script 标签的路径
		 * 
		 * @returns {string} 路径。
		 */
		method_2: function () { 
			// 1、获取当前正在执行的 script 标签
			const currentScriptElement = document.currentScript;

			// 2、用 src 属性 获取
			const currentScriptPath = currentScriptElement.src;
			// 输出当前脚本的完整路径
			// 当前 CommonUI.js 的文件路径: file:///D:/Develop/My%20Repositories/Github/CommonUI/js/CommonUI.js
			// 当前 CommonUI.js 的文件路径: http://127.0.0.1:5500/js/CommonUI.js
			// 当前 CommonUI.js 的文件路径: http://localhost:5500/js/CommonUI.js
			// console.log(`当前 CommonUI.js 的文件路径: ${currentScriptPath}`); 

			return currentScriptPath;
		}
	}

	/**
	 * 获取项目根路径
	 * 
	 * @returns {string} 路径。
	 */
	const getProjectRootPath = function (scriptSrc) {
		
		// const scriptSrc = getCurrentScriptPath.method_1();
		// const scriptSrc = getCurrentScriptPath.method_2();

		const strIndex = scriptSrc.indexOf("/js/CommonUI.js");
		// strIndex: 2
		// console.log(`strIndex: ${strIndex}`);
		
		const projectRootPath = scriptSrc.substring(0, strIndex);
		// projectRootPath: ..
		// console.log(`projectRootPath: ${projectRootPath}`);

		return projectRootPath;
	}

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
				|http:/https:		|通过本地或远程服务器加载网页	  |http://localhost:3000, https://example.com
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
	const getApplicationRunEnvironment = () => {

		// console.log(window.location);
		// console.log(window.document.location);
		// console.log(document.location);
		
		// 这种写法是 ES6 (ECMAScript 2015) 引入的对象解构赋值语法。
		// 这是一种从对象中提取属性值并赋值给变量的简洁方式。
		const { protocol, hostname, port } = window.location;

		// +-------------+----------------------+--------------+
		// | 属性　       | 示例值               | 描述
		// +-------------+----------------------+--------------+
		// | protocol    | "https:"             | 协议部分
		// | hostname    | "www.example.com"    | 域名
		// | port        | "8080"               | 端口号
		// | pathname    | "/products"          | 路径部分
		// | search      | "?id=123"            | 查询字符串
		// | hash        | "#section1"          | 锚点部分
		// +-------------+----------------------+--------------+

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
			console.log("部署环境:" + "browser 浏览器");
			return application_common_constant.deployment_environment_info_array[0];
		}

		if (protocol === 'http:' || protocol === 'https:') {
			console.log("部署环境:" + "server 服务器");
			if (hostname === 'localhost' || hostname === '127.0.0.1') {
				console.log("部署环境:" + "server 服务器 - 本地服务器");
				return application_common_constant.deployment_environment_info_array[1];
			}
			return application_common_constant.deployment_environment_info_array[1];
		}

		return undefined;
	}

	/**
	 * 获取运行设备信息 
	 */
	const getDeviceInfo = {
		// lib.dom.d.ts
		// /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/userAgent) */
		// readonly userAgent: string;

		method_use_userAgent: function () {
			if (window.navigator.userAgent) {
				let userAgentStr = window.navigator.userAgent;

				/*
					PC 端
						Windows 10
							Edge
								Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0

							Google
								Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36

							Firefox
								Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0
				
					手机端
						小米 Redmi Note 11 + 小米浏览器
							Mozilla/5.0 (Linux; U; Android 13; zh-cn; 21091116AC Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.7049.79 Mobile Safari/537.36 XiaoMi/MiuiBrowser/20.6.71104

						小米 Redmi Note 11 + UC浏览器
							Mozilla/5.0 (Linux; U; Android 13; zh-CN; 21091116AC Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.58 UCBrowser/18.2.2.1448 Mobile Safari/537.36

						honor 8c + 华为浏览器
							Mozilla/5.0 (Linux; Android 8.1.0; BKK-AL10; HMSCore 6.15.0.331) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.196 HuaweiBrowser/16.0.9.302 Mobile Safari/537.36
						
						honor 8c + UC浏览器
							Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; BKK-AL10 Build/HONORBKK-AL10) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.58 UCBrowser/18.2.2.1448 Mobile Safari/537.36

						
				
				*/
				showDebugInfo(userAgentStr);
				console.log(userAgentStr);

				// 使用 JavaScript 的正则表达式来提取 第一个括号（圆括号）中的内容

				// let userAgentStr = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0';
				let re = /\(([^)]*)\)/; // 正则表达式，匹配第一个括号中的内容
				/*
					正则解释：
						● \(：匹配字面量左括号 (（需转义）
						● ([^)]*)：捕获组，匹配 任意不是右括号 ) 的字符，0次或多次
							○ [^)]：表示“除了 ) 以外的任意字符”
							○ *：表示匹配 0 次或多次
						● \)：匹配字面量右括号 )
					
					这个正则会非贪婪地匹配第一个 (...) 的内容，即使字符串中有多个括号。 
				*/
				let match = userAgentStr.match(re);
				let firstParenthesesContent = match ? match[1] : null;

				// Windows NT 10.0; Win64; x64
				console.log(firstParenthesesContent);
				
				const userAgentObj = {
					OS_name: '', // 操作系统名称
					OS_version: '', // 操作系统版本

					device_name: '', // 设备名称

					browser_name: '', // 浏览器名称
					browser_version: '', // 浏览器版本
				};

				// 定义浏览器和设备的正则表达式
				const deviceReg = {
					Windows: /Windows NT/,
					Mac: /Mac OS X/,
					Linux: /Linux/,
					iPhone: /iPhone/,
					iPad: /iPad/,
					Android: /Android/
				};

				const browserReg = {
					Chrome: /Chrome/,
					Firefox: /Firefox/,
					Opera: /Opera/,
					Safari: /Safari/,
					Edge: /Edge/,
					IE: /MSIE/,
				};

				// 提取操作系统和设备信息
				for (let key in deviceReg) {
					if (deviceReg[key].test(userAgentStr)) {
						userAgentObj.OS_name = key;
						if (key === 'Windows') {
							userAgentObj.OS_version = userAgentStr.split('Windows NT ')[1].split(';')[0];
						} else if (key === 'Mac') {
							userAgentObj.OS_version = userAgentStr.split('Mac OS X ')[1].split(')')[0];
						} else if (key === 'Linux') {
							userAgentObj.OS_version = userAgentStr.split('Linux ')[1].split(')')[0];
						} else if (key === 'iPhone') {
							userAgentObj.OS_version = userAgentStr.split('iPhone OS ')[1].split(' ')[0];
						} else if (key === 'iPad') {
							userAgentObj.OS_version = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0];
						} else if (key === 'Android') {
							userAgentObj.OS_version = userAgentStr.split('Android ')[1].split(';')[0];
							userAgentObj.device_name = userAgentStr.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0];
						}
					}
				}

				// 提取浏览器信息
				Object.entries(browserReg).forEach(([key, value]) => {
					// console.log(key, value);
					// console.log(`key: ${key}, value: ${value}`);

					if (browserReg[key].test(userAgentStr)) {
						userAgentObj.browser_name = key;
						if (key === 'Chrome') {
							userAgentObj.browser_version = userAgentStr.split('Chrome/')[1].split(' ')[0];
						} else if (key === 'Firefox') {
							userAgentObj.browser_version = userAgentStr.split('Firefox/')[1];
						} else if (key === 'Opera') {
							// userAgentObj.browser_version = userAgentStr.split('Version/')[1];
						} else if (key === 'Safari') {
							// userAgentObj.browser_version = userAgentStr.split('Version/')[1].split(' ')[0];
						} else if (key === 'Edge') {
							userAgentObj.browser_version = userAgentStr.split('Edg/')[1].split(' ')[0];
						} else if (key === 'IE') {
							userAgentObj.browser_version = userAgentStr.split('MSIE ')[1].split(' ')[0];
						} else {
							return "Unknown browser"; // 其他浏览器...（可根据自己需要确定是否新增其他浏览器的判断）
						}
					}
				});

				return userAgentObj;
			} else {
				showDebugInfo("当前浏览器不支持 window.navigator.userAgent");

				console.log("当前浏览器不支持 window.navigator.userAgent");
				console.log("当前浏览器不支持 navigator.userAgent");

				return null;
			}
		},

		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData
		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/platform
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/platform
		// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues
		// https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/getHighEntropyValues
		
		method_use_userAgentData: function () {
			if (navigator.userAgentData) { 
				let uad = window.navigator.userAgentData;
				// console.log(uad);

				/*
					Windows 10
						Edge
							userAgentData:{"brands":[{"brand":"Chromium","version":"142"},{"brand":"Microsoft Edge","version":"142"},{"brand":"Not_A Brand","version":"99"}],"mobile":false,"platform":"Windows"}

						Google
							userAgentData:{"brands":[{"brand":"Chromium","version":"142"},{"brand":"Google Chrome","version":"142"},{"brand":"Not_A Brand","version":"99"}],"mobile":false,"platform":"Windows"}

						Firefox
							当前浏览器不支持 navigator.userAgentData
				*/
				showDebugInfo(JSON.stringify(uad));
				console.log('userAgentData:' + JSON.stringify(uad));
				
				// console.log(uad.toJSON());
				// console.log('userAgentData toJSON():' + JSON.stringify(uad.toJSON()));

				// Uncaught (in promise) TypeError: Failed to execute 'getHighEntropyValues' on 'NavigatorUAData': 1 argument required, but only 0 present.
				// console.log('userAgentData.getHighEntropyValues:' + JSON.stringify(uad.getHighEntropyValues()));
				
				
				/*
					https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/platform
					https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/platform
			
					Instance properties - 实例属性

						NavigatorUAData: brands property
							The brands read-only property of the NavigatorUAData interface returns an array of brand information.
							NavigatorUAData 接口的 brands 只读属性返回一个包含品牌信息的数组。
							
						NavigatorUAData: mobile property
							The mobile read-only property of the NavigatorUAData interface returns a value indicating whether the device is a mobile device.
							NavigatorUAData 接口的 mobile 只读属性返回一个值，指示设备是否是移动设备。

						NavigatorUAData: platform property
							The platform read-only property of the NavigatorUAData interface returns the platform brand information.
							NavigatorUAData 接口的 platform 只读属性返回平台的品牌信息。
				*/
				console.log(navigator.userAgentData.brands);
				console.log(navigator.userAgentData.mobile);
				console.log(navigator.userAgentData.platform);

				/*
					https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues
					https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorUAData/getHighEntropyValues
					
					Instance methods - 实例方法

						NavigatorUAData: getHighEntropyValues() method
							The getHighEntropyValues() method of the NavigatorUAData interface is a Promise that resolves with a dictionary object containing the high entropy values the user-agent returns.
							NavigatorUAData 接口的 getHighEntropyValues() 方法是一个 Promise，它使用包含用户的高熵值的字典对象进行解析代理返回。

						NavigatorUAData: toJSON() method
							The toJSON() method of the NavigatorUAData interface is a serializer that returns a JSON representation of the low entropy properties of the NavigatorUAData object.
							NavigatorUAData 接口的 toJSON() 方法是一个序列化器，它返回 NavigatorUAData 对象的低熵属性的 JSON 表示形式。

				*/
				navigator.userAgentData.getHighEntropyValues(
					[
						// brands
						// 返回包含 brand 和 version 属性的对象数组，指定浏览器品牌及其版本（与 NavigatorUAData.brands 提供的信息相同）。
						// 请注意，此信息可以在 Sec - CH - UA 标头中发送到服务器（一个低熵客户端提示）。
						"brands",
						
						// mobile
						// 如果用户代理在移动设备上运行，则返回 true（与 NavigatorUAData.mobile 提供的信息相同）。
						// 请注意，此信息可以在 Sec - CH - UA - Mobile 标头中发送到服务器（一个低熵客户端提示）。
						"mobile",

						// platform
						// 返回一个描述用户代理的运行平台的字符串，例如 "Windows"（与 NavigatorUAData.platform 提供的信息相同）。
						// 请注意，此信息可以在 Sec-CH-UA-Platform 标头中发送到服务器（一个低熵客户端提示）。
						"platform",

						// architecture
						// 一个包含平台架构的字符串。例如，"x86"。请注意，当服务器在 Accept-CH 标头中显式请求该信息后，可以在 Sec-CH-UA-Arch 标头中将该信息发送到服务器。
						"architecture",

						// bitness
						// 一个包含平台架构位数的字符串。例如，"32" 或 "64"。请注意，如果服务器在 Accept-CH 标头中明确请求该信息，则可以在 Sec-CH-UA-Bitness 标头中将该信息发送到服务器。
						"bitness",
						
						// formFactor
						// 一个包含设备外形规格的字符串。例如，"Tablet" 或 "VR"。请注意，如果服务器在 Accept-CH 中明确请求该信息，则可以在 Sec-CH-UA-Form-Factors 标头中将该信息发送到服务器。
						"formFactor",

						// fullVersionList
						// 一个具有 "brand" 和 "version" 属性的对象数组，分别表示浏览器名称和完整版本。
						// 例如，{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}。
						// 请注意，一个对象可能故意包含无效信息，以防止网站依赖固定的浏览器列表。
						// 请注意，如果服务器在 Accept-CH 中明确请求该信息，则可以在 Sec-CH-UA-Full-Version-List 标头中将该信息发送到服务器。
						"fullVersionList",

						// model
						// 一个包含移动设备型号的字符串。例如，"Pixel 2XL"。
						// 如果设备不是移动设备或者设备型号未知，则 model 将为 ""。
						// 请注意，如果服务器在 Accept-CH 标头中明确请求该信息，则可以在 Sec-CH-UA-Model 标头中将该信息发送到服务器。
						"model",

						// platformVersion
						// 一个包含平台版本的字符串。平台名称本身始终可通过低熵提示 platform 提供。例如，"10.0"。
						// 请注意，如果服务器在 Accept-CH 中明确请求该信息，则可以在 Sec-CH-UA-Platform-Version 标头中将该信息发送到服务器。
						"platformVersion",

						// uaFullVersion
						// 一个包含完整浏览器版本的字符串。例如，"103.0.5060.134"。已弃用，请使用 fullVersionList 替代。
						// 请注意，如果服务器在 Accept - CH 中明确请求该信息，则可以在 Sec - CH - UA - Full - Version 标头中将该信息发送到服务器。
						"uaFullVersion",

						// wow64
						// 一个布尔值，指示用户代理的二进制文件是否在 64 位 Windows 上以 32 位模式运行。
						// 请注意，如果服务器在 Accept-CH 标头中明确请求该信息，则可以在 Sec-CH-UA-WoW64 标头中将该信息发送到服务器。

					]
				).then(
					// (values) => { console.log(values) }
					// values => { console.log(values) }
					// values => console.log(values)

					values => {
						console.log(`平台: ${values.platform}`);
						console.log(`平台版本: ${values.platformVersion}`);
						console.log(`架构: ${values.architecture}`);
						console.log(`设备型号: ${values.model}`);
						console.log(`完整版本: ${values.uaFullVersion}`);
					}
				);

				// console.log(navigator.userAgentData.toJSON());

			} else {
				showDebugInfo("当前浏览器不支持 window.navigator.userAgentData");

				console.log("当前浏览器不支持 window.navigator.userAgentData");
				console.log("当前浏览器不支持 navigator.userAgentData");

				return null;
			}
			
		},
		
		get_data: function () {
			// if (window.navigator.userAgentData) {
			if (navigator.userAgentData) {	
				return this.method_use_userAgentData();
			}
			
			// if (window.navigator.userAgent) {
			if (navigator.userAgent) {
				return this.method_use_userAgent();
			}

			return undefined;
		}

	}
	

	/**
	 * 校验是否引入了 第三方 库; 如 jQuery、Lodash
	 */
	const checkLibrariesLoaded = {

		// const inBrowser = typeof window !== 'undefined';
		inBrowser: typeof window !== 'undefined',
		
		/**
		 * 校验 jQuery 是否已引入
		 * 
		 * jQuery 通常会暴露全局变量 jQuery 和 $（除非使用了 noConflict() 模式）
		 * 
		 * 💡 注意：
		 *     在 Node.js 环境中一般不会引入 jQuery（除非特殊用途），所以通常只在浏览器中检查。 
		 */
		is_jQuery_loaded: { 
			/**
			 * 校验 Lodash 是否已引入
			 * 
			 * @returns {boolean} 是否已引入 jQuery。
			 */
			method_1: function () { 
				return typeof jQuery !== 'undefined';
			},

			/**
			 * 校验 Lodash 是否已引入
			 * 更严格一点（确保是函数）
			 * 
			 * @returns {boolean} 是否已引入 jQuery。
			 */
			method_2: function () { 
				return typeof window !== 'undefined' && typeof window.jQuery === 'function';
			}
		},

		/**
		 * 校验 Lodash 是否已引入
		 * 
		 * Lodash 通常暴露全局变量 _（下划线）。
		 * 
		 * 🔍 说明：
		 *     Lodash 的 _ 对象上有一个 VERSION 属性，格式如 "4.17.21"，但注意 Underscore.js 也有 _，不过它的 _.VERSION 不包含 "lodash" 字符串。
		 *     因此可以通过 _.VERSION 是否存在或是否为 Lodash 特有来区分。
		 */
		is_lodash_loaded: { 
			/**
			 * 校验 Lodash 是否已引入
			 * 
			 * @returns {boolean} 是否已引入 Lodash。
			 */
			method_1: function () { 
				return typeof _ !== 'undefined' && typeof _.isObject === 'function';
			},

			/**
			 * 校验 Lodash 是否已引入
			 * 
			 * 更安全：检查是否是 Lodash 实例（避免与其他库冲突，比如 Underscore）
			 * 
			 * @returns {boolean} 是否已引入 Lodash。
			 */
			method_2: function () { 
				return typeof _ !== 'undefined' && _.VERSION && _.VERSION.indexOf('lodash') === 0;
			},

			/**
			 * 校验 Lodash 是否已引入
			 * 
			 * 更严谨的判断（推荐）：
			 * 
			 * @returns {boolean} 是否已引入 Lodash。
			 */
			method_3: function () { 
				return (
					typeof _ !== 'undefined' &&
					typeof _.chain === 'function' &&   // Lodash 特有方法
					typeof _.get === 'function' &&     // _.get 是 Lodash 特有
					typeof _.tap === 'function'        // Lodash 常用方法
				);
			},

			/**
			 * 校验 Lodash 是否已引入
			 * 
			 * 或者直接检查构造器名称（高级用法）：
			 * 
			 * @returns {boolean} 是否已引入 Lodash。
			 */
			method_4: function () { 
				return (
					typeof _ === 'function' &&
					_.prototype &&
					_.prototype.constructor.name === 'LodashWrapper'
				);
			}
		}
	}

	/**
	 * 初始化项目相关常量
	 */
	let _fn_init_project_constant = (() => {
		// console.log('立即执行箭头函数');
		// do something immediately

		// 初始化项目根路径
		// application_config_info['project_root_path'] = getProjectRootPath(getCurrentScriptPath.method_1());
		application_config_info.project_root_path = getProjectRootPath(getCurrentScriptPath.method_1());

		// 初始化项目部署环境
		// application_config_info['deployment_environment_info'] = getApplicationRunEnvironment();
		application_config_info.deployment_environment_info = getApplicationRunEnvironment();

		getDeviceInfo.method_use_userAgent();
		// getDeviceInfo.method_use_userAgentData();
		// getDeviceInfo.get_data();
		// application_config_info.platform_browser_info = undefined;

		// 第三方库加载情况
		application_config_info.libraries_loaded.b_loaded_jQuery = checkLibrariesLoaded.is_jQuery_loaded.method_1();
		application_config_info.libraries_loaded.b_loaded_Lodash = checkLibrariesLoaded.is_lodash_loaded.method_1();

	})();
	

	/* Start - 加载 script 脚本 */

	let createScriptElement = {
		/**
		 * 创建 scrsipt 标签
		 * 
		 * @param {string} src 
		 * @returns 
		 */
		method_1: function (src) {
			let script = document.createElement('script');
		
			script.setAttribute('type', 'text/javascript');
			// script.setAttribute('type', 'module');

			// script.setAttribute('src', './js/test.js');
			script.setAttribute('src', src);

			// document.head.appendChild(script);

			return script;
		},

		/**
		 * 创建 scrsipt 标签
		 * 
		 * @param {string} src 
		 * @returns 
		 */
		method_2: function (src) {
			let script = document.createElement('script');

			script.type = 'text/javascript';
			// script.type = 'module';
			
			// script.src = './js/test.js';
			script.src = src;

			// script.async = true; // 可选：异步加载，不阻塞页面
			// script.defer = true;

			/*
			script.onload = function () {
				console.log('Script loaded successfully!');
			};
			*/

			/*
			script.onerror = () => {
				console.log(`Script loaded failure!`);
			};
			*/

			// document.head.appendChild(script);

			return script;
		}
	}
	

	let insertScriptElement = {
		/**
		 * 插入 script 标签
		 * 
		 * @param {*} scriptElement 
		 */
		insert: function (scriptElement) { 
			document.head.appendChild(scriptElement);
		},
		
		/**
		 * 插入 script 标签 -> 在第一个 scrsipt 标签前 插入
		 * 
		 * @param {*} scriptElement 
		 */
		insertBeforeFirstScriptElement: function (scriptElement) { 
			let scriptElementArray = document.scripts;
			// console.log(scriptElementArray.length);
			if (scriptElementArray && scriptElementArray.length > 0) {
				scriptElementArray[0].parentNode.insertBefore(scriptElement, scriptElementArray[0]);
			}
		},

		/**
		 * 插入 script 标签 -> 在当前 script 标签前 插入
		 * 
		 * @param {*} scriptElement 
		 */
		insertBeforeCurrentScriptElement: function (scriptElement) { 
			let currentScriptElement = document.currentScript;
			// console.log(currentScriptElement);
			currentScriptElement.parentNode.insertBefore(scriptElement, currentScriptElement);
		}
	}

	
	/**
	 * 加载 script 脚本
	 * 
	 * @param {string} src 
	 * @returns 
	 */
	let loadScript = (src) => {
		return new Promise((resolve, reject) => {
			// 1、创建节点
			const script = createScriptElement.method_2(src);

			/*
				节点类型（nodeType）在HTML DOM中的应用
				
					在HTML DOM中，节点类型（nodeType）是一个非常重要的属性，它用于区分不同类型的节点，例如元素节点、文本节点和注释节点。
					每种节点类型都有一个与之对应的数值，这些数值在编程时可以用来判断节点的具体类型。

				节点类型的数值及含义

					节点类型的数值是一个整数，它代表了节点的类型。
					以下是一些常见的节点类型及其对应的数值：
						● 元素节点（Element Node）：如果一个节点是元素节点，它的nodeType属性将返回1。元素节点是HTML或XML文档中的标签，如 <div> 或 <p>。
						● 属性节点（Attribute Node）：如果一个节点是属性节点，它的nodeType属性将返回2。属性节点是元素的属性，如 class 或 id。
						● 文本节点（Text Node）：如果一个节点是文本节点，它的nodeType属性将返回3。文本节点包含元素或属性中的实际文本内容。
						● 注释节点（Comment Node）：如果一个节点是注释节点，它的nodeType属性将返回8。注释节点是文档中的注释内容，如 <!-- 注释内容 -->。

				+-----------+--------------------------------------------------------+------+
				| 节点类型   | 说明                                                   | 值
				+-----------+--------------------------------------------------------+------+
				|元素节点    | 每一个HTML标签都是一个元素节点，如 <div> 、 <p>、<ul>等	 | 1
				|属性节点    | 元素节点（HTML标签）的属性，如 id 、class 、name 等。	 | 2
				|文本节点    | 元素节点或属性节点中的文本内容。	                         | 3
				|注释节点    | 表示文档注释，形式为<!-- comment text -->。	            | 8
				|文档节点    | 表示整个文档（DOM 树的根节点，即 document ）	             | 9	
				+-----------+--------------------------------------------------------+------+
			*/
			
			// script.nodeType: 1
			// console.log("script.nodeType:", script.nodeType);
			
			// script.nodeName: SCRIPT
			// console.log("script.nodeName:", script.nodeName);
			
			// script.nodeValue: null
			// console.log("script.nodeValue:", script.nodeValue); // 输出 null，元素节点对于 nodeValue 不支持

			// typeof script: object
			// console.log("typeof script:", typeof script);
			
			// Object.prototype.toString.call(script): [object HTMLScriptElement]
			// console.log("Object.prototype.toString.call(script):", Object.prototype.toString.call(script));

			script.onload = () => resolve(src);
			script.onerror = () => reject(new Error(`Failed to load ${src}`));

			// 2、插入节点
			insertScriptElement.insertBeforeFirstScriptElement(script);
		});
	}
	

	// 1、获取当前 CommonUI.js 的文件 src 路径
	const scriptSrc = getCurrentScriptPath.method_1();
	// const scriptSrc = getCurrentScriptPath.method_2();

	// 2、获取项目根路径
	const projectRootPath = getProjectRootPath(scriptSrc);

	// 3、设置其他 script 路径
	const CommonUI_Debug_path = projectRootPath + "/js/CommonUI-Debug.js";
	const CommonUI_Common_path = projectRootPath + "/js/CommonUI-Common.js"
	const CommonUI_Util_path = projectRootPath + "/js/CommonUI-Util.js"

	// 4、加载 script 脚本
	let loadScriptsSequentially = async () => {
		try {
			// 如果启用调试模式，则先加载 CommonUI-Debug.js
			await loadScript(CommonUI_Debug_path);
			await loadScript(CommonUI_Common_path);
			await loadScript(CommonUI_Util_path);
			
			console.log('全部加载完成');
			
			// 执行后续逻辑

			// new CommonUI();
			// new CommonUI({});
			// new CommonUI({b_enable_debug: false,});

			// const _obj_CommonUI = new CommonUI();
			// const _obj_CommonUI = new CommonUI({});
			const _obj_CommonUI = new CommonUI({b_enable_debug: false,});

		} catch (error) {
			console.error('Error loading scripts:', error);
		}
	}

	loadScriptsSequentially();
	
	/* End - 加载 script 脚本 */
	
	
})(window);


/** 1、判断浏览器内核及版本 */
console.log('1、判断浏览器内核及版本');
const browser = {
	versions: function () {
		const u = navigator.userAgent;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko

			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
			iPhone: u.indexOf('iPhone') > -1, //iPhone
			iPad: u.indexOf('iPad') > -1, //iPad
			webApp: u.indexOf('Safari') > -1 //Safari
		};
	}()
};

if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
	alert('移动端');
}


/** 2、判断是否支持主题色 */
console.log('2、判断是否支持主题色');
/* 判断是否支持主题色 */
if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
	console.log('Browser doesn\'t support dark mode');
}
/* 判断是否处于浅色模式 */
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
	console.log('light');
}
/* 判断是否处于深色模式 */
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	console.log('dark');
}


/** 3、JavaScript 检测浏览器是否支持 CSS 变量 */
console.log('3、JavaScript 检测浏览器是否支持 CSS 变量');
const isSupported = window.CSS && window.CSS.supports && window.CSS.supports('--test', 0);
if (isSupported) {
	/* supported */
	console.log('supported');
} else {
	/* not supported */
	console.log('not supported');

}




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

