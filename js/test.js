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

console.log("Number.MAX_VALUE = %d", Number.MAX_SAFE_INTEGER);
console.log("Number.MAX_SAFE_INTEGER = %i", Number.MAX_SAFE_INTEGER);


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
	console.log(typeof a == String);   // false

	// 2. 判断已知对象类型的方法： instanceof

	console.log(c instanceof Array);    // true
	console.log(d instanceof Date);     // true
	console.log(f instanceof Function); // true
	// console.log(f instanceof function); // '(' expected.ts(
	// 注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。

}();

(function fn_test_date(){
	let now = new Date();
	console.log(`now: ${now}`);

	// 获取当前时间戳
	console.log(`new Date().valueOf(): ${new Date().valueOf()}`);
	// getTime() 返回从 1970 年 1 月 1 日至今的毫秒数
	console.log(`new Date().getTime(): ${new Date().getTime()}`);
	console.log(`Date.parse(new Date()): ${Date.parse(new Date())}`);

}());

(function fn_test_formatted_current_date(){
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
 * @param type          1-输出 JS 文本, 2-输出 HTML 文本
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
 * clientLeft,clientTop         表示内容区域的左上角相对于整个元素左上角的位置（包括边框）。(取决于边框的像数值？)
 * clientWidth,clientHeight     内容区域的宽高，不包括边框宽度值。
 * clientX、clientY             点击位置距离当前body可视区域的x，y坐标
 * offsetLeft,offsetTop         相对于最近的祖先定位元素。
 * offsetParent                 某元素的父元素 例如：this.offsetParent.tagName.toLowerCase() 得到body...
 * offsetWidth,offsetHeight     整个元素的尺寸(不包括因为滚动条变宽的宽度，包括滚动条的宽度和高度)
 * offsetX, offsetY             相对于带有定位的父盒子的x，y坐标
 * scrollLeft,scrollTop         元素滚动的距离大小
 * scrollWidth,scrollHeight     整个内容区域的宽度(包括需拉动滚动条隐藏起来的那些部分) scrollWidth = scrollTop+clientWidth
 * pageX、pageY                  对于整个页面来说，包括了被卷去的body部分的长度
 * screenX、screenY              点击位置距离当前电脑屏幕的x，y坐标
 * x、y                          和screenX、screenY一样
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

console.log("= End - test.js =================================================================================================");
