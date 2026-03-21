---
title: Inheritance in Java
description: This page covers the basics of inheritance in java
---

Inheritance is one of the 4 pillars of object oriented programming. Using the concept of inheritance,
a child class can inherit the properties and behaviour of a parent class(base class).

---

![A simple inheritance example](../../../assets/inheritance-example.svg)

```java
public class Animal {
    int age;
    String name;
    public void eat() {
        System.out.println("The animal is eating....");
    }
}

// Here Dog is the child class and Animal is the parent class.
public class Dog extends Animal {
    public void bark() {
        System.out.println("Dog in barking...");
    }
}

```
:::note
In the above example:

`Dog`(child) and `Animal`(parent) are classes

`age` and `name` are properties of the `Animal` class

`eat` is a method of the `Animal` class

`bark` is a method of the `Dog` class
:::

