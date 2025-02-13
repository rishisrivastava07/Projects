// Question No - 1
let button = document.createElement('button');
let input = document.createElement('input');
button.innerText = "Click Me";
document.querySelector('body').append(input);
document.querySelector('body').append(button);

// Question No - 2
input.setAttribute('placeholder','username');
button.setAttribute("id","btn");

// Question No - 3
let btn = document.querySelector('#btn');
btn.classList.add('styling');

// Question No - 4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practise";
h1.classList.add('purple');
document.querySelector('body').append(h1);

// Question No - 5
let p = document.createElement('p');
p.innerText = "Apna College Delta Practise";
p.classList.add('bold');
document.querySelector('body').append(p);