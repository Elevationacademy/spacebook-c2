debugger

var posts = [];
var generateNumber = 1


function createPost(userInput, userId) {
    posts.push({ text: userInput, number: userId })
}


function deletePost() {
  var postId =  $(this).closest("div").data().id;
  posts = posts.filter(function(e){return e.number != postId})
  renderData();
}

function renderData() {
    $('.posts').find('div').remove();
    $('.posts').find('button').remove();

    for (var i = 0; i < posts.length; i++) {
        //Add post to the div
        $('.posts').append('<div>' + posts[i].text + (' ') + '</div> ');
        $('.posts').attr('data-id', posts[i].number)
        // add remove button to the post
        var input = $('<button type="button" class="remove">REMOVE</button>');
        input.appendTo($('.posts'));
        $('.remove').on('click', deletePost)
    }
}

$('.add-post').on('click', function () {
    var uName = $('#post-name').val()
    var uNumber = generateNumber++
    createPost(uName, uNumber);
    renderData();
})