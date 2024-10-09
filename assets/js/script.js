$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { // Cambia el número según tus necesidades
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    /* PORTADA */
    function efectoTypeWriter(element, text, time, waitTime) {
        const steps = text.length;

        setTimeout(() => {
            // Establece el número de pasos para la animación de typing
            $(element).css('--typing-steps', steps);
            $(element).css('--typing-time', time + 's');

            for (let i = 0; i <= steps; i++) {
                setTimeout(() => {
                    $(element).text(text.substring(0, i));

                    // Establece el ancho del texto como variable CSS en 'ch'
                    const textWidth = text.length; // Usando la longitud del texto
                    $(element).css('--typing-width', textWidth + 'ch');

                    // Detiene la animación si se ha escrito el texto completo
                    if (i === steps && element !== '#portada p') {
                        $(element).addClass('stop-animation');
                    }
                }, 100 * i); // Un retardo fijo para la escritura
            }
        }, waitTime);
    }

    efectoTypeWriter('#portada h2', 'Hola, mi nombre es  ', 2, 500);
    efectoTypeWriter('#portada h1', 'Rafael Vera', 1, 2500);
    efectoTypeWriter('#portada p', 'Analista Programador | Backend Developer ', 4, 3500);


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
    let colors = ['Cream Brulee', 'Portafino', 'Fringy Flower', 'Shadow Green'];

    function getRandomColor() {
        let randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    $('#portfolio-container .card').each(function () {
        let randomColor = getRandomColor();

        $(this).attr('data-color', randomColor);
    });

    /* MAP */
    var map = L.map('map').setView([-33.6895207, -71.2193217], 13);

    // Agrega la capa de mosaicos
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

