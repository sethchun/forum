var button = document.getElementsByClassName('btn')[0];

button.addEventListener('click', function () {
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;
    var newPost = document.createElement('div');
    newPost.className = 'forum-post';
    var newForumPostMessage = document.createTextNode(message);
    var newForumPostName = document.createTextNode(name);
    newPost.appendChild(newForumPostMessage);
    newPost.appendChild(newForumPostName);
    document.getElementsByClassName('posts')[0].append(newPost);
});
