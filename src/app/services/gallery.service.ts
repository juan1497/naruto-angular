import { Injectable } from '@angular/core';
import { Gallery } from '../pages/moduls/gallery';

@Injectable()
export class GalleryService {
  galleries:Gallery[] 
  constructor() {
    this.galleries=[
      {
        nombre:"Naruto Uzumaki",
        src:"http://pm1.narvii.com/6928/59e9f6d3c1bf9f787c1c2dc1348856178ef64472r1-960-952v2_uhq.jpg",
        alt:"Naruto Uzumaki"
      },
      {
        nombre:"Sasuke Uchiha",
        src:"https://m.media-amazon.com/images/I/510qoNsHdtL._AC_SY679_.jpg",
        alt:"Sasuhe Uchiha"
      },
      {
        nombre:"Kakasi Hatake",
        src:"https://cinematicos.net/wp-content/uploads/%C2%BFKakashi-se-convierte-en-Hokage-en-Naruto-Shippuden.jpg",
        alt:"Kakashi Hatake"
      },
      {
        nombre:"Sakura Haruno",
        src:"https://i.pinimg.com/736x/f7/af/3e/f7af3e69ec3bcb6afff715dcf24802ef--sasuke-sakura-naruto-uzumaki.jpg",
        alt:"Sakura Haruno"
      },
      {
        nombre:"Itachi Uchiha",
        src:"https://www.lifeder.com/wp-content/uploads/2016/11/frases-de-Itachi-Uchiha.jpg",
        alt:"Itachi Uchiha"
      },
      {
        nombre:"Obito Uchiha",
        src:"http://pm1.narvii.com/7889/5b2eb211c14077f6537e55a1c9f220848a366948r1-1080-1068v2_uhq.jpg",
        alt:"Obito Uchiha"
      },
      {
        nombre:"Orochimaru",
        src:"http://pm1.narvii.com/6549/359f6f25c9c803fb6e07996236604171e4b6f9fe_00.jpg",
        alt:"Orochimaru"
      },
      {
        nombre:"Uchiha Madara",
        src:"https://pm1.narvii.com/6322/e9644a6e2b47195afa53c352b9c1f843e3c63b3a_hq.jpg",
        alt:"Uchiha Madara"
      },
      {
        nombre:"Nagato",
        src:"https://powerups.es/wp-content/uploads/2021/07/naruto-to-boruto-shinobi-striker-nagato-reanimated.jpeg",
        alt:"Nagato"
      },
      {
        nombre:"Jiraya",
        src:"http://pm1.narvii.com/7070/54081319f5bba8fbc29a858cdf94d417aaef954er1-779-1026v2_uhq.jpg",
        alt:"Jiraya"
      },
      {
        nombre:"Rock Lee",
        src:"https://laverdadnoticias.com/__export/1604429685730/sites/laverdad/img/2020/11/03/rock_lee_cosplay_naruto.jpg_514966513.jpg",
        alt:"Rock Lee"
      },
      {
        nombre:"Shikamaru Nara",
        src:"http://3.bp.blogspot.com/_gUMSk9QCTDI/SQCT3hsagkI/AAAAAAAAAJI/zhqvniURxt8/w1200-h630-p-k-no-nu/Shikamaru.jpg",
        alt:"Shikamaru Nara"
      }]
   }

  getImages(){
    return this.galleries
  }
}
