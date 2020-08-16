import { customPost } from "../api/api";

export async function createUser(user) {
  await customPost("/users", user);
}
