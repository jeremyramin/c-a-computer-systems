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

  var children = $('.stairs').children('a').toArray();
  var stairs = function(children) {
    if(children.length > 0) {
      var currentChild = $(children.shift());
      currentChild.addClass('z-depth-3');
      $(currentChild).one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {$(currentChild).removeClass('z-depth-3');});
      setTimeout(function() {stairs(children);}, 250);
    }
  };

  var width = $('#since').width();
  var max_width = $('.slider').width();
  setTimeout(function() {$('#since').animate({left: Math.max((max_width - width), 0)}, 2000, function() {stairs(children);});}, 1000);

});
