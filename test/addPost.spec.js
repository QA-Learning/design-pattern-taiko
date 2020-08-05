import { openBrowser, goto, closeBrowser, text } from "taiko";
import { expect } from "chai";
import Admin from "../actor/Admin";
import Author from "../actor/Author";
import SideNavInterrogations from "../interrogations/SideNavInterrogations";
describe("WordPress Login", async () => {
  before("Open Browser", async () => {
    await openBrowser();
    await goto("http://127.0.0.1:8000/wp-admin/");
  });

  after("Close Browser", async () => {
    await closeBrowser();
  });

  it.only("User with Valid Admin Login should be able to see settings option", async () => {
    let author = new Author({
      user: "taiko",
      password: "taiko",
    });
    await author.login();
    await author.writePost();
    //expect(await SideNavInterrogations.checkIfSettingsIsPresent()).to.be.true;
  });
});
