import { expect } from "chai";
import SideNavInterrogations from "../interrogations/SideNavInterrogations";
import Actor from "./actor";
import FlowManager from "../flows/FlowManager";
let runner;
export default class Admin extends Actor {
  constructor(credentials) {
    super();
    runner = FlowManager.getInstance();
    this.username = credentials.username;
    this.password = credentials.password;
  }

  async shouldHaveSettingsOptions() {
    await runner.checkIfSettings();
    expect(await SideNavInterrogations.checkIfSettings()).to.be.true;
  }
}
