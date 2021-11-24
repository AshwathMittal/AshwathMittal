import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './comp/home/home.component';
import { HttpClient  } from '@angular/common/http';
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
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.tracker();
}
tracker(){
  this.http.get('http://api.ipify.org/?format=json').subscribe(data => {
    this.ip_address = data['ip'];
    this.name = '';
    navigator.geolocation.getCurrentPosition(position => {
    this.location = position.coords.latitude + ',' + position.coords.longitude;
    console.log(this.location);
    fetch(`https://tracker.ashwathmittal.repl.co/query?ip_add=${this.ip_address}&location=${this.location}&name=${this.name}`)
    });
  });
}
  }

  // https://ipinfo.io/json
  // https://api.ipify.org/?format=json