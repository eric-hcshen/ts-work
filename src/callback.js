
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

function createPost(post, callback) {
    setTimeout(
        () => {
            posts.push(post)
            callback();
    }, 2000)
}

createPost({title: 'post 3', post: 'this is post3'}, getPosts);