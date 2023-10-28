/* add Class img-first */
$(document).ready(function() {
  $(".post-body img:first").addClass("img-first").css({
    width: 0,
    height: 0,
    display: "none",
    visibility: "hidden"
  });
});
