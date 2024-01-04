// Animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("java");
    habilidades[3].classList.add("python");
    habilidades[4].classList.add("vba");
    habilidades[5].classList.add("c");
    habilidades[6].classList.add("mysql");
    habilidades[7].classList.add("sqlserver");
    habilidades[8].classList.add("oracle");
    habilidades[9].classList.add("mongodb");
    habilidades[10].classList.add("postgresql");
    habilidades[11].classList.add("git");
    habilidades[12].classList.add("aws");
    habilidades[13].classList.add("docker");
    habilidades[14].classList.add("nodejs");
    habilidades[15].classList.add("bootstrap");
    habilidades[16].classList.add("español");
    habilidades[17].classList.add("ingles");
  }
}

window.onscroll = function () {
  efectoHabilidades();
};

/* BTN INICIO */
$(document).ready(function () {
  $("#s-icons").click(function () {
    $("html, body").animate({ scrollTop: 0 });
  });
});
