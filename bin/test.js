var myFun = function (x, y) {
    return x + y;
};
console.log(myFun(1, 3));
var fillArray = function (i, element) {
    return new Array(i).fill(element);
};
function fillArrayFunction(i, element) {
    return new Array(i).fill(element);
}
console.log(fillArray(3, 'hi'));
console.log(fillArrayFunction(3, 'hi'));
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity('hello'));
var inf;
function fun(x, y) {
    return x + y;
}
var zz = fun;
var aa = fun;
console.log(aa(12, 3));
