import SideNavActions from "../actions/SideNavActions";
import { write, into, focus, textBox, click } from "taiko";

export default class WritePost {
  async addPost() {
    await SideNavActions.addNewPost();
    await this.addTitle();
    await this.addDescription();
  }

  async addTitle() {
    await focus(textBox("Add title"));
    await write("Post Title", into("#post-title-0"));
  }

  async addDescription() {
    //TODO: Add Description
    console.log("Description added");
  }

  async publishPost() {
    await click("Publish");
    await click("Publish");
  }
}
