var UnitConfig	=
{

    'headerMode'	: 'always',

    'login'			: false
};
(function ($hx_exports) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
};
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
var IMap = function() { };
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var framework = {};
framework.Flag = function(keys) {
	this._value = { };
	this._status = { };
	var _g1 = 0;
	var _g = keys.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		this._status[keys[i]] = true;
		this._value[keys[i]] = 0;
	}
};
framework.Flag.prototype = {
	getValue: function(key) {
		if(Object.prototype.hasOwnProperty.call(this._status,key)) {
			if(Reflect.getProperty(this._status,key)) return false;
			return Reflect.getProperty(this._value,key);
		}
		return false;
	}
	,setValue: function(key,value) {
		if(Object.prototype.hasOwnProperty.call(this._status,key)) {
			this._value[key] = value;
			this._status[key] = false;
		}
	}
	,onStatus: function(key) {
		if(Object.prototype.hasOwnProperty.call(this._status,key)) this._status[key] = true;
	}
};
framework.FunctionList = function() {
	this._pause = [];
	this._funcs = { };
	this._length = 0;
	this._num = 0;
};
framework.FunctionList.prototype = {
	add: function(func) {
		var n = this._num;
		this._funcs[n + ""] = func;
		this._pause[n] = n;
		this._num = n + 1;
		return n;
	}
	,addAndStart: function(func) {
		var n = this._num;
		this._num = n + 1;
		this._funcs[n + ""] = func;
		this._length++;
		if(this._length == 1) return [n,true]; else return [n,false];
	}
	,reset: function(num,func) {
		if(Object.prototype.hasOwnProperty.call(this._funcs,num + "")) {
			this._funcs[num + ""] = func;
			return true;
		}
		return false;
	}
	,start: function(num) {
		if(this._pause[num] >= 0) {
			this._pause.splice(num,1);
			this._length++;
			if(this._length == 1) return true;
		}
		return false;
	}
	,stop: function(num) {
		if(this._pause[num] == null) {
			this._pause[num] = num;
			this._length--;
			return true;
		}
		return false;
	}
	,remove: function(num) {
		if(Object.prototype.hasOwnProperty.call(this._funcs,num + "")) {
			Reflect.deleteField(this._funcs,num + "");
			this._length--;
			return true;
		}
		return false;
	}
	,run: function() {
		var res = false;
		var fields = Reflect.fields(this._funcs);
		var key = "";
		var _g1 = 0;
		var _g = fields.length;
		while(_g1 < _g) {
			var i = _g1++;
			key = fields[i];
			if(this._pause[Std.parseInt(key)] == null) {
				res = true;
				(Reflect.getProperty(this._funcs,key))();
			}
		}
		return res;
	}
};
framework.animation = {};
framework.animation.EasingType = { __constructs__ : ["LINEAR","SINE","QUAD","CUBIC","QUART","QUINT","EXPO","CIRC"] };
framework.animation.EasingType.LINEAR = ["LINEAR",0];
framework.animation.EasingType.LINEAR.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.SINE = ["SINE",1];
framework.animation.EasingType.SINE.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.QUAD = ["QUAD",2];
framework.animation.EasingType.QUAD.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.CUBIC = ["CUBIC",3];
framework.animation.EasingType.CUBIC.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.QUART = ["QUART",4];
framework.animation.EasingType.QUART.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.QUINT = ["QUINT",5];
framework.animation.EasingType.QUINT.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.EXPO = ["EXPO",6];
framework.animation.EasingType.EXPO.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.CIRC = ["CIRC",7];
framework.animation.EasingType.CIRC.__enum__ = framework.animation.EasingType;
framework.animation.EasingOption = { __constructs__ : ["IN","OUT","INOUT"] };
framework.animation.EasingOption.IN = ["IN",0];
framework.animation.EasingOption.IN.__enum__ = framework.animation.EasingOption;
framework.animation.EasingOption.OUT = ["OUT",1];
framework.animation.EasingOption.OUT.__enum__ = framework.animation.EasingOption;
framework.animation.EasingOption.INOUT = ["INOUT",2];
framework.animation.EasingOption.INOUT.__enum__ = framework.animation.EasingOption;
framework.animation.Easing = function() { };
framework.animation.Easing.get = function(start,end,duration,startTime,type,option) {
	var s = start;
	var c = end - start;
	var d = duration;
	var t = startTime;
	var tt = d;
	var n = new Date().getTime();
	if(t + d > n) tt = n - t; else return end;
	switch(type[1]) {
	case 0:
		return framework.animation.Easing.toInt(c * tt / d + s,c);
	case 1:
		tt /= d;
		if(option == framework.animation.EasingOption.IN) return framework.animation.Easing.toInt(-c * Math.cos(tt * (Math.PI / 2)) + c + s,c); else if(option == framework.animation.EasingOption.OUT) return framework.animation.Easing.toInt(c * Math.sin(tt * (Math.PI / 2)) + s,c); else if(option == framework.animation.EasingOption.INOUT) return framework.animation.Easing.toInt(-c / 2 * (Math.cos(Math.PI * tt) - 1) + s,c);
		break;
	case 2:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt /= d;
			return framework.animation.Easing.toInt(-c * tt * (tt - 2) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt + s,c); else {
				--tt;
				return framework.animation.Easing.toInt(-c / 2 * (tt * (tt - 2) - 1) + s,c);
			}
		}
		break;
	case 3:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(c * (tt * tt * tt + 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt * tt + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(c / 2 * (tt * tt * tt + 2) + s,c);
			}
		}
		break;
	case 4:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(-c * (tt * tt * tt * tt - 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt * tt * tt + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(-c / 2 * (tt * tt * tt * tt - 2) + s,c);
			}
		}
		break;
	case 5:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt * tt * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(c * (tt * tt * tt * tt * tt + 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt * tt * tt * tt + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(c / 2 * (tt * tt * tt * tt * tt + 2) + s,c);
			}
		}
		break;
	case 6:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * Math.pow(2,10 * (tt - 1)) + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt /= d;
			return framework.animation.Easing.toInt(c * (-Math.pow(2,-10 * tt) + 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * Math.pow(2,10 * (tt - 1)) + s,c); else {
				--tt;
				return framework.animation.Easing.toInt(c / 2 * (-Math.pow(2,-10 * tt) + 2) + s,c);
			}
		}
		break;
	case 7:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(-c * (Math.sqrt(1 - tt * tt) - 1) + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(c * Math.sqrt(1 - tt * tt) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(-c / 2 * (Math.sqrt(1 - tt * tt) - 1) + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(c / 2 * (Math.sqrt(1 - tt * tt) + 1) + s,c);
			}
		}
		break;
	}
	return 0;
};
framework.animation.Easing.toInt = function(f,way) {
	if(way > 0) return Math.floor(f); else return Math.ceil(f);
};
framework.animation.Tween = function(from,to,duration,type,option,runFunc,endFunc) {
	this._stopTime = null;
	this._startTime = null;
	this._stop = true;
	this._timer = null;
	var _g = this;
	this._func = function() {
		var v = framework.animation.Easing.get(from,to,duration,_g._startTime,type,option);
		runFunc(v);
		if(v == to) {
			_g.clear();
			if(endFunc != null) endFunc();
		}
	};
};
framework.animation.Tween.prototype = {
	start: function() {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		if(this._stop) {
			this._stop = false;
			if(this._stopTime == null) this._startTime = new Date().getTime(); else {
				var t = new Date().getTime() - this._startTime;
				this._startTime += t;
			}
			this._timer = new haxe.Timer(15);
			this._timer.run = this._func;
		}
	}
	,stop: function() {
		if(this._timer != null) {
			this._timer.stop();
			this._stopTime = new Date().getTime();
			this._stop = true;
		}
	}
	,clear: function() {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
			this._func = null;
			this._stop = null;
			this._startTime = null;
			this._stopTime = null;
		}
	}
};
framework.dom = {};
framework.dom._Elements = {};
framework.dom._Elements.Elements_Impl_ = function() { };
framework.dom._Elements.Elements_Impl_._new = function(target) {
	var this1;
	this1 = [];
	var _g1 = 0;
	var _g = target.length;
	while(_g1 < _g) {
		var i = _g1++;
		this1.push(target[i]);
	}
	return this1;
};
framework.dom._Elements.Elements_Impl_.__get = function(this1,key) {
	return this1[key];
};
framework.event = {};
framework.event.EventType = { __constructs__ : ["LOAD","SCROLL","RESIZE","BLUR","FOCUS"] };
framework.event.EventType.LOAD = ["LOAD",0];
framework.event.EventType.LOAD.__enum__ = framework.event.EventType;
framework.event.EventType.SCROLL = ["SCROLL",1];
framework.event.EventType.SCROLL.__enum__ = framework.event.EventType;
framework.event.EventType.RESIZE = ["RESIZE",2];
framework.event.EventType.RESIZE.__enum__ = framework.event.EventType;
framework.event.EventType.BLUR = ["BLUR",3];
framework.event.EventType.BLUR.__enum__ = framework.event.EventType;
framework.event.EventType.FOCUS = ["FOCUS",4];
framework.event.EventType.FOCUS.__enum__ = framework.event.EventType;
framework.event.Window = function() { };
framework.event.Window.init = function() {
	if(!framework.event.Window._format) {
		framework.event.Window._format = true;
		framework.event.Window._option = new haxe.ds.EnumValueMap();
		framework.event.Window._option.set(framework.event.EventType.LOAD,true);
		framework.event.Window._option.set(framework.event.EventType.SCROLL,false);
		framework.event.Window._option.set(framework.event.EventType.RESIZE,false);
		framework.event.Window._option.set(framework.event.EventType.BLUR,false);
		framework.event.Window._option.set(framework.event.EventType.FOCUS,false);
		window.onload = function(e) {
			framework.event.Window._loaded = true;
			if(framework.event.Window._option.get(framework.event.EventType.SCROLL)) window.onscroll = framework.event.Window.setEvent(framework.event.EventType.SCROLL);
			if(framework.event.Window._option.get(framework.event.EventType.RESIZE)) window.onresize = framework.event.Window.setEvent(framework.event.EventType.RESIZE);
			if(framework.event.Window._option.get(framework.event.EventType.BLUR)) window.onblur = framework.event.Window.setEvent(framework.event.EventType.BLUR);
			if(framework.event.Window._option.get(framework.event.EventType.FOCUS)) window.onfocus = framework.event.Window.setEvent(framework.event.EventType.FOCUS);
			framework.event.Window.runEvent(framework.event.EventType.LOAD);
		};
	}
};
framework.event.Window.setEvent = function(type) {
	var res = function(e) {
		framework.event.Window.runEvent(type);
	};
	return res;
};
framework.event.Window.addEvent = function(type,func) {
	if(!framework.event.Window._format) framework.event.Window.init();
	if(!framework.event.Window._option.get(type)) {
		framework.event.Window._option.set(type,true);
		if(framework.event.Window._loaded) switch(type[1]) {
		case 0:
			break;
		case 1:
			window.onscroll = framework.event.Window.setEvent(framework.event.EventType.SCROLL);
			break;
		case 2:
			window.onresize = framework.event.Window.setEvent(framework.event.EventType.RESIZE);
			break;
		case 3:
			window.onblur = framework.event.Window.setEvent(framework.event.EventType.BLUR);
			break;
		case 4:
			window.onfocus = framework.event.Window.setEvent(framework.event.EventType.FOCUS);
			break;
		}
	}
	return framework.event.Window.getFuncList(type).addAndStart(func)[0];
};
framework.event.Window.resetEvent = function(type,num,func) {
	return framework.event.Window.getFuncList(type).reset(num,func);
};
framework.event.Window.startEvent = function(type,num) {
	return framework.event.Window.getFuncList(type).start(num);
};
framework.event.Window.stopEvent = function(type,num) {
	return framework.event.Window.getFuncList(type).stop(num);
};
framework.event.Window.removeEvent = function(type,num) {
	return framework.event.Window.getFuncList(type).remove(num);
};
framework.event.Window.runEvent = function(type) {
	return framework.event.Window.getFuncList(type).run();
};
framework.event.Window.getFuncList = function(type) {
	switch(type[1]) {
	case 0:
		return framework.event.Window._loadFunc;
	case 1:
		return framework.event.Window._scrollFunc;
	case 2:
		return framework.event.Window._resizeFunc;
	case 3:
		return framework.event.Window._blurFunc;
	case 4:
		return framework.event.Window._focusFunc;
	}
};
framework.user = {};
framework.user.OS = function() {
	this.ver = "0.0";
	this.type = "other";
};
framework.user.OS.prototype = {
	check: function(v) {
		var a = v.split(".");
		var b = this.ver.split(".");
		var I;
		if(a.length > b.length) I = a.length; else I = b.length;
		var aa;
		var bb = 0;
		var _g1 = 0;
		var _g = I - 1;
		while(_g1 < _g) {
			var i = _g1++;
			aa = 0;
			bb = 0;
			if(a[i] != null) aa = Std.parseInt(a[i]);
			if(b[i] != null) bb = Std.parseInt(b[i]);
			if(aa > bb) return false;
			if(aa < bb) return true;
		}
		return true;
	}
};
framework.user.Browser = function() {
	this.ie = false;
	framework.user.OS.call(this);
};
framework.user.Browser.__super__ = framework.user.OS;
framework.user.Browser.prototype = $extend(framework.user.OS.prototype,{
});
framework.user.Size = function() {
	this._keys = ["width","height","clientWidth","clientHeight","top","left"];
	this._bd = window.document.body;
	this._dc = window.document;
	this._wd = window;
	this._values = new framework.Flag(this._keys);
	this.screenWidth = this._wd.screen.width;
	this.screenHeight = this._wd.screen.height;
	this.availWidth = this._wd.screen.availWidth;
	this.availHeight = this._wd.screen.availHeight;
	this.scrollWidth = this._wd.innerWidth - this.width();
	this.pixelRatio = this._wd.devicePixelRatio;
	if(this.pixelRatio != null && this.pixelRatio == 2) this.retina = true; else this.retina = false;
	if(this.scrollWidth >= 30) this.scrollWidth = 0;
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.onAllFlag));
	framework.event.Window.addEvent(framework.event.EventType.SCROLL,$bind(this,this.onPositionFlag));
};
framework.user.Size.getInstance = function() {
	if(framework.user.Size._instance == null) return framework.user.Size._instance = new framework.user.Size(); else return framework.user.Size._instance;
};
framework.user.Size.prototype = {
	width: function() {
		var res = this._values.getValue("width");
		if(res != false) return res;
		res = this._dc.documentElement.clientWidth;
		this._values.setValue("width",res);
		return res;
	}
	,height: function() {
		var res = this._values.getValue("height");
		if(res != false) return res;
		res = this._dc.documentElement.clientHeight;
		this._values.setValue("height",res);
		return res;
	}
	,clientWidth: function() {
		var res = this._values.getValue("clientWidth");
		if(res != false) return res;
		res = Math.max.apply(null,[this._bd.clientWidth,this._bd.scrollWidth,this._dc.documentElement.scrollWidth,this._dc.documentElement.clientWidth]);
		this._values.setValue("clientWidth",res);
		return res;
	}
	,clientHeight: function() {
		var res = this._values.getValue("clientHeight");
		if(res != false) return res;
		res = Math.max.apply(null,[this._bd.clientHeight,this._bd.scrollHeight,this._dc.documentElement.scrollHeight,this._dc.documentElement.clientHeight]);
		this._values.setValue("clientHeight",res);
		return res;
	}
	,top: function() {
		var res = this._values.getValue("top");
		if(res != false) return res;
		res = this._dc.documentElement.scrollTop || this._bd.scrollTop;
		this._values.setValue("top",res);
		return res;
	}
	,left: function() {
		var res = this._values.getValue("left");
		if(res != false) return res;
		res = this._dc.documentElement.scrollLeft || this._bd.scrollLeft;
		this._values.setValue("left",res);
		return res;
	}
	,onSizeFlag: function() {
		this._values.onStatus("width");
		this._values.onStatus("height");
		this._values.onStatus("clientWidth");
		this._values.onStatus("clientHeight");
	}
	,onPositionFlag: function() {
		this._values.onStatus("top");
		this._values.onStatus("left");
	}
	,onAllFlag: function() {
		var _g1 = 0;
		var _g = this._keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._values.onStatus(this._keys[i]);
		}
	}
};
framework.user.UserAgent = function() {
	this.device = { type : "pc", android : false, androidVer : null};
	this.browser = new framework.user.Browser();
	this.os = new framework.user.OS();
	this.ua = window.navigator.userAgent;
	var dvList = [["iPhone","iOS","sp"],["iPad","iOS","tb"],["iPod","iOS","sp"],["BlackBerry","BlackBerry","sp"],["Windows Phone","Windows Phone","sp"],["Mac OS X","Mac","pc"],["Windows NT","Windows","pc"],["Windows 9","Windows","pc"]];
	var dvEReg = [new EReg("iPhone OS ((?:[0-9]+)(?:_(?:[0-9]+))*)",""),new EReg("CPU OS ((?:[0-9]+)(?:_(?:[0-9]+))*)",""),new EReg("CPU iPhone OS ((?:[0-9]+)(?:_(?:[0-9]+))*)",""),new EReg("BlackBerry[0-9]*/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Windows Phone ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Mac OS X ((?:[0-9]+)(?:(?:\\.|_)(?:[0-9]+))*)",""),new EReg("Windows NT ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Windows ((?:[0-9]+)(?:\\.(?:[0-9]+))*)","")];
	var bwList = ["Chrome","Safari","Firefox","Opera"];
	var bwEReg = [new EReg("Chrome/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Version/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Firefox/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Version/((?:[0-9]+)(?:\\.(?:[0-9]+))*)","")];
	var _g1 = 0;
	var _g = dvList.length;
	while(_g1 < _g) {
		var i = _g1++;
		var v = dvList[i];
		if(this.ua.indexOf(v[0]) >= 0) {
			this.os.type = v[1];
			this.device.type = v[2];
			this.os.ver = this.matchedVer(dvEReg[i]);
			break;
		}
	}
	var _g11 = 0;
	var _g2 = bwList.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		if(this.ua.indexOf(bwList[i1]) >= 0) {
			this.browser.type = bwList[i1];
			this.browser.ver = this.matchedVer(bwEReg[i1]);
			break;
		}
	}
	if(this.ua.indexOf("Android") >= 0) {
		this.os.type = "Android";
		this.os.ver = this.matchedVer(new EReg("Android ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""));
		if(this.ua.indexOf("Mobile") == -1 || this.ua.indexOf("A1_07") > 0 || this.ua.indexOf("SC-01C") > 0) this.device.type = "tb"; else this.device.type = "sp";
		this.device.android = true;
		this.device.androidVer = this.matchedVer(new EReg("; ((?:(?!;).)*) Build",""),true);
	}
	if(this.ua.indexOf("MSIE") >= 0) {
		this.browser.ie = true;
		var _g3 = 6;
		while(_g3 < 11) {
			var i2 = _g3++;
			if(this.ua.indexOf("MSIE " + i2) >= 0) {
				this.browser.type = "MSIE" + i2;
				this.browser.ver = this.matchedVer(new EReg("MSIE ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""));
				break;
			}
		}
	} else if(this.ua.indexOf("Trident/7") >= 0) {
		this.browser.ie = true;
		this.browser.type = "MSIE11";
		this.browser.ver = this.matchedVer(new EReg("rv:((?:[0-9]+)(?:_(?:[0-9]+))*)",""));
	}
};
framework.user.UserAgent.getInstance = function() {
	if(framework.user.UserAgent._instance == null) return framework.user.UserAgent._instance = new framework.user.UserAgent(); else return framework.user.UserAgent._instance;
};
framework.user.UserAgent.prototype = {
	matchedVer: function(ereg,def) {
		if(def == null) def = "0.0";
		if(ereg.match(this.ua)) return ereg.matched(1); else return def;
	}
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
haxe.ds = {};
haxe.ds.BalancedTree = function() {
};
haxe.ds.BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
};
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
haxe.ds.EnumValueMap = function() {
	haxe.ds.BalancedTree.call(this);
};
haxe.ds.EnumValueMap.__interfaces__ = [IMap];
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
});
var lib = {};
lib.CommonMain = $hx_exports.Common = function() { };
lib.CommonMain.main = function() {
	lib.CommonMain.event = new lib.Event();
	if(framework.user.UserAgent._instance == null) lib.CommonMain.ua = framework.user.UserAgent._instance = new framework.user.UserAgent(); else lib.CommonMain.ua = framework.user.UserAgent._instance;
	if(framework.user.Size._instance == null) lib.CommonMain.size = framework.user.Size._instance = new framework.user.Size(); else lib.CommonMain.size = framework.user.Size._instance;
	lib.CommonMain.menu = new lib.Menu();
	//lib.CommonMain.footer = new lib.Footer();
};
lib.Event = function() {
};
lib.Event.prototype = {
	init: function() {
		framework.event.Window.init();
	}
	,addEvent: function(type,func) {
		return framework.event.Window.addEvent(type,func);
	}
	,resetEvent: function(type,num,func) {
		return framework.event.Window.resetEvent(type,num,func);
	}
	,startEvent: function(type,num) {
		return framework.event.Window.startEvent(type,num);
	}
	,removeEvent: function(type,num) {
		return framework.event.Window.removeEvent(type,num);
	}
};
lib.Footer = function() {
	this._openFlug = [];
	var _g = this;
	if(framework.user.Size._instance == null) this._size = framework.user.Size._instance = new framework.user.Size(); else this._size = framework.user.Size._instance;
	var li = framework.dom._Elements.Elements_Impl_._new(window.document.getElementById("x_foot_sitemap").getElementsByTagName("li"));
	var _g1 = 0;
	var _g2 = li.length;
	while(_g1 < _g2) {
		var i = _g1++;
		if(li[i].className.indexOf("caption") >= 0) {
			this._openFlug[i] = false;
			var a = framework.dom._Elements.Elements_Impl_._new(li[i].getElementsByTagName("a"));
			var span = framework.dom._Elements.Elements_Impl_._new(li[i].getElementsByTagName("span"));
			if(a.length >= 1) this.setClickEvent(i,a[0],li[i + 1]); else this.setClickEvent(i,span[0],li[i + 1]);
		}
	}
	var a1 = framework.dom._Elements.Elements_Impl_._new(window.document.getElementById("x_foot").getElementsByTagName("a"));
	a1[0].onclick = function(e) {
		_g._scrollTween = new framework.animation.Tween(_g._size.top(),0,300,framework.animation.EasingType.QUAD,framework.animation.EasingOption.OUT,$bind(_g,_g.setScrollY),$bind(_g,_g.scrollEnd));
		_g._scrollTween.start();
		return false;
	};
};
lib.Footer.prototype = {
	setScrollY: function(v) {
		window.scrollTo(this._size.left(),v);
	}
	,scrollEnd: function() {
		this._scrollTween.clear();
		this._scrollTween = null;
	}
	,setClickEvent: function(id,button,target) {
		var _g = this;
		button.onclick = function(e) {
			if(_g._size.width() + _g._size.scrollWidth <= 650) {
				if(_g._openFlug[id]) {
					_g._openFlug[id] = false;
					button.className = "";
					target.className = "child";
				} else {
					_g._openFlug[id] = true;
					button.className = "open";
					target.className = "child open";
				}
				return false;
			}
			return true;
		};
	}
};
lib.Menu = function() {
	this._breakPoint = [1280,1212,1175,933];
	this.height = 54;
	this.mode = "w0";
	if(framework.user.Size._instance == null) this._size = framework.user.Size._instance = new framework.user.Size(); else this._size = framework.user.Size._instance;
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.onResize));
	var mainContainer = new lib.menu.MainContainer(this);
	var subContainer = new lib.menu.SubContainer(this);
	this._downloadButton = window.document.getElementById("x_fix_download");
	if(UnitConfig.headerMode == "always") this.showDownloadButtn();
};
lib.Menu.prototype = {
	onResize: function() {
		var w = this._size.width();
		this.mode = "";
		var _g1 = 0;
		var _g = this._breakPoint.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._breakPoint[i] - this._size.scrollWidth < w) {
				this.mode = "w" + i;
				break;
			}
		}
		if(this.mode == "") this.mode = "w" + this._breakPoint.length;
	}
	,showDownloadButtn: function() {
		if(this._downloadButton){
			this._downloadButton.className = "show";
		}
	}
	,hideDownloadButtn: function() {
		this._downloadButton.className = "";
	}
};
lib.menu = {};
lib.menu.MainContainer = function(controller) {
	this._open = false;
	var _g = this;
	if(framework.user.Size._instance == null) this._size = framework.user.Size._instance = new framework.user.Size(); else this._size = framework.user.Size._instance;
	this._controller = controller;
	if(UnitConfig.login) this._maxTop = 48; else this._maxTop = 0;
	this._area = window.document.getElementById("x_head");
	this._bg = window.document.getElementById("x_head_openBG");
	this._content = window.document.getElementById("x_head_container");
	this._button = window.document.getElementById("x_menuButton");
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.close));
	this._button.onclick = function(e) {
		if(!_g._open) _g.open(); else _g.close();
		return false;
	};
	this._touchController = new touch.Controller({ type : touch.CoordType.DRAG, y : this._maxTop, max : { y : this._maxTop}, min : { y : 0}, outside : Math.round(this._size.height() * 0.9)},{ elm : this._area, eventType : touch.EventType.Y, event : { move : $bind(this,this.setPostion)}});
};
lib.menu.MainContainer.prototype = {
	setPostion: function(v) {
		this._area.style.top = v + "px";
	}
	,open: function() {
		this._open = true;
		this._content.className = "open";
		this._button.className = "open";
		this._bg.className = "open";
		var minTop = this._size.height() - this._area.clientHeight;
		if(minTop > this._maxTop) minTop = this._maxTop;
		this._touchController.resetMin(null,minTop);
		this._touchController.resetOutside(Math.round(this._size.height() * 0.9));
		this._touchController.addEvent();
	}
	,close: function() {
		this._open = false;
		this._content.className = "";
		this._button.className = "";
		this._bg.className = "";
		this.setPostion(this._maxTop);
		this._touchController.removeEvent();
		this._touchController.reset();
	}
};
lib.menu.SelectLang = function(controller) {
	this._open = false;
	this._height = 0;
	this._unitHeight = 34;
	var _g = this;
	this._controller = controller;
	var p = framework.dom._Elements.Elements_Impl_._new(window.document.getElementById("x_lang").getElementsByTagName("p"));
	this._button = p[0];
	this._list = window.document.getElementById("x_head_langList");
	var li = framework.dom._Elements.Elements_Impl_._new(this._list.getElementsByTagName("li"));
	this._height = li.length * this._unitHeight;
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.close));
	this._button.onclick = function(e) {
		if(!_g._open) _g.open(); else _g.close();
		return false;
	};
};
lib.menu.SelectLang.prototype = {
	open: function() {
		this._open = true;
		this._list.style.height = this._height + "px";
		this._button.className = "open";
	}
	,close: function() {
		this._open = false;
		this._list.style.height = 0 + "px";
		this._button.className = "";
	}
};
lib.menu.SubContainer = function(controller) {
	this._open = false;
	var _g = this;
	this._controller = controller;
	this._selectLang = window.document.getElementById("x_lang") != null ? new lib.menu.SelectLang(controller) : null;
	this._content = window.document.getElementById("x_head_subContainer");
	this._button = window.document.getElementById("x_head_subButton");
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.close));
	this._button.onclick = function(e) {
		if(!_g._open) _g.open(); else _g.close();
		return false;
	};
};
lib.menu.SubContainer.prototype = {
	open: function() {
		this._open = true;
		this._content.className = "open";
		this._button.className = "subButton open";
	}
	,close: function() {
		this._open = false;
		if (this._selectLang != undefined)
			this._selectLang.close();
		this._content.className = "";
		this._button.className = "subButton";
	}
};
var touch = {};
touch.Controller = function(coordOption,eventOption) {
	this._coordOptionDef = { type : null, x : 0, y : 0, max : { x : 0, y : 0}, min : { x : 0, y : 0}, outside : 0, segment : { x : [], y : []}};
	this._finishFunction = null;
	this._endFunction = null;
	this.move = eventOption.event.move;
	var cdop = this._coordOptionDef;
	var _g = 0;
	var _g1 = Reflect.fields(coordOption);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		if(key == "max" || key == "min" || key == "segment") {
			var row = Reflect.field(coordOption,key);
			if(Object.prototype.hasOwnProperty.call(row,"x")) Reflect.setField(Reflect.field(cdop,key),"x",Reflect.field(row,"x"));
			if(Object.prototype.hasOwnProperty.call(row,"y")) Reflect.setField(Reflect.field(cdop,key),"y",Reflect.field(row,"y"));
		} else Reflect.setField(cdop,key,Reflect.field(coordOption,key));
	}
	this._coord = new touch.Coord(cdop.type,cdop.x,cdop.y,cdop.max.x,cdop.min.x,cdop.max.y,cdop.min.y,cdop.outside,cdop.segment);
	if(Object.prototype.hasOwnProperty.call(eventOption.event,"end")) this._endFunction = Reflect.field(eventOption.event,"end");
	if(Object.prototype.hasOwnProperty.call(eventOption.event,"finish")) this._finishFunction = Reflect.field(eventOption.event,"finish");
	if(eventOption.eventType == touch.EventType.X) this._event = new touch.SetXEvent(this,eventOption.elm,this._coord); else this._event = new touch.SetYEvent(this,eventOption.elm,this._coord);
};
touch.Controller.prototype = {
	addEvent: function() {
		this._event.setAble(true);
	}
	,removeEvent: function() {
		this._event.setAble(false);
	}
	,resetOutside: function(v) {
		this._event.position.resetOutside(v);
	}
	,resetMax: function(x,y) {
		this._event.position.resetMax(x,y);
	}
	,resetMin: function(x,y) {
		this._event.position.resetMin(x,y);
	}
	,end: function() {
		if(this._endFunction != null) this._endFunction();
	}
	,finish: function() {
		if(this._finishFunction != null) this._finishFunction();
	}
	,reset: function() {
		this._event.position.reset();
	}
	,getSegmentNumber: function() {
		return this._event.position._segNum;
	}
	,setSegment: function(x,y) {
		if(x != null) this._event.position.setSegmentX(x);
		if(y != null) this._event.position.setSegmentY(y);
	}
};
touch.CoordType = { __constructs__ : ["DRAG","FLICK"] };
touch.CoordType.DRAG = ["DRAG",0];
touch.CoordType.DRAG.__enum__ = touch.CoordType;
touch.CoordType.FLICK = ["FLICK",1];
touch.CoordType.FLICK.__enum__ = touch.CoordType;
touch.Coord = function(type,x,y,maxX,minX,maxY,minY,outside,seg) {
	this._time = 0.0;
	this._seglen = { x : 0, y : 0};
	this._min = { x : 0, y : 0, sy : 0};
	this._max = { x : 0, y : 0, sy : 0};
	this._speed = { x : 0, y : 0};
	this._touch = { x : 0, y : 0};
	this._move = { x : 0, y : 0, sy : 0};
	this._now = { x : 0, y : 0};
	this._start = { x : 0, y : 0};
	this._def = { x : 0, y : 0};
	this._flag = false;
	this._segNum = { x : 0, y : 0};
	this._Size = framework.user.Size._instance == null?framework.user.Size._instance = new framework.user.Size():framework.user.Size._instance;
	this._type = type;
	this._def.x = x;
	this._def.y = y;
	this._move.x = x;
	this._move.y = y;
	this._touch.x = x;
	this._touch.y = y;
	this._max.x = maxX;
	this._max.y = maxY;
	this._min.x = minX;
	this._min.y = minY;
	this._outside = outside;
	this._segment = seg;
	if(this._type == touch.CoordType.FLICK) {
		if(this._segment.x.length == 0) this._segment.x = [minX,maxX];
		if(this._segment.y.length == 0) this._segment.y = [minY,maxY];
		this._seglen.x = this._segment.x.length;
		this._seglen.y = this._segment.y.length;
		this._segNum.x = HxOverrides.indexOf(this._segment.x,x,0);
		this._segNum.y = HxOverrides.indexOf(this._segment.y,y,0);
	}
};
touch.Coord.prototype = {
	resetOutside: function(v) {
		this._outside = v;
	}
	,resetMax: function(x,y) {
		if(this._max.x != null) this._max.x = x;
		if(this._max.y != null) this._max.y = y;
	}
	,resetMin: function(x,y) {
		if(this._min.x != null) this._min.x = x;
		if(this._min.y != null) this._min.y = y;
	}
	,start: function(xp,yp) {
		this._flag = true;
		this._start.x = xp;
		this._start.y = yp;
		this._now.x = xp;
		this._now.y = yp;
		this._move.sy = this._Size.top();
		this._max.sy = this._Size.clientHeight() - this._Size.height();
		if(this._max.sy < 0) this._max.sy = 0;
		return this._flag;
	}
	,move: function(xp,yp) {
		var fx = 0;
		var fy = 0;
		if(this._flag) {
			this._time = new Date().getTime();
			if(xp != null) {
				this._speed.x = xp - this._now.x;
				this._touch.x += this._speed.x;
				if(this._touch.x > this._max.x) {
					var i = (this._touch.x - this._max.x) / this._outside;
					if(i > 1) i = 1;
					this._move.x = this._max.x + Math.round(this._outside * (Math.pow(i * 0.1 - 1,5) + 1));
				} else if(this._touch.x < this._min.x) {
					var i1 = (this._touch.x - this._min.x) / -this._outside;
					if(i1 > 1) i1 = 1;
					this._move.x = this._min.x - Math.round(this._outside * (Math.pow(i1 * 0.1 - 1,5) + 1));
				} else this._move.x = this._touch.x;
				this._now.x = xp;
			}
			if(yp != null) {
				this._speed.y = yp - this._now.y;
				this._touch.y += this._speed.y;
				this._move.sy -= this._speed.y;
				if(this._touch.y > this._max.y) {
					var i2 = (this._touch.y - this._max.y) / this._outside;
					if(i2 > 1) i2 = 1;
					this._move.y = this._max.y + Math.round(this._outside * (Math.pow(i2 * 0.1 - 1,5) + 1));
				} else if(this._touch.y < this._min.y) {
					var i3 = (this._touch.y - this._min.y) / -this._outside;
					if(i3 > 1) i3 = 1;
					this._move.y = this._min.y - Math.round(this._outside * (Math.pow(i3 * 0.1 - 1,5) + 1));
				} else this._move.y = this._touch.y;
				if(this._move.sy > this._max.sy) this._move.sy = this._max.sy; else if(this._move.sy < this._min.sy) this._move.sy = this._min.sy;
				this._now.y = yp;
			}
		}
		return { x : this._move.x, y : this._move.y, sy : this._move.sy, mx : xp - this._start.x, my : yp - this._start.y};
	}
	,end: function() {
		this._flag = false;
		var time = 1 - (new Date().getTime() - this._time) / 20;
		if(time < 0) time = 0;
		var res = { end : { x : this._move.x, y : this._move.y, sy : this._move.sy, dx : 0, dy : 0, ds : 0}, back : { x : this._move.x, y : this._move.y, dx : 0, dy : 0}};
		if(this._type == touch.CoordType.DRAG) {
			if(this._speed.x >= 5 || this._speed.x <= -5) {
				if(this._move.x > this._max.x || this._move.x < this._min.x) {
					res.end.x += Math.round(this._speed.x * (time + 1));
					res.end.dx = this.getEndDuration(this._move.x,res.end.x);
				} else {
					res.end.x += Math.round(this._speed.x * (time + 1)) * 4;
					res.end.dx = this.getBackDuration(this._move.x,res.end.x);
				}
			}
			if(res.end.x > this._max.x) {
				res.back.x = this._max.x;
				res.back.dx = this.getBackDuration(res.end.x,this._max.x);
			} else if(res.end.x < this._min.x) {
				res.back.x = this._min.x;
				res.back.dx = this.getBackDuration(res.end.x,this._min.x);
			}
			if(this._speed.y >= 5 || this._speed.y <= -5) {
				if(this._move.x > this._max.x || this._move.x < this._min.x) {
					res.end.y += Math.round(this._speed.y * (time + 1));
					res.end.dy = this.getEndDuration(this._move.y,res.end.y);
				} else {
					res.end.y += Math.round(this._speed.y * (time + 1)) * 4;
					res.end.dy = this.getBackDuration(this._move.y,res.end.y);
				}
			}
			if(res.end.y > this._max.y) {
				res.back.y = this._max.y;
				res.back.dy = this.getBackDuration(res.end.y,this._max.y);
			} else if(res.end.y < this._min.y) {
				res.back.y = this._min.y;
				res.back.dy = this.getBackDuration(res.end.y,this._min.y);
			}
		} else {
			if(this._speed.x >= 5 || this._speed.x <= -5) res.end.x += Math.round(this._speed.x * (time + 1)) * 4;
			if(res.end.x > this._segment.x[0]) {
				this._segNum.x = 0;
				res.end.x = this._segment.x[0];
			} else if(res.end.x < this._segment.x[this._seglen.x - 1]) this._segNum.x = this._seglen.x - 1; else if(this._segNum.x > 0 && this._start.x < this._now.x) {
				var v = this._segment.x[this._segNum.x] - this._segment.x[this._segNum.x - 1];
				if(v * 0.4 + this._segment.x[this._segNum.x - 1] <= res.end.x) --this._segNum.x;
			} else if(this._segNum.x < this._seglen.x - 1 && this._start.x > this._now.x) {
				var v1 = this._segment.x[this._segNum.x + 1] - this._segment.x[this._segNum.x];
				if(v1 * 0.6 + this._segment.x[this._segNum.x] >= res.end.x) ++this._segNum.x;
			}
			res.end.x = this._segment.x[this._segNum.x];
			res.end.dx = this.getBackDuration(this._move.x,res.end.x);
			if(this._speed.y >= 5 || this._speed.y <= -5) res.end.y += Math.round(this._speed.y * (time + 1)) * 4;
			if(res.end.y > this._segment.y[0]) {
				this._segNum.y = 0;
				res.end.y = this._segment.y[0];
			} else if(res.end.y < this._segment.y[this._seglen.y - 1]) this._segNum.y = this._seglen.y - 1; else if(this._segNum.y > 0 && this._start.y < this._now.y) {
				var v2 = this._segment.y[this._segNum.y] - this._segment.y[this._segNum.y - 1];
				if(v2 * 0.4 + this._segment.y[this._segNum.y - 1] <= res.end.y) --this._segNum.y;
			} else if(this._segNum.y < this._seglen.y - 1 && this._start.y > this._now.y) {
				var v3 = this._segment.y[this._segNum.y + 1] - this._segment.y[this._segNum.y];
				if(v3 * 0.6 + this._segment.y[this._segNum.y] >= res.end.y) ++this._segNum.y;
			}
			res.end.y = this._segment.y[this._segNum.y];
			res.end.dy = this.getBackDuration(this._move.y,res.end.y);
		}
		if(this._speed.y >= 5 || this._speed.y <= -5) {
			res.end.sy -= Math.round(this._speed.y * (time + 1)) * 4;
			if(res.end.sy > this._max.sy) res.end.sy = this._max.sy; else if(res.end.sy < this._min.sy) res.end.sy = this._min.sy;
			res.end.ds = this.getBackDuration(this._move.sy,res.end.sy);
		}
		this._speed.x = 0;
		this._speed.y = 0;
		this._start.x = 0;
		this._start.y = 0;
		this._now.x = 0;
		this._now.y = 0;
		return res;
	}
	,setMoveX: function(xp) {
		this._move.x = xp;
		this._touch.x = xp;
	}
	,setMoveY: function(yp) {
		this._move.y = yp;
		this._touch.y = yp;
	}
	,setSegmentX: function(seg) {
		this._segment.x = seg;
		this._seglen.x = seg.length;
		this.resetMax(seg[0]);
		this.resetMin(seg[this._seglen.x - 1]);
	}
	,setSegmentY: function(seg) {
		this._segment.y = seg;
		this._seglen.y = seg.length;
		this.resetMax(null,seg[0]);
		this.resetMin(null,seg[this._seglen.y - 1]);
	}
	,reset: function() {
		this._flag = false;
		this._start.x = 0;
		this._start.y = 0;
		this._now.x = 0;
		this._now.y = 0;
		this._move.x = this._def.x;
		this._move.y = this._def.y;
		this._move.sy = 0;
		this._touch.x = this._def.x;
		this._touch.y = this._def.y;
		this._speed.x = 0;
		this._speed.y = 0;
		if(this._type == touch.CoordType.FLICK) {
			this._segNum.x = HxOverrides.indexOf(this._segment.x,this._def.x,0);
			this._segNum.y = HxOverrides.indexOf(this._segment.y,this._def.y,0);
		}
	}
	,getEndDuration: function(from,to) {
		var v = Math.abs(to - from) / this._outside;
		if(v > 0) {
			if(v > 1) v = 1;
			return Math.round(this._outside * 0.5 * (Math.pow(v - 1,5) + 1));
		} else return 0;
	}
	,getBackDuration: function(from,to) {
		var v = Math.abs(to - from) / 200;
		if(v > 0) {
			if(v > 1) v = 1;
			return Math.round(300 * (Math.pow(v - 1,5) + 1));
		} else return 0;
	}
};
touch.EventType = { __constructs__ : ["X","Y"] };
touch.EventType.X = ["X",0];
touch.EventType.X.__enum__ = touch.EventType;
touch.EventType.Y = ["Y",1];
touch.EventType.Y.__enum__ = touch.EventType;
touch.SetEvent = function(controller,elm,coord) {
	this._value = 0;
	this._timer = null;
	this._move = false;
	this._Size = framework.user.Size._instance == null?framework.user.Size._instance = new framework.user.Size():framework.user.Size._instance;
	this._controller = controller;
	this._elm = elm;
	this.position = coord;
	this._body = window.document.body;
};
touch.SetEvent.prototype = {
	setAble: function(flag) {
		if(flag) this._elm.addEventListener("touchstart",$bind(this,this.touchStart)); else this._elm.removeEventListener("touchstart",$bind(this,this.touchStart));
	}
	,addEvent: function() {
		this._body.addEventListener("touchmove",$bind(this,this.touchMove));
		this._body.addEventListener("touchend",$bind(this,this.touchEnd));
		this._body.addEventListener("touchcancel",$bind(this,this.touchCancel));
	}
	,removeEvent: function() {
		this._body.removeEventListener("touchmove",$bind(this,this.touchMove));
		this._body.removeEventListener("touchend",$bind(this,this.touchEnd));
		this._body.removeEventListener("touchcancel",$bind(this,this.touchCancel));
	}
	,touchStart: function(e) {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		if(e.touches.length == 1) {
			var x = e.touches[0].screenX;
			var y = e.touches[0].pageY - this._Size.top();
			this.position.start(x,y);
			this.addEvent();
		}
	}
	,touchMove: function(e) {
	}
	,touchEnd: function(e) {
		this.removeEvent();
	}
	,touchCancel: function(e) {
		this.removeEvent();
		this.position.reset();
	}
};
touch.SetXEvent = function(controller,elm,coord) {
	this._valueS = 0;
	this._android = (framework.user.UserAgent._instance == null?framework.user.UserAgent._instance = new framework.user.UserAgent():framework.user.UserAgent._instance).device.android;
	this._scroll = false;
	this._lowest = { x : 10, y : 7};
	touch.SetEvent.call(this,controller,elm,coord);
};
touch.SetXEvent.__super__ = touch.SetEvent;
touch.SetXEvent.prototype = $extend(touch.SetEvent.prototype,{
	touchMove: function(e) {
		touch.SetEvent.prototype.touchMove.call(this,e);
		var touch_x = e.touches[0].screenX;
		var touch_y = e.touches[0].pageY - this._Size.top();
		var pos = this.position.move(touch_x,touch_y);
		if(this._move) {
			e.preventDefault();
			this._value = pos.x;
			this._controller.move(this._value);
		} else if(this._scroll) {
			if(this._android) {
				e.preventDefault();
				this._valueS = pos.sy;
				window.scrollTo(0,this._valueS);
			} else {
				this._scroll = false;
				this.removeEvent();
				this.position.setMoveX(this._value);
			}
		} else if(Math.abs(pos.mx) >= this._lowest.x) {
			e.preventDefault();
			this._move = true;
		} else if(Math.abs(pos.my) >= this._lowest.y) {
			this._scroll = true;
			if(this._android) e.preventDefault();
		}
	}
	,touchEnd: function(e) {
		var _g = this;
		touch.SetEvent.prototype.touchEnd.call(this,e);
		if(this._move || this._android && this._scroll) {
			e.preventDefault();
			var pos = this.position.end();
			this._controller.end();
			if(this._move) {
				if(pos.end.dx > 0) {
					if(pos.back.dx > 0) this.setTimerFunction(this._value,pos.end.x,pos.end.dx,function() {
						_g.setTimerFunction(pos.end.x,pos.back.x,pos.back.dx,function() {
							_g._controller.finish();
						});
					}); else this.setTimerFunction(this._value,pos.end.x,pos.end.dx,function() {
						_g._controller.finish();
					});
				} else if(pos.back.dx > 0) this.setTimerFunction(this._value,pos.back.x,pos.back.dx,function() {
					_g._controller.finish();
				}); else this._controller.finish();
			} else {
				this.position.setMoveX(this._value);
				if(pos.end.ds > 0) {
					this._body.addEventListener("touchstart",$bind(this,this.scrollStop));
					var startTime = new Date().getTime();
					this._timer = new haxe.Timer(15);
					this._timer.run = function() {
						var v = framework.animation.Easing.get(_g._valueS,pos.end.sy,pos.end.ds,startTime,framework.animation.EasingType.SINE,framework.animation.EasingOption.OUT);
						window.scrollTo(_g._Size.left(),v);
						if(v == pos.end.sy) {
							_g._body.removeEventListener("touchstart",$bind(_g,_g.scrollStop));
							_g._timer.stop();
							_g._timer = null;
						}
					};
				}
			}
		}
		this._move = false;
		this._scroll = false;
	}
	,setTimerFunction: function(from,to,duration,endFunc) {
		var _g = this;
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		var startTime = new Date().getTime();
		this._timer = new haxe.Timer(15);
		this._timer.run = function() {
			var v = framework.animation.Easing.get(from,to,duration,startTime,framework.animation.EasingType.SINE,framework.animation.EasingOption.OUT);
			_g._value = v;
			_g._controller.move(v);
			_g.position.setMoveX(v);
			if(v == to) {
				_g._timer.stop();
				_g._timer = null;
				endFunc();
			}
		};
	}
	,scrollStop: function(e) {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
	}
});
touch.SetYEvent = function(controller,elm,coord) {
	touch.SetEvent.call(this,controller,elm,coord);
};
touch.SetYEvent.__super__ = touch.SetEvent;
touch.SetYEvent.prototype = $extend(touch.SetEvent.prototype,{
	touchMove: function(e) {
		touch.SetEvent.prototype.touchMove.call(this,e);
		var touch_x = e.touches[0].screenX;
		var touch_y = e.touches[0].pageY - this._Size.top();
		var pos = this.position.move(touch_x,touch_y);
		if(!this._move && (pos.my > 5 || pos.my < -5)) this._move = true;
		if(this._move) {
			e.preventDefault();
			this._value = pos.y;
			this._controller.move(this._value);
		}
	}
	,touchEnd: function(e) {
		var _g = this;
		touch.SetEvent.prototype.touchEnd.call(this,e);
		if(this._move) {
			e.preventDefault();
			this._move = false;
			var pos = this.position.end();
			this._controller.end();
			if(pos.end.dy > 0) {
				if(pos.back.dy > 0) this.setTimerFunction(this._value,pos.end.y,pos.end.dy,function() {
					_g.setTimerFunction(pos.end.y,pos.back.y,pos.back.dy,function() {
						_g._controller.finish();
					});
				}); else this.setTimerFunction(this._value,pos.end.y,pos.end.dy,function() {
					_g._controller.finish();
				});
			} else if(pos.back.dy > 0) this.setTimerFunction(this._value,pos.back.y,pos.back.dy,function() {
				_g._controller.finish();
			});
		}
	}
	,setTimerFunction: function(from,to,duration,endFunc) {
		var _g = this;
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		var startTime = new Date().getTime();
		this._timer = new haxe.Timer(15);
		this._timer.run = function() {
			var v = framework.animation.Easing.get(from,to,duration,startTime,framework.animation.EasingType.SINE,framework.animation.EasingOption.OUT);
			_g._controller.move(v);
			_g.position.setMoveY(v);
			if(v == to) {
				_g._timer.stop();
				_g._timer = null;
				endFunc();
			}
		};
	}
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
framework.event.Window._format = false;
framework.event.Window._loaded = false;
framework.event.Window._loadFunc = new framework.FunctionList();
framework.event.Window._scrollFunc = new framework.FunctionList();
framework.event.Window._resizeFunc = new framework.FunctionList();
framework.event.Window._blurFunc = new framework.FunctionList();
framework.event.Window._focusFunc = new framework.FunctionList();
lib.CommonMain.main();
})(typeof window != "undefined" ? window : exports);

