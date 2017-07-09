// formDataObject
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
  });
}

// gatherData
function gatherData(){
  console.log("you are inside gatherData");
  console.log("here is your object", formDataObject);
  formDataObject.firstName = $('#inputFirstName').val();
  formDataObject.lastName = $('#inputLastName').val();
  formDataObject.email = $('#inputEmail').val();
  formDataObject.company = $('#inputCompany').val();
  formDataObject.title = $('#inputTitle').val();
  formDataObject.country = $('#inputCountry').val();
  formDataObject.state = $('#inputState').val();
  formDataObject.comments = $('#inputComments').val();
  console.log("here is your object again", formDataObject);
  displayFormData();
}

// display object
function displayFormData(){
  console.log("you are inside displayFormData");
}

// clear form
