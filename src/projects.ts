export class Pro{
    title: string
    desc: string
    src: string
    href: string
}

export const projects: Pro[] = [
     // {
      //   title: "Travid",
      //   desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      //   src: "assets/travid.gif",
      //   href: "https://aqueous-river-48146.herokuapp.com/"
      // },
      {
        title: "Hoodie Mart",
        desc: "This is an E-commerce website which was made for an Interschool Competition. It was supposed to be just a Frontend Website therefor it doesn't have much functionality, but the design is great. We used React Framework to build this.",
        src: "assets/shop.gif",
        href: "https://simple-e-market.netlify.app/"
      },
      {
        title: "ChatBot",
        desc: 'This is a prototype of a chatBot made in HTML, CSS & Js. This is just a design idea, therefore the bot does not reply anything except "Hello!"',
        src: "assets/chatbot.gif",
        href: "https://ashwathmittal.github.io/first-chat-bot/"
      },      
      {
        title: "Chatbot with machine Learning",
        desc: "The GUI of this bot is same as the above Bot, the differnce is that this is uses machine learning to reply. The backend where the model training takes place is made in NodeJS framework using Brain.js Library.",
        src: "assets/aiwaala.gif",
        href: "https://github.com/AshwathMittal/AI-chat-bot"
      },
      {
        title: "To Do List App Made With Angular",
        desc: "This is my first angular app, I made this while learning angular (Even this webpage is also made in Angular). In this WebApp you can store your to do list. The To-Do items are stored in the browser's local storage, so you won't loose the saved items when the page is refreshed.",
        src: "assets/todolist.gif",
        href: "https://ashwathmittal.github.io/ListToDo/"
      },
      // {
      //   title: "Alarm Clock that Won't let you sleep",
      //   desc: "To be Continued...",
      //   src: "assets/alarm.gif",
      //   href: "https://www.youtube.com/watch?v=hJsCuauUbAY"
      // },      
      {
        title: "Also Check My GiHub For Other Projects",
        desc: "",
        src: "assets/github.png",
        href: "https://github.com/AshwathMittal"
      },

      {
        title: "More Projects To Be Uploaded Soon...",
        desc: null,
        src: "assets/comingsoon.gif",
        href: "assets/comingsoon.gif"
      }
]