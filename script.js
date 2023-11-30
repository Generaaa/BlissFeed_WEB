window.addEventListener("scroll", function () {
  // Obtenha a posição de rolagem da janela
  var scrollPosition = window.scrollY;

  // Se a posição de rolagem for maior que 0, adicione a classe 'scroll' à topbar
  if (scrollPosition > 0) {
    document.querySelector(".topbar").classList.add("scroll");
    // Adicione a classe 'white-text' aos links
    document.querySelectorAll(".topbar a").forEach(function (link) {
      link.classList.add("white-text");
    });
  } else {
    // Caso contrário, remova a classe 'scroll'
    document.querySelector(".topbar").classList.remove("scroll");
    // Remova a classe 'white-text' dos links
    document.querySelectorAll(".topbar a").forEach(function (link) {
      link.classList.remove("white-text");
    });
  }
});
window.addEventListener("scroll", function () {
  // Obtenha a posição de rolagem da janela
  var scrollPosition = window.scrollY;

  // Se a posição de rolagem for maior que 0, adicione a classe 'scroll' à topbar e título
  if (scrollPosition > 0) {
    document.querySelector(".topbar").classList.add("scroll");
    document.querySelector(".logo-title").classList.add("scroll");
  } else {
    // Caso contrário, remova a classe 'scroll'
    document.querySelector(".topbar").classList.remove("scroll");
    document.querySelector(".logo-title").classList.remove("scroll");
  }
});
