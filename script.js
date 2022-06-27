async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
/*------------------------------------------------------------------------------------------------------ */
// TESTESTESTESTE - jra

let users = [];

setURL('http://patrick-heusinger.developerakademie.net/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];

    console.log('users')
}

async function addUser() {
    users.push('John');
    await backend.setItem('users', JSON.stringify(users));
}

function deleteUser(name) {
    backend.deleteItem('users');
}
