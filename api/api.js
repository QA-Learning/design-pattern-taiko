import request from "supertest";
import { expect } from "chai";
import { baseURL, HTTPStatusCode } from "../constants/constants";

export async function customPost(path, user) {
  let credentials = {
    username: "apiadmin",
    password: "mgrx3JB74a2JfseCjvP2Msva",
  };

  const response = await request(baseURL)
    .post(path)
    .auth(credentials.username, credentials.password)
    .send(user);
  expect(response.status).to.eql(HTTPStatusCode.CREATED);
}
