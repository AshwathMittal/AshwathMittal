import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { 
    
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

    terminal(){
      setTimeout(() => this.router.navigate(['/terminal'],{ skipLocationChange: true }), 1000);
    // this.router.navigateByUrl('terminal');//, { skipLocationChange: true };
      
    }
}