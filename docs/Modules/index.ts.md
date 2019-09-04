---
title: index.ts
nav_order: 1
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [Log (interface)](#log-interface)
- [MonadLog (interface)](#monadlog-interface)

---

# Log (interface)

Log

**Signature**

```ts
interface Log {
  readonly debug: Reader<string, void>
  readonly error: Reader<string, void>
  readonly info: Reader<string, void>
  readonly log: Reader<string, void>
  readonly warn: Reader<string, void>
}
```

Added in v0.2.0

# MonadLog (interface)

Monad Log

**Signature**

```ts
interface MonadLog {
  readonly debug: MonadFunction<string, void>
  readonly error: MonadFunction<string, void>
  readonly info: MonadFunction<string, void>
  readonly log: MonadFunction<string, void>
  readonly warn: MonadFunction<string, void>
}
```

Added in v0.2.0
