var faker = require("faker");
import NewUserBuilder from "./NewUserBuilder";
export default class User {
  static getUser() {
    return new NewUserBuilder()
      .userName(userName)
      .email(email)
      .password(password)
      .firstName(firstName)
      .lastName(lastName)
      .build();
  }
}
