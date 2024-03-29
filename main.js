$(document).ready(function () {
    $('.menu-toggler').on('click',function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });


    AOS.init({
        easing:'ease',
        duration:1800,
       /*for animation*/
        /*once:true*/
    });
});