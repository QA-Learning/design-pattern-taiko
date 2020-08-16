import { click } from "taiko";

export default class WritePostWithCategory {
  constructor(writePost) {
    this.post = writePost;
  }

  async writePost() {
    await this.post.addPost();
    await this.addCategory();
    await this.post.publishPost();
  }

  async addCategory() {
    await click("Categories");
    await click("JS");
  }
}
