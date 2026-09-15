let button = document.getElementById("themeBtn");

button.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        button.textContent = "Switch to Light Mode";

    } else {

        button.textContent = "Switch to Dark Mode";

    }

});