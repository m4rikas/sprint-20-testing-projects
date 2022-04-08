# Testing JavaScript Code

## Overview

In this section, you'll test a number of JavaScript functions with the Jest library. Among other things, you'll test the "happy path" (it works as expected) and the "unhappy path" (it throws errors as expected).

You'll use various matchers and comparisons provided by the Jest library.

There are three functions that we'll test. The first is a simple adding function, the second a more useful getSingularOrPlural function and the last a filter function for an array.

## Roadmap

There are five exercises in this section. The first three are shorter, the remaining two more in depth.

1. Test the happy path of a function.
2. Test the happy path with more unusual values.
3. Test the unhappy path.
4. More fully test a function.
5. Test a function with array values.


## Exercise 1: Test the happy path of a function

We are going to be testing the `add.js` function in this exercise (and the next two). We're using the CommonJS syntax of `module.exports` at the bottom of our code and `require()` at the top of our test code.

For this exercise, we're simply testing if the add function works with two values. This could be done in a single line of code of multiple lines. It is up to you how you do this.

Complete the first test in `add.test.js`. Run `npm install` and `npm run test` to confirm that you have got it right.


## Exercise 2: Test the happy path with more unusual values

This is identical to Exercise 1, except we'll have at least one of the values as being a negative. You could have these tests together or seperately.

Run `npm run test` to confirm your test passes.


## Exercise 3: Test the unhappy path

When we want to test if a function throws, we have to `expect()` and arrow function that calls our target function.

```js
test("failing function", () => expect(() => targetFunction()).toThrowError())

```

 If we don't structure our test like this then the target function will throw and crash our test. Written in this way, the error will be captured by Jest.


# Exercise 4: More fully test a function

In this exercise we are going to test the `singularOrPlural.js` function. This function will take a number, the singular and the plural value.

You'll test it works for 0, 1, and larger numbers.

You'll test it fails if there is a non-number for the first value.

There are a number of tests in `singularOrPlural.test.js` to complete. Work through these and run `npm run test` to check as you go.

# Exercise 5: Test a function with array values

We're going to test the `filterBiggest.js` function. This function takes an array of values and a minimum. It will filter out all values that are less than or equal to the minimum.

As in exercise 4, there are a number of tests for you to complete. As you work through these you can run `npm run test` to check your progress.

Remember, we can't use `.toBe` for arrays as two arrays with the same values are not `===` in JS.

To test this we should follow a pattern like:

```js
const testData = [1,2,3,4,5]
const got = // run test function (setting min to 4)
const want = [5]
const rejected = [1, 2, 3, 4]

want.forEach(value => expect(got).toContain(value))
rejected.forEach(value => expect(got).not.toContain(value))
```