document.addEventListener("DOMContentLoaded", function() {

    const banner = document.querySelector(".cookiesBanner");
    const acceptButton = document.getElementById("acceptButton");
    const rejectButton = document.getElementById("rejectButton");

    // Si ya aceptó cookies antes, ocultar banner
    if (localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "none";
    }

    // Botón aceptar
    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });

    // Botón rechazar
    rejectButton.addEventListener("click", function() {
        banner.style.display = "none";
    });

});