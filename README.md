# Lotide
This is a library of functions that was inspired by the Lodash [Lodash](https://lodash.com) library - a utility library for JavaScript.

---
## Purpose

**WARNING: This library is for learning purposes only. It is not intended for use in production-grade software.**

These Javascript functions are exercises to learn the fundamentals of programming and data manipulation of arrays and objects. This is accomplished with iteration, callbacks, and recursion, and working with automated unit testing principles and libraries.  

Regarding testing, initially independant testing functions were created (see archiveTestingCode folder for details). Eventually industry standard frameworks and libraries like *Mocha* and *Chai* were used.  

Finially, this library was used to learn about software dependancies, package management, and *NPM*.  

---
## Usage
**Installation:**
`npm i @jmelnikel/lotide`

**Requiring:**
`const _ = require('@jmelnikel/lotide');`

**Calling:**
`const results = _.tail([1, 2, 3]) // => [2, 3]`

**Testing**
`npm test`

---
## Documentation

The following functions are currently implemented with their corresponding tests in the `test` folder:
* `countLetters()`: This function will take in a string and count the occurance of each letter as an object.
* `countOnly()`: This function will be given and array of various items and an object that will indicate which items the function needs to work with (using a boolean). It will return an object containing counts of everything that the input object listed.
* `eqArrays()`: This function will take two arrays (with nesting) and compares them and will return true or false based on if they are equal to eachother. The equality is not just in content, but order and index position of the elements.
* `eqObjects()`: This function will take two objects (with nesting) and compares them and will return true or false based on if they are equal to eachother.
* `findKey()`: This function takes an object and callback function. It will return the first key for which the callback fucnction returns a truthy value.
* `findKeyByValue()`: This function,given an object and a value, will return the key of that given value from the object.
* `flatten()`: This function takes in an array of arrays and returns a one-level array with all the elements. This function only handles one level of nesting.
* `head()`: This function will take the first item of an array and return the value (not in an array).
* `letterPosition()`: This function, when given a string, will return an object of the indexes of all the letters.
* `map()`: This function will take in an array and a callback function to act on that array. It will then return the affected array.
* `middle()`: This function will take an array and return an array with the middle element or elements if the middle falls between two items. For arrays with one or two elements, return an empty array.
* `tail()`: This function will take the tail of an array (everything except the first element) and return a new array of those elements.
* `takeUntil()`: This function takes in an array and callback function. It will return a portion from the array starting from the begining until a specified element via the callback function.
* `without()`: This function takes in a source array and an itemsToRemove array and will return an array with only those elements in the source array that are not present in the itemsToRemove array. This function will not take in nested arrays or arrays of objects.