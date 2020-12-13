import request from "supertest";
import { expect } from "chai";
import { baseURL, HTTPStatusCode } from "../constants/constants";
import User from "../data/User";

export async function customPost(path: string, user: User) {
  /* 
  provide the creadentials that was created as part of the 
  "Set Up Authorization for POST API" step
  */

  let credentials = {
    username: "admin",
    password: "IRzQwvhNYU0he2YUh44fYYKy",
  };

  const response = await request(baseURL)
    .post(path)
    .auth(credentials.username, credentials.password)
    .send(user);

  expect(response.status).to.eql(HTTPStatusCode.CREATED);
}
