

function loginFunction() {

var email = document.getElementById("emailInput").value;
var password = document.getElementById("passwordInput").value;

    console.log(email+"  "+password);

if(email == null || password == null || email == "" || password == "")
    {
        alert("Please Enter Email and Password");
        return false;
    }
else{
    document.getElementById("myLabel").innerHTML = email+" is now Logged In";
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
    return false;
}
}
function signup() {

    var fName = document.getElementById("firstNameInput").value;
    var lName = document.getElementById("lastNameInput").value;;
    alert("Congratulations!! User "+fName+" "+lName+" has been successfully registered!!");

}

function fPassFunction() {

var recoveryEmail = document.getElementById("recoveryEmailInput").value;

if(recoveryEmail == null || recoveryEmail == "")
    {
        alert("Please Enter Valid Email");
        return false;
    }
else{
    document.getElementById("myfPassLabel").innerHTML = "A recovery link is sent to: " + recoveryEmail;
    document.getElementById("recoveryEmailInput").value = "";
    return false;
}
}

function zipCheck(zipInput){

    if (zipInput.value == ""){
        zipInput.setCustomValidity("Zip Code required");
    }

   if(Number(zipInput.value) !== NaN && zipInput.value.toString().length == 5){
        zipInput.setCustomValidity('');
    }

   else {
       zipInput.setCustomValidity("Invalid Zip Code!");
   }
    return true;
}


