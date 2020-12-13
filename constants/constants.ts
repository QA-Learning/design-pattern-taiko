export enum HTTPStatusCode {
  OK = 200,
  CREATED = 201,
  INTERNAL_SERVER_ERROR1 = 500,
}

export const baseURL = "http://localhost:8000/wp-json/wp/v2";

export enum UserRole {
  Administrator = "administrator",
  Subscriber = "subscriber",
  Contributor = "contributor",
  Editor = "editor",
  Author = "author",
}
