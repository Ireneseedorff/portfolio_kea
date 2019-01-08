var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    console.log("Åben - luk");

    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Kode til accordion fra https://www.w3schools.com/howto/howto_js_accordion.asp
