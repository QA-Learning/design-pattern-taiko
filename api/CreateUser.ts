import { customPost } from "./api";
import User from "../data/User";

export const createUser = async function (user: User) {
  await customPost("/users", user);
};
