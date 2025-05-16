/**
 * @description: JS javascript .
 *
 * @author 个性原子弹
 * @since
 * @date
 */


/**
 * JavaScript函数重载模拟
 *
 *      name : 函数名
 *      bind : 函数需要绑定到的对象
 *      fn_objs : 键值对函数对象，键位以逗号隔开的类型(number,string,object,undefined,boolean,array,*)字符串,
 *                其中*为万能类型，值为对应的函数,
 *                如:{"string,string":function(x,y){},"string,number":functioin(x,y){}}
 *
 * 因为采用typeof来动态监测参数类型，
 * 而typeof又只能检测到的值只有(number,string,object,undefined,boolean)，
 * 所以类型的制定只能从这些值中设定，实现中还加入了万能类型"*",由于array属于常用类型，
 * 所以又特别添加了对array类型的支持。
 *
 * 基本原理是：
 *      将以类型串为键，函数为值的字典挂到需要绑定的对象上，
 *      命名为"_"+fn_name+"_dict",
 *      可用bind["_"+fn_name_"_dict"]来访问此对象，
 *      接着生成一个函数，在函数里靠判断arguments生成的类型串来从上述字典中匹配到相应的函数。
 *
 * @param name
 *              函数名
 * @param bind
 *              函数需要绑定到的对象
 * @param fn_objs
 *              键值对函数对象，键位以逗号隔开的类型(number, string, object, undefined, boolean, array, *)字符串,
 *              其中*为万能类型，值为对应的函数,
 *              如:{"string,string":function(x,y){},"string,number":functioin(x,y){}}
 * @constructor
 */
var Overload = function(name, bind, fn_objs){
	var dict_name = "_" + name + "_dict";
	var dict;
	dict = bind[dict_name] = bind[dict_name] || {};

	for(var i in fn_objs){
		dict[i] = fn_objs[i];
	}

	var is_match = function(x, y){
		if(x == y) {
			return true;
		}

		if(x.indexOf("*") == -1) {
			return false;
		}

		var x_arr = x.split(",");
		var y_arr = y.split(",");
		if(x_arr.length != y_arr.length) {
			return false;
		}

		while(x_arr.length){
			var x_first =  x_arr.shift();
			var y_first = y_arr.shift();
			if(x_first!="*" && x_first!=y_first) {
				return false;
			}
		}
		return true;
	};

	bind[name] = function(){
		var args = arguments;
		var args_len = args.length;
		var args_types=[];
		var args_type;
		var match_fn = function(){};
		for(var i=0; i < args_len; i++){
			var type = typeof args[i];
			type == "object" &&  (args[i] instanceof Array) && (type="array");
			args_types.push(type);
		}
		args_type = args_types.join(",");
		for(var k in dict){
			if(is_match(k,args_type)){
				match_fn = dict[k];
				break;
			}
		}
		return match_fn.apply(this,args);
	};
};