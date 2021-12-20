import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './comp/home/home.component';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weper';
  ip_address: string;
  location: any;
  name: string;
  constructor(){}
  ngOnInit(){
    
}
}

  // https://ipinfo.io/json
  // https://api.ipify.org/?format=json