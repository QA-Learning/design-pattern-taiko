import { openBrowser, goto, closeBrowser, screenshot } from "taiko";

import { createUser } from "../data/SeedData";

import Admin from "../actor/admin";
import Author from "../actor/author";
import NewUserBuilder from "../data/NewUserBuilder";

describe("WordPress Login", async () => {
  beforeEach("Open Browser", async () => {
    await openBrowser({ headless: false });
    await goto("http://localhost:8000/wp-admin");
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

  it.only("User with Valid Non-Admin Login should be able to see settings option", async () => {
    const user = new NewUserBuilder()
      .userName()
      .email()
      .password()
      .role(["author"])
      .firstName()
      .lastName()
      .build();

    await createUser(user);
    let author = new Author(user);
    await author.login();
    await author.shouldNotHaveSettingsOptions();
  });
});
