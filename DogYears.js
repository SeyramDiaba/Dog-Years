// Human age
let myAge = 25;

// Dogs early years
let earlyYears = 2;

// First two years of a dog’s life count as 10.5
earlyYears *= 10.5;

// Since we already accounted for early we subtract 2 from human age
let laterYears = myAge - 2;

// The number of dog years accounted for by your later years
laterYears *= 4;

// Log earlyYears and laterYears to the console
console.log(`Early years: ${earlyYears}`);
console.log(`Later years: ${laterYears}`);

// Human age in Dog years
let myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string and store the result in a variable called myName.
let myName = 'Seyram'.toLowerCase();

// Summary using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)





