var 버튼 = $(".tab-button");

// for (let i = 0; i < $(".tab-button").length; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

$('.list').click(function(e){
    탭열기(e.target.dataset.id)
})

function 탭열기(구멍) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(구멍).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(구멍).addClass("show");
}
