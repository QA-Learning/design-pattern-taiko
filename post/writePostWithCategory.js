import { click } from "taiko";

export default class WritePostWithCategory {
  constructor(writePost) {
    this.post = writePost;
  }

  async writePost() {
    this.post.writePost;
    console.log("Adding Category");
    this.addCategory();
    this.post.publishPost();
  }

  async addCategory() {
    await click("Categories");
    await click("JS");
  }
}
