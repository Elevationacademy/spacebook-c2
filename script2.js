var posts = [];



// user clicks post button ---> create post 
$('.add-post').click(createPost);

var clickCounter = 1;

// creat new post object + add to array
function createPost() {
    var postText = $('#post-name').val();
    var postId = clickCounter;
    posts.push({ "text": postText, "id": postId });
    clickCounter++;
    publishPost();
}

// render post to view

function publishPost() {
    $('p').remove();
    $('.remove').remove();

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i].text;
        var id = posts[i].id;
        $('.posts').append('<p data-id=' + id + '>' + post + ' <button type="button" class="remove">Remove</button>' +'<button type="button" class="comment">Comment</button> ' + '</p');
    }
}


//user click on remove btn - bind remove btn to existing posts div

$(".posts").on("click", ".remove", deletePost);


function deletePost() {
    // get data id 
    var id = $(".remove").closest('p').data().id;
    console.log(id);

    //loop through array posts and compare id to posts[i].id
    for (var i=0;i<posts.length; i++) {
        if (id=== posts[i].id) {
            posts.splice(i,1);
            publishPost();
        }
    } 
}

// $(.p).on(‘click’, ‘.remove’, action)

// on click create an new form section
$(".posts").on("click", ".comment", appendForm);

function appendForm() {
    var html = '<form id="comments">';
    html+= '<h3 class="h1-comment">Add a New Comment </h3>';
    html+='<div class="form-comment">';
    html+= '<input type="text" id="user-name" class="form-control" placeholder="Youe user name">';
    html+= ' <textarea form="comments"></textarea>';
    html+= ' </div>';
    html+= '<button class="btn btn-primary comment-post" type="button">Post</button>';
    html+= '</form>';
    var id = $(".remove").closest('p').data().id;
    var id = $(".remove").closest('p').data().id;
    $('.posts').children("p").append(html);
};


// //     $('posts').append('<form>' + '<h3>' + 'Add a New Comment </h3>' +
    
// '<div class="form-comment">' +
// '<input type="text" id="user-name" class="form-control" placeholder="Youe user name">' +
// ' </div>' +
// + '<button class="btn btn-primary add-post" type="button">Post</button>' + '</form>');


