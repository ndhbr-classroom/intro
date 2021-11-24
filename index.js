const printName = require('./name');
const prompt = require('prompt-sync')();

function main() {
    // Ask for her/his name
    const name = prompt('Wie ist dein Name? ');

    // print name
    printName(name);
}

// Start App
main();