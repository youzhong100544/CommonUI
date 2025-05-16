/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - test.js #");
console.log("#################################################################################################################");

/* Start - JavaScript - 立即执行函数（IIFE） */

/*
	参考文献
		IIFE
		https://developer.mozilla.org/en-US/docs/Glossary/IIFE

		立即调用函数表达式
		https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE

	An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. 
	It is also known as a self-executing anonymous function. 
	The name IIFE is promoted by Ben Alman in his blog.
	
	立即调用函数表达式（IIFE）是一种 JavaScript 函数在定义后就会立即执行的习惯用法。
	它也被称为自执行匿名函数。
	IIFE 这个名字是由 Ben Alman 在他的博客中提出的。


	// standard IIFE
	(function () {
		// statements…
	})();

	// arrow function variant
	(() => {
		// statements…
	})();

	// async IIFE
	(async () => {
		// statements…
	})();


	// 标准 IIFE
	(function () {
		// 语句……
	})();

	// 箭头函数变体
	(() => {
		// 语句……
	})();

	// 异步 IIFE
	(async () => {
		// 语句……
	})();


	IIFE全称为Immediately Invoked Function Express-立即执行函数（表达式），顾名思义，是在定义之后立即执行的函数。
	IIFE主要以保护变量范围著称，时候也会被称为“自执行的匿名函数”（self-executing anonymous function）。
*/

(function () {
	// 语句……
})();

// 立即执行函数（自执行函数）
// 立即执行函数的写法
// ( function ( “ 参数 ” ) { " 函数方法 " ; } ) ( “ 给参数传的值 ” )
// ( function ( " 参数 " ) { “ 函数方法 ” ; } ( " 给参数传的值 " ) )
// ! function ( " 参数 " ) { " 函数方法 " ; } ( " 给参数传的值 " )　 
// ! 可以换作 void 或其他运算符（比如 +，-，= 等，都能起到立即执行的作用）
!function fn_IIFE_test_sum(a,b){
	console.log(`sum = ${a + b}`);
		return sum = a + b;
}(1, 2);

/* end - JavaScript - 立即执行函数（IIFE） */


/**
 * console.log格式输出全解及console的其他方法
 * 
 * console.log格式化打印
 * +---------+---------------+
 * |占位符	 |	描述
 * |%s		 |	字符串
 * |%d%i	|	整数
 * |%f		|	浮点数
 * |%o/%O	|	object对象
 * |%c		|	css样式
 * +-------------------------+
 */
(function () {

	console.log("Number.MAX_VALUE = %d", Number.MAX_SAFE_INTEGER); // Number.MAX_VALUE = 9007199254740991
	console.log("Number.MAX_SAFE_INTEGER = %i", Number.MAX_SAFE_INTEGER); // Number.MAX_SAFE_INTEGER = 9007199254740991

	
}());


/**
 * 测试 - 判断变量类型
 * Determine the variable type
 */
(function () {
	
	console.log("测试 - 判断变量类型");

	let a;
	let b = null;

	let h = 5;
	let i = "str";
	let j = false;

	let o = [];
	let p = {};

	let arr = [1, 2, 3];
	let obj = {id: 1, name: "John", age: 10};
	let arr_obj = [
		{id: 1, name: "number"},
		{id: 2, name: "string"},
		{id: 3, name: "boolean"},
		{}
	];

	console.log(`typeof a: ${typeof a}`); // typeof a: undefined
	console.log(`typeof b: ${typeof b}`); // typeof b: object

	console.log(`typeof h: ${typeof h}`); // typeof h: number

	console.log("判断一个变量是否为数组类型");

	// 1、typeof 是无法判断一个变量是否为数组类型的
	console.log(typeof arr); // object
	console.log(`typeof arr: ${typeof arr}`); // typeof arr: object

	// 2、使用 instanceof 运算符， 该运算符左边是我们想要判断的变量， 右边则是我们想要判断的对象的类
	console.log([1, 2, 3] instanceof Array); // true
	console.log(arr instanceof Array); // true
	console.log(`arr instanceof Array: ${arr instanceof Array}`); // arr instanceof Array: true

	// 3、利用构造函数来判断他的原型是否为Array
	console.log(arr.constructor === Array); // true
	console.log(`arr.constructor === Array: ${arr.constructor === Array}`); // arr.constructor === Array: true

	// 4、第三种方法利用的一个专门的方法 isArray()，
	// 用法：
	//		 Array.isArray(变量)，返回true，则说明该变量是数组类型；
	//		 反之，说明该变量不是数组类型
	console.log(Array.isArray([1, 2, 3])); // true
	console.log(Array.isArray(arr)); // true
	console.log(`Array.isArray(arr): ${Array.isArray(arr)}`); // Array.isArray(arr): true

	// 5、这种方法是调用Object.prototype.toString.call()，返回true，则说明该变量是数组类型；反之，说明该变量不是数组类型
	console.log(Object.prototype.toString.call(arr) === '[object Array]'); // true
	console.log(`Object.prototype.toString.call(arr) === '[object Array]': ${Object.prototype.toString.call(arr) === '[object Array]'}`); // Object.prototype.toString.call(arr) === '[object Array]': true

	// 6、这种方式是通过对象的原型方式来判断，直接来看例子
	console.log(arr.__proto__ === Array.prototype); // true
	console.log(`arr.__proto__ === Array.prototype: ${arr.__proto__ === Array.prototype}`); // arr.__proto__ === Array.prototype: true

	// 7、这种方式是通过 Object.getPrototypeOf()来判断是否为数组类型
	console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
	console.log(`Object.getPrototypeOf(arr) === Array.prototype: ${Object.getPrototypeOf(arr) === Array.prototype}`); // Object.getPrototypeOf(arr) === Array.prototype: true

	// 8、这方式是通过 isPrototypeOf() 方法来判断是否为数组类型
	console.log(Array.prototype.isPrototypeOf(arr)); // true
	console.log(`Array.prototype.isPrototypeOf(arr): ${Array.prototype.isPrototypeOf(arr)}`); // Array.prototype.isPrototypeOf(arr): true

}());

