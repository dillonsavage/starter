(function ($) {
  $(document).ready(function() {
    var pids = [];
    $('.project').each(function() {
      pids.push(parseInt($(this).attr('id')));
    });
    var max = Math.max.apply(Math, pids);
    $('.project').css('width', Math.round(100/max)-2 + '%');
  });
}) (jQuery);