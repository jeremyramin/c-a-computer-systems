(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
      }
    );

    $('.scrollspy').scrollSpy();

    $('.tooltipped').tooltip({delay: 50});

    $('.slider').slider({full_width: true});

    $('.collapsible').collapsible();

    $('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space
