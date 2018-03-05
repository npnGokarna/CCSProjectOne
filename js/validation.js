

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


