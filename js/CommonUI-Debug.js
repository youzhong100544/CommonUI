/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - CommonUI-Debug.js #");
console.log("#################################################################################################################");

const isSupported = window.CSS && window.CSS.supports && window.CSS.supports('--bEnableDebug', 'true');
if (isSupported) {
	/* supported */
	console.log('当前浏览器支持 CSS变量')
} else {
	/* not supported */
	console.log('当前浏览器不支持 CSS变量')
}

console.log("= End - CommonUI-Debug.js =======================================================================================");
