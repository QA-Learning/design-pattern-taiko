import LoginElements from "../elements/LoginElements";
import { write, into, click } from "taiko";

export async function login(username, password) {
  await write(username, into(LoginElements.userName));
  await write(password, into(LoginElements.password));
  await click(LoginElements.login);
}
