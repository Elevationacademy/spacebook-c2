// untill INDIVIDUAL PROJECT EXERCISE 3 
// will do the rest in the weekend

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

    //rendering posts + removing dynamic posts 
    function renderPosts() {
        $('.posts').empty();
        var currIndex = 0;
        posts.forEach(function (post) {
            $('.posts').append("<p class='post' data-index='" + currIndex + "' data-id='" + post.id + "'><button type='button' class='remove'>REMOVE</button>" + post.text + "</p>");
            currIndex++;
        });

        $('.remove').on('click', function () {
            //solution 1
            var index = parseInt($(this).parent('.post').attr("data-index"));

            //solution 2
            /*
            var currentItemId = parseInt($(this).parent('.post').attr("data-id"));
              var index = posts.findIndex(function(post) {
              return post.id===currentItemId;
            }); 
             */
            posts.splice(index, 1);
            renderPosts();
        });
    }

    //adding posts
    $('.add-post').click(function () {
        var currPost = $('#post-name').val();
        addPost(currPost);
        renderPosts();
    });

});