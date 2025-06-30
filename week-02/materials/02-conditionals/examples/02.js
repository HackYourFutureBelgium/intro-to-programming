'use strict';

/*
📘 JavaScript Switch Statement – Examples

The `switch` statement is used to perform different actions 
based on different possible values of a variable.

It's often cleaner than using multiple `if...else if...` checks.

When to use `switch` statement?
- If you're comparing one value to many fixed options → use switch.
- If you're doing anything else (ranges, conditions, multiple values) → use if...else.
*/

// 🔹 Example 1: Day of the Week
let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start of the work week.');
        break;
    case 'Wednesday':
        console.log('Midweek hustle.');
        break;
    case 'Friday':
        console.log('Weekend is almost here!');
        break;
    default:
        console.log('Just another day.');
        break;
}

// 🔹 Example 2: Grade to Message
let grade = 'B';

switch (grade) {
    case 'A':
        console.log('Excellent!');
        break;
    case 'B':
        console.log('Good job!');
        break;
    case 'C':
        console.log('You passed.');
        break;
    case 'F':
        console.log('Try again.');
        break;
    default:
        console.log('Invalid grade.');
}

// 🔹 Example 3: Multiple cases for same result
let fruit = 'apple';

switch (fruit) {
    case 'apple':
    case 'pear':
    case 'plum':
        console.log('This is a pome fruit.');
        break;
    case 'orange':
    case 'lemon':
        console.log('This is a citrus fruit.');
        break;
    default:
        console.log('Unknown fruit type.');
}

/*
💡 Summary:
- Use `switch(variable)` to test a value against multiple `case` values.
- Use `break` to exit the switch block after a match.
- Use `default` to handle all other cases.
- You can group multiple cases together if they share the same output.
*/
