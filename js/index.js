// Add active class to the current nav links (highlight it)
var header = document.getElementById("menu__list--active");
var btns = header.getElementsByClassName("menu__item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Function for burger button
function myFunction(x) {
    x.classList.toggle("cross");

    var y = document.getElementById("menu__body-burger");

    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}