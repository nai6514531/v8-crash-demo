"use strict";
cc._RF.push(module, '8bc35h/4gFHe4xaZu9mf4SY', 'helloworld3');
// Script/helloworld3.ts

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
exports.Helloworld3 = void 0;
var ccclass = cc._decorator.ccclass;
var Helloworld3 = /** @class */ (function (_super) {
    __extends(Helloworld3, _super);
    function Helloworld3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Helloworld3.prototype.clickHandler = function () {
        cc.director.loadScene("helloworld1");
    };
    Helloworld3 = __decorate([
        ccclass
    ], Helloworld3);
    return Helloworld3;
}(cc.Component));
exports.Helloworld3 = Helloworld3;

cc._RF.pop();