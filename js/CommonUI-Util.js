/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


let _CommonUI_Util = {
	
	objectUtils: {
		isNull: function (obj) {
			'use strict';
		},
	},

	typeUtils: {
		/**
		 * 判断是否为字符串
		 * 
		 * @param {object} o 
		 * @returns 
		 */
		isString: function (o) {
			// console.log(Object.prototype);
			return Object.prototype.toString.call(data) === '[object String]';
			// return Object.prototype.toString.call(o).slice(8, -1) === 'String';
		},

		/**
		 * 判断是否字为数字
		 * 
		 * @param {object} o 
		 * @returns 
		 */
		isNumber: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
		},
		
		isBoolean: function (o) { //是否boolean
			return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
		},
		
		isFunction: function (o) { //是否函数
			return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
		},
		
		isNull: function (o) { //是否为null
			return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
		},
		
		isUndefined: function (o) { //是否undefined
			return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
		},
		
		isObj: function (o) { //是否对象
			return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
		},
		
		isArray: function (o) { //是否数组
			return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
		},
		
		isDate: function (o) { //是否时间
			return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
		},
		
		isRegExp: function (o) { //是否正则
			return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
		},
		
		isError: function (o) { //是否错误对象
			return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
		},
		
		isSymbol: function (o) { //是否Symbol函数
			return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
		},
		
		isPromise: function (o) { //是否Promise对象
			return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
		},
		
		isSet: function (o) { //是否Set对象
			return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
		},
		
		isFalse: function (o) {
			if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') {
				return true;
			}
			return false;
		},
		
		isTrue: function (o) {
			return !this.isFalse(o);
		},
		
	},

	stringUtils: {
		isBlank: function (str) {
			if(str == null){
				return true;
			}
			if(str == ""){
				return true;
			}
			if(str.length == 0){
				return true;
			}
			if(str == undefined){
				return true;
			}
			return false;
		},
		isNotBlank: function(str){
			return !(this.isBlank(str))
		},

	},

	colorUtils: {
		/**
		 * 生成随机颜色
		 * 
		 * 使用Math.random()生成随机RGB颜色
		 * 
		 * Math.random()是JavaScript中生成随机数的基础方法，通过该方法我们可以生成范围在0到255之间的三个随机整数，分别代表RGB颜色模型中的红、绿、蓝三个通道的值。
		 * 然后将这些值转换成十六进制字符串并组合成CSS颜色表示法。
		 * 
		 * 实现步骤：
		 *     生成三个0到255之间的随机整数。
		 * 	   将这些整数转换为两位的十六进制字符串。
		 * 	   将这些字符串组合成一个有效的CSS颜色字符串。
		 * 
		 * 详细描述：
		 * 	   1. 生成随机整数：Math.random() * 256生成一个0到255之间的浮点数，通过Math.floor()将其向下取整，得到0到255之间的整数。
		 * 	   2. 转换为十六进制字符串：toString(16)方法将整数转换为十六进制字符串，padStart(2, '0')确保每个通道的值始终为两位长度（不足两位前面补0）。
		 * 	   3. 组合成CSS颜色字符串：使用模板字符串将三个十六进制字符串组合成一个CSS颜色表示法。
		 * @returns 
		 */
        getRandomColor: function () {
			const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
			const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
			const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
			return `#${r}${g}${b}`;
		},
	},
	

	/**
	 * JavaScript 有内置的静态对象 Math，它允许你执行数学计算和运算。
	 * 
	 * Math 对象有一些内置方法，可以更准确地执行这些操作。
	 * 
	 * Math 常用方法
	 *     ● Math.round()	// 将数字四舍五入到最接近的整数
	 *     ● Math.ceil()	// 将数字向上舍入到最接近的整数
	 *     ● Math.floor()	// 将数字向下舍入到最接近的整数
	 *     ● Math.random()	// 生成随机数
	 * 
	 * 
	 * Math.round() 
	 *     将数字四舍五入到最接近的整数
	 *     
	 *     示例：
	 *         console.log(Math.round(6.2)); // 6
	 *         console.log(Math.round(6.3)); // 6
	 *         console.log(Math.round(6.5)); // 7
	 *         console.log(Math.round(6.8)); // 7
	 * 
	 * 
	 * 
	 * 如何在 JavaScript 中使用 Math.random() 生成具有指定 max 的随机小数？
	 * 
	 *     如你目前所见，默认情况下，Math.random() 生成的数字很小。
	 *     如果你想生成一个从 0 开始并包含 0 并且也大于 1 的随机十进制数怎么办？为此，指定一个最大的数。
	 *     具体来说，你需要将此最大数与来自 Math.random() 的随机数相乘。
	 * 
	 *     例如，如果要生成 0 到 10 之间的随机数，可以执行以下操作：
	 *         console.log(Math.random() * 10);
	 *         // 你不会得到相同的输出
	 *         //9.495628210218175
	 * 
	 *     在上面的示例中，我将作为限制的最大数（10）与 Math.random() 的结果数相乘。
	 *     请记住，在这种情况下，随机数将介于 0 和 10 之间；这意味着大于或等于 0 且小于且永远不会等于 10。
	 * 
	 * 
	 * 如何在 JavaScript 中使用 Math.random() 生成具有指定 min 和 max 范围的随机小数
	 * 
	 *     如果你想在指定的数字范围内生成一个随机十进制数怎么办？
	 * 
	 *     我们在上面看到了如何指定最大值，但是如果你不希望范围从 0 开始（这是默认的起始范围），怎么办？
	 *     为此，你还可以指定一个最小值。
	 * 
	 *     在两个值（或范围）之间生成小数的语法是这样的：
	 *         Math.random() * (max - min) + min;	
	 * 
	 *     示例
	 *         for (let i = 0; i < 10; i++) {
	 *             // 指定最小值 - 范围开始的位置
	 *             let min = 20.4;
	 * 
	 *             // 指定最大值 - 范围将在哪里结束
	 *             let max = 29.8;
	 * 
	 *             let random = Math.random() * (max - min) + min;
	 *             console.log(random);
	 *         }
	 * 
	 *         // 23.367660078008235
	 *         // 23.874629404898894
	 *         // 20.618319061081706
	 *         // 24.78387694638931
	 *         // 28.688509917748064
	 *         // 28.38128704064839
	 *         // 26.654285786928792
	 *         // 23.105998892338377
	 *         // 21.079848130208205
	 *         // 29.592951241441554
	 * 
	 *     这里需要注意的是 min 包含在内，因此随机数将大于或等于 20.4，
	 *     而 max 不包含在内，因此结果将始终是小于且永远不会等于 29.8 的数字。
	 * 
	 * 
	 * 如何在 JavaScript 中使用 Math.random() 生成具有指定 max 的随机整数
	 * 
	 *     到目前为止，你已经了解了如何生成随机十进制数。
	 *     也就是说，有一种方法可以使用 Math.random() 生成随机整数。
	 *     你需要将 Math.random() 计算的结果传递给之前看到的 Math.floor() 方法。
	 * 
	 *     语法如下：
	 *         Math.floor(Math.random());
	 * 
	 *     Math.floor() 方法会将随机十进制数向下舍入到最接近的整数。
	 * 
	 *     最重要的是，你可以指定最大数。
	 * 
	 *     因此，例如，如果你想生成一个介于 0 和 7 之间的随机数，你可以执行以下操作：
	 *         console.log(Math.floor(Math.random() * 7));
	 * 
	 *         for (let i = 0; i < 10; i++) {
	 *             console.log(Math.floor(Math.random() * 7));
	 *         }
	 *         // 5
	 *         // 2
	 *         // 0
	 *         // 2
	 *         // 0
	 *         // 5
	 *         // 6
	 *         // 6
	 *         // 3
	 *         // 5
	 * 
	 *     在此示例中，我将最大数（在本例中为 7）与 Math.random() 的结果相乘，并将此计算的结果传递给 Math.floor()。
	 * 
	 *     这里需要注意的是，随机数将介于 0（含）和 7（不含）之间。
	 *     因此，数字可以大于或等于 0，并且小于且永远不等于 7。
	 * 
	 * 
	 * 如何在 JavaScript 中使用 Math.random() 生成具有（并包含）指定 max 的随机整数
	 * 
	 *     在上一节的示例中，我生成了一个介于数字 0（含）和 7（不含）之间的随机数。
	 * 
	 *     到目前为止，你已经看到无法生成等于指定最大值的随机数。
	 *     如果要生成包含指定最大值的随机数怎么办？
	 *     解决这个问题的方法是在计算过程中加 1。
	 * 
	 *     所以，让我们重温上一节的代码：
	 *         console.log(Math.floor(Math.random() * 7));
	 *     
	 *     你现在将重新编写代码，如下所示：
	 *         console.log(Math.floor(Math.random() * 7) + 1);
	 * 
	 *     这里需要注意的是，这段代码会生成一个介于 1（不是 0）和 7 之间的随机整数——包括 7。
	 * 
	 * 
	 * 如何在 JavaScript 中使用 Math.random() 生成具有指定 min 和 max（包含）范围的随机整数
	 * 
	 *     到目前为止，你已经了解了如何生成具有指定最大值的随机整数。
	 * 
	 *     正如你在上面的示例中看到的，使最大数字包含在内的代码使用数字 1 作为起始数字，而不是 0。
	 * 
	 *     也就是说，有一种方法可以让你指定一个包含的数字范围。
	 *     为此，你需要指定 min 和 max。
	 * 
	 *     在上一节中，你看到了如何在指定范围内生成随机数，代码类似。
	 *     唯一的变化是你将结果传递给 Math.floor() 方法以将小数四舍五入到最接近的整数。
	 * 
	 *     代码如下：
	 *         Math.floor(Math.random() * (max - min) + min);
	 * 
	 *     要使该范围包含在内，你将执行以下操作：
	 *         console.log(Math.floor(Math.random() * (max - min + 1)) + min);
	 * 
	 *     因此，要生成数字 0（含）和 10（含）之间的随机数，你可以编写以下代码：
	 *         let min = 0;
	 *         let max = 10;
	 * 
	 *         console.log(Math.floor(Math.random() * (max - min + 1)) + min);
	 * 
	 * 
	 * 参考博文：
	 * 		JavaScript 随机数——如何在 JS 中生成随机数
	 * 		https://www.freecodecamp.org/chinese/news/javascript-random-number-how-to-generate-a-random-number-in-js/
	 */
	randomUtils: {
		/**
		 * 随机浮点数的生成; 生成 [ 0, 1 ) 范围内的随机数（大于等于0，小于1）
		 * 
		 * 使用 random() 方法可以返回一个介于 0 ~ 1 之间的伪随机数（包括 0，不包括 1）。
		 */
		getRandomFloat: function () {
			let random = Math.random();

			// 0.6269732341732152
			// 0.48034385360585397
			// 0.9847783029190581
			// 0.13293035557265998
			// 0.014797790828095847
			// 0.7124963512911309
			// 0.5257318258407369
			// 0.9446953242438707
			// 0.7879831488110726
			// 0.9297455355647296
			// console.log(random);

			return random;
		},

		/**
		 * 生成随机浮点数
		 * 
		 * @param {number} min
		 * 					左边界
		 * @param {number} max
		 * 					右边界
		 * @param {number} type
		 * 					类型；
		 * 						type = 0，取 [min, max) 范围随机整数
		 * 						type = 1，取 [min, max] 范围随机整数
		 * 
		 * @returns {number} 	结果
		 */
		getRandomFloatRange: function (min = 0, max = 10, type = 0) {
			let result = 0;
			
			if (type === 0) {
				result = Math.random() * (max - min) + min;
			} else if (type === 1) {
				result = Math.random() * (max - min + 1) + min;
			} else {
				result = Math.random() * (max - min) + min;
			}

			// console.log(result);
			
			return result;

		},

		/**
		 * 生成随机整数
		 * 
		 *     Math.floor() 是一个用于向下取整的函数，它返回小于或等于给定数字的最大整数。
		 * 
		 * @param {number} min
		 * 					左边界
		 * @param {number} max
		 * 					右边界
		 * @param {number} type
		 * 					类型；
		 * 						type = 0，取 [min, max) 范围随机整数
		 * 						type = 1，取 [min, max] 范围随机整数
		 * 
		 * @returns {number} 	结果
		 */
		getRandomIntRange: function (min = 0, max = 10, type = 0) {
			let result = 0;
			
			if (type === 0) {
				result = Math.floor(Math.random() * (max - min)) + min;
			} else {
				result = Math.floor(Math.random() * (max - min + 1)) + min;
			}
			
			// console.log(result);

			return result;
		}
	},

	/**
	 * 获取数据
	 * 
	 * synchronous     adj. 同步的；同时的
	 * asynchronous    adj. [电] 异步的；不同时的；不同期的
	 */
	getData: {

		/**
		 * 同步获取数据
		 */
		synchronousGetData: function () {

		},

		// lib.dom.d.ts

		// /**
		//  * The XMLHttpRequest method **`open()`** initializes a newly-created request, or re-initializes an existing one.
		//  *
		//  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/open)
		//  */
		// open(method: string, url: string | URL): void;
		// open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
		
		// /**
		//  * The XMLHttpRequest method **`send()`** sends the request to the server.
		//  *
		//  * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/send)
		//  */
		// send(body?: Document | XMLHttpRequestBodyInit | null): void;
		
		// XMLHttpRequest.open() 初始化请求参数
		// XMLHttpRequest.send() 发送网络请求
		// XMLHttpRequest.onload() 监听请求结果
		// XMLHttpRequest.responseType 对响应结果进行声明，来对结果自动进行处理(text,json,blob,document)
		// XMLHttpRequest.onerror() 请求中断等错误发生时的处理
		// XMLHttpRequest.status 为HTTP状态码 如 404/422/403等，当为200时为正确响应
		// XMLHttpRequest.statusText HTTP状态码内容，200时为ok,404 为Not Found
		// XMLHttpRequest.response 服务器端响应的内容

		/**
		 * 
		 * @param {string} method 
		 * 					指定HTTP请求的方法，如"GET"、"POST"等。
		 * 					这个方法不区分大小写，但通常使用大写字母。
		 * @param {string | URL} url 
		 * 					请求发送到的URL。
		 * 					这个URL是相对于执行代码的当前页面的（也可以使用绝对路径）。
		 * 					重要的是，出于安全考虑，只能向同一个域中使用相同端口和协议的URL发送请求。
		 * @param {object} options 
		 * @returns 
		 */
		synchronousGetDataByXMLHttpRequest: function (method = 'GET', url = '../data/menus.json', options = {}) {
			const xhr = new XMLHttpRequest();
			
			// false 表示同步
			xhr.open(method, url, false); 

			// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let data = null;
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					data = JSON.parse(xhr.responseText);
				}
			};

			// 阻塞执行，直到请求完成
			xhr.send(); 

			console.log('XMLHttpRequest 同步获取的数据:', data);
			return data;
		},

		/**
		 * 异步获取数据
		 */
		asynchronousGetData: function () {

		},

		asynchronousGetDataByXMLHttpRequest: function (method, url, options = {}) {
			const xhr = new XMLHttpRequest();

			// true 表示异步
			xhr.open(
				'GET',
				'https://jsonplaceholder.typicode.com/posts/1',
				true
			); 

			// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					const data = JSON.parse(xhr.responseText);
					console.log('XMLHttpRequest 异步获取的数据:', data);
				}
			};

			xhr.onerror = function () {
				console.error('请求出错');
			};

			xhr.send();
		},

		// /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch) */
		// declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
		asynchronousGetDataByFetchAPI: async function(url, options = {}) {
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
				// 重新抛出错误以便调用者处理
				throw error;
			}
		},

	},

	
	/**
	 * 死循环指定的时间
	 * @param {number} duration 指定循环时间(单位: 毫秒)
	 */
	delay: function (duration) {
		var start = Date.now();
		while (Date.now() - start < duration) {}
	},
	

};


