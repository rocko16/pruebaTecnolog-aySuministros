/* Hace que nuestro menú se quede fijo al momento de hacer scroll */
window.onscroll = function () {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20) {
        header.classList.add('nav_mod');
    }
    else if (scroll < 20) {
        header.classList.remove('nav_mod');
    }
}

/* Al momento que el DOM de la página esta cargado, utilizamos la función de slick para el slider */
document.addEventListener("DOMContentLoaded", function(event) {
    $('.customer-logos').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});




