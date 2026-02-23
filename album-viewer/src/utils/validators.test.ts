import { describe, expect, it } from "vitest";
import { validateDate, validateIPV6 } from "./validators";

// test the validateDate function
describe("validateDate", () => {
  it("should return true for valid date", () => {
    expect(validateDate("2021-12-31")).toBe(true);
  });

  it("should return false for invalid date", () => {
    expect(validateDate("2021-02-30")).toBe(false);
  });

  it("should return false for non-date string", () => {
    expect(validateDate("not a date")).toBe(false);
  });
});

// test the validateIPV6 function
describe("validateIPV6", () => {
  it("should return true for valid IPV6 address", () => {
    expect(validateIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true);
  });

  it("should return false for invalid IPV6 address", () => {
    expect(validateIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:733g")).toBe(false);
  });

  it("should return false for non-IPV6 string", () => {
    expect(validateIPV6("not an IPV6 address")).toBe(false);
  });
});