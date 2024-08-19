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


/*
	variables   变量
	constants   常量
 */

var var_test_array_01 = new Array(11, 22, 33, 44, 55);
var var_test_array_02 = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < var_test_array_01.length; i++) {
	console.log(var_test_array_01[i]);
	// console.log 格式化
	console.log("var_test_array_01[%d] = %d", i, var_test_array_01[i]);
	// 模板字符串
	console.log(`var_test_array_01[${i}] = ${var_test_array_01[i]}`);

}

console.log("-------------------");

for (let i = 0; i < var_test_array_01.length; i++) {
	console.log(var_test_array_01[i]);
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

console.log("= End - test.js ===========================================================================================================");
