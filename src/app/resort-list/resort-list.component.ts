import {Component, OnInit} from '@angular/core';
import { IResort } from "../shared/interfaces/resort.interface";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit {

  public resorts: IResort[] = [
    {
      title: 'Resort Helnan Marina',
      phone: '+1 6566 54 654',
      weather: 14,
      water: 12,
      followers: 343,
      following: 999,
      imageLeft: 'http://www.tursvodka.ru/upload/tursvodka/tourism_hotel_photo/turkey/kusadasi/hotel_imbat/hotel_imbat_9_thumbnail.jpg',
      imageRight: 'http://hotels.optiotravel.ru/resources/ita39be105ee7f4efb8e20804c0922a24d/thumb_0da54e4d335f4543aaba0ac0b3264f8b.jpg',
      type: 'exotic'
    },
    {
      title: 'Resort Melia Varadero',
      phone: '+7 6545435543543',
      weather: 14,
      water: 11,
      followers: 233,
      following: 489,
      imageLeft: 'https://www.just-online.ru/upload/15/150718/150718a_hb_p_004.jpg',
      imageRight: 'http://www.hotlinesupport.ru/wp-content/uploads/2015/02/file59_8.jpg',
      type: 'beach'
    },
    {
      title: 'Resort American Village',
      phone: '+4 2312112312312',
      weather: 33,
      water: 25,
      followers: 444,
      following: 44,
      imageLeft: 'https://blog.ostrovok.ru/wp-content/uploads/2011/03/four-seasons-hotel-cyprus-300x225.jpg',
      imageRight: 'http://kuponcho.ru/media/gallery/offer/img/732/750562.jpg',
      type: 'family'
    },
    {
      title: 'Resort Finn House',
      phone: '+5 343243242 3423',
      weather: 23,
      water: 19,
      followers: 35,
      following: 32,
      imageLeft: 'http://www.restate.ru/attachment/3b1a240079417406a2462935baf196b9fcc5bbd4/redisson.jpg',
      imageRight: 'https://media.expedia.com/hotels/8000000/7240000/7234900/7234816/7234816_32_b.jpg',
      type: 'exotic'
    }
  ];

  public clicked: IResort;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setResort(this.resorts[0]);
  }

  public setResort(resort: IResort): void {
    this.clicked = resort;
    this.dataService.currentDataSubject.next(this.clicked);
  }
}
