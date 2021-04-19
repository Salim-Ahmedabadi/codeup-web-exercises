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
