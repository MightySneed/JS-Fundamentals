// Grid Excercise ****
for (let i = 1; i < 9; i++)
{
    if (i%3 == 0) {
        console.log("-------------")
    } else {
        console.log("    ¦   ¦    ")
    }
}


//Activity 1 With Stretch. Haven't been sure how to make it shorter ****



let name = 'Chris';
let age = '39';
let colour = 'Yellow';

console.log(`This bloke - ${name}, is ${age} and likes the colour ${colour}. \n`)

name = 'Mike';
age = '19';
colour = 'Magenta';

console.log(`This bloke - ${name}, is ${age} and likes the colour ${colour}. \n`

)


// Activity 2: Breakfast Lunch and Dinner ****



let brekkie = "Scrabled eggs"
let lunch = "Fried eggs"
let dinner = "Poached eggs"

let meals = [brekkie, lunch, dinner]
console.log("Today".toUpperCase());
console.log( `Breakfast: ${meals[0]} \n Lunch: ${meals[1]} \n Dinner ${meals[2]} \n \n`)

brekkie = "Boiled Eggs"
lunch = "Ostrich Egg"
dinner = "Eggs Benedict"
meals = [brekkie, lunch, dinner]

console.log("Tomorrow".toUpperCase());
console.log( `Breakfast: ${meals[0]} \n Lunch: ${meals[1]} \n Dinner ${meals[2]} \n \n`)

//Activity 3 Calendar: ****




let today = new Date()
let birthday = new Date(2024,04,29,17,04,12).getTime();
let nextyear = new Date(today.getFullYear() +1,0,1).getTime();

// Organizes dates


start = new Date(today.getFullYear(),0,0).getTime();
let oneDay = 1000 * 60 * 60 * 24;


function DayOfTheYear(x) {
    let dynadiff = x - start;
    return Math.floor(dynadiff/oneDay)
}

function LeftInTheYear(x) {
    let dynadiff = nextyear - x;
    return Math.floor(dynadiff/oneDay)
}


let toyourbday = (DayOfTheYear(birthday) - DayOfTheYear(today))
let toyournextbday = (LeftInTheYear(today) + DayOfTheYear(birthday))

if (toyourbday>0){
    console.log("Days remaining to your birthday:" + toyourbday)
} else {
    console.log("Days remaining to your birthday:" + toyournextbday)
}

// I think it adds a day for some reason

// Activity 4 TicTacToe: ****

let variableA1 = "o";
let variableA2 = "x";
let variableA3 = "o";
let variableB1 = "o";
let variableB2 = "o";
let variableB3 = "x";
let variableC1 = "x";
let variableC2 = "x";
let variableC3 = "o";

let values = [variableA1, variableA2, variableA3, variableB1, variableB2, variableB3, variableC1, variableC2, variableC3];



let j = 0
for (let i= 0;i < 5; i++)
    {
        if (i%2 == 1) {
            console.log("------------")
        
        } 
        else if (i%2 == 0) {
            
            console.log(` ${values[j]} ¦ ${values[j+1]} ¦ ${values[j+2]} `) 
        
            j = j+3;
        }
    }

// Else / Switch activity 1: Age variable

let howold = 19999
let country = "UK"



if ((howold > 17) && (country == "UK")) {
    console.log("Sure, here's your bevvy.");
} else if ((howold > 11) && (country == "Russia")) {
    console.log("Sure Tavarisch, here's your vodka!");
} else {
    console.log("Good try! Here's your orange juice.");
}

// Activity 2

topping =  "ham"
switch (topping) {
    case "peperoni":
    case "ham":
    case "bacon":
    case "garlic":
    case "olives":
        console.log(`${topping}!? That's some gourmet topping!`)
        break;
    case "four cheeses":
    case "veg":
    case "pineapple":
    case "anchovies":
        console.log(`I don't mind having ${topping} on my pizza.`)
        break;
    default: console.log(`${topping} on a pizza is food gore`)
}


// Activity 3 - Passwords 


let password = "admin13"
let length = password.length

if (length >= 8) {
    console.log("Jolly good that!");
} else {
    console.log("Make that password longer!");
}
// divisable - tried cases before but didn't work for some reason
let num = 7
if ((num%3 === 0) || (num%5 === 0)) {
        console.log("This number is divisable by 3 or 5.");
    } else {console.log("Whatever, really.")
}

//Activity 4

let digit = 9
if ((digit % 3 == 0) && (digit % 5 == 0)) {
    console.log("Fizz Buzz");
} else if (digit % 3 == 0) {
    console.log("Fizz");
} else if (digit % 5 == 0) {
    console.log("Buzz");
} else {
    console.log(digit);
}

//Activity 5: palindrome
let pali = 123201


function reverse(pali) {
    let stringed = pali.toString()
    let reversed = stringed.split('').reverse().join('');
    return parseInt(reversed, 10)
}


if (pali == reverse(pali)) {
    console.log(`${pali} backwards in ${reverse(pali)}, so it's a palindrome`);
} else {
    console.log("Nuh, uh fam.")
}