// 判断参数类型
!function fn_determine_parameter_type(){
	var a = "iamstring.";
	var b = 222;
	var c= [1,2,3];
	var d = new Date();
	var e = function(){alert(111);};
	var f = function(){this.name="22";};

	// 1. 最常见的判断方法：typeof
	console.log(typeof a); // string
	console.log(typeof b); // number
	console.log(typeof c); // object
	console.log(typeof d); // object
	console.log(typeof e); // function
	console.log(typeof f); // function
	// 其中typeof返回的类型都是字符串形式，需注意，例如：
	console.log(typeof a == "string"); // true
	console.log(typeof a == String);	 // false

	// 2. 判断已知对象类型的方法： instanceof

	console.log(c instanceof Array);		// true
	console.log(d instanceof Date);		 // true
	console.log(f instanceof Function); // true
	// console.log(f instanceof function); // '(' expected.ts(
	// 注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。

}();

(function fn_test_date() {
	let now = new Date();
	console.log(`now: ${now}`);

	// 获取当前时间戳
	console.log(`new Date().valueOf(): ${new Date().valueOf()}`);
	// getTime() 返回从 1970 年 1 月 1 日至今的毫秒数
	console.log(`new Date().getTime(): ${new Date().getTime()}`);
	console.log(`Date.parse(new Date()): ${Date.parse(new Date())}`);

}());

(function fn_test_formatted_current_date() {
	// getYear(); //获取当前年份(2位)
	// getFullYear(); //获取完整的年份(4位,1970-????)
	// getMonth(); //获取当前月份(0-11,0代表1月)
	// getDate(); //获取当前日(1-31)
	// getDay(); //获取当前星期X(0-6,0代表星期天)
	// getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
	// getHours(); //获取当前小时数(0-23)
	// getMinutes(); //获取当前分钟数(0-59)
	// getSeconds(); //获取当前秒数(0-59)
	// getMilliseconds(); //获取当前毫秒数(0-999)
	// toLocaleDateString(); //获取当前日期
	// toLocaleString( ); //获取日期与时间

	let date = new Date();

	// console.log(`date.getFullYear(): ${date.getFullYear()}`);
	// console.log(`date.getMonth(): ${date.getMonth()}`);
	// console.log(`date.getDate(): ${date.getDate()}`);

	const year = date.getFullYear();	
	const month = (date.getMonth() + 1).toString().padStart(2, '0');	
	const day = date.getDate().toString().padStart(2, '0'); 
	const hour = date.getHours().toString().padStart(2, '0');
	const minute = date.getMinutes().toString().padStart(2, '0');
	const second = date.getSeconds().toString().padStart(2, '0');
	const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;	
	
	console.log(formattedDate);
	console.log(`${formattedDate}`);

	const show_day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	const dayOfWeek = date.getDay(); // 获取星期几	
	console.log(show_day[dayOfWeek]);

	return formattedDate;
}());


function fn_test_formatted_date(date = new Date()){
	let var_local_date;
	if (date instanceof Date) {
		var_local_date = date;
	}

	if (typeof a == "number") {
		var_local_date = new Date(date);
	}

	if (typeof a == "string") {
		var_local_date = new Date(parseInt(date));
	}

	const year = var_local_date.getFullYear();	
	const month = (var_local_date.getMonth() + 1).toString().padStart(2, '0');	
	const day = var_local_date.getDate().toString().padStart(2, '0'); 
	const hour = var_local_date.getHours().toString().padStart(2, '0');
	const minute = var_local_date.getMinutes().toString().padStart(2, '0');
	const second = var_local_date.getSeconds().toString().padStart(2, '0');
	const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;	
	
	console.log(formattedDate);
	console.log(`${formattedDate}`);

	const show_day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	const dayOfWeek = var_local_date.getDay(); // 获取星期几	
	console.log(show_day[dayOfWeek]);
}
	
/**
 * 获取 HTMLElement 元素 style 样式信息
 *
 * @param HTMLElement
 * @param type					1-输出 JS 文本, 2-输出 HTML 文本
 * @returns {string}
 */
