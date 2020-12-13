import { expect } from "chai";
import SideNavInterrogations from "../interrogations/SideNavInterrogations";
import Actor from "./actor";
import FlowManager from "../flows/FlowManager";
import DesktopFlow from "../flows/DesktopFlow";
import MobileFlow from "../flows/MobileFlow";
import { Credentials } from "../types/Credentials";

let runner: MobileFlow | DesktopFlow;

export default class Admin extends Actor {
  constructor(credentials: Required<Credentials>) {
    super(credentials);
    runner = FlowManager.getInstance();
  }

  async shouldHaveSettingsOptions(): Promise<void> {
    await runner.checkIfSettings();
    expect(await SideNavInterrogations.checkIfSettings()).to.be.true;
  }
}
