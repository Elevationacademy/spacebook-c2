var posts = []
var id = 0;

var addPost = function(text) {

    var new_post = {
        input: text,
        number: id
    }
    id++;
    posts.push(new_post);


}


var addPostDiv = function() {

    var new_post = $('#post-name').val();
    // $('#post-name').val('');
    addPost(new_post);
    $(".posts").append("<p class='post'data-id=" + id + "> <button type='button' class='remove'> REMOVE </button>" + new_post + "</p>");
    $(".comments").append("<input type='comment' placeholder='your comment here' placeholder='your name here' class='comment' data=" + id + "</div>");
    $(".remove").off();
    $(".remove").click(removePost);
    alert("daniel");


    //var id = $(this).closest('p').data().id;

}

$('button').click(addPostDiv);


var removePost = function() {

    alert("hi I was removed");
    posts.splice(id - 1, 1);

}





// // <
// p class = "post"
// data - id = "1" > Hey man!I 'm a post!</p>