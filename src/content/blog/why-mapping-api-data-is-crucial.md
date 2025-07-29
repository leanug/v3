---
author: Leandro Ubilla
avatar: leandro-profile.png
image: cover.webp
title: Why Mapping API Data is Crucial for Web Development
description: This post walks you through a basic mapping function that will streamline your data handling.
date: 2024-05-10
tags: ["JavaScript"]
slug: why-mapping-api-data-is-crucial
published: true
featured: true
---

Mapping data from an API is an essential step for several reasons, 
especially when you're dealing with web development and interacting 
with third-party services. Here's why:

## 1. Clean and Consistent Data Structure

Here's the deal: When you're pulling data from an API, it's not always in the format you need.

Sometimes, APIs return bloated, nested objects with way more information than you care about. 

That's where mapping comes in. 

For instance, let's look at some user data from [https://fakestoreapi.com/](https://fakestoreapi.com/)

We are gonna get some user data, but mapped it in a way that some of the user data gets lefted out.

When you hit this endpoint https://fakestoreapi.com/users you get a list of users with all sorts of info. 
Here's an example of one user object:

```js showLineNumbers
[
   {
      "address": {
         "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
         },
         "city": "kilcoole",
         "street": "new road",
         "number": 7682,
         "zipcode": "12926-3874"
      },
      "id": 1,
      "email": "john@gmail.com",
      "username": "johnd",
      "password": "m38rmF$",
      "name": {
         "firstname": "john",
         "lastname": "doe"
      },
      "phone": "1-570-236-7033",
      "__v": 0
   }
]
```

Let's define the type of the user

```js showLineNumbers
type User = {
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
};
```

And this is the type for the filtered user. ***USE TYPESCRIPT*** 👈

```js showLineNumbers
type FilteredUser = {
  id: string;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
};
```

This is the function for mapping the user data

```js showLineNumbers
// Function to filter out unwanted fields
function filterUserData(users: User[]): FilteredUser[] {
  return users.map(({ id, email, username, name, address }) => ({
    id: '' + id, // number to string
    email,
    username,
    name: {
      firstname: name.firstname,
      lastname: name.lastname,
    },
    address: {
      city: address.city,
      street: address.street,
      zipcode: address.zipcode,
    },
  }));
}
```

## 2. Decoupling

Sometimes, APIs change.

When that happens, do you want to rewrite your entire app? Nope.

With mapped data, you're decoupling your app from the API. 

If the API response changes, you just tweak your mapping logic instead of ripping apart 
your whole codebase.

**Save yourself from a world of pain.**

![You are entering a world of pain - Walter - The big lebowsky](/blog/01-why-mapping-api-data-is-crucial/world-of-pain-walter-min.png)

If the API changes its response structure or fields, you can adjust the mapping 
logic rather than **refactoring the entire app**.

## 3. Performance

More data = more problems. 

By mapping your data, you cut down on the size of the payload you're passing around. 

This boosts performance and makes your app faster.

Instead of dragging around unnecessary fields, just map what you need.

## 4. Error Handling: Catch Errors Before They Wreak Havoc

When mapping, you can intercept missing fields or errors in the API response. 

That way, you can fix them before they break your app and ruin the user experience.