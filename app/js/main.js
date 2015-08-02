$(document).ready(function () {

  // Set active navigation tabs
  var path = window.location.pathname;
  path = path.substring(0, path.length - 1);
  var active_links = $('li>a[href="' + path + '"]');

  active_links.parent().addClass('active');
  active_links.parents('.collapsible-body').prev().addClass('active');

});
