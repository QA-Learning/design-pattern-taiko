import { default as Actor } from "./actor";

import SideNavInterrogations from "../interrogations/SideNavInterrogations";
import { expect } from "chai";

export default class Author extends Actor {
  constructor(credentials: Required<Credentials>) {
    super(credentials);
  }

  async shouldNotHaveSettingsOptions(): Promise<void> {
    expect(await SideNavInterrogations.checkIfSettings()).to.be.false;
  }
}
