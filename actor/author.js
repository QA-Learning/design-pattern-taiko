const { default: Actor } = require("./actor");

import SideNavInterrogations from "../interrogations/SideNavInterrogations";
import { expect } from "chai";

export default class Author extends Actor {
  constructor(credentials) {
    super();
    this.username = credentials.username;
    this.password = credentials.password;
  }

  async shouldNotHaveSettingsOptions() {
    expect(await SideNavInterrogations.checkIfSettings()).to.be.false;
  }
}