function fn_get_style_info_str(HTMLElement, type = 1) {
	let _string_style = "style=\"";

	let enter = "";
	let tab = "";
	if (type == 1) {
		enter = "\r\n";
		tab = "\t";
	} else {
		enter = "<br/>";
		tab = "&emsp;";
	}

	if (HTMLElement.style.width) {
		_string_style += enter + tab + "width = " + HTMLElement.style.width + ";";
	}

	if (HTMLElement.style.height) {
		_string_style += enter + tab + "height = " + HTMLElement.style.height + ";";
	}

	if (HTMLElement.style.minWidth) {
		_string_style += enter + tab + "min-width = " + HTMLElement.style.minWidth + ";";
	}

	if (HTMLElement.style.minHeight) {
		_string_style += enter + tab + "min-height = " + HTMLElement.style.minHeight + ";";
	}

	if (HTMLElement.style.maxWidth) {
		_string_style += enter + tab + "max-width = " + HTMLElement.style.maxWidth + ";";
	}

	if (HTMLElement.style.maxHeight) {
		_string_style += enter + tab + "max-height = " + HTMLElement.style.maxHeight + ";";
	}

	if (HTMLElement.style.background) {
		_string_style += enter + tab + "background = " + HTMLElement.style.background + ";";
	}

	if (HTMLElement.style.backgroundColor) {
		_string_style += enter + tab + "backgroundColor = " + HTMLElement.style.backgroundColor + ";";
	}

	if (HTMLElement.style.border) {
		_string_style += enter + tab + "border = " + HTMLElement.style.border + ";";
	}
	if (HTMLElement.style.border) {
		_string_style += enter + tab + "borderTopWidth = " + HTMLElement.style.borderTopWidth + ";";
		_string_style += enter + tab + "borderLeftWidth = " + HTMLElement.style.borderLeftWidth + ";";
	}

	if (HTMLElement.style.margin) {
		_string_style += enter + tab + "margin = " + HTMLElement.style.margin + ";";
	}

	if (HTMLElement.style.padding) {
		_string_style += enter + tab + "padding = " + HTMLElement.style.padding + ";";
	}


	if (HTMLElement.style.overflow) {
		_string_style += enter + tab + "overflow = " + HTMLElement.style.overflow + ";";
	}

	_string_style += enter + "\"" + enter;

	return _string_style;
}

/* 调用
let div01 = document.getElementById("div01");

let str = fn_format_string_style(div01);
console.log(str);
*/


/**
 * 格式化 HTMLElement 元素信息
 *
 * clientLeft,clientTop				 表示内容区域的左上角相对于整个元素左上角的位置（包括边框）。(取决于边框的像数值？)
 * clientWidth,clientHeight		 内容区域的宽高，不包括边框宽度值。
 * clientX、clientY						 点击位置距离当前body可视区域的x，y坐标
 * offsetLeft,offsetTop				 相对于最近的祖先定位元素。
 * offsetParent								 某元素的父元素 例如：this.offsetParent.tagName.toLowerCase() 得到body...
 * offsetWidth,offsetHeight		 整个元素的尺寸(不包括因为滚动条变宽的宽度，包括滚动条的宽度和高度)
 * offsetX, offsetY						 相对于带有定位的父盒子的x，y坐标
 * scrollLeft,scrollTop				 元素滚动的距离大小
 * scrollWidth,scrollHeight		 整个内容区域的宽度(包括需拉动滚动条隐藏起来的那些部分) scrollWidth = scrollTop+clientWidth
 * pageX、pageY									对于整个页面来说，包括了被卷去的body部分的长度
 * screenX、screenY							点击位置距离当前电脑屏幕的x，y坐标
 * x、y													和screenX、screenY一样
 *
 * @param HTMLElement
 * @param type
 * @returns {string}
 */
function fn_get_div_size_info(HTMLElement, type = 1) {
	let _string_style = "{";

	let enter = "";
	let tab = "";
	if (type == 1) {
		enter = "\r\n";
		tab = "\t";
	} else {
		enter = "<br/>";
		tab = "&emsp;";
	}

	_string_style += enter + tab + "clientWidth = " + HTMLElement.clientWidth + ";";
	_string_style += enter + tab + "clientHeight = " + HTMLElement.clientHeight + ";";
	_string_style += enter + tab + "clientTop = " + HTMLElement.clientTop + ";";
	_string_style += enter + tab + "clientLeft = " + HTMLElement.clientLeft + ";";

	_string_style += enter + tab + "offsetWidth = " + HTMLElement.offsetWidth + ";";
	_string_style += enter + tab + "offsetHeight = " + HTMLElement.offsetHeight + ";";
	_string_style += enter + tab + "offsetLeft = " + HTMLElement.offsetLeft + ";";
	_string_style += enter + tab + "offsetTop = " + HTMLElement.offsetTop + ";";
	_string_style += enter + tab + "offsetX = " + HTMLElement.offsetX + ";";
	_string_style += enter + tab + "offsetY = " + HTMLElement.offsetY + ";";

	_string_style += enter + tab + "scrollWidth = " + HTMLElement.scrollWidth + ";";
	_string_style += enter + tab + "scrollHeight = " + HTMLElement.scrollHeight + ";";
	_string_style += enter + tab + "scrollLeft = " + HTMLElement.scrollLeft + ";";
	_string_style += enter + tab + "scrollTop = " + HTMLElement.scrollTop + ";";

	_string_style += enter;

	_string_style += enter + tab + "getBoundingClientRect().left = " + HTMLElement.getBoundingClientRect().left + ";";
	_string_style += enter + tab + "getBoundingClientRect().top = " + HTMLElement.getBoundingClientRect().top + ";";

	_string_style += enter;

	_string_style += enter + tab + "pageX = " + HTMLElement.pageX + ";";
	_string_style += enter + tab + "pageY = " + HTMLElement.pageY + ";";
	_string_style += enter + tab + "screenX = " + HTMLElement.screenX + ";";
	_string_style += enter + tab + "screenY = " + HTMLElement.screenY + ";";
	_string_style += enter + tab + "clientX = " + HTMLElement.clientX + ";";
	_string_style += enter + tab + "clientY = " + HTMLElement.clientY + ";";

	_string_style += enter + "}" + enter;

	return _string_style;
}


