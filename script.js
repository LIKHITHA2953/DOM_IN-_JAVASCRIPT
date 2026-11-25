
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. Select and Modify Header
    let header = document.getElementById("main-title");

    header.textContent = "Featured Products";
    header.style.backgroundColor = "#f0f0f0";


    // 2. Style Navigation Links
    let navLinks = document.getElementsByClassName("nav-link");

    for (let i = 0; i < navLinks.length; i++) {

        navLinks[i].style.color = "#0066cc";

        // Underline on hover
        navLinks[i].addEventListener("mouseover", function () {
            this.style.textDecoration = "underline";
        });

        navLinks[i].addEventListener("mouseout", function () {
            this.style.textDecoration = "none";
        });
    }


    // 3. Update Article Elements
    let articles = document.getElementsByTagName("article");

    for (let i = 0; i < articles.length; i++) {

        let paragraph = document.createElement("p");

        paragraph.textContent =
            "Click the button to highlight the title.";

        articles[i].appendChild(paragraph);
    }


    // 4. Button Interaction
    let button = document.getElementById("toggle-btn");

    button.addEventListener("click", function () {

        header.classList.toggle("highlight");

    });

});
