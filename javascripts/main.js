console.log('This would be the main JS file.');

$("#menu_toggle").click(function() {
  $(this).toggleClass("on");
  $(".selector").slideToggle();
});

