# `@lucid-softworks/array-take`

Return at most a requested number of values from the beginning of an array.

```ts
import { take } from "@lucid-softworks/array-take";

take([1, 2, 3, 4], 2); // [1, 2]
```

A count of zero returns `[]`; a count beyond the input length returns a full
copy. Counts must be non-negative integers, and inputs are never mutated.
