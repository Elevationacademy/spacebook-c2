var idCounter;
var posts;

posts = new Array();
idCounter = 0;


function addPost(myId, postText) {
 
    //generating a postId
    posts.push(post = { id: myId, text:postText, comments: [] }); 
    idCounter++;
    console.log(posts);    
}

function postClicked() {
    var postTxt = $('#post-name').val();
    addPost(idCounter, postTxt);
    renderPosts();
}
//comment added for git checkout new branch
function addComment(){

   // console.log($(this));
    //console.log($(this).parents(".posts-list"));

    //pull post id
    var listId = $(this).closest(".posts-list").data().id;
   
    var curr_post = findPost(listId);
   
    //pull form text from screen
    var commentId = idCounter * 13;
    var userName = $('.user-name').val();
    var commentTxt = $('.comment-text').val();
    
    
    //insert to comments array in post
    curr_post.comments.push(comment = { id: commentId, user: userName,
       comTxt: commentTxt });

    renderPosts();
    
    console.log(posts);
    
}
function findPost(listId){
    var curr;
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === listId)
            return posts[i];
    }            
}

$('.add-post').on('click', postClicked);
//$('.add-comment').on('click', addComment);
$('.posts').on('click', '.add-comment', addComment);


function renderPosts() {

    //clear view
    $(".posts").empty();    
    
    //attach posts array to posts div
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p data-id=' + posts[i].id + 
          ' class="posts-list" >' + posts[i].id + ' - ' + posts[i].text  +
        '<button class="btn-rmv"> Remove Post </button>' +
        '<ul class="comments"></ul>' +
        '<form>' +
        '<input type="text" class="user-name" placeholder="name">' +
        '<input type="text" class="comment-text" placeholder="Comment">' +
        '<button type="button" class="add-comment">Comment</button>' + 
        '</form> </p>');            
                      
    }
}

$('.posts').on('click', '.btn-rmv', removePosts);

function removePosts(){
    var listId = $(this).closest(".posts-list").data().id;
    console.log($(this).closest(".posts-list"));
    //console.log("listId " + listId);
       
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === listId)
            posts.splice(i, 1);
    }
    console.log(posts);
    console.log($(this));
  
    //this is removing visually
    $(this).remove();
    renderPosts();
}

