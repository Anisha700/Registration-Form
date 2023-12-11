function validation() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var emails = document.getElementById("emails").value;
  
    if (first == "") {
        alert("Please fill the Name field");
        return false;
    }
    if (last == "") {
        alert("Please fill the Name field");
        return false;
    }
  
  
    if (emails == "") {
        alert("Please fill the email id field");
        return false;
    }
    if (emails.indexOf("@") <= 0 || (emails.charAt(emails.length - 4) != "." && emails.charAt(emails.length - 3) != ".")) {
        alert("Invalid Email");
        return false;
    }
    if (pass == "") {
        alert("Please fill the password field");
        return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
        alert("Passwords length must be between 5 and 20");
        return false;
    }
  
    if (pass != confirmpass) {
        alert("Password Mismatch");
        return false;
    }
  
    if (confirmpass == "") {
        alert("Please fill the confirm password field");
        return false;
    }
  
    // Registration successful, show popup message
    alert("Your account has been created successfully!");
  
    // Continue with form submission or other actions if needed
    return true;
  }



