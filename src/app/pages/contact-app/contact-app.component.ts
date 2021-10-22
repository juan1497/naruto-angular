import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  result!:boolean
  constructor() { }

  ngOnInit(): void {
  }
  setMessage(result:boolean){
    this.result=result
  }
}
