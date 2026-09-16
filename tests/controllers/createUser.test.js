// supertest
import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../../src/app.js";
import { email } from "zod";

describe("Create user", () => {
  it("Should create a user", async () => {
    const payload = {
      username: "TestUser",
      email: "testuser@test.com",
      password: "test12345",
    };

    const response = await request(app).post("/users/").send(payload);

    expect(response.status).toBe(201);
  });
});

it("Should fail with invalid email", async () => {
  const payload = {
    username: "TestUser",
    email: "007@scoobydoo.00" || "",
    password: "test12345",
  };

  const response = await request(app).post("/users/").send(payload);

  expect(response.status).toBe(400);
});
