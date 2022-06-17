
let tabela = document.getElementById("table");
let tableDetails = document.getElementById("divmMain");
let container = document.getElementById("container");
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

function logout(){
    window.location.assign("login.html");
}

let text = fazGet("http://localhost:8081/courierServices/allOrders");

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
    var myArray = new Array(text[i].id, text[i].orderDate,text[i].personSend.address.state,text[i].personReceived.address.state,text[i].orderStatus,text[i].weight, 
        text[i].cost);
    
        for(let j = 0; j < 8; j++){
            if (j===7){
            let tag = document.createElement("input");
            tag.type = "submit";
            tag.value="Update Order Status";
            tag.id="login" + i.toString();
            console.log(tag.id);
            tag.style="width: 150px; margin-top: 10px; margin-left: 5px; margin-bottom:9px;";
            linhabody.appendChild(tag);
            }

        let tag = document.createElement("td");
        tag.textContent = myArray[j];
        linhabody.appendChild(tag);
    }
    tbody.appendChild(linhabody);
}

tabela.appendChild(thead);
tabela.appendChild(tbody);

}


