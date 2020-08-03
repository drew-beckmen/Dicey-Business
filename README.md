# Dicey Business

This lab will combine principles of HTML, CSS, JavaScript, Accessing/Creating/Modifying HTML elements, and Object Oriented Programming.

Demo of My App: 
![Demo](dicey-business.gif)

## General Requirements: 
- You must use OOP. Create a class named Die that represents a single die.
- Your class must have a property named value.
- Your class must have a method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
- When a new Die is created, it should automatically create a div, call its roll method, and put the div on the screen
- You can use either the DOM or JQuery, but please be consistent and stick with one.

## Additional Features: 

I implemented the following additional features:

- Create a sumDice function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
- Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
- Add a feature where double clicking on a die on the page causes that die to be removed from the page