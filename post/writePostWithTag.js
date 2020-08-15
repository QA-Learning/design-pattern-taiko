import { click, focus, write } from "taiko";

export default class WritePostWithTag {
  constructor(writePost) {
    this.post = writePost;
  }

  async writePost() {
    this.post.writePost;
    console.log("Adding Tag");
    this.addTags();
    this.post.publishPost();
  }

  async addTags() {
    await click("Tags");
    focus(textBox("Add New Tag"));
    await write("Blog, Decorator, ");
  }
}
