"use strict";
// TODO 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let languageOverThree = users.filter(function(user){
    return user.languages.length > 2;
});

console.log(languageOverThree);


//TODO 3. Use .map to create an array of strings where each element is a user's email address

let emails = users.map(function(user){
    return user.email;
});

console.log(emails);

//TODO 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// let exp = users.reduce(function (amountYears, people){
//     return amountYears + people.yearsOfExperience;
// }, 0);
// console.log(exp);
// console.log(exp / users.length);
let totalYears = users.reduce(function(totalYears, user) {
    return totalYears + user.yearsOfExperience;
}, 0)

let averageYears = totalYears / users.length;

console.log(averageYears);
console.log(totalYears);


//TODO 5. Use .reduce to get the longest email from the list of users.
// let longEmail = users.reduce(function(long, people) {
//     if (people.email.length > long.length){
//         long = people.email
//     }
//     return long;
// },'');
// console.log(longEmail)
let longestEmail = users.reduce(function(longestEmail, user){
    if(user.email.length > longestEmail.length){
        longestEmail = user.email;
    }
        return longestEmail;
    }, "")
console.log(longestEmail);


// TODO. 6 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let usernameString = users.reduce(function(accumulator, user){
    return `${accumulator} ${user.name},`;
}, 'instructors are: ').slice(0, -1) + ".";

console.log(usernameString);

let mapJoinSolution = `instructors are: ${users.map(user=>user.name).join(', ')}.`;
console.log(mapJoinSolution);




//TODO: Bonus - Use .reduce to get the unique list of languages from the list of users.
let uniqueLanguage = users.reduce(function (language, people){
    return language.concat(people.languages);

}, []);
console.log(uniqueLanguage);

let filtered = uniqueLanguage.filter(function(lang, index){
    return uniqueLanguage.indexOf(lang) === index;
},[]);
console.log(filtered);