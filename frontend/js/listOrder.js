
let tabela = document.getElementById("table");
let tableDetails = document.getElementById("divmMain");
let container = document.getElementById("noorders");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
var header = document.createElement("header");
header.className = "orderDetailsList";

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return JSON.parse(request.response)
}

function addId (j,i,tag){
    
    if (j === 0){tag.id = "orderId" + (i+1)}
    if (j === 1){tag.id = "orderDate" +  (i+1)}
    if (j === 2){tag.id = "senderState" + (i+1)}
    if (j === 3){tag.id = "recpientState" +  (i+1)}
    if (j === 4){tag.id = "orderStatus" +  (i+1)}
    if (j === 5){tag.id = "weight" +  (i+1)}
    if (j === 6){tag.id = "cost" +  (i+1)}
    
}

function logout(){
    window.location.assign("login.html");
}

function addOrder(){
    window.location.assign("addOrder.html");
}









let text = fazGet("http://localhost:8080/courierServices/allOrders");

if(text.length === 0){
    tableDetails.classList.add("tableDetails2"); 
    container.classList.remove("tableDetails2");
    container.classList.add("tableDetails");
    
} else {

let indiceTabela = ["Order ID","Order Date","Sender State","Recipient State","Order Status","Weight","Cost(@ Rs. 10/Kg)","Update Order"];
let linhaHead = document.createElement("tr");

for(let j=0; j<indiceTabela.length; j++){
    let th = document.createElement("th");
    th.textContent = indiceTabela[j];
    th.style.width = "150px";
    th.style.textAlign= "left";
    linhaHead.appendChild(th);
}

thead.appendChild(linhaHead);


for(let i = 0; i < text.length; i++) {
    let linhabody = ''
    linhabody = document.createElement("tr");

    var myArray = new Array(text[i].orderNumber, text[i].orderDate,text[i].personSend.address.state,text[i].personReceived.address.state,text[i].orderStatus,text[i].weight, 
        text[i].cost);
    
        for(let j = 0; j < 8; j++){
            if (j===7){
            let tag0 = document.createElement("td");
            
            tag0.style = "height: 35px;"

            if(text[i].orderStatus === "open"){
            let tag = document.createElement("input");
            tag.type = "submit";

            tag.onclick = function(){

                localStorage.setItem('updateOrder',text[i].orderNumber);
                window.location.assign("updateOrder.html");
                
            }

            tag.value="Update Order Status";
            tag.id="edit" + (i+1);
            tag.style="width: 130px; margin-top: 10px; margin-left: 5px; margin-bottom:9px;";

            tag0.appendChild(tag); 
            }
            linhabody.appendChild(tag0); 
     } 

        let tag = document.createElement("td");
        addId(j,i,tag);
        tag.textContent = myArray[j];
        linhabody.appendChild(tag);
    }

    tbody.appendChild(linhabody);
}

tabela.appendChild(thead);
tabela.appendChild(tbody);

}



