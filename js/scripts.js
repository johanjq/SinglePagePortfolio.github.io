$(document).ready(function() {
  $("#portofolio-button").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portofolio-section").offset().top
      },
      1500
    );
  });
});
