import NewUserBuiilder from "./NewUserBuilder";

export default class User implements User {
  firstName: string;
  lastName: string;
  roles: string[];
  email: string;
  username: string;
  password: string;

  constructor(newUserBuilder: NewUserBuiilder) {
    this.firstName = newUserBuilder.firstName;
    this.lastName = newUserBuilder.lastName;
    this.roles = newUserBuilder.roles;
    this.email = newUserBuilder.email;
    this.username = newUserBuilder.username;
    this.password = newUserBuilder.password;
  }
}
