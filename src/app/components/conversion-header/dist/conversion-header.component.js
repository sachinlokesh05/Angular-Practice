"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConversionHeaderComponent = void 0;
var core_1 = require("@angular/core");
var ConversionHeaderComponent = /** @class */ (function () {
    function ConversionHeaderComponent() {
    }
    ConversionHeaderComponent.prototype.ngOnInit = function () {
    };
    ConversionHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-conversion-header',
            templateUrl: './conversion-header.component.html',
            styleUrls: ['./conversion-header.component.scss']
        })
    ], ConversionHeaderComponent);
    return ConversionHeaderComponent;
}());
exports.ConversionHeaderComponent = ConversionHeaderComponent;
