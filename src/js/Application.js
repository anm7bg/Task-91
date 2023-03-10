import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this.lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    this.count = 0;

    this._beat = new Beat();
    this._beat.addListener(Beat.events.BIT, () => {
      console.log("beat");
      this._create();
    });
  }

  _create(){
    console.log(this.lyrics.length);
    
    while (this.count < this.lyrics.length) {
    
      const message = document.createElement("div");
    message.classList.add("message");

      message.innerText = this.lyrics[this.count];

      document.querySelector(".main").appendChild(message);    
      this.count++;  
      console.log(this.count);
      console.log(this.lyrics[this.count]);
    }
  }

}
