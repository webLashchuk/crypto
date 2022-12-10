$(function(){

    const headerHeight = $('.header').outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= headerHeight) {
            $('.header').addClass('header__sticky')
        } else {
            $('.header').removeClass('header__sticky')
        }
    });

    $('.burger-btn, .burger-menu__item, .mobile-menu__logo, .mobile-menu__link').on('click', function () {
        $('.logo').toggleClass('logo-menu');
        $('.header-menu__list').toggleClass('burger__menu');
        $('.header-menu__list').toggleClass('header-menu__list--active');
        $('.mobile-menu__inner').toggleClass('mobile-menu__inner--active');
        $('.header-menu__item').toggleClass('burger-menu__item');
        $('.overlay').toggleClass('overlay--active');
        $('body').toggleClass('lock');
    })

    $('.market-card__select, .market-card__input').styler();
    
    
})