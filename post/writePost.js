import SideNavActions from "../actions/SideNavActions";
import { write, into, focus, textBox, click } from "taiko";

export default class WritePost {
  async addPost() {
    await SideNavActions.addNewPost();
    this.addTitle();
    this.addDescription();
  }

  async addTitle() {
    await focus(textBox("Add title"));
    await write("Post Title", into("#post-title-0"));
  }

  async addDescription() {
    console.log("Description added");
  }

  async publishPost() {
    await click("Publish");
    await click("Publish");
  }
}
