import { openBrowser, goto, closeBrowser, text } from "taiko";
import { expect } from "chai";
import Admin from "../actor/Admin";
import Author from "../actor/Author";
import SideNavInterrogations from "../interrogations/SideNavInterrogations";
describe("WordPress Login", async () => {
  beforeEach("Open Browser", async () => {
    await openBrowser();
    await goto("http://127.0.0.1:8000/wp-admin/");
  });

  afterEach("Close Browser", async () => {
    await closeBrowser();
  });

  it("User with Valid Admin Login should be able to see settings option", async () => {
    let admin = new Admin({
      user: "Karley Crist",
      password: "gkbjp93kFUFthK7",
    });
    await admin.login();
    await admin.deletePost();
    expect(await SideNavInterrogations.checkIfSettingsIsPresent()).to.be.true;
  });

  it("User with Valid Non Admin Login should not be able to see settings option", async () => {
    let author = new Author({
      user: "taiko",
      password: "taiko",
    });
    await author.login();
    expect(await SideNavInterrogations.checkIfSettingsIsPresent()).to.be.false;
  });
});
