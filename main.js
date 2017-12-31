$(document).ready(function () {
    var currId = 0;
    var posts = [];


    //adding posts to the post array
    function addPost(pText) {
        var currPost = {
            id: currId++,
            text: pText,
        }
        posts.push(currPost);
    }

    //rendering posts
    function renderPosts() {
        $('.posts').empty();

        posts.forEach(function (post) {
            $('.posts').append("<p class='post' data-id='" + post.id +
            "'><button type='button' class='remove'><i class='fa fa-trash-o'></i></button>" +
            post.text + "</p>");
        });
        // removing dynamic posts binding
        $('.remove').on('click', removePost);
        
    }

    //removing posts
    function removePost(){
        var currentItemId = parseInt($(this).parent('.post').attr("data-id"));
        var index = posts.findIndex(function(post) {
        return post.id===currentItemId;
        });

        posts.splice(index, 1);
        renderPosts();
    }

    //adding posts
    $('.add-post').click(function () {
        var currPost = $('#post-name').val();
        if (currPost !==""){
            addPost(currPost);
            renderPosts();
        }
        $('#post-name').val('');
    });

});