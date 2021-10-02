import { Component, OnInit } from '@angular/core';
import { Pro } from 'src/projects';
@Component({
  selector: 'app-projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.css']
})
export class ProjsComponent implements OnInit {
  project:Pro[]
  constructor() { 
    this.project = [
      {
        title: "Travid",
        desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
        url: "assets/travid.gif",
        href: "https://aqueous-river-48146.herokuapp.com/"
      },
      {
        title: "Hoodie Mart",
        desc: "This is an E-commerce website which was made for an Interschool Competition. It was supposed to be just a Frontend Website therefor it doesn't have much functionality, but the design is great. We used React Framework to build this.",
        url: "assets/shop.gif",
        href: "https://simple-e-market.netlify.app/"
      },
      {
        title: "ChatBot",
        desc: 'This is a prototype of a chatBot made in HTML, CSS & Js. This is just a design idea, therefore the bot does not reply anything except "Hello!"',
        url: "assets/chatbot.gif",
        href: "https://ashwathmittal.github.io/first-chat-bot/"
      },      
      {
        title: "Chatbot with machine Learning",
        desc: "The GUI of this bot is same as the above Bot, the differnce is that this is uses machine learning to reply. The backend where the model training takes place is made in NodeJS framework using Brain.js Library.",
        url: "assets/aiwaala.gif",
        href: "https://github.com/AshwathMittal/AI-chat-bot"
      }
    ]
  }

  ngOnInit(): void {
  }

}