(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
};
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
var IMap = function() { };
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var Video = function() {
	this._menuHeight = Common.menu.height;
	this._playing = false;
	this._loaded = false;
	this._canPlay = { focus : true, scroll : true};
	this._size = null;
	var dom = window.document.getElementById("mainvideo");
	if (dom == null)
		return;
	this._box = dom.parentElement;
	this._area = this._box.parentElement;
	this._size = this.getSize();
	Common.event.addEvent(framework.event.EventType.RESIZE,$bind(this,this.setSize));
	Common.event.addEvent(framework.event.EventType.SCROLL,$bind(this,this.setDownloadButton));
	this.setDownloadButton();
	if(Common.ua.device.type == "pc") {
		this._player = new youtube.Player("mainvideo",dom.title,this._size.width,this._size.height,true,0,$bind(this,this.onLoaded),$bind(this,this.onStoped));
		Common.event.addEvent(framework.event.EventType.BLUR,$bind(this,this.setPauseForFocus));
		Common.event.addEvent(framework.event.EventType.FOCUS,$bind(this,this.setPlayForFocus));
		this._player.create();
		dom = null;
	}
};
Video.prototype = {
	getSize: function() {
		var res = { width : 0, height : 0, left : 0, top : 0};
		var w = Common.size.width();
		var h = this._area.offsetHeight;
		if(w > 2970) w = 2970;
		res.width = w;
		res.height = Math.floor(w / 16 * 9);
		if(h > res.height) {
			res.height = h;
			res.width = Math.floor(h / 9 * 16);
		}
		res.left = Math.floor((w - res.width) / 2);
		res.top = Math.floor((h - res.height) / 2);
		w = null;
		h = null;
		this._box.style.width = res.width + "px";
		this._box.style.height = res.height + "px";
		this._box.style.left = res.left + "px";
		this._box.style.top = res.top + "px";
		return res;
	}
	,setSize: function() {
		this._size = this.getSize();
		if(Common.ua.device.type == "pc") {
			this._player.setSize(this._size.width,this._size.height);
			if(this._loaded) this.setPlayForPosition();
		}
		this.setDownloadButton();
	}
	,setDownloadButton: function() {
		var y = Common.size.top();
		if(this._size.height + this._menuHeight <= y) Common.menu.showDownloadButtn(); else Common.menu.hideDownloadButtn();
		y = null;
	}
	,onLoaded: function() {
		this._loaded = true;
		Common.event.addEvent(framework.event.EventType.SCROLL,$bind(this,this.setPlayForPosition));
		this.setPlayForPosition();
	}
	,onStoped: function() {
		this._playing = false;
		this.play();
	}
	,play: function() {
		if(!this._playing && this._loaded && this._canPlay.focus && this._canPlay.scroll) {
			this._playing = true;
			this._player.play();
		}
	}
	,pause: function() {
		this._playing = false;
		this._player.pause();
	}
	,setPlayForPosition: function() {
		var y = Common.size.top();
		if(this._size.height + this._menuHeight <= y) {
			this._canPlay.scroll = false;
			this.pause();
		} else {
			this._canPlay.scroll = true;
			this.play();
		}
		y = null;
	}
	,setPauseForFocus: function() {
		this._canPlay.focus = false;
		this.pause();
	}
	,setPlayForFocus: function() {
		this._canPlay.focus = true;
		this.play();
	}
};
var VideoMain = function() { };
VideoMain.main = function() {
	if(!UnitConfig.login) VideoMain._video = new Video();
};
var framework = {};
framework.Flag = function(keys) {
	this._value = { };
	this._status = { };
	var _g1 = 0;
	var _g = keys.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		this._status[keys[i]] = true;
		this._value[keys[i]] = 0;
	}
};
framework.Flag.prototype = {
	getValue: function(key) {
		if(Object.prototype.hasOwnProperty.call(this._status,key)) {
			if(Reflect.getProperty(this._status,key)) return false;
			return Reflect.getProperty(this._value,key);
		}
		return false;
	}
	,setValue: function(key,value) {
		if(Object.prototype.hasOwnProperty.call(this._status,key)) {
			this._value[key] = value;
			this._status[key] = false;
		}
	}
	,onStatus: function(key) {
		if(Object.prototype.hasOwnProperty.call(this._status,key)) this._status[key] = true;
	}
};
framework.FunctionList = function() {
	this._pause = [];
	this._funcs = { };
	this._length = 0;
	this._num = 0;
};
framework.FunctionList.prototype = {
	add: function(func) {
		var n = this._num;
		this._funcs[n + ""] = func;
		this._pause[n] = n;
		this._num = n + 1;
		return n;
	}
	,addAndStart: function(func) {
		var n = this._num;
		this._num = n + 1;
		this._funcs[n + ""] = func;
		this._length++;
		if(this._length == 1) return [n,true]; else return [n,false];
	}
	,reset: function(num,func) {
		if(Object.prototype.hasOwnProperty.call(this._funcs,num + "")) {
			this._funcs[num + ""] = func;
			return true;
		}
		return false;
	}
	,start: function(num) {
		if(this._pause[num] >= 0) {
			this._pause.splice(num,1);
			this._length++;
			if(this._length == 1) return true;
		}
		return false;
	}
	,stop: function(num) {
		if(this._pause[num] == null) {
			this._pause[num] = num;
			this._length--;
			return true;
		}
		return false;
	}
	,remove: function(num) {
		if(Object.prototype.hasOwnProperty.call(this._funcs,num + "")) {
			Reflect.deleteField(this._funcs,num + "");
			this._length--;
			return true;
		}
		return false;
	}
	,run: function() {
		var res = false;
		var fields = Reflect.fields(this._funcs);
		var key = "";
		var _g1 = 0;
		var _g = fields.length;
		while(_g1 < _g) {
			var i = _g1++;
			key = fields[i];
			if(this._pause[Std.parseInt(key)] == null) {
				res = true;
				(Reflect.getProperty(this._funcs,key))();
			}
		}
		return res;
	}
};
framework.animation = {};
framework.animation.EasingType = { __constructs__ : ["LINEAR","SINE","QUAD","CUBIC","QUART","QUINT","EXPO","CIRC"] };
framework.animation.EasingType.LINEAR = ["LINEAR",0];
framework.animation.EasingType.LINEAR.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.SINE = ["SINE",1];
framework.animation.EasingType.SINE.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.QUAD = ["QUAD",2];
framework.animation.EasingType.QUAD.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.CUBIC = ["CUBIC",3];
framework.animation.EasingType.CUBIC.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.QUART = ["QUART",4];
framework.animation.EasingType.QUART.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.QUINT = ["QUINT",5];
framework.animation.EasingType.QUINT.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.EXPO = ["EXPO",6];
framework.animation.EasingType.EXPO.__enum__ = framework.animation.EasingType;
framework.animation.EasingType.CIRC = ["CIRC",7];
framework.animation.EasingType.CIRC.__enum__ = framework.animation.EasingType;
framework.animation.EasingOption = { __constructs__ : ["IN","OUT","INOUT"] };
framework.animation.EasingOption.IN = ["IN",0];
framework.animation.EasingOption.IN.__enum__ = framework.animation.EasingOption;
framework.animation.EasingOption.OUT = ["OUT",1];
framework.animation.EasingOption.OUT.__enum__ = framework.animation.EasingOption;
framework.animation.EasingOption.INOUT = ["INOUT",2];
framework.animation.EasingOption.INOUT.__enum__ = framework.animation.EasingOption;
framework.animation.Easing = function() { };
framework.animation.Easing.get = function(start,end,duration,startTime,type,option) {
	var s = start;
	var c = end - start;
	var d = duration;
	var t = startTime;
	var tt = d;
	var n = new Date().getTime();
	if(t + d > n) tt = n - t; else return end;
	switch(type[1]) {
	case 0:
		return framework.animation.Easing.toInt(c * tt / d + s,c);
	case 1:
		tt /= d;
		if(option == framework.animation.EasingOption.IN) return framework.animation.Easing.toInt(-c * Math.cos(tt * (Math.PI / 2)) + c + s,c); else if(option == framework.animation.EasingOption.OUT) return framework.animation.Easing.toInt(c * Math.sin(tt * (Math.PI / 2)) + s,c); else if(option == framework.animation.EasingOption.INOUT) return framework.animation.Easing.toInt(-c / 2 * (Math.cos(Math.PI * tt) - 1) + s,c);
		break;
	case 2:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt /= d;
			return framework.animation.Easing.toInt(-c * tt * (tt - 2) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt + s,c); else {
				--tt;
				return framework.animation.Easing.toInt(-c / 2 * (tt * (tt - 2) - 1) + s,c);
			}
		}
		break;
	case 3:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(c * (tt * tt * tt + 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt * tt + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(c / 2 * (tt * tt * tt + 2) + s,c);
			}
		}
		break;
	case 4:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(-c * (tt * tt * tt * tt - 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt * tt * tt + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(-c / 2 * (tt * tt * tt * tt - 2) + s,c);
			}
		}
		break;
	case 5:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * tt * tt * tt * tt * tt + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(c * (tt * tt * tt * tt * tt + 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * tt * tt * tt * tt * tt + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(c / 2 * (tt * tt * tt * tt * tt + 2) + s,c);
			}
		}
		break;
	case 6:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(c * Math.pow(2,10 * (tt - 1)) + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt /= d;
			return framework.animation.Easing.toInt(c * (-Math.pow(2,-10 * tt) + 1) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(c / 2 * Math.pow(2,10 * (tt - 1)) + s,c); else {
				--tt;
				return framework.animation.Easing.toInt(c / 2 * (-Math.pow(2,-10 * tt) + 2) + s,c);
			}
		}
		break;
	case 7:
		if(option == framework.animation.EasingOption.IN) {
			tt /= d;
			return framework.animation.Easing.toInt(-c * (Math.sqrt(1 - tt * tt) - 1) + s,c);
		} else if(option == framework.animation.EasingOption.OUT) {
			tt = tt / d - 1;
			return framework.animation.Easing.toInt(c * Math.sqrt(1 - tt * tt) + s,c);
		} else if(option == framework.animation.EasingOption.INOUT) {
			tt /= d * 0.5;
			if(tt < 1) return framework.animation.Easing.toInt(-c / 2 * (Math.sqrt(1 - tt * tt) - 1) + s,c); else {
				tt -= 2;
				return framework.animation.Easing.toInt(c / 2 * (Math.sqrt(1 - tt * tt) + 1) + s,c);
			}
		}
		break;
	}
	return 0;
};
framework.animation.Easing.toInt = function(f,way) {
	if(way > 0) return Math.floor(f); else return Math.ceil(f);
};
framework.animation.Tween = function(from,to,duration,type,option,runFunc,endFunc) {
	this._stopTime = null;
	this._startTime = null;
	this._stop = true;
	this._timer = null;
	var _g = this;
	this._func = function() {
		var v = framework.animation.Easing.get(from,to,duration,_g._startTime,type,option);
		runFunc(v);
		if(v == to) {
			_g.clear();
			if(endFunc != null) endFunc();
		}
	};
};
framework.animation.Tween.prototype = {
	start: function() {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		if(this._stop) {
			this._stop = false;
			if(this._stopTime == null) this._startTime = new Date().getTime(); else {
				var t = new Date().getTime() - this._startTime;
				this._startTime += t;
			}
			this._timer = new haxe.Timer(15);
			this._timer.run = this._func;
		}
	}
	,stop: function() {
		if(this._timer != null) {
			this._timer.stop();
			this._stopTime = new Date().getTime();
			this._stop = true;
		}
	}
	,clear: function() {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
			this._func = null;
			this._stop = null;
			this._startTime = null;
			this._stopTime = null;
		}
	}
};
framework.dom = {};
framework.dom._Elements = {};
framework.dom._Elements.Elements_Impl_ = function() { };
framework.dom._Elements.Elements_Impl_._new = function(target) {
	var this1;
	this1 = [];
	var _g1 = 0;
	var _g = target.length;
	while(_g1 < _g) {
		var i = _g1++;
		this1.push(target[i]);
	}
	return this1;
};
framework.dom._Elements.Elements_Impl_.__get = function(this1,key) {
	return this1[key];
};
framework.event = {};
framework.event.EventType = { __constructs__ : ["LOAD","SCROLL","RESIZE","BLUR","FOCUS"] };
framework.event.EventType.LOAD = ["LOAD",0];
framework.event.EventType.LOAD.__enum__ = framework.event.EventType;
framework.event.EventType.SCROLL = ["SCROLL",1];
framework.event.EventType.SCROLL.__enum__ = framework.event.EventType;
framework.event.EventType.RESIZE = ["RESIZE",2];
framework.event.EventType.RESIZE.__enum__ = framework.event.EventType;
framework.event.EventType.BLUR = ["BLUR",3];
framework.event.EventType.BLUR.__enum__ = framework.event.EventType;
framework.event.EventType.FOCUS = ["FOCUS",4];
framework.event.EventType.FOCUS.__enum__ = framework.event.EventType;
framework.event.Window = function() { };
framework.event.Window.init = function() {
	if(!framework.event.Window._format) {
		framework.event.Window._format = true;
		framework.event.Window._option = new haxe.ds.EnumValueMap();
		framework.event.Window._option.set(framework.event.EventType.LOAD,true);
		framework.event.Window._option.set(framework.event.EventType.SCROLL,false);
		framework.event.Window._option.set(framework.event.EventType.RESIZE,false);
		framework.event.Window._option.set(framework.event.EventType.BLUR,false);
		framework.event.Window._option.set(framework.event.EventType.FOCUS,false);
		window.onload = function(e) {
			framework.event.Window._loaded = true;
			if(framework.event.Window._option.get(framework.event.EventType.SCROLL)) window.onscroll = framework.event.Window.setEvent(framework.event.EventType.SCROLL);
			if(framework.event.Window._option.get(framework.event.EventType.RESIZE)) window.onresize = framework.event.Window.setEvent(framework.event.EventType.RESIZE);
			if(framework.event.Window._option.get(framework.event.EventType.BLUR)) window.onblur = framework.event.Window.setEvent(framework.event.EventType.BLUR);
			if(framework.event.Window._option.get(framework.event.EventType.FOCUS)) window.onfocus = framework.event.Window.setEvent(framework.event.EventType.FOCUS);
			framework.event.Window.runEvent(framework.event.EventType.LOAD);
		};
	}
};
framework.event.Window.setEvent = function(type) {
	var res = function(e) {
		framework.event.Window.runEvent(type);
	};
	return res;
};
framework.event.Window.addEvent = function(type,func) {
	if(!framework.event.Window._format) framework.event.Window.init();
	if(!framework.event.Window._option.get(type)) {
		framework.event.Window._option.set(type,true);
		if(framework.event.Window._loaded) switch(type[1]) {
		case 0:
			break;
		case 1:
			window.onscroll = framework.event.Window.setEvent(framework.event.EventType.SCROLL);
			break;
		case 2:
			window.onresize = framework.event.Window.setEvent(framework.event.EventType.RESIZE);
			break;
		case 3:
			window.onblur = framework.event.Window.setEvent(framework.event.EventType.BLUR);
			break;
		case 4:
			window.onfocus = framework.event.Window.setEvent(framework.event.EventType.FOCUS);
			break;
		}
	}
	return framework.event.Window.getFuncList(type).addAndStart(func)[0];
};
framework.event.Window.resetEvent = function(type,num,func) {
	return framework.event.Window.getFuncList(type).reset(num,func);
};
framework.event.Window.startEvent = function(type,num) {
	return framework.event.Window.getFuncList(type).start(num);
};
framework.event.Window.stopEvent = function(type,num) {
	return framework.event.Window.getFuncList(type).stop(num);
};
framework.event.Window.removeEvent = function(type,num) {
	return framework.event.Window.getFuncList(type).remove(num);
};
framework.event.Window.runEvent = function(type) {
	return framework.event.Window.getFuncList(type).run();
};
framework.event.Window.getFuncList = function(type) {
	switch(type[1]) {
	case 0:
		return framework.event.Window._loadFunc;
	case 1:
		return framework.event.Window._scrollFunc;
	case 2:
		return framework.event.Window._resizeFunc;
	case 3:
		return framework.event.Window._blurFunc;
	case 4:
		return framework.event.Window._focusFunc;
	}
};
framework.user = {};
framework.user.OS = function() {
	this.ver = "0.0";
	this.type = "other";
};
framework.user.OS.prototype = {
	check: function(v) {
		var a = v.split(".");
		var b = this.ver.split(".");
		var I;
		if(a.length > b.length) I = a.length; else I = b.length;
		var aa;
		var bb = 0;
		var _g1 = 0;
		var _g = I - 1;
		while(_g1 < _g) {
			var i = _g1++;
			aa = 0;
			bb = 0;
			if(a[i] != null) aa = Std.parseInt(a[i]);
			if(b[i] != null) bb = Std.parseInt(b[i]);
			if(aa > bb) return false;
			if(aa < bb) return true;
		}
		return true;
	}
};
framework.user.Browser = function() {
	this.ie = false;
	framework.user.OS.call(this);
};
framework.user.Browser.__super__ = framework.user.OS;
framework.user.Browser.prototype = $extend(framework.user.OS.prototype,{
});
framework.user.Size = function() {
	this._keys = ["width","height","clientWidth","clientHeight","top","left"];
	this._bd = window.document.body;
	this._dc = window.document;
	this._wd = window;
	this._values = new framework.Flag(this._keys);
	this.screenWidth = this._wd.screen.width;
	this.screenHeight = this._wd.screen.height;
	this.availWidth = this._wd.screen.availWidth;
	this.availHeight = this._wd.screen.availHeight;
	this.scrollWidth = this._wd.innerWidth - this.width();
	this.pixelRatio = this._wd.devicePixelRatio;
	if(this.pixelRatio != null && this.pixelRatio == 2) this.retina = true; else this.retina = false;
	if(this.scrollWidth >= 30) this.scrollWidth = 0;
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.onAllFlag));
	framework.event.Window.addEvent(framework.event.EventType.SCROLL,$bind(this,this.onPositionFlag));
};
framework.user.Size.getInstance = function() {
	if(framework.user.Size._instance == null) return framework.user.Size._instance = new framework.user.Size(); else return framework.user.Size._instance;
};
framework.user.Size.prototype = {
	width: function() {
		var res = this._values.getValue("width");
		if(res != false) return res;
		res = this._dc.documentElement.clientWidth;
		this._values.setValue("width",res);
		return res;
	}
	,height: function() {
		var res = this._values.getValue("height");
		if(res != false) return res;
		res = this._dc.documentElement.clientHeight;
		this._values.setValue("height",res);
		return res;
	}
	,clientWidth: function() {
		var res = this._values.getValue("clientWidth");
		if(res != false) return res;
		res = Math.max.apply(null,[this._bd.clientWidth,this._bd.scrollWidth,this._dc.documentElement.scrollWidth,this._dc.documentElement.clientWidth]);
		this._values.setValue("clientWidth",res);
		return res;
	}
	,clientHeight: function() {
		var res = this._values.getValue("clientHeight");
		if(res != false) return res;
		res = Math.max.apply(null,[this._bd.clientHeight,this._bd.scrollHeight,this._dc.documentElement.scrollHeight,this._dc.documentElement.clientHeight]);
		this._values.setValue("clientHeight",res);
		return res;
	}
	,top: function() {
		var res = this._values.getValue("top");
		if(res != false) return res;
		res = this._dc.documentElement.scrollTop || this._bd.scrollTop;
		this._values.setValue("top",res);
		return res;
	}
	,left: function() {
		var res = this._values.getValue("left");
		if(res != false) return res;
		res = this._dc.documentElement.scrollLeft || this._bd.scrollLeft;
		this._values.setValue("left",res);
		return res;
	}
	,onSizeFlag: function() {
		this._values.onStatus("width");
		this._values.onStatus("height");
		this._values.onStatus("clientWidth");
		this._values.onStatus("clientHeight");
	}
	,onPositionFlag: function() {
		this._values.onStatus("top");
		this._values.onStatus("left");
	}
	,onAllFlag: function() {
		var _g1 = 0;
		var _g = this._keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			this._values.onStatus(this._keys[i]);
		}
	}
};
framework.user.UserAgent = function() {
	this.device = { type : "pc", android : false, androidVer : null};
	this.browser = new framework.user.Browser();
	this.os = new framework.user.OS();
	this.ua = window.navigator.userAgent;
	var dvList = [["iPhone","iOS","sp"],["iPad","iOS","tb"],["iPod","iOS","sp"],["BlackBerry","BlackBerry","sp"],["Windows Phone","Windows Phone","sp"],["Mac OS X","Mac","pc"],["Windows NT","Windows","pc"],["Windows 9","Windows","pc"]];
	var dvEReg = [new EReg("iPhone OS ((?:[0-9]+)(?:_(?:[0-9]+))*)",""),new EReg("CPU OS ((?:[0-9]+)(?:_(?:[0-9]+))*)",""),new EReg("CPU iPhone OS ((?:[0-9]+)(?:_(?:[0-9]+))*)",""),new EReg("BlackBerry[0-9]*/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Windows Phone ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Mac OS X ((?:[0-9]+)(?:(?:\\.|_)(?:[0-9]+))*)",""),new EReg("Windows NT ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Windows ((?:[0-9]+)(?:\\.(?:[0-9]+))*)","")];
	var bwList = ["Chrome","Safari","Firefox","Opera"];
	var bwEReg = [new EReg("Chrome/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Version/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Firefox/((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""),new EReg("Version/((?:[0-9]+)(?:\\.(?:[0-9]+))*)","")];
	var _g1 = 0;
	var _g = dvList.length;
	while(_g1 < _g) {
		var i = _g1++;
		var v = dvList[i];
		if(this.ua.indexOf(v[0]) >= 0) {
			this.os.type = v[1];
			this.device.type = v[2];
			this.os.ver = this.matchedVer(dvEReg[i]);
			break;
		}
	}
	var _g11 = 0;
	var _g2 = bwList.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		if(this.ua.indexOf(bwList[i1]) >= 0) {
			this.browser.type = bwList[i1];
			this.browser.ver = this.matchedVer(bwEReg[i1]);
			break;
		}
	}
	if(this.ua.indexOf("Android") >= 0) {
		this.os.type = "Android";
		this.os.ver = this.matchedVer(new EReg("Android ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""));
		if(this.ua.indexOf("Mobile") == -1 || this.ua.indexOf("A1_07") > 0 || this.ua.indexOf("SC-01C") > 0) this.device.type = "tb"; else this.device.type = "sp";
		this.device.android = true;
		this.device.androidVer = this.matchedVer(new EReg("; ((?:(?!;).)*) Build",""),true);
	}
	if(this.ua.indexOf("MSIE") >= 0) {
		this.browser.ie = true;
		var _g3 = 6;
		while(_g3 < 11) {
			var i2 = _g3++;
			if(this.ua.indexOf("MSIE " + i2) >= 0) {
				this.browser.type = "MSIE" + i2;
				this.browser.ver = this.matchedVer(new EReg("MSIE ((?:[0-9]+)(?:\\.(?:[0-9]+))*)",""));
				break;
			}
		}
	} else if(this.ua.indexOf("Trident/7") >= 0) {
		this.browser.ie = true;
		this.browser.type = "MSIE11";
		this.browser.ver = this.matchedVer(new EReg("rv:((?:[0-9]+)(?:_(?:[0-9]+))*)",""));
	}
};
framework.user.UserAgent.getInstance = function() {
	if(framework.user.UserAgent._instance == null) return framework.user.UserAgent._instance = new framework.user.UserAgent(); else return framework.user.UserAgent._instance;
};
framework.user.UserAgent.prototype = {
	matchedVer: function(ereg,def) {
		if(def == null) def = "0.0";
		if(ereg.match(this.ua)) return ereg.matched(1); else return def;
	}
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
haxe.ds = {};
haxe.ds.BalancedTree = function() {
};
haxe.ds.BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
};
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
haxe.ds.EnumValueMap = function() {
	haxe.ds.BalancedTree.call(this);
};
haxe.ds.EnumValueMap.__interfaces__ = [IMap];
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
});
var lib = {};
lib.Event = function() {
};
lib.Event.prototype = {
	init: function() {
		framework.event.Window.init();
	}
	,addEvent: function(type,func) {
		return framework.event.Window.addEvent(type,func);
	}
	,resetEvent: function(type,num,func) {
		return framework.event.Window.resetEvent(type,num,func);
	}
	,startEvent: function(type,num) {
		return framework.event.Window.startEvent(type,num);
	}
	,removeEvent: function(type,num) {
		return framework.event.Window.removeEvent(type,num);
	}
};
lib.Footer = function() {
	this._openFlug = [];
	var _g = this;
	if(framework.user.Size._instance == null) this._size = framework.user.Size._instance = new framework.user.Size(); else this._size = framework.user.Size._instance;
	var li = framework.dom._Elements.Elements_Impl_._new(window.document.getElementById("x_foot_sitemap").getElementsByTagName("li"));
	var _g1 = 0;
	var _g2 = li.length;
	while(_g1 < _g2) {
		var i = _g1++;
		if(li[i].className.indexOf("caption") >= 0) {
			this._openFlug[i] = false;
			var a = framework.dom._Elements.Elements_Impl_._new(li[i].getElementsByTagName("a"));
			var span = framework.dom._Elements.Elements_Impl_._new(li[i].getElementsByTagName("span"));
			if(a.length >= 1) this.setClickEvent(i,a[0],li[i + 1]); else this.setClickEvent(i,span[0],li[i + 1]);
		}
	}
	var a1 = framework.dom._Elements.Elements_Impl_._new(window.document.getElementById("x_foot").getElementsByTagName("a"));
	a1[0].onclick = function(e) {
		_g._scrollTween = new framework.animation.Tween(_g._size.top(),0,300,framework.animation.EasingType.QUAD,framework.animation.EasingOption.OUT,$bind(_g,_g.setScrollY),$bind(_g,_g.scrollEnd));
		_g._scrollTween.start();
		return false;
	};
};
lib.Footer.prototype = {
	setScrollY: function(v) {
		window.scrollTo(this._size.left(),v);
	}
	,scrollEnd: function() {
		this._scrollTween.clear();
		this._scrollTween = null;
	}
	,setClickEvent: function(id,button,target) {
		var _g = this;
		button.onclick = function(e) {
			if(_g._size.width() + _g._size.scrollWidth <= 650) {
				if(_g._openFlug[id]) {
					_g._openFlug[id] = false;
					button.className = "";
					target.className = "child";
				} else {
					_g._openFlug[id] = true;
					button.className = "open";
					target.className = "child open";
				}
				return false;
			}
			return true;
		};
	}
};
lib.Menu = function() {
	this._breakPoint = [1280,1212,1175,933];
	this.height = 54;
	this.mode = "w0";
	if(framework.user.Size._instance == null) this._size = framework.user.Size._instance = new framework.user.Size(); else this._size = framework.user.Size._instance;
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.onResize));
	var mainContainer = new lib.menu.MainContainer(this);
	var subContainer = new lib.menu.SubContainer(this);
	this._downloadButton = window.document.getElementById("x_fix_download");
	if(UnitConfig.headerMode == "always") this.showDownloadButtn();
};
lib.Menu.prototype = {
	onResize: function() {
		var w = this._size.width();
		this.mode = "";
		var _g1 = 0;
		var _g = this._breakPoint.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._breakPoint[i] - this._size.scrollWidth < w) {
				this.mode = "w" + i;
				break;
			}
		}
		if(this.mode == "") this.mode = "w" + this._breakPoint.length;
	}
	,showDownloadButtn: function() {
		this._downloadButton.className = "show";
	}
	,hideDownloadButtn: function() {
		this._downloadButton.className = "";
	}
};
lib.menu = {};
lib.menu.MainContainer = function(controller) {
	this._open = false;
	var _g = this;
	if(framework.user.Size._instance == null) this._size = framework.user.Size._instance = new framework.user.Size(); else this._size = framework.user.Size._instance;
	this._controller = controller;
	if(UnitConfig.login) this._maxTop = 48; else this._maxTop = 0;
	this._area = window.document.getElementById("x_head");
	this._bg = window.document.getElementById("x_head_openBG");
	this._content = window.document.getElementById("x_head_container");
	this._button = window.document.getElementById("x_menuButton");
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.close));
	this._button.onclick = function(e) {
		if(!_g._open) _g.open(); else _g.close();
		return false;
	};
	this._touchController = new touch.Controller({ type : touch.CoordType.DRAG, y : this._maxTop, max : { y : this._maxTop}, min : { y : 0}, outside : Math.round(this._size.height() * 0.9)},{ elm : this._area, eventType : touch.EventType.Y, event : { move : $bind(this,this.setPostion)}});
};
lib.menu.MainContainer.prototype = {
	setPostion: function(v) {
		this._area.style.top = v + "px";
	}
	,open: function() {
		this._open = true;
		this._content.className = "open";
		this._button.className = "open";
		this._bg.className = "open";
		var minTop = this._size.height() - this._area.clientHeight;
		if(minTop > this._maxTop) minTop = this._maxTop;
		this._touchController.resetMin(null,minTop);
		this._touchController.resetOutside(Math.round(this._size.height() * 0.9));
		this._touchController.addEvent();
	}
	,close: function() {
		this._open = false;
		this._content.className = "";
		this._button.className = "";
		this._bg.className = "";
		this.setPostion(this._maxTop);
		this._touchController.removeEvent();
		this._touchController.reset();
	}
};
lib.menu.SelectLang = function(controller) {
	this._open = false;
	this._height = 0;
	this._unitHeight = 34;
	var _g = this;
	this._controller = controller;
	var p = framework.dom._Elements.Elements_Impl_._new(window.document.getElementById("x_lang").getElementsByTagName("p"));
	this._button = p[0];
	this._list = window.document.getElementById("x_head_langList");
	var li = framework.dom._Elements.Elements_Impl_._new(this._list.getElementsByTagName("li"));
	this._height = li.length * this._unitHeight;
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.close));
	this._button.onclick = function(e) {
		if(!_g._open) _g.open(); else _g.close();
		return false;
	};
};
lib.menu.SelectLang.prototype = {
	open: function() {
		this._open = true;
		this._list.style.height = this._height + "px";
		this._button.className = "open";
	}
	,close: function() {
		this._open = false;
		this._list.style.height = 0 + "px";
		this._button.className = "";
	}
};
lib.menu.SubContainer = function(controller) {
	this._open = false;
	var _g = this;
	this._controller = controller;
	this._selectLang = window.document.getElementById("x_lang") != null ? new lib.menu.SelectLang(controller) : null;
	this._content = window.document.getElementById("x_head_subContainer");
	this._button = window.document.getElementById("x_head_subButton");
	framework.event.Window.addEvent(framework.event.EventType.RESIZE,$bind(this,this.close));
	this._button.onclick = function(e) {
		if(!_g._open) _g.open(); else _g.close();
		return false;
	};
};
lib.menu.SubContainer.prototype = {
	open: function() {
		this._open = true;
		this._content.className = "open";
		this._button.className = "subButton open";
	}
	,close: function() {
		this._open = false;
		if (this._selectLang != undefined)
			this._selectLang.close();
		this._content.className = "";
		this._button.className = "subButton";
	}
};
var touch = {};
touch.Controller = function(coordOption,eventOption) {
	this._coordOptionDef = { type : null, x : 0, y : 0, max : { x : 0, y : 0}, min : { x : 0, y : 0}, outside : 0, segment : { x : [], y : []}};
	this._finishFunction = null;
	this._endFunction = null;
	this.move = eventOption.event.move;
	var cdop = this._coordOptionDef;
	var _g = 0;
	var _g1 = Reflect.fields(coordOption);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		if(key == "max" || key == "min" || key == "segment") {
			var row = Reflect.field(coordOption,key);
			if(Object.prototype.hasOwnProperty.call(row,"x")) Reflect.setField(Reflect.field(cdop,key),"x",Reflect.field(row,"x"));
			if(Object.prototype.hasOwnProperty.call(row,"y")) Reflect.setField(Reflect.field(cdop,key),"y",Reflect.field(row,"y"));
		} else Reflect.setField(cdop,key,Reflect.field(coordOption,key));
	}
	this._coord = new touch.Coord(cdop.type,cdop.x,cdop.y,cdop.max.x,cdop.min.x,cdop.max.y,cdop.min.y,cdop.outside,cdop.segment);
	if(Object.prototype.hasOwnProperty.call(eventOption.event,"end")) this._endFunction = Reflect.field(eventOption.event,"end");
	if(Object.prototype.hasOwnProperty.call(eventOption.event,"finish")) this._finishFunction = Reflect.field(eventOption.event,"finish");
	if(eventOption.eventType == touch.EventType.X) this._event = new touch.SetXEvent(this,eventOption.elm,this._coord); else this._event = new touch.SetYEvent(this,eventOption.elm,this._coord);
};
touch.Controller.prototype = {
	addEvent: function() {
		this._event.setAble(true);
	}
	,removeEvent: function() {
		this._event.setAble(false);
	}
	,resetOutside: function(v) {
		this._event.position.resetOutside(v);
	}
	,resetMax: function(x,y) {
		this._event.position.resetMax(x,y);
	}
	,resetMin: function(x,y) {
		this._event.position.resetMin(x,y);
	}
	,end: function() {
		if(this._endFunction != null) this._endFunction();
	}
	,finish: function() {
		if(this._finishFunction != null) this._finishFunction();
	}
	,reset: function() {
		this._event.position.reset();
	}
	,getSegmentNumber: function() {
		return this._event.position._segNum;
	}
	,setSegment: function(x,y) {
		if(x != null) this._event.position.setSegmentX(x);
		if(y != null) this._event.position.setSegmentY(y);
	}
};
touch.CoordType = { __constructs__ : ["DRAG","FLICK"] };
touch.CoordType.DRAG = ["DRAG",0];
touch.CoordType.DRAG.__enum__ = touch.CoordType;
touch.CoordType.FLICK = ["FLICK",1];
touch.CoordType.FLICK.__enum__ = touch.CoordType;
touch.Coord = function(type,x,y,maxX,minX,maxY,minY,outside,seg) {
	this._time = 0.0;
	this._seglen = { x : 0, y : 0};
	this._min = { x : 0, y : 0, sy : 0};
	this._max = { x : 0, y : 0, sy : 0};
	this._speed = { x : 0, y : 0};
	this._touch = { x : 0, y : 0};
	this._move = { x : 0, y : 0, sy : 0};
	this._now = { x : 0, y : 0};
	this._start = { x : 0, y : 0};
	this._def = { x : 0, y : 0};
	this._flag = false;
	this._segNum = { x : 0, y : 0};
	this._Size = framework.user.Size._instance == null?framework.user.Size._instance = new framework.user.Size():framework.user.Size._instance;
	this._type = type;
	this._def.x = x;
	this._def.y = y;
	this._move.x = x;
	this._move.y = y;
	this._touch.x = x;
	this._touch.y = y;
	this._max.x = maxX;
	this._max.y = maxY;
	this._min.x = minX;
	this._min.y = minY;
	this._outside = outside;
	this._segment = seg;
	if(this._type == touch.CoordType.FLICK) {
		if(this._segment.x.length == 0) this._segment.x = [minX,maxX];
		if(this._segment.y.length == 0) this._segment.y = [minY,maxY];
		this._seglen.x = this._segment.x.length;
		this._seglen.y = this._segment.y.length;
		this._segNum.x = HxOverrides.indexOf(this._segment.x,x,0);
		this._segNum.y = HxOverrides.indexOf(this._segment.y,y,0);
	}
};
touch.Coord.prototype = {
	resetOutside: function(v) {
		this._outside = v;
	}
	,resetMax: function(x,y) {
		if(this._max.x != null) this._max.x = x;
		if(this._max.y != null) this._max.y = y;
	}
	,resetMin: function(x,y) {
		if(this._min.x != null) this._min.x = x;
		if(this._min.y != null) this._min.y = y;
	}
	,start: function(xp,yp) {
		this._flag = true;
		this._start.x = xp;
		this._start.y = yp;
		this._now.x = xp;
		this._now.y = yp;
		this._move.sy = this._Size.top();
		this._max.sy = this._Size.clientHeight() - this._Size.height();
		if(this._max.sy < 0) this._max.sy = 0;
		return this._flag;
	}
	,move: function(xp,yp) {
		var fx = 0;
		var fy = 0;
		if(this._flag) {
			this._time = new Date().getTime();
			if(xp != null) {
				this._speed.x = xp - this._now.x;
				this._touch.x += this._speed.x;
				if(this._touch.x > this._max.x) {
					var i = (this._touch.x - this._max.x) / this._outside;
					if(i > 1) i = 1;
					this._move.x = this._max.x + Math.round(this._outside * (Math.pow(i * 0.1 - 1,5) + 1));
				} else if(this._touch.x < this._min.x) {
					var i1 = (this._touch.x - this._min.x) / -this._outside;
					if(i1 > 1) i1 = 1;
					this._move.x = this._min.x - Math.round(this._outside * (Math.pow(i1 * 0.1 - 1,5) + 1));
				} else this._move.x = this._touch.x;
				this._now.x = xp;
			}
			if(yp != null) {
				this._speed.y = yp - this._now.y;
				this._touch.y += this._speed.y;
				this._move.sy -= this._speed.y;
				if(this._touch.y > this._max.y) {
					var i2 = (this._touch.y - this._max.y) / this._outside;
					if(i2 > 1) i2 = 1;
					this._move.y = this._max.y + Math.round(this._outside * (Math.pow(i2 * 0.1 - 1,5) + 1));
				} else if(this._touch.y < this._min.y) {
					var i3 = (this._touch.y - this._min.y) / -this._outside;
					if(i3 > 1) i3 = 1;
					this._move.y = this._min.y - Math.round(this._outside * (Math.pow(i3 * 0.1 - 1,5) + 1));
				} else this._move.y = this._touch.y;
				if(this._move.sy > this._max.sy) this._move.sy = this._max.sy; else if(this._move.sy < this._min.sy) this._move.sy = this._min.sy;
				this._now.y = yp;
			}
		}
		return { x : this._move.x, y : this._move.y, sy : this._move.sy, mx : xp - this._start.x, my : yp - this._start.y};
	}
	,end: function() {
		this._flag = false;
		var time = 1 - (new Date().getTime() - this._time) / 20;
		if(time < 0) time = 0;
		var res = { end : { x : this._move.x, y : this._move.y, sy : this._move.sy, dx : 0, dy : 0, ds : 0}, back : { x : this._move.x, y : this._move.y, dx : 0, dy : 0}};
		if(this._type == touch.CoordType.DRAG) {
			if(this._speed.x >= 5 || this._speed.x <= -5) {
				if(this._move.x > this._max.x || this._move.x < this._min.x) {
					res.end.x += Math.round(this._speed.x * (time + 1));
					res.end.dx = this.getEndDuration(this._move.x,res.end.x);
				} else {
					res.end.x += Math.round(this._speed.x * (time + 1)) * 4;
					res.end.dx = this.getBackDuration(this._move.x,res.end.x);
				}
			}
			if(res.end.x > this._max.x) {
				res.back.x = this._max.x;
				res.back.dx = this.getBackDuration(res.end.x,this._max.x);
			} else if(res.end.x < this._min.x) {
				res.back.x = this._min.x;
				res.back.dx = this.getBackDuration(res.end.x,this._min.x);
			}
			if(this._speed.y >= 5 || this._speed.y <= -5) {
				if(this._move.x > this._max.x || this._move.x < this._min.x) {
					res.end.y += Math.round(this._speed.y * (time + 1));
					res.end.dy = this.getEndDuration(this._move.y,res.end.y);
				} else {
					res.end.y += Math.round(this._speed.y * (time + 1)) * 4;
					res.end.dy = this.getBackDuration(this._move.y,res.end.y);
				}
			}
			if(res.end.y > this._max.y) {
				res.back.y = this._max.y;
				res.back.dy = this.getBackDuration(res.end.y,this._max.y);
			} else if(res.end.y < this._min.y) {
				res.back.y = this._min.y;
				res.back.dy = this.getBackDuration(res.end.y,this._min.y);
			}
		} else {
			if(this._speed.x >= 5 || this._speed.x <= -5) res.end.x += Math.round(this._speed.x * (time + 1)) * 4;
			if(res.end.x > this._segment.x[0]) {
				this._segNum.x = 0;
				res.end.x = this._segment.x[0];
			} else if(res.end.x < this._segment.x[this._seglen.x - 1]) this._segNum.x = this._seglen.x - 1; else if(this._segNum.x > 0 && this._start.x < this._now.x) {
				var v = this._segment.x[this._segNum.x] - this._segment.x[this._segNum.x - 1];
				if(v * 0.4 + this._segment.x[this._segNum.x - 1] <= res.end.x) --this._segNum.x;
			} else if(this._segNum.x < this._seglen.x - 1 && this._start.x > this._now.x) {
				var v1 = this._segment.x[this._segNum.x + 1] - this._segment.x[this._segNum.x];
				if(v1 * 0.6 + this._segment.x[this._segNum.x] >= res.end.x) ++this._segNum.x;
			}
			res.end.x = this._segment.x[this._segNum.x];
			res.end.dx = this.getBackDuration(this._move.x,res.end.x);
			if(this._speed.y >= 5 || this._speed.y <= -5) res.end.y += Math.round(this._speed.y * (time + 1)) * 4;
			if(res.end.y > this._segment.y[0]) {
				this._segNum.y = 0;
				res.end.y = this._segment.y[0];
			} else if(res.end.y < this._segment.y[this._seglen.y - 1]) this._segNum.y = this._seglen.y - 1; else if(this._segNum.y > 0 && this._start.y < this._now.y) {
				var v2 = this._segment.y[this._segNum.y] - this._segment.y[this._segNum.y - 1];
				if(v2 * 0.4 + this._segment.y[this._segNum.y - 1] <= res.end.y) --this._segNum.y;
			} else if(this._segNum.y < this._seglen.y - 1 && this._start.y > this._now.y) {
				var v3 = this._segment.y[this._segNum.y + 1] - this._segment.y[this._segNum.y];
				if(v3 * 0.6 + this._segment.y[this._segNum.y] >= res.end.y) ++this._segNum.y;
			}
			res.end.y = this._segment.y[this._segNum.y];
			res.end.dy = this.getBackDuration(this._move.y,res.end.y);
		}
		if(this._speed.y >= 5 || this._speed.y <= -5) {
			res.end.sy -= Math.round(this._speed.y * (time + 1)) * 4;
			if(res.end.sy > this._max.sy) res.end.sy = this._max.sy; else if(res.end.sy < this._min.sy) res.end.sy = this._min.sy;
			res.end.ds = this.getBackDuration(this._move.sy,res.end.sy);
		}
		this._speed.x = 0;
		this._speed.y = 0;
		this._start.x = 0;
		this._start.y = 0;
		this._now.x = 0;
		this._now.y = 0;
		return res;
	}
	,setMoveX: function(xp) {
		this._move.x = xp;
		this._touch.x = xp;
	}
	,setMoveY: function(yp) {
		this._move.y = yp;
		this._touch.y = yp;
	}
	,setSegmentX: function(seg) {
		this._segment.x = seg;
		this._seglen.x = seg.length;
		this.resetMax(seg[0]);
		this.resetMin(seg[this._seglen.x - 1]);
	}
	,setSegmentY: function(seg) {
		this._segment.y = seg;
		this._seglen.y = seg.length;
		this.resetMax(null,seg[0]);
		this.resetMin(null,seg[this._seglen.y - 1]);
	}
	,reset: function() {
		this._flag = false;
		this._start.x = 0;
		this._start.y = 0;
		this._now.x = 0;
		this._now.y = 0;
		this._move.x = this._def.x;
		this._move.y = this._def.y;
		this._move.sy = 0;
		this._touch.x = this._def.x;
		this._touch.y = this._def.y;
		this._speed.x = 0;
		this._speed.y = 0;
		if(this._type == touch.CoordType.FLICK) {
			this._segNum.x = HxOverrides.indexOf(this._segment.x,this._def.x,0);
			this._segNum.y = HxOverrides.indexOf(this._segment.y,this._def.y,0);
		}
	}
	,getEndDuration: function(from,to) {
		var v = Math.abs(to - from) / this._outside;
		if(v > 0) {
			if(v > 1) v = 1;
			return Math.round(this._outside * 0.5 * (Math.pow(v - 1,5) + 1));
		} else return 0;
	}
	,getBackDuration: function(from,to) {
		var v = Math.abs(to - from) / 200;
		if(v > 0) {
			if(v > 1) v = 1;
			return Math.round(300 * (Math.pow(v - 1,5) + 1));
		} else return 0;
	}
};
touch.EventType = { __constructs__ : ["X","Y"] };
touch.EventType.X = ["X",0];
touch.EventType.X.__enum__ = touch.EventType;
touch.EventType.Y = ["Y",1];
touch.EventType.Y.__enum__ = touch.EventType;
touch.SetEvent = function(controller,elm,coord) {
	this._value = 0;
	this._timer = null;
	this._move = false;
	this._Size = framework.user.Size._instance == null?framework.user.Size._instance = new framework.user.Size():framework.user.Size._instance;
	this._controller = controller;
	this._elm = elm;
	this.position = coord;
	this._body = window.document.body;
};
touch.SetEvent.prototype = {
	setAble: function(flag) {
		if(flag) this._elm.addEventListener("touchstart",$bind(this,this.touchStart)); else this._elm.removeEventListener("touchstart",$bind(this,this.touchStart));
	}
	,addEvent: function() {
		this._body.addEventListener("touchmove",$bind(this,this.touchMove));
		this._body.addEventListener("touchend",$bind(this,this.touchEnd));
		this._body.addEventListener("touchcancel",$bind(this,this.touchCancel));
	}
	,removeEvent: function() {
		this._body.removeEventListener("touchmove",$bind(this,this.touchMove));
		this._body.removeEventListener("touchend",$bind(this,this.touchEnd));
		this._body.removeEventListener("touchcancel",$bind(this,this.touchCancel));
	}
	,touchStart: function(e) {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		if(e.touches.length == 1) {
			var x = e.touches[0].screenX;
			var y = e.touches[0].pageY - this._Size.top();
			this.position.start(x,y);
			this.addEvent();
		}
	}
	,touchMove: function(e) {
	}
	,touchEnd: function(e) {
		this.removeEvent();
	}
	,touchCancel: function(e) {
		this.removeEvent();
		this.position.reset();
	}
};
touch.SetXEvent = function(controller,elm,coord) {
	this._valueS = 0;
	this._android = (framework.user.UserAgent._instance == null?framework.user.UserAgent._instance = new framework.user.UserAgent():framework.user.UserAgent._instance).device.android;
	this._scroll = false;
	this._lowest = { x : 10, y : 7};
	touch.SetEvent.call(this,controller,elm,coord);
};
touch.SetXEvent.__super__ = touch.SetEvent;
touch.SetXEvent.prototype = $extend(touch.SetEvent.prototype,{
	touchMove: function(e) {
		touch.SetEvent.prototype.touchMove.call(this,e);
		var touch_x = e.touches[0].screenX;
		var touch_y = e.touches[0].pageY - this._Size.top();
		var pos = this.position.move(touch_x,touch_y);
		if(this._move) {
			e.preventDefault();
			this._value = pos.x;
			this._controller.move(this._value);
		} else if(this._scroll) {
			if(this._android) {
				e.preventDefault();
				this._valueS = pos.sy;
				window.scrollTo(0,this._valueS);
			} else {
				this._scroll = false;
				this.removeEvent();
				this.position.setMoveX(this._value);
			}
		} else if(Math.abs(pos.mx) >= this._lowest.x) {
			e.preventDefault();
			this._move = true;
		} else if(Math.abs(pos.my) >= this._lowest.y) {
			this._scroll = true;
			if(this._android) e.preventDefault();
		}
	}
	,touchEnd: function(e) {
		var _g = this;
		touch.SetEvent.prototype.touchEnd.call(this,e);
		if(this._move || this._android && this._scroll) {
			e.preventDefault();
			var pos = this.position.end();
			this._controller.end();
			if(this._move) {
				if(pos.end.dx > 0) {
					if(pos.back.dx > 0) this.setTimerFunction(this._value,pos.end.x,pos.end.dx,function() {
						_g.setTimerFunction(pos.end.x,pos.back.x,pos.back.dx,function() {
							_g._controller.finish();
						});
					}); else this.setTimerFunction(this._value,pos.end.x,pos.end.dx,function() {
						_g._controller.finish();
					});
				} else if(pos.back.dx > 0) this.setTimerFunction(this._value,pos.back.x,pos.back.dx,function() {
					_g._controller.finish();
				}); else this._controller.finish();
			} else {
				this.position.setMoveX(this._value);
				if(pos.end.ds > 0) {
					this._body.addEventListener("touchstart",$bind(this,this.scrollStop));
					var startTime = new Date().getTime();
					this._timer = new haxe.Timer(15);
					this._timer.run = function() {
						var v = framework.animation.Easing.get(_g._valueS,pos.end.sy,pos.end.ds,startTime,framework.animation.EasingType.SINE,framework.animation.EasingOption.OUT);
						window.scrollTo(_g._Size.left(),v);
						if(v == pos.end.sy) {
							_g._body.removeEventListener("touchstart",$bind(_g,_g.scrollStop));
							_g._timer.stop();
							_g._timer = null;
						}
					};
				}
			}
		}
		this._move = false;
		this._scroll = false;
	}
	,setTimerFunction: function(from,to,duration,endFunc) {
		var _g = this;
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		var startTime = new Date().getTime();
		this._timer = new haxe.Timer(15);
		this._timer.run = function() {
			var v = framework.animation.Easing.get(from,to,duration,startTime,framework.animation.EasingType.SINE,framework.animation.EasingOption.OUT);
			_g._value = v;
			_g._controller.move(v);
			_g.position.setMoveX(v);
			if(v == to) {
				_g._timer.stop();
				_g._timer = null;
				endFunc();
			}
		};
	}
	,scrollStop: function(e) {
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
	}
});
touch.SetYEvent = function(controller,elm,coord) {
	touch.SetEvent.call(this,controller,elm,coord);
};
touch.SetYEvent.__super__ = touch.SetEvent;
touch.SetYEvent.prototype = $extend(touch.SetEvent.prototype,{
	touchMove: function(e) {
		touch.SetEvent.prototype.touchMove.call(this,e);
		var touch_x = e.touches[0].screenX;
		var touch_y = e.touches[0].pageY - this._Size.top();
		var pos = this.position.move(touch_x,touch_y);
		if(!this._move && (pos.my > 5 || pos.my < -5)) this._move = true;
		if(this._move) {
			e.preventDefault();
			this._value = pos.y;
			this._controller.move(this._value);
		}
	}
	,touchEnd: function(e) {
		var _g = this;
		touch.SetEvent.prototype.touchEnd.call(this,e);
		if(this._move) {
			e.preventDefault();
			this._move = false;
			var pos = this.position.end();
			this._controller.end();
			if(pos.end.dy > 0) {
				if(pos.back.dy > 0) this.setTimerFunction(this._value,pos.end.y,pos.end.dy,function() {
					_g.setTimerFunction(pos.end.y,pos.back.y,pos.back.dy,function() {
						_g._controller.finish();
					});
				}); else this.setTimerFunction(this._value,pos.end.y,pos.end.dy,function() {
					_g._controller.finish();
				});
			} else if(pos.back.dy > 0) this.setTimerFunction(this._value,pos.back.y,pos.back.dy,function() {
				_g._controller.finish();
			});
		}
	}
	,setTimerFunction: function(from,to,duration,endFunc) {
		var _g = this;
		if(this._timer != null) {
			this._timer.stop();
			this._timer = null;
		}
		var startTime = new Date().getTime();
		this._timer = new haxe.Timer(15);
		this._timer.run = function() {
			var v = framework.animation.Easing.get(from,to,duration,startTime,framework.animation.EasingType.SINE,framework.animation.EasingOption.OUT);
			_g._controller.move(v);
			_g.position.setMoveY(v);
			if(v == to) {
				_g._timer.stop();
				_g._timer = null;
				endFunc();
			}
		};
	}
});
var youtube = {};
youtube.IframeAPI = function() { };
youtube.IframeAPI.load = function(cb) {
	if(youtube.IframeAPI.ready) {
		window.setTimeout(cb,1);
		return;
	}
	if(youtube.IframeAPI.iframeAPICallbacks == null) youtube.IframeAPI.iframeAPICallbacks = [];
	youtube.IframeAPI.iframeAPICallbacks.push(cb);
	if(!youtube.IframeAPI.injected) {
		var doc = window.document;
		var script = doc.createElement("script");
		script.src = "https://www.youtube.com/iframe_api";
		var firstScript = doc.getElementsByTagName("script")[0];
		firstScript.parentNode.insertBefore(script,firstScript);
		window.onYouTubeIframeAPIReady = youtube.IframeAPI.onYouTubeIframeAPIReady;
		youtube.IframeAPI.injected = true;
	}
};
youtube.IframeAPI.onYouTubeIframeAPIReady = function() {
	youtube.IframeAPI.ready = true;
	if(youtube.IframeAPI.iframeAPICallbacks == null) return;
	var _g = 0;
	var _g1 = youtube.IframeAPI.iframeAPICallbacks;
	while(_g < _g1.length) {
		var cb = _g1[_g];
		++_g;
		cb();
	}
};
youtube.Player = function(id,video,width,height,mute,controller,loadedFunc,endFunc) {
	if(controller == null) controller = 1;
	if(mute == null) mute = false;
	this._mute = false;
	this.loaded = false;
	this._playerElm = null;
	this._mute = mute;
	this._loadedFunc = loadedFunc;
	this._endFunc = endFunc;
	this._id = id;
	this._option = { videoId : video, width : width, height : height, playerVars : { rel : 0, showinfo : 0, controls : controller, autohide : 1, wmode : "transparent"}, events : { onReady : $bind(this,this.playerOnReady), onStateChange : $bind(this,this.playerStateChange)}};
};
youtube.Player.prototype = {
	create: function() {
		var _g = this;
		youtube.IframeAPI.load(function() {
			_g._player = new YT.Player(_g._id,_g._option);
			_g._playerElm = _g._player.getIframe();
		});
	}
	,playerStateChange: function(event) {
		if(event.data == YT.PlayerState.ENDED) {
			if(this._endFunc != null) this._endFunc();
		}
	}
	,playerOnReady: function(event) {
		if(this._mute) this._player.mute();
		if(this._loadedFunc != null) {
			this.loaded = true;
			this._loadedFunc();
		}
	}
	,stop: function() {
		if(this.loaded) this._player.stopVideo();
	}
	,reset: function() {
		if(this.loaded) this._player.seekTo(0,true);
	}
	,play: function() {
		if(this.loaded) this._player.playVideo();
	}
	,pause: function() {
		if(this.loaded) this._player.pauseVideo();
	}
	,clear: function() {
		if(this.loaded) this._player.stopVideo();
		var newDom = window.document.createElement("div");
		newDom.id = this._id;
		if(this._playerElm != null) this._playerElm.parentElement.replaceChild(newDom,this._playerElm);
		this._player = null;
		this._playerElm = null;
	}
	,playcue: function(id,start,end) {
		var option = { videoId : id, startSeconds : start, endSeconds : end};
		this._player.loadVideoById(option);
	}
	,seek: function(time) {
		if(this.loaded) this._player.seekTo(time,false);
	}
	,getTime: function() {
		return this._player.getCurrentTime();
	}
	,setSize: function(width,height) {
		this._player.setSize(width + 0.0,height + 0.0);
	}
	,setVolume: function(v) {
		this._player.setVolume(v * 20);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
framework.event.Window._format = false;
framework.event.Window._loaded = false;
framework.event.Window._loadFunc = new framework.FunctionList();
framework.event.Window._scrollFunc = new framework.FunctionList();
framework.event.Window._resizeFunc = new framework.FunctionList();
framework.event.Window._blurFunc = new framework.FunctionList();
framework.event.Window._focusFunc = new framework.FunctionList();
youtube.IframeAPI.ready = false;
youtube.IframeAPI.injected = false;
youtube.IframeAPI.SCRIPT_URL = "https://www.youtube.com/iframe_api";
VideoMain.main();
})();


