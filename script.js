$(window).scroll(function () {
    $('nav').toggleClass('navbar-bg', $(this).scrollTop() > 800);
});