$(document).ready(function () {

  // Set active navigation tabs
  var path = window.location.pathname;
  path = path.substring(0, path.length - 1);
  var active_links = $('li>a[href="' + path + '"]');

  active_links.parent().addClass('active');
  active_links.parents('.collapsible-body').prev().addClass('active');

  $('a.focus-on-target').on('click', function() {
    var dom = $($(this).attr('href'));
    dom.addClass('animate').addClass('z-depth-5');
    setTimeout(function () {dom.removeClass('z-depth-5');}, 5000);
  });

});
