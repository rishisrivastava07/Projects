/*
    Loops - used to iterate a piece of code
        for(initialisation; condition; updation){
            //do something
        }
*/
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// console.log("Print all odd numbers (1 to 15 : ");
// for(let i = 1; i <= 15; i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }

// console.log("Print all even numbers (2 to 10 : ");
// for(let i = 2; i <= 10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// Activity - 1
// const favMovie = "avengers";
// let guess = prompt("guess my favourite movie : ");

// while(favMovie != guess){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess. please try again");
// }

// if(guess == favMovie){
//     console.log("congrats !")
// }

// Loops in Arrays - 

// let fruits = ["banana", "mango", "apple", "litchi", "orange"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(i,fruits[i]);
// }


/* 
    for of loop - 
        for(element of collection){
            // do something
        }
*/
// let fruits = ["banana", "mango", "apple", "litchi", "orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

let heros = [["ironman","spiderman","thor"], ["superman","wonder women","flash"]];

for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}