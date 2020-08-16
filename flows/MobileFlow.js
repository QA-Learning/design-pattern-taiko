import { click, $ } from "taiko";
import { expect } from "chai";
import SideNavInterrogations from "../interrogations/SideNavInterrogations";

export default class MobileFlow {
  async checkIfSettings() {
    console.log("In Mobile");
    await click($("#wp-admin-bar-menu-toggle"));
  }
}
