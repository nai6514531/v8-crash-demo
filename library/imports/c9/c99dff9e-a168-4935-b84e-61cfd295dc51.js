"use strict";
cc._RF.push(module, 'c99df+eoWhJNbhOYc/SldxR', 'helloworld2');
// Script/helloworld2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helloworld2 = void 0;
var ccclass = cc._decorator.ccclass;
var Helloworld2 = /** @class */ (function (_super) {
    __extends(Helloworld2, _super);
    function Helloworld2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Helloworld2.prototype.clickHandler = function () {
        cc.director.loadScene("helloworld3");
    };
    Helloworld2 = __decorate([
        ccclass
    ], Helloworld2);
    return Helloworld2;
}(cc.Component));
exports.Helloworld2 = Helloworld2;

cc._RF.pop();