/* 
    Dom Events - events are signals that something has occured. (User inputs/actions).
    onClick(when an element is clicked) - it is only possible for single function execution.(doesnot perform multiple functions).
    onmouseenter(when mouse enters an element)
*/

// let btn = document.querySelector('button');

// btn.onclick = function(){
//     console.log("button was clicked");
// }

// function sayHello() {
//     alert("Hello");
// }
// function sayName() {
//     alert("Hi Rishi");
// }

// btn.onclick = sayHello;

// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("You entered in button range");
//     }
// }

/* 
    Event Listeners - addEventListener()
    element.addEventListener(event,callback)
*/

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked");
//     });
// }


// let para = document.querySelector("p");
// para.addEventListener('click',function(){
//     console.log("para clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// });


/* 
    this in Event Listeners - 
    when "this" is used in a callback of event handler of something, 
    it refers to that something.

    advantages - when for multiple types of objects we use single event
    listener. To avoid redundancy.
*/
   
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// h1.addEventListener("click",function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// h3.addEventListener("click",function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// p.addEventListener("click",function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// btn.addEventListener("click",function(){
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

/* 
    Keyboard Events - 
    events - 
        i. code - ek particular key ka code return krta hai
        ii. key - yeh hume btati hai ki screen pr print
                 hokr kaun si key visible hai.
*/

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     // console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown",function(event){
//     console.log("key = " ,event.key);
//     console.log("code = ",event.code);
//     console.log("key was pressed");
// });
// input.addEventListener("keyup",function(){
//     console.log("key was released");
// });

/*
input.addEventListener("keydown",function(event){
    console.log("code = ",event.code); // ArrowUp, ArrowDown, ArrowRight, ArrowLeft
    if(event.code == "ArrowUp"){
        console.log("character moved forward");
    }else if(event.code == "ArrowDown"){
        console.log("character moved backward");
    }else if(event.code == "ArrowRight"){
        console.log("character moved right");
    }else if(event.code == "ArrowLeft"){
        console.log("character moved left");
    }else{
        console.log("Wrong input");
    }
});
*/

/*
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    // to prevent the default action which is set by in form tag i.e. to redirect to another page.
    event.preventDefault();
    // alert("form submitted");
    // console.dir(form);

    let user = this.elements[0];
    let pass = this.elements[1];

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
*/

// let user = document.querySelector("#user");
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     // to prevent the default action which is set by in form tag i.e. to redirect to another page.
//     event.preventDefault();
// });
// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value = ", this.value);
// });


let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
});