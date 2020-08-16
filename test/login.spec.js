import { openBrowser, goto, closeBrowser, screenshot } from "taiko";

import Admin from "../actor/admin";
import Author from "../actor/author";

describe("WordPress Login", async () => {
  beforeEach("Open Browser", async () => {
    await openBrowser();
    await goto("http://127.0.0.1:8000/wp-admin/");
  });

  afterEach("Close Browser", async () => {
    await screenshot();
    await closeBrowser();
  });

  it("User with Valid Admin Login should be able to see settings option", async () => {
    // Add credentials to JS file Like author, admin and let the class get the credentials
    let credentials = {
      username: "admin",
      password: "admin",
    };
    let admin = new Admin(credentials);
    await admin.login();
    await admin.shouldHaveSettingsOptions();
  });

  it("User with Valid Non-Admin Login should be able to see settings option", async () => {
    let credentials = {
      username: "taiko",
      password: "taiko",
    };
    let author = new Author(credentials);
    await author.login();
    await author.shouldNotHaveSettingsOptions();
  });
});
