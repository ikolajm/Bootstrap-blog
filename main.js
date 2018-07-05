// scrollTop Function
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// USING SLIM JQUERY... ANIMATE WILL NOT FUNCTION (via stackoverflow)
