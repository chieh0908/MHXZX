// common
$(function () {
    //Vue
    const App = {
        data() {
            return {
                text
            };
        },
    };
    Vue.createApp(App).mount("#app");

    // aside
    $("aside .btn").click(function () {
        $("aside").toggleClass("hide");
    });

    // nav
    $("nav").load("https://ids.iwplay.com.tw/common/mhxzx/nav.html", function () {
        //nav link
        $(".home").attr("href", text.home);
        $(".point_teaching").attr("href", text.point_teaching);
        $(".faq").attr("href", text.faq);

        // snslink
        $(".facebook").attr("href", text.facebook);
        $(".instagram").attr("href", text.instagram);
        $(".youtube").attr("href", text.youtube);
        $(".telegram").attr("href", text.telegram);

        // open_menu
        $(".open_menu").click(function () {
            $(this).toggleClass("close");
            $(".menu").toggleClass("open");
        });
        $(".menu ul li a").click(function () {
            $(".open_menu").removeClass("close");
            $(".menu").removeClass("open");
        });
    });

    // news
    $(".banner").load("https://www.mhxzx.com.tw/CmsBanner/ubanner_A.html", function () {
        //reload ads logic
        const now = new Date();
        let innerList = document.querySelectorAll(`#ubanner_A > div > .carousel-inner > div`);
        let indicatorsList = document.querySelectorAll(`#ubanner_A > div > .carousel-indicators > li`);
        for (let i = 0; i < innerList.length; i++) {
            let onTime = new Date(innerList[i].getAttribute("on"));
            let offTime = new Date(innerList[i].getAttribute("off"));
            if (now < onTime || now > offTime) {
                if (innerList[i].classList.contains("active")) {
                    innerList[i + 1].classList.add("active");
                    indicatorsList[i + 1].classList.add("active");
                }
                innerList[i].remove()
                indicatorsList[i].remove()
            }
        }
    });

    $("#news_list").load("https://www.mhxzx.com.tw/news/indexS.html");

    // menpai
    var showTab = 0;
    $('.chara').each(function () {
        var $tab = $(this);
        var $defaultLi = $('.chara_icon li', $tab).eq(showTab).removeClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();
        $('.chara_icon li', $tab).click(function () {
            var $this = $(this),
                clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings().removeClass('active');
            $(clickTab).stop(false, true).addClass('on').siblings().removeClass('on');
            return false;
        }).find('a').focus(function () {
            this.blur();
        });
    });

    // gameinfo
    $(".gameinfo").load(
        "https://ids.iwplay.com.tw/common/mhxzx/gameinfo.html",
        function () {
            // app_store
            $(".google_play").attr("href", text.google_play);
            $(".app_store").attr("href", text.app_store);
        }
    );
    // features
    var wid = $(window).width();
    var feature = new Swiper('.feature', {
        effect: "coverflow",
        loopedSlides: 6,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        allowTouchMove: false,
        coverflowEffect: {
            rotate: 0,
            stretch: Math.floor(wid * 0.18),
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        autoplay: true,
        breakpoints: {
            992: {
                allowTouchMove: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                },
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.feature_next',
            prevEl: '.feature_prev',
        },
    });

    // footer
    $("footer").load("https://ids.iwplay.com.tw/includ/footer/15.html");
});