function setCoords(e) {
		let str = `
				Offset X/Y: ${e.offsetX}, ${e.offsetY}
				Viewport X/Y: ${e.clientX}, ${e.clientY}
				Page X/Y: ${e.pageX}, ${e.pageY}
				Screen X/Y: ${e.screenX}, ${e.screenY}`;
}


(function (){

	console.log(`The arguments object(Arguments 对象)`);

	function func1(a, b, c) {

		console.log(`typeof arguments: ${typeof arguments}`); // 'object'

		console.log(`arguments.length: ${arguments.length}`);

		console.log(`arguments[0]: ${arguments[0]}`);
		// Expected output: 1

		console.log(`arguments[1]: ${arguments[1]}`);
		// Expected output: 2

		console.log(`arguments[2]: ${arguments[2]}`);
		// Expected output: 3
	}

	func1(1, 2, 3)

	/*
		arguments对象不是一个 Array 。
		它类似于Array，但除了 length 属性和索引元素之外没有任何Array属性。
		例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
	*/

}());


/**
 * 测试 格式化字符串
 */
(function (){

	console.log("测试 格式化字符串");

	console.log("1、String.prototype.replace() --------------------------------------");

	console.log("10—01 -----------------------------");

	let template_01 = "Hello, my name is {name} and I am {age} years old.";
	let formatted_01 = template_01.replace("{name}", "李雷").replace("{age}", 30);
	// Hello, my name is 李雷 and I am 30 years old.
	console.log(formatted_01);
	// Hello, my name is  and I am 0 years old.
	console.log(template_01.replace("{name}", "").replace("{age}", 0));

	console.log("2、自定义格式化函数 --------------------------------------");

	// lib.es5.d.ts

	/**
	 * Replaces text in a string, using a regular expression or search string.
	 * @param searchValue A string or regular expression to search for.
	 * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
	 */
	// replace(searchValue: string | RegExp, replaceValue: string): string;

	/**
	 * Replaces text in a string, using a regular expression or search string.
	 * @param searchValue A string to search for.
	 * @param replacer A function that returns the replacement text.
	 */
	// replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;


	
	// lib.es2015.core.d.ts

	/*
	interface RegExpConstructor {
		new (pattern: RegExp | string, flags?: string): RegExp;
		(pattern: RegExp | string, flags?: string): RegExp;
	}
	*/


	/*
		replace()方法使用一个替换值（replacement）替换掉一个匹配模式（pattern）在原字符串中某些或所有的匹配项，并返回替换后的字符串。
		这个替换模式可以是字符串或者RegExp（正则表达式），替换值可以是一个字符串或者一个函数。
	
		1、语法
			str.replace(regexp|substr, newSubStr|function[, flags])
		
		1、正则表达式的创建

			JS正则的创建有两种方式： new RegExp() 和 直接字面量。

				//使用RegExp对象创建
				var regObj = new RegExp("(^\s+)|(\s+$)","g");
			
				//使用直接字面量创建
				var regStr = /(^\s+)|(\s+$)/g;

				规则：没有正则含义的元字符（或组合字符）要对字符进行双重转义。
					// 字面量模式与等价的字符串
					var pattern1 = /\[bc\]at/;				 // 等价于 var pattern1 = new RegExp("\\[bc\\]at", "i");
					var pattern2 = /\.at/i;						// 等价于 var pattern2 = new RegExp("\\.at", "i");
					var pattern3 = /name\/age/;				// 等价于 var pattern3 = new RegExp("name\\/age", "i");
					var pattern4 = /\d.\d{1,2}/;			 // 等价于 var pattern4 = new RegExp("\\d.\\d{1,2}", "i");
					var pattern5= /\w\\hello\\123/;		// 等价于 var pattern5 = new RegExp("\\w\\\\hello\\\\123", "i");



			其中 g 表示全文匹配，与之相关的还有 i 和m，i 表示匹配时忽略大小写，m 表示多行匹配，如果多个条件同时使用时，则写成：gmi 
	*/

	console.log("20—01 -----------------------------");

	console.log("myCustomFormatString_20_10 ---------------");

	function myCustomFormatString_20_10(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) => args[index]);
		
	}
	// Hello, my name is 张三 and I am 26 years old.
	console.log(myCustomFormatString_20_10("Hello, my name is {0} " + "and I am {1} years old.", "张三", 26));
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am undefined years old.
	console.log(myCustomFormatString_20_10("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10("Hello, my name is {0} and I am {1} years old.", "", 0));

	
	console.log("myCustomFormatString_20_10_01 ---------------");

	function myCustomFormatString_20_10_01(str, ...args) {
		let pattern = /\{(\d+)\}/g;
		return str.replace(pattern, (match, index) => args[index]);
	}
	// Hello, my name is 张三 and I am 26 years old.
	console.log(myCustomFormatString_20_10_01("Hello, my name is {0} " + "and I am {1} years old.", "张三", 26));
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10_01("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am undefined years old.
	console.log(myCustomFormatString_20_10_01("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10_01("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_01("Hello, my name is {0} and I am {1} years old.", "", 0));

	
	console.log("myCustomFormatString_20_10_02 ---------------");
	
	function myCustomFormatString_20_10_02(str, ...args) {
		// let pattern = /\{(\d+)\}/g; 
		// 等价于 
		// let pattern = new RegExp("\\{(\\d+)\\}", "g");
		let pattern = new RegExp("\\{(\\d+)\\}", "g");
		return str.replace(pattern, (match, index) => args[index]);
	}
	// Hello, my name is 张三 and I am 26 years old.
	console.log(myCustomFormatString_20_10_02("Hello, my name is {0} " + "and I am {1} years old.", "张三", 26));
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10_02("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am undefined years old.
	console.log(myCustomFormatString_20_10_02("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10_02("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_02("Hello, my name is {0} and I am {1} years old.", "", 0));


	console.log("myCustomFormatString_20_10_03 ---------------");

	function myCustomFormatString_20_10_03(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) => args[index] ? args[index] : match);
	}

	// Hello, my name is 张三 and I am 26 years old.
	console.log(myCustomFormatString_20_10_03("Hello, my name is {0} " + "and I am {1} years old.", "张三", 26));
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10_03("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am {1} years old.
	console.log(myCustomFormatString_20_10_03("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10_03("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is {0} and I am {1} years old.
	console.log(myCustomFormatString_20_10_03("Hello, my name is {0} and I am {1} years old.", "", 0));


	console.log("myCustomFormatString_20_10_11 -----------------------------");


	// 解决方案
	// 方案1：使用 in 检查数组索引存在性
	function myCustomFormatString_20_10_11(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) =>
			index in args ? args[index] : match
		);
	}
	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_20_10_11("Hello, my name is {name} " + "and I am {age} years old.", "张三", 26));
	
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10_11("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am {1} years old.
	console.log(myCustomFormatString_20_10_11("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10_11("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_11("Hello, my name is {0} and I am {1} years old.", "", 0));

	console.log("myCustomFormatString_20_10_12 -----------------------------");

	// 方案2：使用 nullish 合并运算符 ?? (ES2020+)
	function myCustomFormatString_20_10_12(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) =>
			args[index] ?? match
		);
	}
	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_20_10_12("Hello, my name is {name} " + "and I am {age} years old.", "张三", 26));
	
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10_12("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am {1} years old.
	console.log(myCustomFormatString_20_10_12("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10_12("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_12("Hello, my name is {0} and I am {1} years old.", "", 0));

	
	console.log("myCustomFormatString_20_10_13 -----------------------------");

	// 方案3：显式检查 undefined
	function myCustomFormatString_20_10_13(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) =>
			args[index] !== undefined ? args[index] : match
		);
	}
	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_20_10_13("Hello, my name is {name} " + "and I am {age} years old.", "张三", 26));
	
	// Hello, my name is 李四 and I am 25 years old.
	console.log(myCustomFormatString_20_10_13("Hello, my name is {0} and I am {1} years old.", "李四", 25));

	// Hello, my name is 王五 and I am {1} years old.
	console.log(myCustomFormatString_20_10_13("Hello, my name is {0} and I am {1} years old.", "王五"));
	// Hello, my name is 赵六 and I am 27 years old.
	console.log(myCustomFormatString_20_10_13("Hello, my name is {0} and I am {1} years old.", "赵六", 27, "男"));

	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_13("Hello, my name is {0} and I am {1} years old.", "", 0));

	
	console.log("myCustomFormatString_20_10_14 -----------------------------");

	// 方案4：完整健壮版本（推荐）
	function myCustomFormatString_20_10_14_1(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) => {
			// 检查索引是否有效
			if (index >= 0 && index < args.length) {
				return args[index]; // 返回任何值，包括 0、""、false 等
			}
			return match; // 保留原始占位符
		});
	}
	function myCustomFormatString_20_10_14_2(str, ...args) {
		return str.replace(/\{(\d+)\}/g, (match, index) => {
			const numIndex = Number(index);
			return Number.isInteger(numIndex) && numIndex >= 0 && numIndex < args.length ? args[numIndex] : match;
		});
	}

	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_20_10_14_1("Hello, my name is {name} " + "and I am {age} years old.", "张三", 26));
	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_20_10_14_2("Hello, my name is {name} " + "and I am {age} years old.", "张三", 26));
	
	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_14_1("Hello, my name is {0} and I am {1} years old.", "", 0));
	// Hello, my name is  and I am 0 years old.
	console.log(myCustomFormatString_20_10_14_2("Hello, my name is {0} and I am {1} years old.", "", 0));

	
	console.log("myCustomFormatString_20_20 ---------------");

	function myCustomFormatString_20_20(str, ...args) {
		// let pattern = /\{(\d+)\}/g;
		let pattern = /\{(\w+)\}/g;
		return str.replace(pattern, (match, index) => args[index]);
	}
	// Hello, my name is undefined and I am undefined years old.
	console.log(myCustomFormatString_20_20("Hello, my name is {name} " + "and I am {age} years old.", "张三", 26));
	// Hello, my name is undefined and I am undefined years old.
	console.log(myCustomFormatString_20_20("Hello, my name is {name} and I am {age} years old.", "李四", 25));

	// Hello, my name is undefined and I am undefined years old.
	console.log(myCustomFormatString_20_20("Hello, my name is {name} and I am {age} years old.", "王五"));
	// Hello, my name is undefined and I am undefined years old.
	console.log(myCustomFormatString_20_20("Hello, my name is {name} and I am {age} years old.", "赵六", 27, "男"));

	// Hello, my name is undefined and I am undefined years old.
	console.log(myCustomFormatString_20_20("Hello, my name is {name} and I am {age} years old.", "", 0));


	console.log("myCustomFormatString_20_30 -----------------------------");

	function myCustomFormatString_20_30(template, values) {
		// var pattern = /\{(\w+)\}/g; 
		// 等价于 
		// var pattern = new RegExp("\\{(\\w+)\\}", "g");
		return template.replace(/\{(\w+)\}/g, (match, key) => values[key]);
	}
	// Hello, my name is 李雷 and I am 25 years old. and I am boy:true.
	console.log(myCustomFormatString_20_30("Hello, my name is {name} " + "and I am {age} years old." + " and I am boy:{isBoy}.", {name: "李雷", age: 25, isBoy: true}));
	// Hello, my name is 李雷 and I am 25 years old. and I am boy:true.
	console.log(myCustomFormatString_20_30("Hello, my name is {name} and I am {age} years old. and I am boy:{isBoy}.", { name: "李雷", age: 25, isBoy: true }));
	// Hello, my name is 李雷 and I am 25 years old. and I am boy:undefined.
	console.log(myCustomFormatString_20_30("Hello, my name is {name} and I am {age} years old. and I am boy:{isBoy}.", {name: "李雷", age: 25}));
	// Hello, my name is 韩梅梅 and I am 25 years old. and I am boy:false.
	console.log(myCustomFormatString_20_30("Hello, my name is {name} and I am {age} years old. and I am boy:{isBoy}.", {name: "韩梅梅", age: 25, sex: "女", isBoy: false}));
	// Hello, my name is  and I am 0 years old. and I am boy:false.
	console.log(myCustomFormatString_20_30("Hello, my name is {name} and I am {age} years old. and I am boy:{isBoy}.", {name: "", age: 0, isBoy: false}));

	console.log("02—03 -----------------------------");

	// str.replace(/\{(\d+)\}/g, (match, index) => args[index] ? args[index] : match);
	// 上面这种写法会出现问题
	// 当 args[index] 为 0 或空字符串 "" 时，|| 运算符会将其视为 falsy 值，从而返回 match（原始模板标记），导致替换"失败"。
	
	function myCustomFormatString_03(template, values) {
		/* 
		const result = template.replace(/\{(\w+)\}/g, (match, key) => 
			key in values ? values[key] : match
		);
		*/

		const result = template.replace(/\{(\w+)\}/g, (match, key) => {
			// 检查属性是否存在（包括值为undefined的情况）
			if (!values.hasOwnProperty(key)) {
				return match; // 保留原标记
			}
			// 显式转换所有值为字符串（可选）
			return String(values[key]);
		});

		return result;
	}

	// Hello, my name is 韩梅梅 and I am 23 years old.
	console.log(myCustomFormatString_03("Hello, my name is {name} and I am {age} years old.", {name: "韩梅梅", age: 23}));
	// Hello, my name is 韩梅梅 and I am {age} years old.
	console.log(myCustomFormatString_03("Hello, my name is {name} and I am {age} years old.", { name: "韩梅梅" }));
	// Hello, my name is 韩梅梅 and I am 23 years old.
	console.log(myCustomFormatString_03("Hello, my name is {name} and I am {age} years old.", { name: "韩梅梅", age: 23, sex: "女" }));

	// Hello, my name is 悟空 and I am 1061 years old.
	console.log(myCustomFormatString_03(`Hello, my name is {name} and I am {age} years old.`, {name: "悟空", age: 1061}));
	// Hello, my name is 悟空 and I am {age} years old.
	console.log(myCustomFormatString_03(`Hello, my name is {name} and I am {age} years old.`, {name: "悟空", age: 0}));
	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_03(`Hello, my name is {name} and I am {age} years old.`, {name: "", age: 0}));

	console.log("02—04 -----------------------------");

	function myCustomFormatString_04(template, values) {
		// var pattern1 = /\{(\w+)\}/g; 等价于 var pattern1 = new RegExp("\\{(\\w+)\\}", "g");
		let pattern = new RegExp("\\{(\\w+)\\}", "g");
		// return template.replace(pattern, (match, key) => values[key]);
		// return template.replace(pattern, (match, key) => values[key] || '{}');
		return template.replace(pattern, (match, key) => {
			return values[key] || match;
		});
	}

	// Hello, my name is 韩梅梅 and I am 23 years old.
	console.log(myCustomFormatString_04("Hello, my name is {name} and I am {age} years old.", {name: "韩梅梅", age: 23}));
	// Hello, my name is 韩梅梅 and I am {age} years old.
	console.log(myCustomFormatString_04("Hello, my name is {name} and I am {age} years old.", { name: "韩梅梅" }));
	// Hello, my name is 韩梅梅 and I am 23 years old.
	console.log(myCustomFormatString_04("Hello, my name is {name} and I am {age} years old.", { name: "韩梅梅", age: 23, sex: "女" }));

	// Hello, my name is 悟空 and I am 1061 years old.
	console.log(myCustomFormatString_04(`Hello, my name is {name} and I am {age} years old.`, {name: "悟空", age: 1061}));
	// Hello, my name is 悟空 and I am {age} years old.
	console.log(myCustomFormatString_04(`Hello, my name is {name} and I am {age} years old.`, {name: "悟空", age: 0}));
	// Hello, my name is {name} and I am {age} years old.
	console.log(myCustomFormatString_04(`Hello, my name is {name} and I am {age} years old.`, {name: "", age: 0}));

}());


