import { $, Selector } from "taiko";

export default class LoginElements {
  static get userName(): Selector {
    return $("#user_login");
  }

  static get password(): Selector {
    return $("#user_pass");
  }

  static get login(): Selector {
    return $("#wp-submit");
  }
}
