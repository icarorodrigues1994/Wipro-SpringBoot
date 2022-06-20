
let updateOrder = localStorage.getItem('updateOrder');
let divRefer = document.getElementById('divRefer');
let div = document.createElement("div");

let delivered = document.getElementById("#delivered");
let cancelled = document.getElementById("#cancelled");

let istatus = document.querySelector(".status")
let idateDelivered = document.querySelector(".date")

let order = fazGet("http://localhost:8081/courierServices/" + updateOrder);
updateOrder = updateOrder.toString();


function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function save(){
    var opcaoTexto = istatus.options[istatus.selectedIndex].text;
    console.log(opcaoTexto);
    console.log(idateDelivered.value);

    let year = idateDelivered.value.substring(0, 4);
    let month = idateDelivered.value.substring(5, 7);
    let day = idateDelivered.value.substring(8, 11);

    let date = month +"-"+ day +"-"+ year
    console.log(date);
    fazPut(opcaoTexto,date);

}

function cancel(){
    window.location.assign("listOrder.html");
}


function fazPut(orderStatus, orderDate){
    fetch("http://localhost:8081/courierServices/" + updateOrder,{

        headers:{
            "Content-Type":"application/json"
        },
        method:"PUT",
        body: JSON.stringify({
            orderStatus: orderStatus,
            deliveredDate: orderDate
        })

    })
    .then(function (res){console.log(res)})
    .catch(function (res){console.log(res)})
    }


    /*window.location.assign("listOrder.html");*/




    
    
    order = JSON.parse(order);
    console.log(order);

    console.log(istatus.value);
    idateDelivered.value = order.deliveredDate;

    divRefer.appendChild(div);
    div.className = "dataRow";
    div.innerHTML = `
    <label for="" class="labelText">Order Number</label>
    <label for="" class="labelText" style="color:gray">${updateOrder}</label>
   
    `;












    

