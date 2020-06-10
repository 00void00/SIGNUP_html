function validateNAME() {
  var n = document.getElementById("firstname").value;
  var l = n.length;
  if (l < 2) {
    //since firstname cannot be of one alphabet
    alert("enter correct name");
    return false;
  } else {
    return true;
  }
}
function validatePHONE() {
  var pno = document.getElementById("phone").value;
  var syn = /^\d(3)-\d(3)-\d(4)$/;
  if (syn.test(pno)) 
  {
    return true;
  }
  else 
  {
    alert("invalid phone number format");
    return false;
  }
}

function validatePASS() 
{
  var psw1 = document.getElementById("password").value;
  var psw2 = document.getElementById("re-password").value;
  if (psw1 == psw2) 
  {
    //returns ture if passwords entered by user matches
    return true;
  } 
  else 
  {
    alert("password entered does not match");
    return false;
  }
}

document.write("FILL THE FORM");
