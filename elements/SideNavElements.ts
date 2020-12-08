import { $, Selector } from "taiko";

export default class SideNavElements {
  static get settings(): Selector {
    return $("#menu-settings");
  }
}
