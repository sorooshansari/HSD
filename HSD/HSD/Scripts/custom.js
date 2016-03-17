$(window).scroll(function () {
    var scrtop = $(document).scrollTop();
    $('#scrolltxt').html(scrtop.toString());
    if (scrtop > 399) {
        $('nav').css('height', 65);
        $('.navbar-nav').css('margin-top', 10);
        $('.brand-img').css('height', 45);
        $('.brand-img').css('margin-top', 10);
        $('.hero').css('font-size', 27);
        $('.sustainable').css('font-size', 25);
        $('.development').css('font-size', 23);
        $('.navbar-nav > li a').css('font-size', 12);
        $('.navbar-toggle').css('top', 15);
    } else {
        $('nav').css('height', 102);
        $('.navbar-nav').css('margin-top', 25);
        $('.brand-img').css('height', 80);
        $('.brand-img').css('margin-top', 12);
        $('.hero').css('font-size', 34);
        $('.sustainable').css('font-size', 32);
        $('.development').css('font-size', 30);
        $('.navbar-nav > li a').css('font-size', 15);
        $('.navbar-toggle').css('top', 30);
    }
});
function btnrotate() {
    if ($('#navbar-btn').css("transform") == 'none') {
        $('#navbar-btn').css("transform", "rotate(-90deg)");
    } else {
        $('#navbar-btn').css("transform", "");
    }
};