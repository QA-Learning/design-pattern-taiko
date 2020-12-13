import { openBrowser, goto, closeBrowser, screenshot } from "taiko";

import NewUserBuilder from "../data/NewUserBuilder";
import User from "../data/User";
import { createUser } from "../api/CreateUser";
import { Credentials } from "../types/Credentials";
import { UserRole } from "../constants/constants";

import Admin from "../actor/admin";
import Author from "../actor/author";

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
    let credentials: Credentials = {
      username: "admin",
      password: "admin",
    };
    let admin: Admin = new Admin(credentials);
    await admin.login();
    await admin.shouldHaveSettingsOptions();
  });

  it("User with Valid Non-Admin Login should be able to see settings option", async () => {
    const user: User = new NewUserBuilder()
      .setUsername()
      .setEmail()
      .setPassword()
      .setRoles([UserRole.Author])
      .setFirstName()
      .setLastName()
      .build();

    await createUser(user);
    let author = new Author(user);
    await author.login();
    await author.shouldNotHaveSettingsOptions();
  });
});