$(document).ready(function() {
    // play/pause video if we have only one column
    $('.feature-block .feature-image-container video, article video').click(function(e){
        var width = $(window).width();
        if(width < 992) {
            // toggle play/pause
            this.paused ? this.play() : this.pause();
        }
    });

    // disable links if we have only one column
    $('.feature-block a').click(function(e){
        var width = $(window).width();
        if(width < 992) {
            // disable event
            e.preventDefault();
        }
    });

    // Function fot init and fill combo boxes at the contact page
    function fillContactComboBoxes(){
        // Create array with data for industry box
        var industry = [
            'Game development',
            'Gambling game development',
            'Non-game development (simulation, architecture, etc.)',
            'Education',
            'Other'
        ];
        // Init select2 for industry box
        $("#industry").select2({
            data : industry,
            placeholder: "Select your industry"
        });

        // Create array without data for countries box
        var countries = [];
        // Init select2 for country box
        $("#country").select2({
            placeholder: "Loading..."
        });
        // Get all countries name from REST https://restcountries.eu/
        $.ajax({
            type: "GET",
            async: true,
            url: 'https://restcountries.eu/rest/v2/all?fields=name;',
            dataType: 'json',
            cache: true,
            success: function (data){
                for(prop in data){
                    countries.push(data[prop].name);
                }
                // Reinit select2 for country box with data
                $("#country").select2("destroy").select2({
                    data : countries,
                    placeholder: "Select your country"
                });
                // Remove disable attribute after data was uploaded
                $("#country").prop("disabled", false);
            }
        });
    }
    if($('#industry').length > 0){
        fillContactComboBoxes();
    }
});


// Show or hide play icon (event on video element)
function feature_video_onplay(e) {
    $(e.target.parentElement).children(".video-play-button").hide();
}

function feature_video_onpause(e) {
    $(e.target.parentElement).children(".video-play-button").show();
}

// Only play thumbnail if in viewport
var autoPlayAllowed = true;
function checkScroll() {
    $('.feature-block .feature-image-container video, article video').each(function(){
        var promise;
        if ($(this).is(":in-viewport") && $(this).attr('autoplay')) {
            // If we got a play not allowed exception, don't try again
            if (!autoPlayAllowed)
                return;
            promise = $(this)[0].play();
        } else {
            promise = $(this)[0].pause();
        }

        if (promise instanceof Promise){
            promise.catch(function(error){
                if (error.name == "NotAllowedError"){
                    autoPlayAllowed = false;
                }
            });
        }
    });
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
