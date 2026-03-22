function toggleModo() {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

if(localStorage.getItem("modo") === "oscuro") {
  document.body.classList.add("dark-mode");
}