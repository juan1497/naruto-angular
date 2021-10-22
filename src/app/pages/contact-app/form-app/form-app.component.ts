import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from '../../moduls/gallery';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.scss']
})
export class FormAppComponent implements OnInit {
  galleries:Gallery[];
  num:number;
  result!:boolean;
  @Output() emitirMensaje= new EventEmitter<boolean>();
  
  constructor(galleries:GalleryService) {
    this.galleries=galleries.getImages()
    this.num=Math.ceil(this.getRandom(0,this.galleries.length))
  }


  ngOnInit(): void {
   console.log(this.galleries[this.num].nombre)
   
  }
   getRandom(min:number, max:number) {
    return Math.random() * (max - min-1) + min;
  }


  verificar(nombre:string,nombreImg:string){
    this.result=false
    if(nombre.toLowerCase()===nombreImg.toLowerCase()){
      this.result=true
    }
    
    this.emitirMensaje.emit(this.result)

  }
}
