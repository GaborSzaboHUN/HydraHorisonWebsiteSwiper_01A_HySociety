function numberWithZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}
let totalSlides = $('.slider-titles-heading').length

$('.swiper-total-number').text(numberWithZero(totalSlides))

$('.slider-gallery-component').each(function (index) {
    const bgSwiper = new Swiper($(this).find('.swiper.is-slider-bg')[0], {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        keyboard: true,
        effect: 'fade',
        allowTouchMove: false,
        preloadImages: true,
    });

    const textSwiper = new Swiper($(this).find('.swiper.is-slider-titles')[0], {
        slidesPerView: "auto",
        speed: 1000,
        loop: true,
        loopSlides: 8,
        slideToClickedSlide: true,
        mousewheel: true,
        keyboard: true,
        grabCursor: true,
        centeredSlides: true,
        slideActiveClass: 'is-active',
        slideDuplicateActiveClass: 'is-active',
        autoplay: {
            delay: 5000,
        },
        thumbs: {
            swiper: bgSwiper,
        },
        navigation: {
            nextEl: $(this).find('.swiper-next')[0],
            prevEl: $(this).find('.swiper-prev')[0],
        }
    });
    /* 
        textSwiper.controller.control = thumbsSwiper
        thumbsSwiper.controller.control = textSwiper
     */
    textSwiper.on('slideChange', function () {
        let slideNumber = numberWithZero(textSwiper.realIndex + 1)
        $('.swiper-number-current').text(slideNumber)
    })
});
