/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


/* 图标 */

/**
 * 简易语法高亮核心，纯原生正则实现
 */
function highlightCode(block, lang) {
	let code = block.textContent;
	// 先转义html特殊字符
	code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

	// 通用：单行注释 //
	code = code.replace(/(\/\/.*$)/gm, '<span class="com">$1</span>');
	// 通用：字符串双引号 "..."
	code = code.replace(/(".*?")/g, '<span class="str">$1</span>');
	// 单引号字符串 '...'
	code = code.replace(/('.*?')/g, '<span class="str">$1</span>');
	// 数字
	code = code.replace(/(\b\d+\.?\d*\b)/g, '<span class="num">$1</span>');

	// 各语言关键字
	const keywordMap = {
		c: ['int','char','float','double','return','if','else','for','while','include','define'],
		python: ['def','return','if','else','for','while','import','from','class','pass','and','or','not'],
		java: ['public','private','static','void','class','int','String','return','if','else','for','while'],
		js: ['let','const','var','function','return','if','else','for','while','async','await','class','new'],
		rust: ['fn','let','mut','return','if','else','for','while','impl','struct','pub']
	};

	const fnPattern = /(\b\w+)(?=\s*\()/g;
	code = code.replace(fnPattern, '<span class="fn">$1</span>');

	const kwList = keywordMap[lang] || [];
	kwList.forEach(kw => {
		const reg = new RegExp(`\\b(${kw})\\b`, 'g');
		code = code.replace(reg, '<span class="kw">$1</span>');
	});

	// html简单处理标签
	if(lang === 'html') {
		code = code.replace(/(&lt;\/?)(\w+)/g, '$1<span class="tag">$2</span>');
		code = code.replace(/(\w+)(?==&quot;)/g, '<span class="attr">$1</span>');
	}

	block.innerHTML = code;
}

// 初始化所有代码块
document.querySelectorAll('pre[data‑lang]').forEach(preEl => {
	const lang = preEl.dataset.lang;
	highlightCode(preEl, lang);
});

// 复制按钮逻辑
document.querySelectorAll('.copy‑btn').forEach(btn => {
  btn.addEventListener('click', async function () {
    const pre = this.nextElementSibling;
    // 取原始文本（innerText可以拿到去掉标签的原始代码）
    const text = pre.innerText;
    await navigator.clipboard.writeText(text);
    const old = this.textContent;
    this.textContent = "已复制";
    setTimeout(() => this.textContent = old, 1200);
  })
});

(function (window) {
	'use strict';

})(window);
