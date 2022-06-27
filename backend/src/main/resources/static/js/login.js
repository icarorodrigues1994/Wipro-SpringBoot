var  logar = document.querySelector('#userName')
var senha = document.querySelector('#password')
var divErr = document.getElementById('error');
var errText = document.getElementById('errorText');
var errorMessage = document.createElement("span");

/*function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}*/

function showErr(text){
    divErr.style.display = 'block'
    errText.textContent = text;
}



function getLogin(){

    let login = logar.value;
    let password = senha.value;

    if (login === "" && password === ""){
        errorMessage= "User Name is mandatory / Password is mandatory"
        showErr(errorMessage);
        return;
     } 
     

    if (login === ""){
        errorMessage = "User Name is mandatory ";
        showErr(errorMessage);
       return;
    }   

    const regex = /[0-9]/;
    if (regex.test(login) === false && password === ""){
        errorMessage =  "User Name must be alphanumeric / Password is mandatory";
        showErr(errorMessage);
        return;
    }

    if(password === ""){
       errorMessage = "Password is mandatory";
       showErr(errorMessage);
       return;
    }

    if (regex.test(login) === false){
        errorMessage = "User Name must be alphanumeric";
        showErr(errorMessage); 
        return;
    }

    loginAdmin(login,password);
   
};



function loginAdmin(login, password){
    $.ajax({
        url: "http://localhost:8080/courierServices/validationPassword/" +login+ "/" + password,
        method:'GET',

    }).done(function(respost){
        if(respost === false){
            errorMessage = "Invalid Login credentials";
            showErr(errorMessage);
            return;
        }else{
            window.location.assign("listOrder.html");
        }
    
        
})

}