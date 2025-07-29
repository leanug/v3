---
author: Leandro Ubilla
avatar: leandro-profile.png
image: placeholder.svg
title: Mastering Next.js Form Handling
description: Dive into Next.js form handling! Learn about HTML validation, handling input resets with useActionState, and implementing server-side validation efficiently.
date: 2025-01-17
tags: ["Next.js", "Forms", "Web Development"]
slug: mastering-nextjs-form-handling
published: false
featured: false
---

Let's explore how to handle form management in Next.js, from HTML form validation to managing input resets with useActionState, and efficiently implementing server-side validations.

## HTML Form Validation

To begin, we'll look at how we can validate forms using HTML validation, which is a straightforward way to ensure form inputs meet certain criteria without needing JavaScript.

But first, let's start with the Next.js home page. In /src/page.tsx, we have the following code:

```jsx
import FeedbackForm from "@/components/feedback-form";

export default function Home() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-yellow-400">
      <div className="max-w-lg w-full p-6 shadow-md rounded-xl bg-white">
        <h1 className="text-2xl font-bold mb-4">Feedback</h1>
        <FeedbackForm />
      </div>
    </section>
  );
}
```

In the /src/components directory, create a new file named feedback-form.tsx:

```jsx
'use client'

import React, { useActionState, useEffect } from 'react';
import { createFeedbackAction } from '@/actions/create-feedback-action';
import { FeedbackState } from '@/types';
import toast from 'react-hot-toast';

const initialState:FeedbackState = {
  message: '',
  success: false
}
 
function FeedbackForm() {
  const [state, formAction, isPending] = useActionState(createFeedbackAction, initialState)

  useEffect(() => {
    if (!isPending && state?.message) {
      if (state.success) {
        toast.success(state.message, {
          position: 'top-center',
          duration: 4000,
        });
      } else {
        toast.error(state.message, {
          position: 'top-center',
          duration: 4000,
        });
      }
    }
  }, [isPending, state.message, state.success]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={state.formValues?.email || ''}
          className={`input input-bordered w-full`}
          minLength={4}
          maxLength={50}
        />
        {state?.errors?.email && (
          <span className="text-red-500 text-sm mt-1">
            {state?.errors.email[0]}
          </span>
        )}
      </div>

      <div className="form-control mt-4">
        <label htmlFor="text" className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="text"
          name="text"
          defaultValue={state.formValues?.text || ''}
          rows={4}
          className="textarea textarea-bordered w-full"
          minLength={4}
          maxLength={1000}
        ></textarea>
        {state?.errors?.text && (
          <span className="text-red-500 text-sm mt-1">
            {state?.errors.text[0]}
          </span>
        )}
      </div>
      <button
        className="btn btn-neutral w-full mt-4"
        disabled={isPending}
      >
        {isPending ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
```

### Form Component Breakdown: HTML Validation, useEffect, and useActionState

Here’s a detailed look at how the FeedbackForm component manages form handling using HTML validation, useEffect, and useActionState.

Initial State Definition
The initialState object sets the baseline for feedback messaging and success status:

```jsx
const initialState:FeedbackState = {
  message: '',
  success: false
}
```

Form State Management with useActionState
The useActionState hook manages the form's state and actions:

```jsx
const [state, formAction, isPending] = useActionState(createFeedbackAction, initialState)
```

This hook helps control the form submission process, tracking whether a submission is pending and updating the state accordingly.

Feedback Display with useEffect
The useEffect hook monitors the isPending status and the state object to display success or error messages:

```jsx
useEffect(() => {
  if (!isPending && state?.message) {
    if (state.success) {
      toast.success(state.message, {
        position: 'top-center',
        duration: 4000,
      });
    } else {
      toast.error(state.message, {
        position: 'top-center',
        duration: 4000,
      });
    }
  }
}, [isPending, state.message, state.success]);

export default FeedbackForm
```

This ensures that users are notified of the outcome after form submission.

### Input Fields with HTML Validation
The input fields incorporate basic HTML validation rules using attributes like minLength and maxLength

```jsx
<input
  id="email"
  name="email"
  type="email"
  defaultValue={state.formValues?.email || ''}
  className="input input-bordered w-full"
  minLength={4}
  maxLength={50}
/>
```

These attributes validate the inputs before the form is submitted.

Error Handling for Inputs
Errors are displayed beneath each input field when validation fails:

```jsx
{state?.errors?.email && (
  <span className="text-red-500 text-sm mt-1">
    {state?.errors.email[0]}
  </span>
)}
```

The component checks for errors in the state and renders them if present.

Submit Button Behavior
The submit button dynamically reflects the form’s pending state:

```jsx
<button
  className="btn btn-neutral w-full mt-4"
  disabled={isPending}
>
  {isPending ? 'Sending...' : 'Send'}
</button>
```

When the form is pending, the button displays “Sending…” to indicate the submission process.

This breakdown showcases how each part of the FeedbackForm component works together to create a smooth form handling experience, leveraging both client-side validation and feedback mechanisms.

## sendFeedbackAction server action

Within the /src/actions directory, create a new file named send-feedback-action.ts:

```jsx
'use server'

import { z } from 'zod' 
import { connectDB } from "@/utils/connectDB"
import { FeedbackData, FeedbackState } from '@/types'
import { getErrorMessage } from '@/utils/error'
import Feedback from "@/models/feedback";

export async function createFeedbackAction(prevState: FeedbackState, formData: FormData) {
  const schema = z.object({
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .nonempty({ message: 'Email is required' })
      .max(50, { message: 'Email should be at most 50 characters long' }),
    text: z
      .string()
      .min(4, { message: 'Message should be at least 4 characters long' })
      .nonempty({ message: 'Message is required' })
      .max(1000, { message: 'Message should be at most 500 characters long' }),
  })
  
  try {
    const sourceData: FeedbackData = {
      email: formData.get('email') as string,
      text: formData.get('text') as string,
    }

    const validatedFields = schema.safeParse(sourceData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid fields',
        errors: validatedFields.error.flatten().fieldErrors,
        formValues: sourceData
      };
    }
    
    await connectDB()

    await Feedback.create(
      validatedFields.data
    )

    return {
      success: true, 
      message: 'New feedback created' 
    }
  } catch (error) {
    console.error("Error sending feedback:", getErrorMessage(error));
    return {
      success: false, 
      message: `We couldn't process your feedback. Please try again later.`
    }
  }
}
```

### sendFeedbackAction Breakdown: Zod Schema Validation and Database Interaction

The createFeedbackAction function handles form validation and database interactions using Zod schemas and MongoDB.

As you can see, we extract the error message from the catch block and return a generic error message to the user.

getErrorMessage(error) is a utility function that extracts the error message from the error object.

This error is of type unknown by default, it can be a string or an object, so we need to check if it's an object and extract the message property.

```jsx
export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'An unknown error occurred';
  }

  return message;
}
```

Now you can log the error message to the console, send it to your error tracking service, save it to MongoDB, or handle it in any way you prefer, while returning a user-friendly message to the user.

## Conclusion

In this post, we explored Next.js form handling, covering HTML validation, input resets with useActionState, and efficient server-side validation.