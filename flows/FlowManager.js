import DesktopFlow from "../flows/DesktopFlow";
import MobileFlow from "../flows/MobileFlow";

export default class FlowManager {
  static getInstance() {
    if (process.env.TAIKO_EMULATE_DEVICE) {
      return new MobileFlow();
    } else {
      return new DesktopFlow();
    }
  }
}
