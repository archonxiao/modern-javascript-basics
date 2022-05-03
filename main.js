'use strict';

const username = {
    name: 'archonxiao',
    email: 'archonxiao@test.com'
};

username.name = 'archon';
username.email = 'archonxiao@test.com';

// const init = () => {
//     document.getElementById('output').innerHTML = `${username.name} (${username.email})`;
// }

// const nameString = () => `${username.name} (${username.email})`;

// document.getElementById('output').innerHTML = nameString();

// let users = [
//     {
//         name: 'Andrew',
//         email: 'andrew@example.com'
//     },
//     {
//         name: 'Asheley',
//         email: 'ashley@example.com'
//     }
// ];

// let names = [];

// users.forEach(user => names.push(user.name));

// document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', function() {
    
    const getDetails = () => `The button id is ${this.getAttribute('id')}`;

    document.getElementById('output').innerHTML = getDetails();

});