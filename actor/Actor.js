import LoginActions from "../actions/LoginActions";
import SideNavActions from "../actions/SideNavActions";

export default class Actor {
  async login() {
    await LoginActions.login(this.userName, this.password);
  }

  async writePost() {
    await SideNavActions.writePost();
  }
}
