"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ResortListComponent = (function () {
    function ResortListComponent() {
        this.images = [
            {
                left: 'http://www.mastervgtour.by/img/250/images/custom/turkey/KUSHADASI/IMBAT4/imbat_02.jpg',
                right: 'https://www.ay-tour.ru/assets/images/3955/imeretinsky%20(31).jpg'
            }, {
                left: 'https://blog.ostrovok.ru/wp-content/uploads/2011/03/four-seasons-hotel-cyprus-300x225.jpg',
                right: 'http://gelendzhik09.ru/images/articles/.covers/.thumb/tmm420x420_81870.jpg'
            }, {
                left: 'http://news.biharprabha.com/wp-content/uploads/2012/01/hotel.jpg',
                right: 'http://www.ka-plus.ru/_mod_files/ce_images/eshop/generated/img_0028_0_300x192_pc.jpg'
            }
        ];
    }
    ResortListComponent.prototype.setData = function (ev) {
    };
    ResortListComponent = __decorate([
        core_1.Component({
            selector: 'app-resort-list',
            templateUrl: './resort-list.component.html',
            styleUrls: ['./resort-list.component.css']
        })
    ], ResortListComponent);
    return ResortListComponent;
}());
exports.ResortListComponent = ResortListComponent;
//# sourceMappingURL=resort-list.component.js.map