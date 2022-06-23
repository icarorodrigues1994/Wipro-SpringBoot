
let updateOrder = localStorage.getItem('updateOrder');
let divRefer = document.getElementById('divRefer');
let div = document.createElement("div");

let delivered = document.getElementById("#delivered");
let cancelled = document.getElementById("#cancelled");

let istatus = document.querySelector(".status")
let idateDelivered = document.querySelector(".date")

let order = fazGet("http://localhost:8080/courierServices/" + updateOrder);

updateOrder = updateOrder.toString();


function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}


function cancel(){
    window.location.assign("listOrder.html");
}



 function save(){
        
    var opcaoTexto = istatus.options[istatus.selectedIndex].text;
    let year = idateDelivered.value.substring(0, 4);
    let month = idateDelivered.value.substring(5, 7);
    let day = idateDelivered.value.substring(8, 11);

    let date = month +"-"+ day +"-"+ year
    
    saveOrderAndRedirectPage(opcaoTexto,date);
       

}



async function fazPut(orderStatus, orderDate){
    return await fetch("http://localhost:8080/courierServices/" + updateOrder,{

        headers:{
            "Content-Type":"application/json"
        },
        method:"PUT",
        body: JSON.stringify({
            orderStatus: orderStatus,
            deliveredDate: orderDate
        })

    })
    .then(function (res){console.log(res)} )
    .catch(function (res){console.log(res)})
 
    }

    async function saveOrderAndRedirectPage(opcaoTexto,date){
        var order = await fazPut(opcaoTexto,date);
        window.location.assign("listOrder.html"); 
    }




    function main(){
        order = JSON.parse(order);
        idateDelivered.value = order.deliveredDate;
    
        divRefer.appendChild(div);
        div.className = "dataRow";
        div.innerHTML = `
        <label for="" class="labelText">Order Number</label>
        <label for="" class="labelText" style="color:gray">${updateOrder}</label>
       
        `;
    }


    main();
   












    

