/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */



/**
 * JavaScript工具类
 * 
 * 创建文件
 * 
 * 如下：
 *     • 将变量 u（工具类）赋予全局变量 window._util
 *     • 或者将变量 u 抛出：module.exports = u
 * 
 * 
 */
(function (window) {
    var u = {}; 
    
	/**
	 * @description 去除字符串前后空格
	 * @param {String} str 
	 * @return {String} 去除空格之后的字符串
	 */
	u.trim = function (str) {
	    return str.replace(/(^\s*)|(\s*$)/g, "");
	};
	
	/**
	 * @description 去除字符串所有空格
	 * @param {String} str 
	 * @return {String} 去除空格之后的字符串
	 */
	u.trimAll = function (str) {
	    return str.replace(/\s*/g, '');
	};
	
	window._util = u;
})(window);


class Utils {

    add(a, b) {
        return a + b;
    }


    subtract(a, b) {
        return a - b;
    }


}

/** 
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
 * 
 * @returns 
 */
function getRandomColor() {
	const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
	return `#${r}${g}${b}`;
}
