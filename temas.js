document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const userChoice = confirm("Deseja ativar o modo escuro?");
    
    if (userChoice) {
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
