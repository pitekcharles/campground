//variable creation

//function creation

//This function will change the page from the intro page to the plan trip page
function planNowPageChange () {
    $("#welcomeJumbotron").css({
        "display":"none"
    })
    $("#welcomeCards").css({
        "display":"none"
    })
}
//function call outs

//on-click events
$("#planNowButton").on("click", planNowPageChange);
