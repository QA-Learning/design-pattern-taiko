import { $ } from "taiko";

export default class LoginElements {
  static get userName() {
    return $("#user_login");
  }

  static get password() {
    return $("#user_pass");
  }

  static get submit() {
    return $("#wp-submit");
  }
}
