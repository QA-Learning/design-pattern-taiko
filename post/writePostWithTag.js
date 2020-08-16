import { click, focus, write, textBox } from "taiko";

export default class WritePostWithTag {
  constructor(writePost) {
    this.post = writePost;
  }

  async writePost() {
    await this.post.addPost();
    await this.addTags();
    await this.post.publishPost();
  }

  async addTags() {
    await click("Tags");
    await focus(textBox("Add New Tag"));
    await write("Blog, ");
  }
}
