export default class WriteAndPublishPost {
  constructor(writePost) {
    this.post = writePost;
  }

  async writePost() {
    await this.post.addPost();
    await this.post.publishPost();
  }
}
