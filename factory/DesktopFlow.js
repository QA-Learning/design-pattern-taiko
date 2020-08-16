import { click } from "taiko";

export default class DesktopFlow {
  async writePosts() {
    await click("Posts");
    await click("Add New");
  }
}
