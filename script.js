// =========================
// SCROLL REVEAL
// =========================

const elements = document.querySelectorAll(
    ".section, .project-card, .skill"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


// =========================
// CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

footerText.textContent =
    `© ${new Date().getFullYear()} Tamryn Kimara Clarke`;