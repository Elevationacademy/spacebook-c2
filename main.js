var idCounter;
var posts;

posts = new Array();
idCounter = 0;


function addPost(myId, postText) {
 
    //generating a postId
    posts.push(post = { id: myId, text:postText, commentTxt: [] }); 
    idCounter++;
    console.log(posts);    
}

function postClicked() {
    var postTxt = $('#post-name').val();
    addPost(idCounter, postTxt);
    renderPosts();
}

function addComment(){
    //pull comment data from screen
    //add comment data to array
    //render screen info
}

$('.add-post').on('click', postClicked);


function renderPosts() {

    //clear view
    $(".posts").empty();    
    
    //attach posts array to posts div
    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p data-id=' + posts[i].id + 
          ' class="posts-list" >' + posts[i].id + ' - ' + posts[i].text  +
        '<button class="btn-rmv"> Remove Post </button></p>');                 
    }
}

$('.posts').on('click', '.btn-rmv', removePosts);

function removePosts(){
    var listId = $(this).closest(".posts-list").data().id;
    //console.log("listId " + listId);
       
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === listId)
            posts.splice(i, 1);
    }
    console.log(posts);
  
    //this is removing visually
    $(this).remove();
    renderPosts();
}