(function (){
	// 测试 字符串模板
	console.log("Template literals (Template strings)");

	console.log("test 10 -----------------------------------------------");
	let name = "李雷";
	let age = 25;
	let sex = "男";
	let message = `大家好，我叫${name}，性别${sex},今年${age}岁了`;
	console.log(message);
	console.log(`大家好，我叫${name}，性别${sex},今年${age}岁了`);

	console.log("test 20 -----------------------------------------------");

}());


/**
 * 测试 - 生成树形菜单
 */
(function (){
	// 测试 - 生成树形菜单
	console.log("测试 - 生成树形菜单");

	let menuArray_1 = [
		{ id: 1, name: "办公管理", pid: 0 },
		{ id: 2, name: "请假申请", pid: 1 },
		{ id: 3, name: "出差申请", pid: 1 },
		{ id: 4, name: "请假记录", pid: 2 },
		{ id: 5, name: "系统设置", pid: 0 },
		{ id: 6, name: "权限管理", pid: 5 },
		{ id: 7, name: "用户角色", pid: 6 },
		{ id: 8, name: "菜单设置", pid: 6 },
	];

	let menuArray_2 = [
		{
			id: 1,
			name: "办公管理",
			pid: 0,
			children: [
				{
					id: 2,
					name: "请假申请",
					pid: 1,
					children: [
						{
							id: 4,
							name: "请假记录",
							pid: 2
						}
					]
				},
				{
					id: 3,
					name: "出差申请",
					pid: 1,
					children: []
				}
			]
		},
		{
			id: 5,
			name: "系统设置",
			pid: 0,
			children: [
				{
					id: 6,
					name: "权限管理",
					pid: 5,
					children: [
						{
							id: 7,
							name: "用户角色",
							pid: 6
						},
						{
							id: 8,
							name: "菜单设置",
							pid: 6
						},
					]
				},
			]
		}
	];


	function _fn_createTreeMenu_test_10_01(_data_menu_array) {
		if (_data_menu_array) {

		}
	}

	_fn_createTreeMenu_test_10_01(menuArray_1);

	/**
	 * 递归生成树形菜单
	 *
	 * @param _data
	 *							数据
	 * @param parentElement
	 *							父节点
	 * @param currentDepth
	 *							递归深度
	 *
	 * @returns {HTMLUListElement}
	 */
	function _fn_createTreeMenu_test_20_01(data, currentDepth = 0) {
		const ul = document.createElement('ul');
		ul.className = 'tree-ul';

		data.forEach(item => {
			const li = document.createElement('li');
			li.className = 'tree-li';
			li.dataset.depth = currentDepth; // 存储当前深度

			const nodeContent = document.createElement('div');
			nodeContent.className = 'node-content';
			nodeContent.textContent = `${'	'.repeat(currentDepth)}${item.name} (深度: ${currentDepth})`;

			// 点击事件 - 打印当前深度
			nodeContent.addEventListener('click', function(e) {
				e.stopPropagation();
				console.log(`当前节点: "${item.name}", 深度: ${currentDepth}`);
			});

			li.appendChild(nodeContent);

			// 如果有子节点，递归创建
			if (item.children && item.children.length > 0) {
				// 添加展开/折叠控制按钮
				const toggleBtn = document.createElement('span');
				toggleBtn.className = 'toggle-btn';
				toggleBtn.textContent = '[+]';
				nodeContent.prepend(toggleBtn);

				// 递归创建子菜单
				const childrenContainer = _fn_createTreeMenu_test_20_01(item.children, currentDepth + 1);
				li.appendChild(childrenContainer);
				childrenContainer.style.display = 'none'; // 默认折叠

				// 展开/折叠功能
				toggleBtn.addEventListener('click', function(e) {
					e.stopPropagation();
					if (childrenContainer.style.display === 'none') {
						childrenContainer.style.display = 'block';
						toggleBtn.textContent = '[-]';
					} else {
						childrenContainer.style.display = 'none';
						toggleBtn.textContent = '[+]';
					}
				});
			}

			ul.appendChild(li);
		});

		return ul;
	}

	// console.log("Start - _fn_createTreeMenu_test_20_01()");
	// console.log(_fn_createTreeMenu_test_20_01(menuArray_2));
	// console.log("end - _fn_createTreeMenu_test_20_01()");

	function _fn_createTreeMenu_test_20_02(data, currentDepth = 0) {
		let _ul_html =
			`
				<ul>
					{item_html}
				</ul>
			`
		;
		let _svg_icon_html =
			`
				<div class="tree-line">
					SVG
				</div>
			`
		;
		let _svg_icon_submenu_toggle_html =
			`
				<div class="svg-submenu-toggle">
					+
				</div>
			`
		;

		let _sidebar_submenu_ul_li_item_html =
			`
				<li data-depth = {depth}>
					<a href="javascript: void(0);" item-id={id}>
						{svg_icon}
						<div class="text"><span>{name}</span></div>
						{svg_icon_submenu_toggle}
					</a>
					{submenu}
				</li>
			`
		;

		function myCustomFormatString(template, values) {
			return template.replace(/\{(\w+)\}/g, (match, key) => values[key]);
		}

		let result = "";
		
		for (let i = 0; i < data.length; i++) { 
			let item = data[i];

			// console.log(`currentDepth:${currentDepth}`);
			let values = {
				depth: currentDepth,
				id: item.id,
				name: item.name
			};

			/* 
			for (let key in values) {
				console.log(key + ': ' + values[key]);
			}
			*/

			values.svg_icon = _svg_icon_html;
			// 添加键值对
			// values["salary"] = 5000;
			// values.education = "本科";
			
			if (item.children && item.children.length > 0) {
				values["svg_icon_submenu_toggle"] = _svg_icon_submenu_toggle_html;
				values["submenu"] = _fn_createTreeMenu_test_20_02(item.children, currentDepth + 1);
			} else {
				// values["svg_icon_submenu_toggle"] = "";
				// values["submenu"] = "";
				values.svg_icon_submenu_toggle = "";
				values.submenu = "";
			}

			result += myCustomFormatString(_sidebar_submenu_ul_li_item_html, values);
		}

		return myCustomFormatString(_ul_html, {item_html: result});
	}

	// console.log("Start - _fn_createTreeMenu_test_20_02()");
	// console.log(_fn_createTreeMenu_test_20_02(menuArray_2, 0));
	// console.log("end - _fn_createTreeMenu_test_20_02()");

}());

