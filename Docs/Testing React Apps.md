# Testing React Apps

## Overview

In these exercises, you'll have the opportunity to practice testing React applications, both with and without the React testing library.

## Roadmap

There are six exercises in this section.

1. Test a component without the use of the React testing library.
2. Test the same component with the testing library.
3. Test user events with the testing library.
4. Refactor and use the user-event library.
5. Use the rerender method to make tests more efficient.
6. Test a different component.

## Exercise 1: Test a component without the use of the React testing library

For the first few exercises, you'll be testing a Favourite Number component. Before you start, run `npm run install` and `npm run start` to explore this component.

If you type in anything above 9 or below 1 then this will show an error message. You can see the code for this component in `./components/FavouriteNumber.js`. Notice that the max and min can be overwritten by props.

For this exercise, you are going to test that that correct elements are on the page.

Within the folder `__tests__`, you'll find `exercise1.js`. It has step by step instructions for you to follow. You should write at least one line of code for each instruction.

They are repeated below for your convenience:

```js
  // ✅ Create a containing div with document.createElement and assign to a variable
  // ✅ Render the <FavouriteNumber /> component (with ReactDOM.render) to the div
  // ✅ Use the .querySelector("input") to check that the type is number
  // ✅ Use the .querySelector("label") to check that the textContent is "Favorite Number"
```

## Exercise 2: Test the same component with the testing library

Creating the containing `<div>` and rendering our application to it can be a tedious piece of work. 

Thankfully, the React testing library has a `render` method that handles both of these steps for it.

The library also provides us with a `screen` object that has a number of helpful methods. Use the `getByLabelText` method to capture the input.

Again, there are step by step instructions in the relevant file, `exercise2.js`.

```js
  // ✅ Render the <FavouriteNumber /> component.
  // ✅ Get the input by using the screen.getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Expect the input toHaveAttribute of type number
```

## Exercise 3: Test user events with the testing library

Testing for the presence of elements and their properties is important but more useful is to test interactions.

In this exercise, we'll fire a change event on our input. We'll add a value to the input that should display the error message.

When we use fireEvent, we have to pass the event down in the structure we expect to receive it. Normally we get the value with `event.target.value` - that means we need to pass down our event as `{target: {value: 'some value'}}.

```js
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  // ✅ Get the input by using the screen.getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Use the fireEvent.change method. The first parameter should be the input, the second should be {target: {value: '100'}}
  // ✅ expect screen.getByRole('alert') to have text content /the number is invalid/i
```

## Exercise 4: Refactor and use the user-event library

As a rule, we'd like to write our tests in a way that they reflect our users actions as closely as possible. Our users don't "fire events", they click buttons and type into inputs. 

In this exercise, we'll use the `user-event` library and write the same test as in exercise 3. This time though, instead of using the `fireEvent` property, we'll use `user.type` from the `user-event` library.

In this way, our tests read like a user interaction making them more intuitive and understandable.

```js
  // ✅ Use the render method to render the <FavouriteNumber /> component.
  // ✅ Get the input by using the getByLabelText method, passing in a a regex like /favorite number/i
  // ✅ Use the user.type method. The first parameter should be the input, the second should be the value ('10')
  // ✅ expect getByRole('alert') to have text content /the number is invalid/i
```

## Exercise 5: Use the rerender method to make tests more efficient

Rather than write a whole load of tests, we can re-render our component with different props and test again.

In this exercise, we'll type as before and expect the error. Then, we'll rerender the component and expect the component not to be there.

Note, that we need to use `queryByRole` rather than `getByRole` as it will correctly return `null` if it can't find the result.

```js
  // ✅ Destructure rerender from the render method.
  // ✅ Confirm that if the user types in 10, there will be an error
  // ✅ rerender the <FavoriteNumber max={10} /> with a new max
  // ✅ expect the queryByRole('alert') to be null.
```

## Exercise 6: Test a different component

This last exercise tests a different Counter component. You can see the code in `./components/Counter.js`.

There are instructions to test that the user clicking the buttons will change the state. 

Once you've had a go at this, add as many tests to this exercise as you can to practice the skills we've explored in this section.

You might want to add more `test` blocks into this file.

```js
  // ✅ Use the render method to render the <Counter /> component.
  // ✅ Use screen.getByText to get each button.
  // ✅ Use screen.getByText to get the message
  // ✅ Expect the message to have text content "Current count: 0"
  // ✅ Use user.click to click the increment
  // ✅ Expect the message to have text content "Current count: 1"
  // ✅ Use user.click to click the decrement
  // ✅ Expect the message to have text content "Current count: 0"
```