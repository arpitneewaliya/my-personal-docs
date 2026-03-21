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

## Class

A class is a **user-defined** data type that serves as a blueprint or template for object creation.
We can create multiple objects having the same behaviour using classes. It helps in code reusability.
We can create classes using the `class` keyword in java.

```java
public class MyFirstClass {
    public static void main(String[] args) {
        System.out.println("This is a class.");
    }
}
```

:::tip{icon="heart"}
The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. Using the concept of classes, we can implement this principle in our code files in Java.
:::

## Object

An object is an instance of a class that represents a real-world entity, containing its own state (data) and behavior (methods), as defined by the class.

```java
class Car {
    String name;
    int max_speed;

    void drive() {
        System.out.println(name + " car is driving at " + speed + " km/h");
    }
}
```

This class defines what a car should look like, but nothing exists yet.

Now we will start creating objects.

```java
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car();

        car1.name = "Bentley";
        car1.max_speed = 300;
        
        car2.name = "Maserati";
        car2.max_speed = 320;

        car1.drive();
        car2.drive();
    }
}
```

Here, `car1` and `car2` are objects of the `Car` class. Both of the objects have the `name` and `max_speed` attributes and `drive()` method. We can make any number of objects from the same class, and all of them will have the same behaviour.

## Difference between Procedural Programming and Object-Oriented Programming

| Basis of comparison      | Object-Oriented Programming (OOP)                                | Procedural Programming                                                     |
| -------------------------| ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Basic Concept            | Organizes programs around objects that combine data and behavior | Organizes programs as a sequence of procedures/functions operating on data |
| Focus                    | Focuses on objects and data                                      | Focuses on functions and logic                                             |
| Structure                | Uses classes and objects                                         | Uses functions and procedures                                              |
| Approach                 | Bottom-up approach                                               | Top-down approach                                                          |
| Code Maintenance         | Easier for large and complex systems                             | Harder as program size grows                                               |
| Examples of Languages    | Java, C++, Python (OOP style)                                    | C, Pascal                                                                  |

## 4 Main Pillars of OOP

### Inheritance

[Inheritance](/oop/inheritance/) in object-oriented programming is a mechanism by which one class (called the subclass or child class) acquires the properties and behaviors (fields and methods) of another class (called the superclass or parent class), allowing for code reuse and hierarchical classification.

### Encapsulation

[Encapsulation](/oop/encapsulation/) is the process of wrapping data and methods into a single unit, usually a class, and restricting direct access to the data. It acts as a protective shield that prevents data from being accessed directly from outside the class.

### Abstraction

[Abstraction](/oop/abstraction) in object-oriented programming is the principle of hiding internal implementation details and exposing only the essential features or functionality of an object.
It allows a user to interact with an object at a high level without needing to understand how it works internally.

### Polymorphism

The word [polymorphism](/oop/polymorphism/) means having many forms, and it comes from the Greek words poly (many) and morph (forms), this means one entity can take many forms. In Java, polymorphism allows the same method or object to behave differently based on the context, specially on the project's actual runtime class.
