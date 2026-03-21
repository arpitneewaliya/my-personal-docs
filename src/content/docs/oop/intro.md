---
title: Introduction to Object Oriented Programming (OOP) using Java
description: Here we will cover oop in java
---

Object-Oriented Programming (OOP) is a programming style where you organize code around objects rather than just functions and logic. These objects represent real-world entities and bundle data (variables) and behavior (methods) together.

In OOP everything revolves around classes and objects:
- **Class** → Blueprint (like a design of a car)
- **Object** → Actual instance (an actual car built from that design)

Example:-

```java
class Car {
    String color;
    int speed;

    void drive() {
        System.out.println("Car is driving");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // object creation
        myCar.color = "Red";
        myCar.speed = 120;

        myCar.drive();
    }
}
```

## 4 Main Pillars of OOP

### Inheritance
Inheritance is a core OOP concept in Java that allows one class to acquire the fields and methods of another class using the extends keyword. It represents an “is-a” relationship between classes.

### Encapsulation
Encapsulation is the process of wrapping data and methods into a single unit, usually a class, and restricting direct access to the data. It acts as a protective shield that prevents data from being accessed directly from outside the class.

### Abstraction
Abstraction in Java is the process of hiding implementation details and showing only the essential features of an object. It helps users focus on what an object does rather than how it does it.

### Polymorphism
The word polymorphism means having many forms, and it comes from the Greek words poly (many) and morph (forms), this means one entity can take many forms. In Java, polymorphism allows the same method or object to behave differently based on the context, specially on the project's actual runtime class.
