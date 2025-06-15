/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - CommonUI-Admin-main-tabs.js #");
console.log("#################################################################################################################");

/**
 * 标签页
 */

class Tab {
	constructor(attr) {
		// 获取当前调用实例对象
		// that = this;
		// 获取tab盒子
		this.tabBox = document.querySelector(attr);
		// 获取➕元素对象
		this.add = this.tabBox.querySelector('.tabadd');
		// 获取ul
		this.ul = this.tabBox.querySelector('.fisrstnav ul:first-child');
		// 获取section盒子
		this.fSection = this.tabBox.querySelector('.tabscon');
		// 页面加载初始化绑定事件
		this.init();
	}

	// 为每个标签初始化绑定事件绑定事件
	init() {
		// 获取目标对象
		this.updateElement();
		// 给➕绑定点击事件
		this.add.onclick = this.addTab.bind(this.add,this); // 将全局当前函数的this指向改为全局this
		// this指向当前Tab实例
		// 给tab标签下的Li标签绑定点击事件并添加自定义属性
		for (var i = 0; i < this.lis.length; i++) {
			// 给li标签添加自定义属性
			this.lis[i].index = i;
			// this.toggleTab不加括号，只有当点击之后再调用
			this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this); // 并没有改变当前函数的this指向，只是将当前函数的this指向指回当前点击对象，并将全局this作为参数传入，避免定义全局this（that）
			// 给❌绑定点击事件
			this.delete[i].onclick = this.deleteTab.bind(this.delete[i],this);
			// 给span标签绑定双击事件
			this.spans[i].ondblclick = this.editTab;
			// 给section绑定双击事件
			this.sections[i].ondblclick = this.editTab;
		}
	}

	updateElement() {
		// 获取所有的li标签
		this.lis = this.tabBox.querySelectorAll('li');
		// 获取所有的section标签
		this.sections = this.tabBox.querySelectorAll('section');
		// 获取❌元素对象
		this.delete = this.tabBox.querySelectorAll('.icon-guanbi');
		// 获取所有的li标签里面的span
		this.spans = this.tabBox.querySelectorAll('.fisrstnav ul li span:first-child');
	}

	// 清除li标签和section标签所有的选中类
	clear() {
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}

	// tab栏切换 这里的this 指向调用者 即当前点击li标签
	toggleTab(that) {
		// 先清除已选中类 由于this指向li标签  因此需要用全局that调用实例对象获取当前实例对象的方法clear
		that.clear();
		// 为当前点击的Li标签添加liactive
		this.className = 'liactive';
		// 为对应的section标签添加选中类conactive
		that.sections[this.index].className = 'conactive';
	}

	// 添加tab项和内容项
	addTab(that) {
		// 清除默认样式
		that.clear();
		var num = Math.floor(Math.random() * 20);
		// 创建li标签
		var li = '<li class="liactive"><span>新建tab页</span><span class="iconfont icon-guanbi"></span></li>';
		// es6 insertAdjacentHTML 直接将字符串元素添加到父元素中
		that.ul.insertAdjacentHTML('beforeend',li);
		// 创建section标签
		var section = '<section class="conactive">新建tab之'+num+'</section>';
		that.fSection.insertAdjacentHTML('beforeend',section);
		// 重置tab结构
		that.init();
	}

	// 删除当前的tab项和内容项
	// 注意： e需要作为参数需要放置在最后
	deleteTab(that,e) {
		// 阻止父元素切换事件
		e.stopPropagation();
		// 获取父元素的Index
		var index = this.parentNode.index;
		// 移除tab标签以及内容项
		that.lis[index].remove();
		that.sections[index].remove();
		// 重置tab结构
		that.init();
		// 如果有选中项 则不进行默认选中设置
		if (that.tabBox.querySelector('.liactive')) return;
		// 没有选中项 设置前一个为默认的选中项
		index--;
		that.lis[index] && that.lis[index].click();
	}

	// 双击tab项文字或者内容项文字，修改里面的文字内容
	editTab() {
		// 获取当前选中元素对象
		var _that = this;
		// 禁止默认选中文字
		window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty();
		// 获取当前元素文本内容
		var content = this.innerHTML;
		// 添加input节点
		this.innerHTML = '<input type="text" />';
		// 设置Input标签vlaue值 以及默认被选中
		var input = this.children[0];
		input.value = content;
		input.select();
		// input标签失去焦点移除input标签
		input.onblur = function () {
			_that.innerHTML = this.value;
		}
		// 键盘事件移除input标签
		input.onkeyup = function (e) {
			// 如果是回车键
			if (e.keyCode === 13) {
				this.blur();
			}
		}
	}
}

window.addEventListener('load',function () {
    // var that;

    new Tab('#tab');
})


console.log("= End - CommonUI-Admin-main-tabs.js ===============================================================================");
