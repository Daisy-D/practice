$(".container").on("tap", ".lab", function (event) {
  var target = $(event.target);
  $(".lab").removeClass("active").addClass("other")
  target.removeClass("other").addClass("active");
  $(".go-back").css("display", "block");
  $(".logo").addClass("active")
})
$(".go-back").on("tap",function (event) {
  $(".lab").removeClass("active").removeClass("other")
  $(".go-back").css("display", "none");
  $(".logo").removeClass("active")
})

