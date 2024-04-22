
document.addEventListener("DOMContentLoaded", function() {
    var accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;

            // Toggle the active class on accordion header
            this.classList.toggle("active");

            // Toggle the active class on accordion content
            content.classList.toggle("active");
        });
    });
});
