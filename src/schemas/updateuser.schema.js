import z, { email, optional } from "zod";

export const updateUserSchema = z.object({
  body: z.object({
    username: z
      .string({ error: "Username must be a string." })
      .max(16, { error: "Username can only contain 16 characters" })
      .min(3, { error: "Username must atleast contain 3 character" })
      .optional(),
    email: z.email({ error: "Emial must be a valid email" }).optional(),
  }),
});
