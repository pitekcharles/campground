//variable creation
campgroundApiKey = "b8ux8fnrgv79fk8thpzh3dk5";



//function creation

//This function will change the page from the intro page to the plan trip page
function planNowPageChange () {
    $("#welcome").css({
        "display":"none"
    })
}

//This function will populate the drop down for state select with all state names
//from the stateAry
function statePop () {
    stateAry.forEach(function(item){
        var newOption = $("<option>").attr({
            "data-state": item
        });
        newOption.text(item);
        $("#stateName").append(newOption);
    })
}
//function call outs
statePop();
//on-click events
$("#planNowButton").on("click", planNowPageChange);
