/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


/* 菜单 */

/** 
 * 菜单
 */
class CommonUIMenu { 
	static instance;

	constructor() {
		console.log("CommonUIMenu 构造函数");

		// 单例模式
		if (CommonUIMenu.instance) {
			return CommonUIMenu.instance;
		}
		this.timestamp = Date.now();
		CommonUIMenu.instance = this;
	}
	
	static getInstance(name) {
		if (!this.instance) {
			this.instance = new CommonUIMenu(name);
		}
		return this.instance;
	}

	init(options = {}) {
		if (Object.keys(options).length === 0) {
			console.log("CommonUIMenu 初始化 -> 参数 options 为空");
			return;
		} 

		if (!options.element) {
			console.log("参数 options -> element 为空");
			return;
		}

		if (!options.dataURL) {
			console.log("参数 options -> dataURL 为空");
			return;
		}

	}

	getData() {
		const data = _CommonUI_Util.getData.synchronousGetDataByXMLHttpRequest();
	}

	/**
	 * 子菜单展开/关闭
	 */
	dropdownSubmenu() {

	}
}

(function (window) {
	'use strict';

})(window);
