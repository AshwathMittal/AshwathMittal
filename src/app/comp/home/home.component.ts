import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { 
    
  }
   

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const options = {
      loop: false,
      animateCursor: false,
      cursorColor: 'white'
    }
    
    const writer = new Typewriter(target, options)
  writer
  .type('Hi!')
  .start()    
    }
}