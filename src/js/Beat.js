import EventEmitter from "eventemitter3";
export default class Beat extends EventEmitter{
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super();
    setInterval(() => {
      // this.events.BIT;
      console.log("bit");
      this.emit(Beat.events.BIT);
    }, 600);
    // console.log(BIT);
  }
}
