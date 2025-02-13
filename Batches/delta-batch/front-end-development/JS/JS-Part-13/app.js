/**
 * Axios - Library to make HTTP requests
 * axios get data in direct parsed form 
 * fetch mehtod doesn't get the parsed data from api
 */

// let url = "https://catfact.ninja/fact";
// let btn = document.querySelector("#btn1");
// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     let result = document.querySelector("#result");
//     result.innerText = fact;
// });
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//        return "No fact found";
//     }
// }

// let btn2 = document.querySelector("#btn2");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn2.addEventListener("click",async ()=>{
//     let link = await getImages();
//     let result = document.querySelector("#image");
//     result.setAttribute("src",link);
// });
// async function getImages(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(e){
//        return "no image found";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config = {headers : {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }
//     catch(e){
//         console.log("error - ", e);
//     }
// }

/**
 * Axios - Updating Query Strings
 */

let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;

    let colleges = await getColleges(country);
    // console.log(colleges);

    show(colleges);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e){
        console.log("error - ", e);
        return [];
    }
}