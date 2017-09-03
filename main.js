var posts = [];
var id = 0;

var addPost = function (text) {
    post = {
        text: text,
        id: id
    }
    posts.push(post);
    id++;
}

$('.add-post').on('click', function () {
    var newText = $("#post-name").val();
    addPost(newText);
    renderPosts();
})

function renderPosts() {
    $('.posts').empty()
    for (i = 0; i < posts.length; i++) {
        $('.posts').append('<div style="display: inline-block" class="post" data-id=' + posts[i].id + '><li>' + posts[i].text + '</li>' + '<button class="btn btn-primary ui-icon ui-icon-trash removeBtn"></button></div>');
    };
}

function removePost(index) {
    posts.splice(index,1);
}


$('.posts').on('click', '.removeBtn', function () {
    var index = $(this).closest('.post').index();
    removePost(index);
    renderPosts();
})


