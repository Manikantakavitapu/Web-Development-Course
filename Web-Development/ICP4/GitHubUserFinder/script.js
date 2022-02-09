function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.github.com/users/"+user,false);
    xhttp.send(null);
    return xhttp
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
console.log(user);
$("h2").text(user.name);
$(".information").text(user.location);
$(".ids").text(user.id);
$("img").attr("src",user.avatar_url);
$("a").attr("href",user.html_url).text("Link TO URL")
$("p").text(user.bio)
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("h2").text("No User Find With That Name")
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username); 
            //if the response is successful show the user's details
            if (response.status == 200) {
                $(".card").css("display",'block')
                showUser(JSON.parse(response.responseText));

                //else display suitable message
            } else {
                $(".card").css("display",'block')
                noSuchUser(username);
            }
        }
    })
});
