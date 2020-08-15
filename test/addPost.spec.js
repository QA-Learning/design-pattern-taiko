import { openBrowser, goto, closeBrowser, text } from "taiko";
import { expect } from "chai";
import Admin from "../actor/Admin";
import Author from "../actor/Author";
import SideNavInterrogations from "../interrogations/SideNavInterrogations";
import WritePost from "../post/writePost";
import WriteAndPublishPost from "../post/writeAndPublishPost";
import WritePostWithTag from "../post/writePostWithTag";
import WritePostWithCategory from "../post/writePostWithCategory";

describe("WordPress Login", async () => {
  beforeEach("Open Browser", async () => {
    await openBrowser();
    await goto("http://127.0.0.1:8000/wp-admin/");
  });

  afterEach("Close Browser", async () => {
    await closeBrowser();
  });

  it.only("Admin should be able to add a new post", async () => {
    let admin = new Admin({
      user: "Karley Crist",
      password: "gkbjp93kFUFthK7",
    });
    await admin.login();

    let post = new WriteAndPublishPost(new WritePost());
    await post.writePost();
  });

  it("Admin should be able to add a new post with tags", async () => {
    let admin = new Admin({
      user: "Karley Crist",
      password: "gkbjp93kFUFthK7",
    });
    await admin.login();

    let post = new WritePostWithTag(new WritePost());
    await post.writePost();
  });

  it("Admin should be able to add a new post with category", async () => {
    let admin = new Admin({
      user: "Karley Crist",
      password: "gkbjp93kFUFthK7",
    });
    await admin.login();

    let post = new WritePostWithCategory(new WritePost());
    await post.writePost();
  });
});
