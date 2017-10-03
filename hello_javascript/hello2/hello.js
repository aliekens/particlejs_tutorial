// when the page is loaded
$(document).ready(function() {
  for( var i = 10; i > 0; i-- ) {
    $('#hello').append( "<p>" + i + "</p>" );
  }
  $('#hello').append( "<p>Hello World!</p>" );
});
