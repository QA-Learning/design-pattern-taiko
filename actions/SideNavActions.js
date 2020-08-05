import FlowFactory from "../factory/FlowFactory";

let runner;

class SideNavActions {
  constructor() {
    runner = FlowFactory.getInstance();
  }
  async writePost() {
    await runner.writePost();
  }
}

export default new SideNavActions();
