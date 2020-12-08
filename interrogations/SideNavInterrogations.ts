import SideNavElements from "../elements/SideNavElements";

export default {
  async checkIfSettings(): Promise<boolean> {
    return await SideNavElements.settings.exists();
  },
};
