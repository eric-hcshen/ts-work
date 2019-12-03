function test() {
    {
        var x = 3;
        let y = 4;
    }
    console.log(x);
    console.log(y);
}

var ar = [1,2,3];
ar.push('end');

ar = [...ar, 'end'];
ar = ['start', ...ar];
console.log(ar);

var hero ={
    _name: 'John',
    getIdentify: function() {
        return this._name;
    }
};

console.log(hero.getIdentify());

a = [1,2,3,4].reduce((acc, cur, index, array) => {return acc + cur},0);

