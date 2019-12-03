const myFun = (x: number, y:number) => {
    return x + y;
  };
console.log(myFun(1,3));

const fillArray = <T>(i:number, element:T):T[] => {
    return new Array(i).fill(element);
};
function fillArrayFunction<T, S>(i:number, element:T):S[] {
    return new Array(i).fill(element);
}
console.log(fillArray(3, 'hi'));
console.log(fillArrayFunction(3, 'hi'));

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
console.log(myIdentity('hello'));


let inf : {(x: number, y: number):number};

function fun(x: number, y: number):number {
    return x + y;
}

let o: any = {};

class cls {
    zz: {(x: number, y: number):number} = fun;
}

const testObj = new cls();
testObj.zz = fun;

let zz: {(x: number, y: number):number} = fun;

interface face<T> {
   ( x: T,
    y: T):T;
}
let aa : face<number> = fun;

console.log(aa(12,3));
