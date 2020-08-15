import { click } from "taiko";

export default class DesktopFlow {
  static async writePosts() {
    await click("Posts");
    await click("Add New");
  }
}
