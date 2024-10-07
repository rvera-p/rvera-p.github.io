$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { // Cambia el número según tus necesidades
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    /* CURSOS */
    function moveCarousel(direction, cards) {
        let $carouselContainer = $('.carousel-inner');
        let $carouselItems = $('.carousel-item');
        let itemWidth = $carouselItems.outerWidth(true);
        let activeIndex = $carouselItems.index($carouselContainer.find('.active'));
        let nextIndex;

        if (direction === 'next') {
            nextIndex = (activeIndex + 1) % ($carouselItems.length - (cards - 1));
        } else {
            nextIndex = (activeIndex - (cards) + $carouselItems.length) % ($carouselItems.length - 2);
        }

        let scrollPosition = nextIndex * itemWidth;
        $carouselContainer.animate({ scrollLeft: scrollPosition }, 600);


        $carouselContainer.find('.active').removeClass('active');
        $carouselItems.eq(nextIndex).addClass('active');
    }

    const mediaQueryMd = window.matchMedia("(min-width: 960px)");
    const mediaQueryLg = window.matchMedia("(min-width: 1200px)");

    function setupCarouselHandlers() {
        let cards = 1;

        if (mediaQueryMd.matches) {
            cards = 3;
        }
        if (mediaQueryLg.matches) {
            cards = 4;
        }

        $('#carousel-left').off('click').on('click', function () {
            moveCarousel('prev', cards);
        });

        $('#carousel-right').off('click').on('click', function () {
            moveCarousel('next', cards);
        });
    }
    setupCarouselHandlers();

    mediaQueryMd.addEventListener('change', setupCarouselHandlers);
    mediaQueryLg.addEventListener('change', setupCarouselHandlers);


    /* PORTAFOLIO */
    /* $.getJSON('../../data.json', function (data) {
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
    }); */

    /* MAP */
    var map = L.map('map').setView([-33.6895207, -71.2193217], 13);

    // Agrega la capa de mosaicos
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});



/* if (window.matchMedia("(min-width: 960px)").matches) {
    let carouselWidth = $('#courses-container')[0].scrolWidth;
    let cardWidth = $('.carousel-item').width();
    let scrollPosition = 0;

    $('#carousel-left').on('click', () => {
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    });
    $('#carousel-right').on('click', () => {
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    });

}; */



