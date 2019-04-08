import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number;
  longitude: number;

  constructor() { }

  ngOnInit() {
    this.latitude = 32.306956;
    this.longitude = 34.868919;
  }

}
