let rep = 1;

while(rep <= 10){
    console.log(`While: Lifting weights repetition ${rep} `);
    rep = rep + 1;
}

console.log(`\n`)

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(`Welcome to the dice game!`)

while(dice !== 6){
    console.log(`Your random dice 🎲 number is: ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6 ){
        console.log(`Loop is about to end...`);

    }
}