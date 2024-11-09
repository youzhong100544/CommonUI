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
			console.log(Object.prototype);
			return Object.prototype.toString.call(o).slice(8, -1) === 'String';
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
};


export default _CommonUI_Util;