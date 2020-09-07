window.onscroll = function() {GetNextContent()};
window.onload = function() {GetNextContent()};

var scrollChangePadding = 1200;

function GetNextContent()
{
    if (loadingContent || AllContentLoaded()) return;

    if (document.getElementById('ContentBottom').getBoundingClientRect().top < scrollChangePadding)
    {
        var con = RequestNewContent();
        setTimeout(AddNewContent(con), 2500);
    }
}

function AddNewContent(content)
{
    var splitContent = content.split("\0");
    for (var idIterator = 0; idIterator < splitContent.length; idIterator += 3)
    {
        var postId = splitContent[idIterator];
        if (postId.length > 0 && !isNaN(postId) && postId != "0")
        {
            var postTitle = document.createElement("h3");
            postTitle.innerHTML = splitContent[idIterator + 1];

            var postText = document.createElement("p");
            postText.innerHTML = splitContent[idIterator + 2];
            
            var newPost = document.createElement("div");
            newPost.className = "post";

            newPost.appendChild(postTitle);
            newPost.appendChild(postText);
            
            document.getElementById('Content').insertBefore(newPost, document.getElementById('ContentBottom'));
        }
    }

    if (AllContentLoaded())
    {
        document.getElementById('ContentBottom').remove();
    }
}
