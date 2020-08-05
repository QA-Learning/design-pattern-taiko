import MobileFlow from "../factory/MobileFlow";
import DesktopFlow from "../factory/DesktopFlow";

export default class FlowFactory {
  static getInstance() {
    if (process.env.TAIKO_EMULATE_DEVICE) {
      return new MobileFlow();
    } else {
      return new DesktopFlow();
    }
  }
}
