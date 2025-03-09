document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully");

    // Hover effect for links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#1e90ff";
        });
    });

    // Smooth scrolling for navigation
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#1e90ff";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
