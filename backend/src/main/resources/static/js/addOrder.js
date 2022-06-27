let ifirstNamePersonSend = document.querySelector("#senderFirstName");
let icityPersonSend = document.querySelector("#senderCity");
let ilastNamePersonSend = document.querySelector("#senderLastName");
let iagePersonSend = document.querySelector("#senderAge");
let imobilePersonSend = document.querySelector("#senderContact");
let iaddressPersonSend = document.querySelector("#senderAddress");
let izipCodePersonSend = document.querySelector("#senderZipCode");
let istatePersonSend = document.querySelector("#senderState");

let ifirstNamePersonReceived = document.querySelector("#recipientFirstName");
let icityPersonReceived = document.querySelector("#recipientCity");
let ilastNamePersonReceived = document.querySelector("#recipientLastName");
let iagePersonReceived = document.querySelector("#recipientAge");
let imobilePersonReceived = document.querySelector("#recipientContact");
let iaddressPersonReceived = document.querySelector("#recipientAddress");
let izipCodePersonReceived = document.querySelector("#recipientZipCode");
let istatePersonReceived = document.querySelector("#recipientState");

let orderDate = document.querySelector("#orderDate");
let weight = document.querySelector("#weight");
 
let errorLabel = document.getElementById("errorLabel");
let errorDiv = document.getElementById("error");
let costLabel = document.getElementById("cost");


