// when the page is loaded
$(document).ready(function() {
  $('#showButton').on('click', showButtonHandler);
  $('#hideButton').on('click', hideButtonHandler);
  $('#hideButton').prop("disabled",true);
});

function showButtonHandler(event) { 
  // prevent the button from running its default behavior
  event.preventDefault();
  $('#hiddenImage').show();
  $('#showButton').prop("disabled",true);
  $('#hideButton').prop("disabled",false);
}

function hideButtonHandler(event) { 
  // prevent the button from running its default behavior
  event.preventDefault();
  $('#hiddenImage').hide();
  $('#hideButton').prop("disabled",true);
  $('#showButton').prop("disabled",false);
}