/**
 * 测试 - document.currentScript 
 * 
 * readonly currentScript: HTMLOrSVGScriptElement | null;
 */
(function () {
	// lib.dom.d.ts 
	// 7931 行
	/**
     * Returns the script element, or the SVG script element, that is currently executing, as long as the element represents a classic script. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.
     *
     * Returns null if the Document is not currently executing a script or SVG script element (e.g., because the running script is an event handler, or a timeout), or if the currently executing script or SVG script element represents a module script.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/currentScript)
     */
    // readonly currentScript: HTMLOrSVGScriptElement | null;

	// lib.dom.d.ts 
	// 8110 行
	/**
     * Retrieves a collection of all script objects in the document.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scripts)
     */
    // readonly scripts: HTMLCollectionOf<HTMLScriptElement>;

	// 获取当前正在执行的 script 元素
	let currentScript = document.currentScript;
	let scripts = document.scripts;

	console.log(currentScript); // <script type="text/javascript" src="../../js/test/test.js"></script>

	/*
		下面的测试是在两个不同的文件中调用方法
		
		test_a.js
			function getCurrentScript() {
				let currentScript = document.currentScript;
				return currentScript;
			}
		
		test_b.js
			let currentScript = getCurrentScript();
			console.log(currentScript);

		说明：
			在 test_a.js 文件中定义方法，在 test_b.js 中调用并打印；
			输出的结果是 
				<script type=​"text/​javascript" src=​"../​../​js/​test/​test_b.js">​</script>​
	*/
}());

console.log("= End - test.js =================================================================================================");
