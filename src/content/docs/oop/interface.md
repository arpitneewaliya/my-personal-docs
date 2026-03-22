---
title: Interfaces in Java
description: This explains what are interfaces in java
---

An interface is a **contract**. It says: "Any class that signs this contract promises to provide these methods." The interface defines what must exist. Each class decides how it works.

```java
interface Greetable {
    void greet();
}
```

```java
class EnglishPerson implements Greetable {
    @Override
    public void greet() {
        System.out.println("Hello!");
    }
}
```

Using it:

```java
Greetable g = new EnglishPerson();
g.greet(); // → "Hello!"
```

:::note
The reference type is Greetable — not EnglishPerson.
Your code only knows the contract, not the implementation.
:::
