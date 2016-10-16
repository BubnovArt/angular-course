import { Component, Input } from '@angular/core';
import { IResort } from './shared/interfaces/resort.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  public clicked: IResort;

  public resorts: IResort[] = [
    {
      title: 'Resort Helnan Marina',
      phone: '+1 6566 54 654',
      weather: 14,
      water: 12,
      followers: 343,
      following: 999,
      imageLeft: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ogi_Shirakawa02bs3200.jpg',
      imageRight: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Ourika_berbere_village.jpg'
    },
    {
      title: 'Resort Melia Varadero',
      phone: '+7 6545435543543',
      weather: 14,
      water: 11,
      followers: 233,
      following: 489,
      imageLeft: 'http://www.isvarmurti.com/blog/wp-content/uploads/2013/11/Akha_village.jpg',
      imageRight: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Guri_Rajasthan_02.jpg'
    },
    {
      title: 'Resort American Village',
      phone: '+4 2312112312312',
      weather: 33,
      water: 25,
      followers: 444,
      following: 44,
      imageLeft: 'https://media-cdn.tripadvisor.com/media/photo-s/01/5a/3f/73/village-view.jpg',
      imageRight: 'https://anthromes.wikispaces.com/file/view/life_in_china.1249650379.3_ancient-xidi-x-hongcun-villages.jpg/139496743/life_in_china.1249650379.3_ancient-xidi-x-hongcun-villages.jpg'
    },
    {
      title: 'Resort Finn House',
      phone: '+5 343243242 3423',
      weather: 23,
      water: 19,
      followers: 35,
      following: 32,
      imageLeft: 'https://propelsteps.files.wordpress.com/2013/10/japan-village2.jpg',
      imageRight: 'http://nativepakistan.com/wp-content/uploads/Photos-of-Pakistani-Villages-Photo-of-a-mud-hut-and-a-cart-in-a-fruit-garden-in-a-village-Pictures-of-Pakistani-Villages-Pakistani-Village-Life.jpg'
    }
  ];

  public onClicked(resort: IResort) {
    this.clicked = resort;
  }

}
