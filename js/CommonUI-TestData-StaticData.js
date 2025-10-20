/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


console.log("#################################################################################################################");
console.log("# Start - CommonUI-TestData-StaticData.js #");
console.log("#################################################################################################################");

const testData = {
	staticTestData: {
		menusData: [
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
				"childMenus": []
			},

			{
				"id": 2,
				"parentId": 0,
				"nameZh": "用户",
				"nameEn": "user",
				"level": 1,
				"sort": 2,
				"url": null,
				"icon": null,
				"description": null,
				"state": 1,
				"childMenus": [
					{
						"id": 11,
						"parentId": 2,
						"nameZh": "游客",
						"nameEn": "guests",
						"level": 2,
						"sort": 1,
						"url": "html/console.html",
						"icon": null,
						"description": null,
						"state": 1,
						"childMenus": []
					},
					{
						"id": 12,
						"parentId": 2,
						"nameZh": "普通用户",
						"nameEn": "normal user",
						"level": 2,
						"sort": 2,
						"url": "html/console.html",
						"icon": null,
						"description": null,
						"state": 1,
						"childMenus": []
					},
					{
						"id": 13,
						"parentId": 2,
						"nameZh": "付费用户",
						"nameEn": "paying User",
						"level": 2,
						"sort": 3,
						"url": "html/console.html",
						"icon": null,
						"description": null,
						"state": 1,
						"childMenus": []
					},
					{
						"id": 14,
						"parentId": 2,
						"nameZh": "后台用户",
						"nameEn": "background user",
						"level": 2,
						"sort": 4,
						"url": "html/console.html",
						"icon": null,
						"description": null,
						"state": 1,
						"childMenus": []
					},
					{
						"id": 15,
						"parentId": 2,
						"nameZh": "系统管理员",
						"nameEn": "administrator",
						"level": 2,
						"sort": 5,
						"url": "html/console.html",
						"icon": null,
						"description": null,
						"state": 1,
						"childMenus": [
							{
								"id": 151,
								"parentId": 15,
								"nameZh": "管理员",
								"nameEn": "admin",
								"level": 3,
								"sort": 1,
								"url": "html/console.html",
								"icon": null,
								"description": null,
								"state": 1,
								"childMenus": []
							},
							{
								"id": 152,
								"parentId": 15,
								"nameZh": "超级管理员",
								"nameEn": "root",
								"level": 3,
								"sort": 2,
								"url": "html/console.html",
								"icon": null,
								"description": null,
								"state": 1,
								"childMenus": []
							},
						]
					}
				]
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
		],
	},
	
}


console.log("= End - CommonUI-TestData-StaticData.js =========================================================================");

