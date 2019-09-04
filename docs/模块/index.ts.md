---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [Log (接口)](#log-%E6%8E%A5%E5%8F%A3)
- [MonadLog (接口)](#monadlog-%E6%8E%A5%E5%8F%A3)

---

# Log (接口)

Log

**签名**

```ts
interface Log {
  readonly debug: Reader<string, void>
  readonly error: Reader<string, void>
  readonly info: Reader<string, void>
  readonly log: Reader<string, void>
  readonly warn: Reader<string, void>
}
```

v0.2.0 中添加

# MonadLog (接口)

Monad Log

**签名**

```ts
interface MonadLog {
  readonly debug: MonadFunction<string, void>
  readonly error: MonadFunction<string, void>
  readonly info: MonadFunction<string, void>
  readonly log: MonadFunction<string, void>
  readonly warn: MonadFunction<string, void>
}
```

v0.2.0 中添加
