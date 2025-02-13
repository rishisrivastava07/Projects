let arr = [1,2,3];

arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total /arr.length;
}

// console.log(arrayAverage(arr));

isEven = (n) => {
    if(n%2 == 0){
        return true;
    }
    return false;
}

// const object = {
//     message: 'Hello, World! ',
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);
let length = 4;
function callback(){
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback){
        callback();
    },
};

object.method(callback,1,2);