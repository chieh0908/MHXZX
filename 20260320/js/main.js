// common
$(function () {

  // wow.js / container
  new WOW().init();

  // sec01
  // parallax.js
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);
  /*▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
               浮水印_tb_mob
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 350) {
            $('.noke_flex_sp').addClass('scroll')
        } else {
            $('.noke_flex_sp').removeClass('scroll')
        }
    });

    // btn_go
    $('.kv_zone .btn').click(function() {
        $('html,body').animate({
        scrollTop: $('.events_01').offset().top
        }, 300);
    });
  // sec02 
  // $(".event2 .join .faction .btn").click(function () {
  //   let faction = $(this).closest(".faction");
  //   let factionClass = faction.hasClass("f1") ? "f1" : "f2";

  //   $(".event2").addClass("active");
  //   $(".event2 .fire_light").removeClass("d-none");
  //   $(".event2 .step01").addClass("d-none");
  //   $(".event2 .step02").removeClass("d-none");

  //   $(".event2 .step02 .faction").addClass("d-none");
  //   $(`.event2 .step02 .${factionClass}`).removeClass("d-none");
  // });

  // popup
  function toggleContent(buttonSelector, contentSelector, hideSelectors, showClass) {
    $(buttonSelector).click(function() {
      $(hideSelectors).addClass('d-none');
      $(contentSelector).removeClass('d-none').addClass(showClass);
    });
  }

  // reward
  toggleContent('#btn_get', '.get', '#reward .title, #reward .info', 'd-block');
  toggleContent('#btn_success', '.success', '#reward .title, #reward .info', 'd-block');

  // notice
  toggleContent('#btn_rule', '.invite_rule', '#notice .title, #notice ol', 'd-block');
  toggleContent('#btn_notice', '.notice_list', '#notice .title, #notice ol', 'd-block');

  // feature
  // $(".feature .feature_bottom .btn").click(function () {
  //   var list = $(this).index();
  //   $(this).addClass("active").siblings().removeClass("active");
  //   $(".feature_img").eq(list).addClass("active").siblings().removeClass("active");
  // });

  // sec04 book interaction
  // $('.book_mm').on('click', function (e) {
  //   e.preventDefault();
  //   const index = $('.book_mm').index(this);
  //   $('.book_mm').removeClass('active').eq(index).addClass('active');
  //   setTimeout(function () {
  //     $('#book_open_modal').modal('show');
  //   }, 500);
  // });

  // $('.book_box .book_up1').click(function () {
  //   $('.book_open .book_open_img').attr('src', 'https://images1.iwplay.com.tw/image/xxa/events/20250917/image/events4/banner01.jpg');
  // });
  // $('.book_box .book_up2').click(function () {
  //   $('.book_open .book_open_img').attr('src', 'https://images1.iwplay.com.tw/image/xxa/events/20250917/image/events4/banner02.jpg');
  // });
  // $('.book_box .book_up3').click(function () {
  //   $('.book_open .book_open_img').attr('src', 'https://images1.iwplay.com.tw/image/xxa/events/20250917/image/events4/banner03.jpg');
  // });
  // $('.book_box .book_up4').click(function () {
  //   $('.book_open .book_open_img').attr('src', 'https://images1.iwplay.com.tw/image/xxa/events/20250917/image/events4/banner04.jpg');
  // });

  // $(document).on('click', '.dw_btn_close', function () {
  //   $('.book_mm').removeClass('active');
  // });
  // event4 book
  $('.book_mm').on('click', function (e) {
        e.preventDefault(); // 阻止 <a> 跳轉

        const $this = $(this);
        const index = $('.book_mm').index(this); //在.book_mm集合內 計算順位

        // 書本翻開
        $('.book_mm').removeClass('active').eq(index).addClass('active');


        // 延遲 0.5 秒再開燈箱
        setTimeout(function () {
            //const href = $this.find('a').data('href');
            //const target = $this.find('a').data('target');
            // lity(target || href );
            // 手動開啟 Lity
            $('#book_open_modal').modal('show');


        }, 500);
  });


  /*▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
              抓連結
  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀*/
  $('.book_box .book_up1').click(function () {
      $('.book_open .book_open_img').attr('src', '');
      $('.book_open .book_open_img').attr('src', './images/event3/event3_banner01.jpg');
  });

  $('.book_box .book_up2').click(function () {
      $('.book_open .book_open_img').attr('src', '');
      $('.book_open .book_open_img').attr('src', './images/event3/event3_banner02.jpg');
  });

  $('.book_box .book_up3').click(function () {
      $('.book_open .book_open_img').attr('src', '');
      $('.book_open .book_open_img').attr('src', './images/event3/event3_banner03.jpg');
  });

  $('.book_box .book_up4').click(function () {
      $('.book_open .book_open_img').attr('src', '');
      $('.book_open .book_open_img').attr('src', './images/event3/event3_banner04.jpg');
  });
  $('.book_box .book_up5').click(function () {
      $('.book_open .book_open_img').attr('src', '');
      $('.book_open .book_open_img').attr('src', './images/event3/event3_banner05.jpg');
  });





  // 關閉燈箱時收書
  $(document).on('click', '.dw_btn_close', function () {
      $('.book_mm').removeClass('active');
  });

  // footer
  $("footer").load("https://ids.iwplay.com.tw/includ/footer/15.html");

});