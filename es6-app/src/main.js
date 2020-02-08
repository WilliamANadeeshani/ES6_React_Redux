"use strict"

let name = "Nadeeshani";

let template = `<h1> ${name} </h1>`
document.getElementById("h1").innerHTML = template;

let defaultParamTEsting = function ($text = "hello world") {
    console.log($text);
};

defaultParamTEsting();

let add =  (a, b) => {
    console.log(a+b);
};

add(1,2);

// promises
let myPromise = Promise.resolve("Hello");

myPromise.then((res) => console.log(res))

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 3000)
});

promise.then((res, rej) => {
    console.log(res + 5);
});

//yield
function *generator (x){
    console.log(x**2);
    yield '1 ran';
    console.log(x**2);
    yield '2 ran';
    console.log(x**2);
    yield '3 ran';
    return true;
};

let g1 = generator(2);
console.log(g1.next(2));
console.log(g1.next(2));
console.log(g1.next(2));
console.log(g1.next(2));