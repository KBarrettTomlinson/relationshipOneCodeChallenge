// global var should be an instance of a class
var formDataObject = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  title: '',
  country: '',
  state: '',
  comments: ''
};

// document ready
$(document).ready(function(){
  console.log("I'm Here For You");
  eventListener();
});

// eventListener
function eventListener(){
  $( '#infoForm' ).on( 'submit', function(event){
    event.preventDefault();
    console.log("you've clicked submit");
    gatherData();
    displayTable();
  });

  $( '#saveAndClear').on( 'click', function(){
    console.log("your clicked saveAndClear");
    saveData();
    clearForm();
    hideTable();
  });

  $( '#deleteAndClear').on( 'click', function(){
    console.log("your clicked deleteAndClear");
    clearForm();
    hideTable();
  });
}

// gatherData
function gatherData(){
  formDataObject.firstName = $('#inputFirstName').val();
  formDataObject.lastName = $('#inputLastName').val();
  formDataObject.email = $('#inputEmail').val();
  formDataObject.company = $('#inputCompany').val();
  formDataObject.title = $('#inputTitle').val();
  formDataObject.country = $('#inputCountry').val();
  formDataObject.state = $('#inputState').val();
  formDataObject.comments = $('#inputComments').val();
}

// display object
function displayTable(){
  console.log("you are inside displayTable");
  $.each(formDataObject, function(key, value){
    console.log("key then value", key, value);
    if (value === ''){
      //hide the row
      $( '#'+key+'Row').hide();
    }
    else{
      //append value to the table
      $( '#'+key+'Output').text(value);
    }
  });//ends each loop
  $( '#confirmDiv' ).show();
  $('html, body').animate({
    scrollTop: $("#confirmDiv").offset().top
  }, 1000);
}

// save data
function saveData(){
  // if we were to be sending this data to a server, we would do it here
  console.log("inside saveData");
  emptyFormDataObject();
}

// empty data object
function emptyFormDataObject(){
  console.log("inside emptyFormDataObject");
  formDataObject.firstName = '';
  formDataObject.lastName = '';
  formDataObject.email = '';
  formDataObject.company = '';
  formDataObject.title = '';
  formDataObject.country = '';
  formDataObject.state = '';
  formDataObject.comments = '';
}

// clear form
function clearForm(){
  console.log("inside clearForm");
  $('#inputFirstName').val('');
  $('#inputLastName').val('');
  $('#inputEmail').val('');
  $('#inputCompany').val('');
  $('#inputTitle').val('');
  $('#inputCountry').val('');
  $('#inputState').val('');
  $('#inputComments').val('');
}

// hide table
function hideTable(){
  console.log("inside hideTable");
  $.each(formDataObject, function(key, value){
      $( '#'+key+'Row').show();
  });//ends each loop
  $('html, body').animate({
    scrollTop: $("#contentContainer").offset().top
  }, 1000);
  $( '#confirmDiv' ).hide();
}
