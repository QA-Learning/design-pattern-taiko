import { text } from "taiko";

class SideNavInterrogations {
  async checkIfSettingsIsPresent() {
    return await text("Settings").exists();
  }
}

export default new SideNavInterrogations();
