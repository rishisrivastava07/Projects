/* 
    DOM - Document Object Model

    The DOM represents a document with a logical tree.
    It allows us to manipulate/change webpage content (HTML elements).
*/

// Selecting Elements - 
// getElementById(#id-name); -> return the element as an object or null

// getElementByClassName(.class-name); -> return the element as an HTML collection or empty collection

// let smallImg = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImg.length; i++){
//     // console.dir(smallImg[i].src);
//     smallImg[i].src = "./assets/mainImg.png";
//     console.log(`The source link of ${i} is changed`); 
// }

// getElementByTagName(tag-name); -> return the element as an HTML collection or empty collection

// document.getElementsByTagName("p")[0].innerText = "abc";

// Query Selectors - allows us to use any CSS selector
// document.querySelector('p');   // selects first p element
// document.querySelector('#myId');   // selects first element with id = myId
// document.querySelectorAll("p");   // selects all p elements


/* 
    Using Properties & Methods -
    i. innerText - shows the visible text contained in a node
    ii. textContent - shows all the full text
    iii. innerHTML - shows the full markup
*/
/* 
    Manipulating Attributes -
    i. obj.getAttribute(attr);
    ii. obj.setAttribute(attr,val);
*/

// let img = document.querySelector('img');
// img.getAttribute('id');  // 'mainImg' changedMainImg
// img.setAttribute('id',"changedMainImg");  // undefined 
// img.getAttribute('id');  // 'changedMainImg'

/* 
    Manipulating Styling -
    i. obj.style.styleProperty = "value";
*/
 
// let heading = document.querySelector('h1');
// heading.style.color = 'red';

// let links = document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color = "purple";
// }

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "green";
// }


/* 
    Manipulating Style - using classList - obj.classList;

    classList.add() - to add new classes
    classList.remove() - to remove classes
    classList.contains() - to check if class exists
    classList.toggle() - to toggle between add & remove
*/

// let heading = document.querySelector('h1');
// heading.classList.add("xyz");
// heading.classList;

/* 
    Navigation Properties -
    i. parentElement
    ii. children
    iii. previousElementSibling / nextElementSibling
*/
// let h4 = document.querySelector('h4');
// console.dir(h4.parentElement);

/* 
    Adding Elements - document.createElement('p');
    i. appendChild(element)
    ii. append(element)
    i. prepend(element)
    i. insertAdjecent(where, element)
*/

// document.createElement('p');
// op - <p>​</p>​
// let newPara = document.createElement('p');
// op - undefined
// console.dir(newPara);
// op - undefined
// newPara.innerText = "Hi, I am a new Para";
// op - 'Hi, I am a new Para'
// newPara.innerText;
// op - 'Hi, I am a new Para'
// console.dir(newPara);
// op - undefined
// let body = document.querySelector('body');
// op - undefined
// body.appendChild(newPara);
// op - <p>​Hi, I am a new Para​</p>​
// console.dir(newPara);



/*
    Practise Questions - Add the following elements to the container using only JavaScript and the DOM methods.

    i) a <p> with red text that says "Hey I'm red!"
    ii) an <h3> with blue text that says "I'm a blue h3!"
    iii) a <div> with a black border and pink background color with the following elements inside of it:
        a.) another <h1> that says "I'm in a div"
        b.) a <p> that says "ME TOO!"
*/

let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);

para1.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
document.querySelector('body').append(h3);

h3.classList.add('green');

let div = document.createElement('div');
document.querySelector('body').append(div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
document.querySelector('div').append(h1);

let p = document.createElement('p');
p.innerText = "ME TOO!";
document.querySelector('div').append(p);

div.classList.add('box');
