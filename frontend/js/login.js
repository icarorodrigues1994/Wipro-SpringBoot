const Ilogin = document.querySelector('#userName')
const Ipassword = document.querySelector('#password')
var divErr = document.getElementById('err');
var errText = document.getElementById('errText');
let errorMessage = document.createElement("span");

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function showErr(text){
    divErr.style.display = 'block'
    errText.textContent = text;
}



function getLogin(){
   
    if (Ilogin.value === "" && Ipassword.value === ""){
        errorMessage= "User Name is mandatory / Password is mandatory"
        showErr(errorMessage);
        return;
     } 
     

    if (Ilogin.value === ""){
        errorMessage = "User Name is mandatory ";
        showErr(errorMessage);
       return;
    } 

    const regex = /[0-9]/;
    if (regex.test(Ilogin.value) === false && password.value === ""){
        errorMessage =  "User Name must be alphanumeric / Password is mandatory";
        showErr(errorMessage);
        return;
    }

    if(Ipassword.value === ""){
       errorMessage = "Password is mandatory";
       showErr(errorMessage);
       return;
    }

    if (regex.test(Ilogin.value) === false){
        errorMessage = "User Name must be alphanumeric";
        showErr(errorMessage); 
        return;
    }

    
    let text = fazGet("http://localhost:8081/courierServices/validationPassword/" +Ilogin.value+ "/" +Ipassword.value)
    if(text === "false"){
        errorMessage = "Invalid Login credentials";
        showErr(errorMessage);
        return;
    }

     window.location.assign("listOrder.html");
};