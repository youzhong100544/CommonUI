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

/*
	setInterval()、clearInterval()、setTimeout()、clearTimeout()

	JS中setInterval()和clearInterval()的使用以及注意事项

	JS中setTimeout和setInterval的对比使用
	https://blog.csdn.net/CC1991_/article/details/124811157?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EOPENSEARCH%7EPaidSort-2-124811157-blog-81124331.235%5Ev43%5Epc_blog_bottom_relevance_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EOPENSEARCH%7EPaidSort-2-124811157-blog-81124331.235%5Ev43%5Epc_blog_bottom_relevance_base2&utm_relevant_index=4

*/

(function (window) {
	'use strict';

	// lib.dom.d.ts
	//
	// function supports(property: string, value: string): boolean;
	// function supports(conditionText: string): boolean;

	// console.log(window.CSS);
	// console.log(window.CSS.supports);

	const isSupported = window.CSS && window.CSS.supports &&
		window.CSS.supports('--bEnableDebug', 'true') &&
		window.CSS.supports('--bEnableDebug: true') &&
		window.CSS.supports('(--bEnableDebug: true)')
	;
	if (isSupported) {
		/* supported */
		console.log('当前浏览器支持 CSS 变量');
	} else {
		/* not supported */
		console.log('当前浏览器不支持 CSS 变量');
	}


	/**
	 * 显示当前时间
	 */
	(function (window) {
		console.log("显示当前时间");

		let timer;
		let isRunning = false;

		function startClock() {
			if (!isRunning) {
				timer = setInterval(() => {
					console.log(`显示当前时间 startClock() -> setInterval() timer: ${timer}`);
					const now = new Date();
					console.log(`当前时间:${now.toLocaleTimeString()}`);
				}, 1000);
				isRunning = true;
			}
		}

		function startClock_1() {
			if (!isRunning) {
				timer = setInterval(
					function () {
						const now = new Date();
						console.log(`当前时间:${now.toLocaleTimeString()}`);
					},
					1000
				);
				isRunning = true;
			}
		}

		// startClock();
		// startClock_1();
	})(window);
	
	/**
	 * 倒计时
	 */
	(function (window) {
		console.log("倒计时");

		let timer;
		let isRunning = false;
		
		let countdownTime = 10; // 倒计时10秒

		function startCountdown() {
			if (!isRunning) {
				timer = setInterval(() => {
					if (countdownTime > 0) {
						console.log(`倒计时功能 startCountdown() -> setInterval() timer: ${timer}`);
						console.log(`倒计时: ${countdownTime}秒`);
						countdownTime--;
					} else {
						clearInterval(timer);
						isRunning = false;
						console.log(`倒计时: ${countdownTime}秒`);
						console.log("倒计时结束");
					}
				}, 1000);
				isRunning = true;
			}
		}
		
		function startCountdown_1() {
			if (!isRunning) {
				timer = setInterval(
					function () {
						if (countdownTime > 0) {
							console.log(`倒计时: ${countdownTime}秒`);
							countdownTime--;
						} else {
							clearInterval(timer);
							isRunning = false;
							console.log(`倒计时: ${countdownTime}秒`);
							console.log("倒计时结束");
						}
					},
					1000
				);
				isRunning = true;
			}
		}

		// startCountdown();
		// startCountdown_1();
	})(window);


	/**
	 * 打印页面加载状态
	 */
	(function (window) {
		let interval = setInterval(
			function () {
				const state = document.readyState;
				console.log(`当前状态：${state}`);
				if (state === "complete") {
					clearInterval(interval);
				}
			},
			5
		);
	})(window);
	
	
	
})(window);

console.log("= End - CommonUI-Debug.js =======================================================================================");
