export default class WriteAndPublishPost {
  constructor(writePost) {
    this.post = writePost;
  }

  async writePost() {
    this.post.addPost();
    this.post.publishPost();
  }
}
