import SideNavElements from "../elements/SideNavElements";

export default {
  async checkIfSettings() {
    return await SideNavElements.settings.exists();
  },
};
