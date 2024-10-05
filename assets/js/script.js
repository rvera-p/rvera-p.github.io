$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { // Cambia el número según tus necesidades
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    /* CURSOS */
    $('#carouselCursos').carousel({
        interval: 6000
    })

    $.getJSON('../../data.json', function (data) {
        var courses = data.cursos;
        var coursesContainer = $('#courses-container');
        var carouselInner = '';
        var rowCounter = 0;

        courses.forEach(function (course, index) {
            var isActive = (index === 0) ? 'active' : '';

            if (index % 4 === 0) {
                rowCounter++;
                carouselInner += `<div class="carousel-item ${isActive}">
                                    <div class="row">`;
            }

            var cardHtml = `<div class="col-sm-3">
                              <div class="card shadow">
                                <div class="card-header text-center py-3">
                                    <h5 class="card-title">${course.nombre}</h5>
                                    <h6>${course.entidad}</h6>
                                </div>
                                <div class="card-body">
                                  <div class="d-flex flex-wrap gap-2 justify-content-center py-3">`;

            course.temas.forEach(function (tema) {
                cardHtml += `<span class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill">${tema}</span>`;
            });

            cardHtml += `       </div>
                              </div>
                            </div>
                          </div>`;

            carouselInner += cardHtml;

            if ((index + 1) % 4 === 0 || (index + 1) === courses.length) {
                carouselInner += `</div></div>`;
            }
        });
        coursesContainer.html(carouselInner);
    });

    /* PORTAFOLIO */
    $.getJSON('../../data.json', function (data) {
        var portfolio = data.portafolio;
        var portfolioContainer = $('#portfolio-container');
        var cardHtml = '';
        portfolio.forEach(function (project) {
            cardHtml += `<div class="col my-2">
                            <a href="${project.link}" class="card card-just-text shadow rounded-0 text-decoration-none position-relative">
                                <div class="card-body text-center p-5">
                                <h6 clas="mb-2">${project.nombre}</h6>
                                <p>${project.descripcion}</p>
                                </div>
                            </a>
                         </div>`;

        });
        portfolioContainer.html(cardHtml);
    });

    /* MAP */
    var map = L.map('map').setView([-33.6895207, -71.2193217], 13);

    // Agrega la capa de mosaicos
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});