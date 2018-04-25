var SpacebookApp = function () {
    var posts = [];
    // the current id to assign to a post
    var currentId = 0;
    var commentId = 0;
    var $posts = $('.posts');

    var _findPostById = function (postDataId) {
        for (var i = 0; i < posts.length; i += 1) {
            if (posts[i].id == postDataId) {
                return posts[i];
            }
        }
    }

    var createPost = function (text) {
        var post = {
            text: text,
            id: currentId,
            comments: []
        }

        currentId += 1;
        posts.push(post);
        console.log(posts);
    }

    var renderPosts = function () {
        $posts.empty(); //

        for (var i = 0; i < posts.length; i += 1) {
            var postId = posts[i].id;
            var postText = posts[i].text;

            var commentsContainer =
            '<div class="show">' + //'<div class="comments-container">'
                '<input type="text" class="comment-text">' +
                '<button class="btn btn-primary add-comment">Comment</button>' +
            '</div>';

            $posts.append('<div class="post" data-id=' + postId + '>' + postText +
            '<a href="#" class="show-comments">Comments</a> ' +
            '<a href="#" class="remove">Remove</a> ' +
            commentsContainer +
            '</div>');
        }
        //console.log(posts);
    }

    var removePost = function (postDataId) {
        var postObj = _findPostById(postDataId);
        posts.splice(posts.indexOf(postObj), 1);
        var getPostDiv = '*[data-id = "'+ postDataId + '"]';
        $(getPostDiv).remove();
        console.log(posts);
    }

    var toggleComments = function (currentPost) {
        var $clickedPost = $(currentPost).closest('.post');
        $clickedPost.find('.comments-container').toggleClass('show');
    }

    var createComment = function(text, postDataId) {
        var comment = {
            text: text,
            id: commentId
        }
        commentId++;
        var postObj = _findPostById(postDataId);
        postObj.comments.push(comment);
        //console.log(posts);
    }
/*
    var renderComments = function () {
    }

    var removeComment = function () {
    }
*/

    return {
        createPost: createPost,
        renderPosts: renderPosts,
        removePost: removePost,
        toggleComments: toggleComments,
        createComment: createComment,
/*      // renderComments: renderComments,
        // removeComment: removeComment,
*/

    }
}


var app = SpacebookApp();

// immediately invoke the render method
//app.renderPosts();


// Events --------------------
// Create & Render post
$('.add-post').on('click', function () {
    var $text = $('#input-text').val();

    app.createPost($text);
    app.renderPosts();

    $('#input-text').val('');
});

// Remove post
$('.posts').on('click', '.remove', function () {
    var $postDataId = $(this).closest('div').attr("data-id"); // data().id();
    app.removePost($postDataId);
    //$(this).closest('div').remove();
});


// Show comments
$('.posts').on('click','.show-comments', function () {
    app.toggleComments(this);
});

// Add & Render comment
$('.posts').on('click', '.add-comment', function () {
    var $text = $(this).siblings('.comment-text').val(); // problem - returning value of first input
    var $postDataId = $(this).closest('.post').attr("data-id");

    app.createComment($text, $postDataId);
    //app.renderComments();

    $('.comment-text').val('');
});

// Remove comment
