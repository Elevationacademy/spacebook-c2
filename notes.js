
        // Commenting buggy
/*
        1. Post - y
        2. Comment 1 - y
        3. Multi posts comment & multi comments - y
        3. Erase & comment - y
*/
        // get array index of object with a given postDataId
        // var postObj = _findPostById(postDataId);
        // posts.splice(posts.indexOf(postObj), 1);

        //first arr[ind] 2  second arr[ind] 1

// Remove post function without _findPostById() function
    var removePost = function (postDataId) {
        for (var i = 0; i < posts.length; i++) {
            if (postDataId == posts[i].id) {
                posts.splice(i, 1);
                $('*[data-id = "'+ postDataId + '"]').remove();
            }
        }
    }

/*
1. Add post
1.1. Take input and insert into

2. Remove post
3. Comment on post
4. Remove comment
*/


/* Empty input - 2
    $('input:text').focus(
        function(){
            $(this).val('');
        });
    });
*/

/* Enter sbmit button
$("#input-text").keyup(function(event) {
if (event.keyCode === 13) {
$(".add-post").click();
}
});
*/

$('input:text').focus(
    function(){
        $(this).val('');
    });



    var posts = [
        // {text: "Hello world", id: 0, comments:[
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"}
        // ]},
        // {text: "Hello world", id: 1, comments:[
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"}
        // ]},
        // {text: "Hello world", id: 2, comments:[
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"}
        // ]}
    ];

removePost old function code
    // var $clickedPost = $(currentPost).closest('.post');
    // var id = $clickedPost.data().id;
    //
    // var post = _findPostById(id);
    //
    // posts.splice(posts.indexOf(post), 1);
    // $clickedPost.remove();
removePost pseudoCode
    // for loop array
    // if post[i]id === $(this).closest().data()id()
    // remove it


removePost data binding paragraph removing
    //$(this).closest('div').remove();
