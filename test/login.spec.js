import {
  openBrowser,
  goto,
  closeBrowser,
  write,
  click,
  into,
  $,
  text,
} from "taiko";
import { expect } from "chai";

describe("WordPress Login", async () => {
  before("Open Browser", async () => {
    await openBrowser();
    await goto("http://127.0.0.1:8000/wp-admin/");
  });

  after("Close Browser", async () => {
    await closeBrowser();
  });
  it("User with Valid Login should be able to see settings option", async () => {
    await write("Karley Crist", into($("#user_login")));
    await write("gkbjp93kFUFthK7", into($("#user_pass")));
    await click($("#wp-submit"));
    const elementPresent = await text("Settings").exists();
    expect(elementPresent).to.be.true;
  });
});
