//https://www.youtube.com/watch?v=NhYMlbKgQzU
//es6 features test in browser
function sayHello(name) {
    return 'Hello ' + name;
}

var sayHi = (name) => {
    return 'Hi ' + name;
}
//Global namespace

//IIFE
(() => {
    var x = 'test';
    console.log(x);
})();

//this === window
var myObj = {
    name: 'eric',
    hello: function() {
        return 'Hello ' + this.name; 
    },
    get hi() {
        return 'Hi ' + this.name;
    }
}
console.log(myObj.hello());
console.log(myObj.hi);
//create object
var person = function(name, age) {
    this.name = name;
    this.age = age;
}
var eric = new person('eric', 49);
//prototype give default value
var p1 = function() {}
p1.prototype.name = 'n/a';
p1.prototype.age = 0;
var rebecca = new p1();
//call
var aObj = {name: 'eric', age: 20};
function hiObj(name) {
    return 'hi ' + this.name;
}
function addAge(age, num) {
    return this.age + num;
}
hiObj.call(aObj);
addAge.call(aObj, 10); //NaN
class car {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

var myCar = new car('Ford', 4);

var request = new XMLHttpRequest();
request.onreadystatechange = () => {
    console.log(request.response);
};
request.open('get', 'https://jsonplaceholder.typicode.com/posts');
request.send();

var myPromise = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('get', 'https://jsonplaceholder.typicode.com/posts');
    request.onload = resolve;
    request.onerror = reject;
    request.send();
});
myPromise
.then((data) => console.log(data.target.response))
.catch((err) => console.log(err));

//post case
var xhr = new XMLHttpRequest();
xhr.open('post', 'http://localhost:3000/masters', true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send("{\"master_name\":\"xxx\",\"col1\":\"111\",\"col2\":\"222\",\"col3\":\"333\"}");
 


