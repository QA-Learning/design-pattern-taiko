import User from "./User";
import faker from "faker";

let userName = faker.name.findName();
let password = faker.internet.password();
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let email = faker.internet.email();

export default class NewUserBuilder {
  private _firstName: string = "";
  private _lastName: string = "";
  private _roles: string[] = [];
  private _email: string = "";
  private _username: string = "";
  private _password: string = "";

  get firstName(): string {
    return this._firstName;
  }

  setFirstName() {
    this._firstName = firstName;
    return this;
  }

  get lastName(): string {
    return this._lastName;
  }

  setLastName() {
    this._lastName = lastName;
    return this;
  }

  get roles(): string[] {
    return this._roles;
  }

  setRoles(role: string[]) {
    this._roles = role;
    return this;
  }

  get email(): string {
    return this._email;
  }

  setEmail() {
    this._email = email;
    return this;
  }

  get username(): string {
    return this._username;
  }

  setUsername() {
    this._username = userName;
    return this;
  }

  get password(): string {
    return this._password;
  }

  setPassword() {
    this._password = password;
    return this;
  }

  build() {
    return new User(this);
  }
}
