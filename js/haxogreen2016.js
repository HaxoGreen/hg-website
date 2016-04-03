!function ($) {

  $(function(){

    countdown();
    setInterval(function() {
      countdown();
    }, 3600000);

  });
}(window.jQuery);

function countdown () {

  var HaxoGreenStart = moment([2016, 6, 28]);
  var today = moment();
  $('.countdown').text( HaxoGreenStart.diff( today, 'days' ) );

}
