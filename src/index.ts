import { invariant } from "@lucid-softworks/invariant";

/**
 * Returns at most `count` values from the start of `values`.
 */
export function take<T>(values: readonly T[], count: number): T[] {
  invariant(
    Number.isInteger(count) && count >= 0,
    "Take count must be a non-negative integer",
  );

  return values.slice(0, count);
}
