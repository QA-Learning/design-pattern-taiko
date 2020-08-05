import { write, click, into } from "taiko";
import LoginElements from "../elements/loginElements";

class LoginActions {
  async login(userName, password) {
    await write(userName, into(LoginElements.userName));
    await write(password, into(LoginElements.password));
    await click(LoginElements.submit);
  }
}

export default new LoginActions();
