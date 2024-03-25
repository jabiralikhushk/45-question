// Task 31
// no users : add an if test to exercise 28 to make sore the list of user has not empty
// . if the list is empty, print the message we need to find some users !
// . remove all the user name from your array, and make sure the correct message is printed 
//   let users :string [] = ["eric", "ali", "ahmed", "admain"];
//   if (users.length === 0) {
//     console.log("we need to find some users!");
// }
// else {
//     for (let user of users) {
//      if (user === "admain") {
//         console.log("hello admain, would you like to see a status report?")
//      }  else {
//         console.log(`hello ${user}, thank you for loging in again`)
//      }
//     } 
// }
//  users = []
//  if (users.length === 0) {
//      console.log("we need to find some user!")
//  }
//Task 32
// checking the username the following to create a program that simulates how website insure that everyone has unique username.
// . make a list of five or more username called current_users.
// . make another list of  five user name called new_users. make sure one are two of new username are also in the current_users 
// list 
// . loop through the new_user list to see if each new username have already been used. if it has, print a message that the person 
// will need to enter a new username. if a user name has not been used, print a message saying that the username is available
// let current_users : string [] = ["admain","ali","ahmed"]
// let new_users : string [] = ["admain","ali","shahmeer","noor"]
// let current_users_lower : string [] = current_users.map(user => user.toLowerCase())
// for (let new_user of new_users) {
//  if (current_users_lower.includes (new_user.toLowerCase()))
// {
//  console.log(`sorry ${new_users}, that name is taken`) 
//  } else {
//     console.log(`yes ${new_user}, is still in available list `)
//  }
//      }
// Task 33
// ordinal Numbers: ordinal number indicate their position in array, such as 1st or 2nd. most ordinal numbers end in the, except
// 1,2, and 3. 
//store the number 1 through 9 in a array.
// loop through the array. use an if.else chain inside the loop to parent the proper ordinal ending for each number. your output
//should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", in each result should be a seprate line 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log("".concat(numbers, "st"));
    }
    else if (number === 2) {
        console.log("".concat(numbers, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(numbers, "rd"));
    }
    else {
        console.log("".concat(numbers, "th"));
    }
}
