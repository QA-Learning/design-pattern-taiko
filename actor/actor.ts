import { login } from "../interactions/LoginInteractions";
import FlowManager from "../flows/FlowManager";
import DesktopFlow from "../flows/DesktopFlow";
import MobileFlow from "../flows/MobileFlow";
import { Credentials } from "../types/Credentials"

let runner: MobileFlow | DesktopFlow;

export default class Actor {
  private readonly username: string;
  private readonly password: string;

  constructor(credentials: Required<Credentials>) {
    runner = FlowManager.getInstance();
    this.username = credentials.username;
    this.password = credentials.password;
  }

  async login(): Promise<void> {
    await login(this.username, this.password);
  }
}
