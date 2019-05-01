function validateForm()  {
  var x = document.forms["myForm"]["email"].value;
  var y = document.forms["myForm"]["message"].value;

  if(x == ""){
    alert("Email and comment must be filled out");
    return false;
  }

  if(y == ""){
    alert("Email and comment must be filled out");
    return false;
  }
}
function warning() {
 return "Do you want to leave this page?";
}
