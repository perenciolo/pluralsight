'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers_set = "0123456789";
    let numbers = 0;
    const lower_case_set = "abcdefghijklmnopqrstuvwxyz";
    let lower_case = 0;
    const upper_case_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let upper_case = 0;
    const special_characters_set = "!@#$%^&*()-+";
    let special_characters = 0;
    let to_strong = 0;
    for(let i = 0; i < password.length; i++){
        if(numbers_set.indexOf(password[i]) !== -1){
            numbers++;
        }
        if(lower_case_set.indexOf(password[i]) !== -1){
            lower_case++;
        }
        if(upper_case_set.indexOf(password[i]) !== -1){
            upper_case++;
        }
        if(special_characters_set.indexOf(password[i]) !== -1){
            special_characters++;
        }
    }
    
    if(numbers === 0){
        to_strong++;
    }else if(lower_case){
        to_strong++;
    }else if(upper_case){
        to_strong++;
    }else if(special_characters){
        to_strong++;
    }
    
    if(password.length + to_strong < 6){
        const missing = 6 - password.length;
        const total = missing + to_strong;
        if(total > missing){
            let y = total - missing;
            
            while(y < missing){
                y++
            }
            return y;
        }
    }
    
    return to_strong;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}