function cancel(){
    window.location.assign("listOrder.html");

}


 function placeOrder(){
    
    removeBorder();
    errorLabel.innerHTML = null;
    
    
    if(validationOrder()){
        
        let weightValue = parseFloat(weight.value)
        let cost =  weightValue * 10;
        
        
        let year = orderDate.value.substring(0, 4);
        let month = orderDate.value.substring(5, 7);
        let day = orderDate.value.substring(8, 11);
        let date = month +"-"+ day +"-"+ year;

        const addressSendDetails = {
            "street":iaddressPersonSend.value,
            "city":icityPersonSend.value,
            "state":istatePersonSend.options[istatePersonSend.selectedIndex].text,
            "zipCode":izipCodePersonSend.value
        }

        const addressReceivedDetails = {
            "street":iaddressPersonReceived.value,
            "city":icityPersonReceived.value,
            "state":istatePersonReceived.options[istatePersonReceived.selectedIndex].text,
            "zipCode":izipCodePersonReceived.value
        }

        const personSendDetails ={
            "firstName":ifirstNamePersonSend.value,
            "lastName":ilastNamePersonSend.value,
            "age":iagePersonSend.value,
            "mobile":imobilePersonSend.value,
            "address":addressSendDetails
        }

        const personReceivedDetails ={
            "firstName":ifirstNamePersonReceived.value,
            "lastName":ilastNamePersonReceived.value,
            "age":iagePersonReceived.value,
            "mobile":imobilePersonReceived.value,
            "address":addressReceivedDetails
        }

        const order = {
            "orderStatus":"open",
            "orderDate": date,
            "weight": weightValue,
            "cost":cost,
            "personReceived": personReceivedDetails,
            "personSend":personSendDetails
        }   
        
           
            saveOrderAndRedirectPage(order);
    }
  
    
    }






    function validationOrder(){
        bool = true;
        if(ifirstNamePersonSend.value.length < 3){
            errorLabel.innerHTML = "Sender's First name must be atleast 3 chars long <br>";
            errorDiv.style.display = 'block'
            addBorder("senderFirstName");
            bool = false;
        }
    
        if(ilastNamePersonSend.value.length < 3){
            errorLabel.innerHTML = errorLabel.innerHTML + "Sender's Last name must be atleast 3 chars long <br> ";
            errorDiv.style.display = 'block'
            addBorder("senderLastName");
            bool = false;
        }
    
        if(icityPersonSend.value === ""){
            errorLabel.innerHTML = errorLabel.innerHTML + "Invalid Sender City <br> ";
            errorDiv.style.display = 'block'
            addBorder("senderCity");
            bool = false;
        }
    
        if(iagePersonSend.value < 18 || !isIntegerNumber(iagePersonSend.value)){
            errorLabel.innerHTML = errorLabel.innerHTML +"Sender's age must be > 18 and must be Numeric Integer Value <br>";
            errorDiv.style.display = 'block'
            addBorder("senderAge");
            bool = false;
        }
    
        if(imobilePersonSend.value.length < 10){
            errorLabel.innerHTML = errorLabel.innerHTML + "Sender's mobile must be of 10 digits <br>";
            errorDiv.style.display = 'block'
            addBorder("senderContact");
            bool = false;
        }
    
        if(izipCodePersonSend.value.length < 6){
            errorLabel.innerHTML = errorLabel.innerHTML + "Sender's zip code must be of 6 digits <br>";
            errorDiv.style.display = 'block'
            addBorder("senderZipCode");
            bool = false;
        }
    
    
    
        if(ifirstNamePersonReceived.value.length < 3){
            errorLabel.innerHTML = errorLabel.innerHTML + "Receiveder's First name must be atleast 3 chars long <br>";
            errorDiv.style.display = 'block'
            addBorder("recipientFirstName");
            bool = false;
        }
    
        if(ilastNamePersonReceived.value.length < 3){
            errorLabel.innerHTML = errorLabel.innerHTML + "Receiveder's Last name must be atleast 3 chars long <br>";
            errorDiv.style.display = 'block'
            addBorder("recipientLastName");
            bool = false;
        }
    
        if(icityPersonReceived.value === ""){
            errorLabel.innerHTML = errorLabel.innerHTML + "Invalid Received City <br> ";
            errorDiv.style.display = 'block'
            addBorder("recipientCity");
            bool = false;
        }
    
        if(iagePersonReceived.value < 18 || !isIntegerNumber(iagePersonReceived.value)){  
            errorLabel.innerHTML = errorLabel.innerHTML +"Receiveder's age must be > 18 and must be Numeric Integer Value <br>";
            errorDiv.style.display = 'block'
            addBorder("recipientAge");
            bool = false;
        }
    
        if(imobilePersonReceived.value.length < 10){
            errorLabel.innerHTML = errorLabel.innerHTML + "Receiveder's mobile must be of 10 digits <br>";
            errorDiv.style.display = 'block'
            addBorder("recipientContact");
            bool = false;
        }
    
        if(izipCodePersonReceived.value.length < 6){
            errorLabel.innerHTML = errorLabel.innerHTML + "Receiveder's zip code must be of 6 digits <br>";
            errorDiv.style.display = 'block'
            addBorder("recipientZipCode");
            bool = false;
        }
    
        if(orderDate.value === ""){
            errorLabel.innerHTML = errorLabel.innerHTML + "Order date is required <br>";
            errorDiv.style.display = 'block'
            addBorder("orderDate");
            bool = false;
         
        }
    
        if(weight.value === "" || weight.value < 0 || isNaN(weight.value)){
            errorLabel.innerHTML = errorLabel.innerHTML + "Invalid weight <br>";
            errorDiv.style.display = 'block'
            addBorder("weight");
            bool = false;
        } else{
            let cost = weight.value * 10;
            if(cost > 99999){
            errorLabel.innerHTML = errorLabel.innerHTML + "Invalid cost (must be < 99.999)";
            errorDiv.style.display = 'block';
            costLabel.style.color = "red";
            bool = false;
            }
            
           
            costLabel.innerHTML = cost + ".00"

            return bool;
           
            
        }
        
    }


    function removeBorder(){
        let firstNamePersonSend = document.getElementById("senderFirstName");
        firstNamePersonSend.classList.remove("ErrorBorder");    
        let cityPersonSend = document.getElementById("senderCity");
        cityPersonSend.classList.remove("ErrorBorder");
        let lastNamePersonSend = document.getElementById("senderLastName");
        lastNamePersonSend.classList.remove("ErrorBorder");
        let agePersonSend = document.getElementById("senderAge");
        agePersonSend.classList.remove("ErrorBorder");
        let mobilePersonSend = document.getElementById("senderContact");
        mobilePersonSend.classList.remove("ErrorBorder");
        let addressPersonSend = document.getElementById("senderAddress");
        addressPersonSend.classList.remove("ErrorBorder");
        let zipCodePersonSend = document.getElementById("senderZipCode");
        zipCodePersonSend.classList.remove("ErrorBorder");

        let firstNamePersonReceived = document.getElementById("recipientFirstName");
        firstNamePersonReceived.classList.remove("ErrorBorder");
        let cityPersonReceived = document.getElementById("recipientCity");
        cityPersonReceived.classList.remove("ErrorBorder");
        let lastNamePersonReceived = document.getElementById("recipientLastName");
        lastNamePersonReceived.classList.remove("ErrorBorder");
        let agePersonReceived = document.getElementById("recipientAge");
        agePersonReceived.classList.remove("ErrorBorder");
        let mobilePersonReceived = document.getElementById("recipientContact");
        mobilePersonReceived.classList.remove("ErrorBorder");
        let addressPersonReceived = document.getElementById("recipientAddress");
        addressPersonReceived.classList.remove("ErrorBorder");
        let zipCodePersonReceived = document.getElementById("recipientZipCode");
        zipCodePersonReceived.classList.remove("ErrorBorder");

        let orderDate = document.getElementById("orderDate");
        orderDate.classList.remove("ErrorBorder");
        let weight = document.getElementById("weight");
        weight.classList.remove("ErrorBorder");
        costLabel.style.color = "black"
    }



    function addBorder(ElementId){
        let element = document.getElementById(ElementId);
        element.classList.add("ErrorBorder"); 
    }


    function isIntegerNumber(valor) {
        var regra = /^[0-9]+$/;
        if (valor.match(regra)) {
          return true;
        }else{
            return false;
        }
      }; 


      
    function saveOrderAndRedirectPage(order){
        
        
        $.ajax({
            url: 'http://localhost:8080/courierServices/saveOrder',
            method:'post',
            processData:false,
            contentType:'application/json',
            data:JSON.stringify({
                "orderStatus":"open",
                "orderDate": order.orderDate,
                "weight": order.weight,
                "cost": order.cost,
                "personReceived": order.personReceived,
                "personSend": order.personSend
            })
            
        }).done(function(respost){
            window.location.assign("listOrder.html");
        })
    }


        