
const posts = [
    {title: 'post 1', post: 'this is post1'},
    {title: 'post 2', post: 'this is post2'}
];

function getPosts() {
    setTimeout(
        () => {
            let output = '';
            posts.forEach((value, index) => {
                output += `<li>${value.title}</li>`
            });
            document.getElementById('item1').innerHTML = output;
        }, 1000
    );
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                posts.push(post);
                const err = false;
                if(!err) {
                    resolve();
                } else {
                    reject('somthing went wrong!')
                }
        }, 2000)
    })
}

createPost({title: 'post 3', post: 'this is post3'})
.then(getPosts)
.catch(err => console.log(err));

const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = Promise.resolve(setTimeout(() => {
    return {a: 10};
}, 1000));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json();
});

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
    console.log(values));

async function init() {
    result = await fetch('https://jsonplaceholder.typicode.com/users');
    //console.log(await result.json());
    var res = await result.json();
    res.map((v) => console.log(v.username));
}
init();