// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

function gitPush() {
    fetch('https://api.github.com/users/salimk785/events', {headers: {'Authorization': 'githubToken'}})
        .then(result => result.json())
        .then(data => console.log(data[0].created_at))
}
gitPush()

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolve) {
                return resolve(num);
            } else {
                return reject('Error!');
            }
        }, num);
    });
}

console.log(wait()); // pending promise

wait(1000).then((num) => console.log(`You\'ll see this after ${num} ms`));
wait(3000).then((num) => console.log(`You\'ll see this after ${num} ms`));
//Douglas Review Code below
// function getLastPushDate(githubUsername) {
//     let url = `https://api.github.com/users/${githubUsername}/events`;
//     let githubResponse = fetch(url, {headers: {'Authorization': `token ${GITHUB_PAT}`}});
//     return githubResponse
//         .then((response)=>{
//             return response.json();
//         })
//         .then((githubEventData)=>{
//             for (let githubEvent of githubEventData) {
//                 if(githubEvent.type === "PushEvent") {
//                     console.log(githubEvent.created_at);
//                     return new Date(githubEvent.created_at);
//                 }
//             }
//         });
// }
//
// getLastPushDate("douglas-codeup")
//     .then((date)=>console.log(date));