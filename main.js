var postsArr = [];
var id = 0;
//small change to secondBranch check
function newPost(input, comment, username){
    var postObj = {
        text: input,
        id: id++,
        comment: comment,
        username: username
    };
    postsArr.push(postObj);
    renderPost();
}

function renderPost(){
    $('.posts').empty();
    for(var i = 0; i < postsArr.length; i++){
        //ADD REMOVE BTN TO THE STRING BELOW
        var post = '<form data-id = "' + postsArr[i].id + '">' + postsArr[i].text  + '   <button class = "remove">REMOVE</button><br><input type="text" id = "username" placeholder="username"><input type="text" id = "comment" placeholder="Post a comment"><button id = "comm">COMMENT</button></form>';
        $('.posts').append(post);
    } 
}

$('.posts').on('click', '.comm', function(){
    var comm = $('#comment').val;
    var user = $('#username').val;

    newPost(comm, user);
})



$('.add-post').on('click', function(){
    
    var text = $('#post-name').val();

    newPost(text);

})
//g- jquery binding click function for after create
//click function to remove post
$('.posts').on('click','.remove',function(){
    //where is this post in the array?
    //get the thing from the html that helps me in the javascript (html element's data id)
    var id = $(this).closest('form').data().id; //this = .remove
    //once we get that id (thing from html), find that id in array and remove that thing (object)
    for(var i = 0; i < postsArr.length; i++){
        if(postsArr[i].id === id){
        //remove from array    $(this).closest("div").find("input").val();
            postsArr.splice(i,1);

        //   $(this).remove();
        }
    }
    //render posts again
    renderPost();
})

