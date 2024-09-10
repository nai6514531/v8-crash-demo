window.__require = function t(e, o, r) {
function n(l, i) {
if (!o[l]) {
if (!e[l]) {
var u = l.split("/");
u = u[u.length - 1];
if (!e[u]) {
var f = "function" == typeof __require && __require;
if (!i && f) return f(u, !0);
if (c) return c(u, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = u;
}
var a = o[l] = {
exports: {}
};
e[l][0].call(a.exports, function(t) {
return n(e[l][1][t] || t);
}, a, a.exports, t, e, o, r);
}
return o[l].exports;
}
for (var c = "function" == typeof __require && __require, l = 0; l < r.length; l++) n(r[l]);
return n;
}({
helloworld1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fd016QNykBDbJE8lZZ23Tra", "helloworld1");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, l = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, r); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (l = (c < 3 ? n(l) : c > 3 ? n(e, o, l) : n(e, o)) || l);
return c > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Helloworld1 = void 0;
var l = cc._decorator.ccclass, i = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.clickHandler = function() {
cc.director.loadScene("helloworld2");
};
return c([ l ], e);
}(cc.Component);
o.Helloworld1 = i;
cc._RF.pop();
}, {} ],
helloworld2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c99df+eoWhJNbhOYc/SldxR", "helloworld2");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, l = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, r); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (l = (c < 3 ? n(l) : c > 3 ? n(e, o, l) : n(e, o)) || l);
return c > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Helloworld2 = void 0;
var l = cc._decorator.ccclass, i = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.clickHandler = function() {
cc.director.loadScene("helloworld3");
};
return c([ l ], e);
}(cc.Component);
o.Helloworld2 = i;
cc._RF.pop();
}, {} ],
helloworld3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8bc35h/4gFHe4xaZu9mf4SY", "helloworld3");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, l = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, r); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (l = (c < 3 ? n(l) : c > 3 ? n(e, o, l) : n(e, o)) || l);
return c > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Helloworld3 = void 0;
var l = cc._decorator.ccclass, i = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.clickHandler = function() {
cc.director.loadScene("helloworld1");
};
return c([ l ], e);
}(cc.Component);
o.Helloworld3 = i;
cc._RF.pop();
}, {} ],
launch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "83574ZusvdP7pzakZmgfw3j", "launch");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var n, c = arguments.length, l = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, r); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (l = (c < 3 ? n(l) : c > 3 ? n(e, o, l) : n(e, o)) || l);
return c > 3 && l && Object.defineProperty(e, o, l), l;
}, l = this && this.__awaiter || function(t, e, o, r) {
return new (o || (o = Promise))(function(n, c) {
function l(t) {
try {
u(r.next(t));
} catch (t) {
c(t);
}
}
function i(t) {
try {
u(r.throw(t));
} catch (t) {
c(t);
}
}
function u(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(l, i);
var e;
}
u((r = r.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var o, r, n, c, l = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return c = {
next: i(0),
throw: i(1),
return: i(2)
}, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
return this;
}), c;
function i(t) {
return function(e) {
return u([ t, e ]);
};
}
function u(c) {
if (o) throw new TypeError("Generator is already executing.");
for (;l; ) try {
if (o = 1, r && (n = 2 & c[0] ? r.return : c[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, c[1])).done) return n;
(r = 0, n) && (c = [ 2 & c[0], n.value ]);
switch (c[0]) {
case 0:
case 1:
n = c;
break;

case 4:
l.label++;
return {
value: c[1],
done: !1
};

case 5:
l.label++;
r = c[1];
c = [ 0 ];
continue;

case 7:
c = l.ops.pop();
l.trys.pop();
continue;

default:
if (!(n = l.trys, n = n.length > 0 && n[n.length - 1]) && (6 === c[0] || 2 === c[0])) {
l = 0;
continue;
}
if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
l.label = c[1];
break;
}
if (6 === c[0] && l.label < n[1]) {
l.label = n[1];
n = c;
break;
}
if (n && l.label < n[2]) {
l.label = n[2];
l.ops.push(c);
break;
}
n[2] && l.ops.pop();
l.trys.pop();
continue;
}
c = e.call(t, l);
} catch (t) {
c = [ 6, t ];
r = 0;
} finally {
o = n = 0;
}
if (5 & c[0]) throw c[1];
return {
value: c[0] ? c[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Launch = void 0;
var u = cc._decorator.ccclass, f = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
return l(this, void 0, void 0, function() {
return i(this, function() {
cc.director.loadScene("helloworld1");
return [ 2 ];
});
});
};
return c([ u ], e);
}(cc.Component);
o.Launch = f;
cc._RF.pop();
}, {} ]
}, {}, [ "helloworld1", "helloworld2", "helloworld3", "launch" ]);