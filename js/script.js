function validateForm()  {
  var x = document.forms["myForm"]["email"].value;
  var y = document.forms["myForm"]["message"].value;

  if(x == "" || y == ""){
    alert("Email and comment must be filled out");
    return false;
  }
  else{
    alert("Thank you, We will contact you within a day or 2 upon receiving your contact");
  }

}
function warning() {
 alert("Wish To you see later");
}
