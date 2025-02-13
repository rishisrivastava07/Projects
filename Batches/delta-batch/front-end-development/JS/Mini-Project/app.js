// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

/* 
    event.stopPropagation() - 
    it is used to stop the Bubbling effect
    Bubbling effect - is when any child event listener is triggered then it automatically triggers outer parent listeners.
*/
/*
div.addEventListener("click",function(){
    console.log("DIV was clicked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("UL was clicked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("LI was clicked");
    });
}
*/

// Activity - ToDo App
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(event){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("del");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});


// let delBtns = document.querySelectorAll(".del");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

/*
    Event Delegation - is a phenomena in which we use bubbling effect technology.
*/

ul.addEventListener("click",function(event){
    // event.target - who trigger this event
    // console.dir(event.target);
    // console.dir(event.target.nodeName);
    // console.log("button clicked");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});