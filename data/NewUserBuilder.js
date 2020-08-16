import NewUser from "./Newuser";
import faker from "faker";

let userName = faker.name.findName();
let email = faker.internet.email();
let password = faker.internet.password();
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

export default class NewUserBuilder {
  constructor() {
    this.user = new NewUser();
  }

  userName() {
    this.user.username = userName;
    return this;
  }

  password() {
    this.user.password = password;
    return this;
  }

  firstName() {
    this.user.firstName = firstName;
    return this;
  }

  lastName() {
    this.user.lastName = lastName;
    return this;
  }

  email() {
    this.user.email = email;
    return this;
  }

  role(role) {
    this.user.roles = role;
    return this;
  }

  build() {
    return this.user;
  }
}
