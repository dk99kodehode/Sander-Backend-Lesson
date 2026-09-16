import { describe, it, expect } from "vitest";
import { validateUserDetails } from "../../src/util/validateUserDetails";
import { email } from "zod";

// string for myself
describe("Validate User Details", () => {
  it("Should accept a valid user", () => {
    const user = {
      name: "Daniel",
      email: "dknottis@gmail.com",
    };

    const result = validateUserDetails(user);

    expect(result).toBe(true);
  });

  it("Should not accept admin as a name", () => {
    const user = {
      name: "Admin",
      email: "admin@admin.com",
    };
    const result = validateUserDetails(user);

    expect(result).toBe(false);
  });

  it("Should not accept missing name", () => {
    const user = {
      email: "dknottis@gmail.com",
    };
    const result = validateUserDetails(user);

    expect(result).toBe(false);
  });
});
