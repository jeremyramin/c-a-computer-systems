(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    $('.dropdown-button').dropdown();
    
    $('.tooltipped').tooltip({delay: 50});

    $('.slider').slider({full_width: true});
    
    $('.collapsible').collapsible();
    
    $('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space