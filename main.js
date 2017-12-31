
// create a new post object
var posts = [];



// create click handler
var pointer = $('button');
$(pointer).click(getPost);
console.log(pointer);

$(pointer).click(publish);


// count clicks for id 
// function countClocks()
// get input

var btnClicked = 0;
function getPost() {
   btnClicked++;
   var text = $('#post-name').val();
   console.log(text);
   addData(text,btnClicked);
   };
   

// add data to array
function addData(postText,num) {
    var postsObject = { "text": postText, "id": num };
    posts.push(postsObject);
};

// render array 

function publish() {
    $("p").remove();
    $(".remove").remove();
    for (var i=0; i<posts.length; i++) {
       
        var postText = posts[i].text;
        var postId = posts[i].id;
        $('.posts').append('<p data-id=' + postId + '>' + postText + '<button type="button" class="remove">  REMOVE  </button>'+ '</p>');

        // $('p').data('data-id',postId);  // how do i get it to work?
    }
}


$('.posts').on('click','.remove',getIdPost);

//delete from array
function deletePost(postId) {
    for (var i=0; i<posts.length; i++) {
        if (postId===posts[i].id) {
            posts.splice(i, 1);
            publish();
        }
    }

};

function getIdPost() {
    console.log(this);
    var getId = $(this).closest("p").data().id;
    deletePost(getId); // getId=2
};

// $('button').on('click', function() {
//     var relevantInput = $(this).closest("div").find("input").val();
//   })




// function removeLi() {
//     $(this).remove();
// }


// // remove dynamically added li
// $('ul').on('click', 'li',removeLi');

