import LoginElements from "../elements/LoginElements";
import { write, into, click } from "taiko";

export async function login(username: string, password: string): Promise<void> {
  await write(username, into(LoginElements.userName));
  await write(password, into(LoginElements.password));
  await click(LoginElements.login);
}
