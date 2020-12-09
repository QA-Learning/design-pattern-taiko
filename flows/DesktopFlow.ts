import { Flow } from "./Flow"

export default class DesktopFlow implements Flow {
  async checkIfSettings(): Promise<void> {
    console.log("In Desktop");
  }
}
