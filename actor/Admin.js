import Actor from "../actor/Actor";

export default class Admin extends Actor {
  constructor(credentials) {
    super();
    this.userName = credentials.user;
    this.password = credentials.password;
  }

  async deletePost() {
    return true;
  }

  async createAUser() {}
}
