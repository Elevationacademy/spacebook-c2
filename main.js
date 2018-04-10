var SpacebookApp = function () {
  var posts = [
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
  ];

  // the current id to assign to a post
  var currentId = 0;
  var $posts = $('.posts');

  var _findPostById = function (id) {
    for (var i = 0; i < posts.length; i += 1) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
  }

  var createPost = function (text) {
    var post = {
      text: text,
      id: currentId,
      comments:[]
    }

    currentId += 1;

    posts.push(post);
  }

  var renderPosts = function () {
    $posts.empty();

    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      var commentsContainer = '<div class="comments-container">' +
      '<input type="text" class="comment-name">' +
      '<button class="btn btn-primary add-comment">Post Comment</button> <ul class="comment-list"></ul> </div>';

      $posts.append('<div class="post" data-id=' + post.id + '>'
        + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
        commentsContainer  + '</div>' );


//bind add-comment event to each post
        $('.add-comment').off();
        $('.add-comment').on('click', function(){
          var comment = $(this).closest('.post').find('.comment-name').val();
          createComment(this, comment);
          renderComments(this);
        });
        
    }
  }

  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    var id = $clickedPost.data().id;

    var post = _findPostById(id);

    posts.splice(posts.indexOf(post), 1);
    $clickedPost.remove();
  }

  var toggleComments = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    $clickedPost.find('.comments-container').toggleClass('show');
  }

  var createComment = function(currentPost,comment){
    var $clickedPost = $(currentPost).closest('.post');
    var post = _findPostById($clickedPost.data().id);
    post.comments.push({text: comment });

  }

  var renderComments = function(currentPost){
    var $clickedPost = $(currentPost).closest('.post');
   var $commentList = $clickedPost.find('.comment-list');
   $commentList.empty();
    var id = $clickedPost.data().id;
    var post = _findPostById(id);
  
    for(var i=0; i<post.comments.length; i++){
       $commentList.append('<li class="comment-text">' + post.comments[i].text +
        '<a href="#" class="remove-comment">   remove</a> ' + '</li>');
    }


    //bind removeComment event to each comment
    $('.remove-comment').off();
    $('.remove-comment').on("click",function(){
      removeComment(this,post);
    });
   
  }
    
  
  var removeComment = function(currentComment, post){
    var comment = $(currentComment).closest("comment-text").val();
    post.comments.splice(post.comments.indexOf({text:comment}), 1);
    $(currentComment).closest('.comment-text').remove();
  }



  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,
    createComment: createComment,

    renderComments: renderComments,

    toggleComments: toggleComments
  }
}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function () {
  var text = $('#post-name').val();
  
  app.createPost(text);
  app.renderPosts();
});

$('.posts').on('click', '.remove', function () {
  app.removePost(this);
});

$('.posts').on('click','.show-comments', function () {
  app.toggleComments(this);
  app.renderComments(this);
});


