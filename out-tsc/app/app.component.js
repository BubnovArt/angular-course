var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.resorts = [
            {
                title: 'Resort Helnan Marina',
                phone: '+1 6566 54 654',
                weather: 14,
                water: 12,
                followers: 343,
                following: 999,
                imageLeft: 'http://www.tursvodka.ru/upload/tursvodka/tourism_hotel_photo/turkey/kusadasi/hotel_imbat/hotel_imbat_9_thumbnail.jpg',
                imageRight: 'http://hotels.optiotravel.ru/resources/ita39be105ee7f4efb8e20804c0922a24d/thumb_0da54e4d335f4543aaba0ac0b3264f8b.jpg'
            },
            {
                title: 'Resort Melia Varadero',
                phone: '+7 6545435543543',
                weather: 14,
                water: 11,
                followers: 233,
                following: 489,
                imageLeft: 'https://www.just-online.ru/upload/15/150718/150718a_hb_p_004.jpg',
                imageRight: 'http://www.hotlinesupport.ru/wp-content/uploads/2015/02/file59_8.jpg'
            },
            {
                title: 'Resort American Village',
                phone: '+4 2312112312312',
                weather: 33,
                water: 25,
                followers: 444,
                following: 44,
                imageLeft: 'https://blog.ostrovok.ru/wp-content/uploads/2011/03/four-seasons-hotel-cyprus-300x225.jpg',
                imageRight: 'http://kuponcho.ru/media/gallery/offer/img/732/750562.jpg'
            },
            {
                title: 'Resort Finn House',
                phone: '+5 343243242 3423',
                weather: 23,
                water: 19,
                followers: 35,
                following: 32,
                imageLeft: 'http://www.restate.ru/attachment/3b1a240079417406a2462935baf196b9fcc5bbd4/redisson.jpg',
                imageRight: 'https://media.expedia.com/hotels/8000000/7240000/7234900/7234816/7234816_32_b.jpg'
            }
        ];
    }
    AppComponent.prototype.onClicked = function (resort) {
        this.clicked = resort;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "clicked", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Артем/Desktop/angular course/angular-course/src/app/app.component.js.map