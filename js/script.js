
$('.mobile-btn').on('click',function () {
    $('.mobile-btn').toggleClass('show');
    $('.menu').toggleClass('show-menu');
});
$('.menu-list-item').on('click',function () {
    $('.mobile-btn').removeClass('show');
    $('.menu').removeClass('show-menu');
});


$(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
    } else {
        $(".header-sticky").addClass("sticky-bar");
    }
});


