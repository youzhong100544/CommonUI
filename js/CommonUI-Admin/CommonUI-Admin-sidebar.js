/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - CommonUI-Admin-sidebar.js #");
console.log("#################################################################################################################");

/*
	href="#"、href="javascript:void(0);"、href="javascript:;"的区别
*/

function _fn_toggle_submenu_show_or_hide(_a_label_element) {
	_a_label_element.nextElementSibling.classList.toggle('show');
}

function _fn_toggle_submenu_show_or_hide_with_jQuery(_a_label_element) {
	// JavaScript对象 -> jQuery对象
	// var v = document.getElementById("#v"); // JavaScript对象
	// var $v = $(v); // jQuery对象
	// $v.css("background", "red"); // 使用jQuery方法设置背景颜色
	$(_a_label_element.nextElementSibling).slideToggle(300);
}

async function fn_get_json_data(url, options = {}) {
	try {
		/*
		options = {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				Authorization: "Basic " + token
			}
		}
		*/
		const response = await fetch(url, options);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		// 根据响应内容类型自动解析
		const contentType = response.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			return await response.json();
		}
		return await response.text();
	} catch (error) {
		console.error('Fetch error:', error);
		throw error; // 重新抛出错误以便调用者处理
	}
}

async function fn_init_sidebar() {

	let _data_sidebar_menu;

	/*
	_data_sidebar_menu = [
		{
			"id": 1,
			"parentId": 0,
			"nameZh": "主页",
			"nameEn": "Homepage",
			"level": 1,
			"sort": 1,
			"url": null,
			"icon": null,
			"description": null,
			"state": 1,
			"childMenus": [
				{
					"id": 4,
					"parentId": 1,
					"nameZh": "控制台",
					"nameEn": "Console",
					"level": 2,
					"sort": 1,
					"url": "html/console.html",
					"icon": null,
					"description": null,
					"state": 1,
					"childMenus": []
				}
			]
		},

		{
			"id": 200,
			"parentId": 201,
			"nameZh": "测试1",
			"nameEn": "test1",
			"level": 1,
			"sort": 1,
			"url": null,
			"icon": null,
			"description": null,
			"state": 1,
			"childMenus": []
		},
		{
			"id": 300,
			"parentId": 301,
			"nameZh": "测试2",
			"nameEn": "test2",
			"level": 1,
			"sort": 1,
			"url": null,
			"icon": null,
			"description": null,
			"state": 1,
			"childMenus": [
				{
					"id": 310,
					"parentId": 300,
					"nameZh": "test3",
					"nameEn": "Console",
					"level": 2,
					"sort": 1,
					"url": "html/home.html",
					"icon": null,
					"description": null,
					"state": 1,
					"childMenus": []
				},
				{
					"id": 320,
					"parentId": 300,
					"nameZh": "测试4",
					"nameEn": "test3",
					"level": 2,
					"sort": 1,
					"url": null,
					"icon": null,
					"description": null,
					"state": 1,
					"childMenus": []
				}
			]
		}
	];
	*/

	const _data_url_of_json_sidebar_menu = "../../data/sidebarMenu.json";

	try {
		// 等待fetch完成
		const data = await fn_get_json_data(_data_url_of_json_sidebar_menu);
		
		// 拿到结果后继续执行
		// console.log('获取的数据:', data);
		_data_sidebar_menu = data;
	} catch (error) {
		console.error('处理数据出错:', error);
	}

	console.log('打印获取的数据:', _data_sidebar_menu);
	if (!_data_sidebar_menu) {
		console.warn("获取 json 数据为空");
		return;
	}


	let _element_sidebar_list_by_getElementById = document.getElementById(_admin_object.id_name.sidebar_list);
	if (!_element_sidebar_list_by_getElementById) {
		console.warn(`getElementById 未找到元素: ${_admin_object.class_name.sidebar_list}`);
		return [];
	}
	// console.log(typeof (_element_sidebar_list_by_getElementById)); // object
	// console.log(_element_sidebar_list_by_getElementById.childNodes); // NodeList 包含所有类型的子节点（元素、文本、注释等）; 如果含有空格, 返回的则是文本
	// console.log(_element_sidebar_list_by_getElementById.firstChild); // 如果含有空格, 返回的则是文本
	// console.log(_element_sidebar_list_by_getElementById.lastChild);  // 如果含有空格, 返回的则是文本
	// console.log(_element_sidebar_list_by_getElementById.firstElementChild);
	// console.log(_element_sidebar_list_by_getElementById.lastElementChild);
	// console.log(_element_sidebar_list_by_getElementById.children);


	// querySelector<E extends Element = Element>(selectors: string): E | null;
	let _element_sidebar_list_by_querySelector = document.querySelector('.' + _admin_object.class_name.sidebar_list);
	if (!_element_sidebar_list_by_querySelector) {
		console.warn(`querySelector 未找到元素: ${_admin_object.class_name.sidebar_list}`);
		return [];
	}
	// console.log(typeof(_element_sidebar_list_by_querySelector)); // object

	// console.log(_element_sidebar_list_by_querySelector.childNodes);
	// console.log(_element_sidebar_list_by_querySelector.firstChild);
	// console.log(_element_sidebar_list_by_querySelector.lastChild);
	// console.log(_element_sidebar_list_by_querySelector.firstElementChild);
	// console.log(_element_sidebar_list_by_querySelector.lastElementChild);
	// console.log(_element_sidebar_list_by_querySelector.children);



	let _element_sidebar_list;
	// _element_sidebar_list = _element_sidebar_list_by_getElementById;
	_element_sidebar_list = _element_sidebar_list_by_querySelector;

	/*
		HTMLCollection
		HTMLCollection的特点有：
			1. HTMLCollection对象是实时的，即当文档结构发生变化时，它会自动更新。
			2. HTMLCollection对象是只读的，但是可以通过改变已有元素或添加新元素来间接改变它。
			3. HTMLCollection对象是类数组对象，它可以通过索引来访问元素。
	*/
	// let _element_sidebar_list_ul = _element_sidebar_list.children;
	let _element_sidebar_list_ul = _element_sidebar_list.firstElementChild;

	/**
	 * 初始化侧边栏菜单的子菜单
	 * @param data_submenu
	 */
	function inner_fn_init_sidebar_submenu(data_submenu) {
		if (!data_submenu) {
			return;
		}
		if (data_submenu.length === 0) {
			return;
		}

		let _svg_submenu_toggle_html =
			`
				<div class="svg-submenu-toggle">
					<img src="../../lib/google/icon/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="">
				</div>
			`
		;

		let _sidebar_submenu_ul_li_item_html =
			`
				<li>
					<a href="javascript: void(0);" item-id="{id}" item-href="{url}">
						<div class="tree-line"></div>
						<div class="text"><span>{name}</span></div>
						{svg_submenu_toggle}
					</a>
					{submenu}
				</li>
			`
		;

		/* 参考 test.js 中的 测试 格式化字符串 */
		function myCustonFormatString(template, values) {
			// var pattern = /\{(\w+)\}/g; 
			// 等价于 
			// var pattern = new RegExp("\\{(\\w+)\\}", "g");
			return template.replace(/\{(\w+)\}/g, (match, key) => values[key]);
		}


		let _sidebar_submenu_ul = document.createElement('ul');

		let _sidebar_submenu_ul_child_element_html = "";

		for (let j = 0; j < data_submenu.length; j++) {
			let _sidebar_submenu = data_submenu[j];
			console.log(_sidebar_submenu.name + ':' + _sidebar_submenu.nameEn + ':' + _sidebar_submenu.nameZh);

			let id_of_submenu = data_submenu.id;
			let url_of_submenu = data_submenu.url;
			let name_of_submenu = data_submenu.nameZh;
			let child_of_submenu = data_submenu.childMenus;

			let values = {
				id: id_of_submenu,
				url: url_of_submenu,
				name: name_of_submenu
			};

			// 添加键值对
			// values["salary"] = 5000;
			// values.education = "本科";

			if (child_of_submenu) {
				values.svg_submenu_toggle = _svg_submenu_toggle_html;
			} else {
				values.svg_submenu_toggle = "";
			}

			if (child_of_submenu) {
				values.submenu = inner_fn_init_sidebar_submenu(child_of_submenu);
			} else {
				values.submenu = "";
			}

			console.log(values);


			let li_html = myCustonFormatString(_sidebar_submenu_ul_li_item_html, values);
			console.log(li_html);
			_sidebar_submenu_ul_child_element_html += li_html;

			_sidebar_submenu_ul.innerHTML = _sidebar_submenu_ul_child_element_html;
		}

	}

	for (let i = 0; i < _data_sidebar_menu.length; i++) {
		/* 一级菜单 */
		let _sidebar_menu_level_one = _data_sidebar_menu[i];

		// console.log(_sidebar_menu_level_one.nameEn + ':' + _sidebar_menu_level_one.nameZh);
		let id_of_sidebar_menu_level_one = _sidebar_menu_level_one.id;
		let icon_of_sidebar_menu_level_one = _sidebar_menu_level_one.icon;
		if (!icon_of_sidebar_menu_level_one) {
			icon_of_sidebar_menu_level_one = "../../svg/index_100_100_red.svg";
		}
		let name_of_sidebar_menu_level_one = _sidebar_menu_level_one.nameZh;

		// 创建 li 标签
		let _sidebar_menu_level_one_li = document.createElement('li');

		// 创建 li 标签 -> a 标签
		let _sidebar_menu_level_one_li_a = document.createElement('a');
		_sidebar_menu_level_one_li_a.href = "#";

		// 创建 li 标签 -> a 标签 -> div class="svg-icon" 标签
		let _sidebar_menu_level_one_li_a_div_svg_icon = document.createElement('div');
		_sidebar_menu_level_one_li_a_div_svg_icon.setAttribute("class", "svg-icon");

		// 创建 li 标签 -> a 标签 -> div class="svg-icon" 标签 -> img svg 图标标签
		let _sidebar_menu_level_one_li_a_div_svg_icon_img = document.createElement('img');
		_sidebar_menu_level_one_li_a_div_svg_icon_img.src = icon_of_sidebar_menu_level_one;
		_sidebar_menu_level_one_li_a_div_svg_icon_img.alt = "";

		_sidebar_menu_level_one_li_a_div_svg_icon.appendChild(_sidebar_menu_level_one_li_a_div_svg_icon_img);

		// 创建 li 标签 -> a 标签 -> div class="text" 标签
		let _sidebar_menu_level_one_li_a_div_text = document.createElement('div');
		_sidebar_menu_level_one_li_a_div_text.setAttribute("class", "text");
		// 创建 li 标签 -> a 标签 -> div class="text" 标签 -> span标签
		let _sidebar_menu_level_one_li_a_div_text_span = document.createElement('span');
		_sidebar_menu_level_one_li_a_div_text_span.innerText = name_of_sidebar_menu_level_one;

		_sidebar_menu_level_one_li_a_div_text.appendChild(_sidebar_menu_level_one_li_a_div_text_span);

		_sidebar_menu_level_one_li_a.appendChild(_sidebar_menu_level_one_li_a_div_svg_icon);
		_sidebar_menu_level_one_li_a.appendChild(_sidebar_menu_level_one_li_a_div_text);
		// _sidebar_menu_level_one_li_a.appendChild(_sidebar_menu_level_one_li_a_div_svg_icon);

		_sidebar_menu_level_one_li.appendChild(_sidebar_menu_level_one_li_a);


		/* 二级菜单 */
		let _sidebar_menu_level_two_list = _sidebar_menu_level_one.childMenus;

		// 如果 二级菜单 不为空, 追加新内容
		if (_sidebar_menu_level_two_list.length !== 0 ) {
			inner_fn_init_sidebar_submenu(_sidebar_menu_level_two_list);
		}

		_element_sidebar_list_ul.appendChild(_sidebar_menu_level_one_li);


	}

	// 把 img 标签引入的 SVG 替换为内嵌 SVG
	_fn_load_svg_and_replace_img();
}



/*
if (document.readyState !== 'loading') {
	console.log('document is already ready, just execute code here');
	fn_init_sidebar();
} else {
	document.addEventListener('DOMContentLoaded', function () {
		console.log('document was not ready, place code here');
		fn_init_sidebar();
	});
}
*/

// 初始化 侧边栏 菜单
document.addEventListener('DOMContentLoaded', fn_init_sidebar());


console.log("= End - CommonUI-Admin-sidebar.js ===============================================================================");
