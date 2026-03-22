document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if (email && password) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "mainPage.html"; // Redirige
    }
});
