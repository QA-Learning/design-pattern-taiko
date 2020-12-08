import { click, $ } from "taiko";

export default class MobileFlow {
  async checkIfSettings(): Promise<void> {
    console.log("In Mobile");
    await click($("#wp-admin-bar-menu-toggle"));
  }
}
