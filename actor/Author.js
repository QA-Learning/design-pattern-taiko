import Actor from "../actor/Actor";

export default class Author extends Actor {
  constructor(credentials) {
    super();
    this.userName = credentials.user;
    this.password = credentials.password;
  }

  async publishAPost() {}
}
