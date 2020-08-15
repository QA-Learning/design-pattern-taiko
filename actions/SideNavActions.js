import FlowFactory from "../factory/FlowFactory";
import DesktopFlow from "../factory/DesktopFlow";

let runner;

export default class SideNavActions {
  constructor() {
    runner = FlowFactory.getInstance();
  }

  static async addNewPost() {
    await DesktopFlow.writePosts();
  }
}
