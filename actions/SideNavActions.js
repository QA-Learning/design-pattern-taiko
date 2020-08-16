import FlowFactory from "../factory/FlowFactory";

let runner;

class SideNavActions {
  constructor() {
    runner = FlowFactory.getInstance();
  }
  async addNewPost() {
    await runner.writePosts();
  }
}

export default new SideNavActions();
