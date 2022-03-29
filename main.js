'use strict';

const username = {
    name: 'archonxiao',
    email: 'archonxiao@test.com'
};

username.name = 'archon';
username.email = 'archonxiao@test.com';

function init() {
    // if (true) {
    //     var email = 'archonxiao@test.com';
    //     let email = 'archonxiao@test.com';
    //     document.getElementById('output').innerHTML = email;
    // }

    document.getElementById('output').innerHTML = `${username.name} (${username.email})`;
}

init();