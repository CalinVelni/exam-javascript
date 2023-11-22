const userName = prompt(`What's your name?`);

const year = Number(prompt(`What year were you born?`));

const yearCheck = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 == 0) ? `were` : `weren't`; 

console.log(`Hi ${userName}, you ${yearCheck} born in a leap year.`);