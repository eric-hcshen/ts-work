import express from 'express';

const app = express();

const fun = function(x:number, y:number): number {
    return x + y;
}

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(5000, ()=> {
    console.log('running' + fun(2,3));
})