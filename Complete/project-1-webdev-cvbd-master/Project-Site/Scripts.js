//The following jquery is functional in the Forum's page only! 
$(".discussions").click(function () {
    let action = $(this).parents(".forum");
    let response = action.find("#response");
    let behavior = action.find(".divider");
    response.slideToggle(250);
});
$(".discussions").click(function () {
    let action = $(this).parents(".forum");
    let response = action.find("#response-2");
    let behavior = action.find(".divider");
    response.slideToggle(250);
});

// JavaScript source code
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction5() {
    var x = document.getElementById("myDIV5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

