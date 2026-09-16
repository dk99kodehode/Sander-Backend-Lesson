// npm install zod

import z, { email, optional } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    username: z
      .string({ error: "Username must be a string." })
      .max(16, { error: "Username can only contain 16 characters" })
      .min(3, { error: "Username must atleast contain 3 character" }),
    email: z.email({ error: "Email must be a valid email" }),
    password: z
      .string({ error: "Password must be a string." })
      .max(16, { error: "Password can only contain 16 characters" })
      .min(3, { error: "Password must atleast contain 3 character" }),
  }),
});
