// common
$(function () {

    // nav
    $('nav').load('https://ids.iwplay.com.tw/common/mhxzx/nav.html', function () {

        //nav link
        $('.home').attr('href', text.home);
        $('.point_teaching').attr('href', text.point_teaching);
        $('.faq').attr('href', text.faq);

        // snslink
        $('.facebook').attr('href', text.facebook);
        $('.instagram').attr('href', text.instagram);
        $('.youtube').attr('href', text.youtube);
        $('.telegram').attr('href', text.telegram);

        // open_menu
        $('.open_menu').click(function () {
            $(this).toggleClass('close');
            $('.menu').toggleClass('open');
            $('body').toggleClass('notscroll');
        });
        $('.menu ul li a').click(function () {
            $('.open_menu').removeClass('close');
            $('.menu').removeClass('open');
        });

    });

    // news_banner
    $('.news_banner').append(
        `
    <img class="img-fluid d-none d-lg-block" src="https://www.mhxzx.com.tw/images/news_banner.jpg">
    <img class="img-fluid d-lg-none" src="https://www.mhxzx.com.tw/images/news_banner_m.jpg">
    `
    );

    // gameinfo
    $('.gameinfo').load('https://ids.iwplay.com.tw/common/mhxzx/gameinfo.html', function () {

        // app_store
        $('.google_play').attr('href', text.google_play);
        $('.app_store').attr('href', text.app_store);

    });

    // footer
    $('footer').load('https://ids.iwplay.com.tw/includ/footer/15.html');

});