/* Start - fetch 函数 异步获取数据 */
// 1、封装 fetch 函数
/*
async function getDataByFetchAPI(url, options = {}) {
	try {
		const response = await fetch(url, options);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		// 根据响应内容类型自动解析 
		// const contentType = response.headers.get('content-type');
		// if (contentType && contentType.includes('application/json')) {
		// 	return await response.json();
		// }
		// return await response.text();
		return await response.json();
	} catch (error) {
		console.error('Fetch error:', error);
		throw error; // 重新抛出错误以便调用者处理
	}
}
*/
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


/* Start - JavaScript 监听窗口变化 */

/*
	JavaScript 监听窗口变化
		在JavaScript中，可以使用resize事件来监听浏览器窗口大小的变化。
		这个事件在窗口大小发生变化时触发，可以用来动态调整页面元素的显示。

	基本实现
		首先，我们可以编写一个函数来获取窗口的宽度和高度：
			const getWindowInfo = () => {
				const windowInfo = {
					width: window.innerWidth,
					height: window.innerHeight
				};
				console.log(windowInfo);
			};

		然后，我们可以使用addEventListener方法来监听resize事件：
			window.addEventListener('resize', getWindowInfo);
		
		这样，每当窗口大小发生变化时，getWindowInfo函数就会被调用，并输出当前窗口的宽度和高度。
	
	防抖处理
		直接监听resize事件可能会导致函数被频繁调用，影响性能。
		我们可以使用防抖技术来优化这一点。
		防抖的原理是无论窗口大小如何变化，只在变化停止后的指定时间内执行一次函数。

			const debounce = (fn, delay) => {
				let timer;
				return function() {
					if (timer) {
						clearTimeout(timer);
					}
					timer = setTimeout(() => {
						fn();
					}, delay);
				};
			};

			const debounceGetWindowInfo = debounce(getWindowInfo, 500);

			window.addEventListener('resize', debounceGetWindowInfo);
		
		在这个例子中，debounceGetWindowInfo函数只会在窗口停止变化的500毫秒后触发一次。
*/

/*
const getWindowInfo = () => {
	const windowInfo = {
		width: window.innerWidth,
		height: window.innerHeight
	};
	console.log(windowInfo);
};

window.addEventListener('resize', getWindowInfo);
*/


/*
const getWindowInfo = () => {
	const windowInfo = {
		width: window.innerWidth,
		height: window.innerHeight
	};
	console.log(windowInfo);
};

const debounce = (fn, delay) => {
	let timer;
	return function() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn();
		}, delay);
	};
};
*/

/*
const debounceGetWindowInfo = debounce(getWindowInfo, 500);

window.addEventListener('resize', debounceGetWindowInfo);
*/

/* End - JavaScript 监听窗口变化 */