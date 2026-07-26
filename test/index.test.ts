import { describe, expect, expectTypeOf, it } from "vitest";

import { take } from "../src/index.js";

describe("take", () => {
  it("takes values from the start", () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
  });

  it("supports zero and counts beyond the input length", () => {
    expect(take([1, 2], 0)).toEqual([]);
    expect(take([1, 2], 10)).toEqual([1, 2]);
  });

  it("returns a new array without mutating readonly input", () => {
    const values = ["a", "b"] as const;
    const result = take(values, 2);

    expect(result).not.toBe(values);
    expect(values).toEqual(["a", "b"]);
    expectTypeOf(result).toEqualTypeOf<("a" | "b")[]>();
  });

  it.each([-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects the invalid count %s",
    (count) => {
      expect(() => take([1], count)).toThrow(
        "Take count must be a non-negative integer",
      );
    },
  );
});
