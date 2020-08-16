import { login } from "../interactions/LoginInteractions";
import FlowManager from "../flows/FlowManager";

let runner;

export default class Actor {
  constructor() {
    runner = FlowManager.getInstance();
  }
  async login() {
    login(this.username, this.password);
  }

  async writePost() {
    runner.writePost();
  }
}
