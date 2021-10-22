import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from '../moduls/gallery';


@Component({
  selector: 'app-gallery-app',
  templateUrl: './gallery-app.component.html',
  styleUrls: ['./gallery-app.component.scss']
})
export class GalleryAppComponent implements OnInit {
  galleries:Gallery[]
  constructor(private gallerys:GalleryService) {
    this.galleries=gallerys.getImages()
  }
   

  ngOnInit(): void {
  }

}
