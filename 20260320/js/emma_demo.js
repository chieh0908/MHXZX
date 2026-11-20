$(function () {
  $(".login a").click(function () {
    $(".login").hide();
    $(".login_after").show();
  });

  $(".logout").click(function () {
    $(".login_after").hide();
    $(".login").show();
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const img = document.getElementById("start");
//   const btn = document.getElementById("start_btn");
//   const modalEl = document.getElementById("resultModal");
//   const modal = new bootstrap.Modal(modalEl);

//   const originalImg =
//     "https://images1.iwplay.com.tw/image/pwm/events/20250724/image/event02_ball_btn_start.png"; // 原本靜態圖
//   const animatedImg =
//     "https://images1.iwplay.com.tw/image/pwm/events/20250724/image/event02_ball_btn.png"; // 動畫 APNG 圖
//   const endImg =
//     "https://images1.iwplay.com.tw/image/pwm/events/20250724/image/event02_ball_btn_end.png"; // 結束圖

//   btn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // 換成動畫圖片
//     img.src = animatedImg;

//     const apngDuration = 1400;

//     setTimeout(() => {
//       modal.show();
//     }, apngDuration);
//   });

//   // 當 Modal 開啟後就換回原圖
//   modalEl.addEventListener("shown.bs.modal", () => {
//     img.src = endImg;
//     $(".event2_txt1").addClass("none");
//     $(".event2_txt2").removeClass("none");
//   });
// });
