
var posts = [];
var idNumber = 1;
debugger

//test - new branch --test 2----new branch to test
function pushPost(text, number) {
    posts.push({ text: text, number: number })
}

function renderPosts() {
    $('.posts').find('div').remove();
    for (var i = 0; i < posts.length; i++) {
        //add posts to the click event
        var elmtPosts = $('<div>' + posts[i].text + '</div>')
        $('.posts').append(elmtPosts)
        elmtPosts.attr('data-id', posts[i].number)
        // create button to remove comment
        var rButton = $('<button type="button" class="remove">REMOVE</button>')
        elmtPosts.append(rButton)


        //add comment
        var commentList = $('<ul></ul>')
        elmtPosts.append(commentList)

        var listComm = posts[i].comment
        if (listComm) {
            for (var j = 0; j < listComm.length; j++) {
                commentList.append('<li>' + listComm[j].name + ' says: ' + listComm[j].text + '</li>')
            }
        }

        // create button et form to comment
        var cName = $('<input type="text" class="uName" placeholder="Your name"></input>')
        elmtPosts.append(cName)
        var cComment = $('<input type="text" class="uComment" placeholder="Add your comment"></input>')
        elmtPosts.append(cComment)
        var cbutton = $('<button type="button" class="uButton">Comment</button>')
        elmtPosts.append(cbutton)




    }
    //add remove click
    $('.remove').on('click', deletePost)

    //add comment click
    $('.uButton').on('click', addComment)


}
//function that publish post
function postPost() {
    var uText = $('#post-name').val()
    var uNumber = idNumber++

    pushPost(uText, uNumber);
    renderPosts();
}
$('.add-post').on('click', postPost)

function deletePost() {
    var uId = $(this).closest('div').data().id;
    posts = posts.filter(function (e) { return e.number != uId })
    renderPosts()
}

function addComment() {
    var commName = $(this).closest('div').find('.uName').val();
    var commPost = $(this).closest('div').find('.uComment').val();
    var postId = $(this).closest('div').data().id;

    var commID = idNumber++


    postComment(commName, commPost, postId)
    renderPosts()

}

function postComment(commName, commPost, postId) {
    var newComment = { name: commName, text: commPost }
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].number == postId) {
            if (posts[i].comment) {
                posts[i].comment.push(newComment)
            }
            else {
                posts[i].comment = [newComment]
            }
        }
    }
}
