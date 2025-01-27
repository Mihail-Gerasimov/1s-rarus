document.addEventListener("DOMContentLoaded", () => {
    const swiperCatalog = new Swiper('.header__catalog', {
        freeMode: true,              // Свободный режим прокрутки
        grabCursor: true,            // Курсор меняется на указатель при захвате слайда
        momentumBounce: false,       // Отключает отскок в конце прокрутки
        navigation: {
            nextEl: '.header__catalog-next',
            prevEl: '.header__catalog-prev',
        },
        breakpoints: {
            1150: {
                slidesPerView: 9.6,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 36,
            },

            575: {
                slidesPerView: 'auto',
                spaceBetween: 25,
            },

            320: {
                slidesPerView: 'auto',
                spaceBetween: 18,
            },
        }
    });

    function mobCatalog() {
        let btnActive = document.querySelector('.header__burder'),
            btnClose = document.querySelector('.mobile-catalog__close'),
            menu = document.querySelector('.mobile-catalog');

        btnActive.addEventListener('click', () => {
            menu.classList.add('mobile-catalog__active');
            document.querySelector('body').style.cssText += `
            overflow: hidden;
        `;
        });

        btnClose.addEventListener('click', () => {
            menu.classList.remove('mobile-catalog__active');
            document.querySelector('body').style.cssText += `
            overflow: inherit;
        `;
        });
    }
    mobCatalog();

});