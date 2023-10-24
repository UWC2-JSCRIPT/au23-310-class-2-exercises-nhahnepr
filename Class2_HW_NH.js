/* 1. Create an object representation of yourself. Should include:
firstName
lastName
'favorite food'
bestFriend (object with the same 3 properties as above)
*/
const noelHahn = {
    firstName: 'Noel',
    lastName: 'Hahn',
    'favorite food': 'stew',
    bestFriend: {
        firstName: 'Bob',
        lastName: 'Smith',
        'favorite food': 'chicken'
    }
};

// 2. console.log best friend's firstName and your favorite food
console.log(noelHahn.bestFriend.firstName);
console.log(noelHahn['favorite food']);

// 3. Create an array  to represent this tic-tac-toe board
const array = [
    ['-', 'o', '-'],
    ['-', 'x', 'o'],
    ['x', '-', 'x'],    
];

// 4. After the array is created, O claims the top right square. Update that value.
console.log(array[0][2]);
array[0][2] = 'o';

// 5. Log the grid to the console.
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

/* 6. You are given an email as string myEmail, make sure it is in correct email format.
Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace.
i.e. "foo@bar.baz" is a good email, "brett@ mall" is not.
*/
const myEmail = 'foo@bar.baz';
const badEmail = 'brett@ mall';
// the regular expression
const testExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
// test to see if it each email matches
const testEmail = myEmail.match(testExp);
console.log(testEmail);
const testBad = badEmail.match(testExp);
console.log(testBad);

// 7. You are given an assignmentDate as a string in the format "month/day/year", i.e. '1/21/2019'.  Convert this string to a Date
const assignmentDate = '1/21/2019';
console.log(typeof assignmentDate)
// Splitting the different parts of the string by '/'
let dateParts = assignmentDate.split('/');
console.log(dateParts);
// Creating the date
let newDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
console.log(newDate);
console.log(newDate.toDateString());

// 8. Create a new Date instance to represent the dueDate.  This will be exactly 7 days after the assignment date.
// Added 7 days to the date
newDate.setDate(newDate.getDate() + 7);
console.log(newDate);
console.log(typeof newDate);
let dueDate = newDate.toDateString();
console.log(dueDate);
// Extracting just the date
let onlyDueDate = newDate.toLocaleDateString();
console.log(onlyDueDate);
// Splitting the different parts of the date string by '/'
let onlyDueDateParts = onlyDueDate.split('/');
console.log(onlyDueDateParts);

// 9. Use dueDate values to create an HTML time tag in format: '<time datetime="2018-01-14">January 14, 2018</time>'
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
index = onlyDueDateParts[0]-1;
monthDate = `${months[index]}`;
let htmlDate = `<time datetime = "${onlyDueDateParts[2]}-${monthDate}-${onlyDueDateParts[1]}">${monthDate} ${onlyDueDateParts[1]}, ${onlyDueDateParts[2]}</time>`

// 10. Log this to the console
console.log(htmlDate);