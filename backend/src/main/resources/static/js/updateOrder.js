
let updateOrder = localStorage.getItem('updateOrder');
let divRefer = document.getElementById('divRefer');
let div = document.createElement("div");

let delivered = document.getElementById("#delivered");
let cancelled = document.getElementById("#cancelled");

let istatus = document.querySelector(".status")
let idateDelivered = document.querySelector(".date")



updateOrder = updateOrder.toString();


function cancel(){
    window.location.assign("listOrder.html");
}



 function save(){
        
    var opcaoTexto = istatus.options[istatus.selectedIndex].text;
    let year = idateDelivered.value.substring(0, 4);
    let month = idateDelivered.value.substring(5, 7);
    let day = idateDelivered.value.substring(8, 11);

    let date = month +"-"+ day +"-"+ year
    
    saveAndupdateOrder(opcaoTexto,date);
       

}

function saveAndupdateOrder(opcaoTexto,date){

    var opcaoTextoOrder = opcaoTexto.toString();
    var deliveredDateOrder = date.toString();
    
    $.ajax({
        url: 'http://localhost:8080/courierServices/updateOrder/' + updateOrder,
        method:'put',
        processData:false,
        contentType:'application/json',
        data:JSON.stringify({
            "orderStatus": opcaoTextoOrder,
            "deliveredDate": deliveredDateOrder
        })
        
    }).done(function(respost){
        window.location.assign("listOrder.html");
    })
}


    function main(){
        divRefer.appendChild(div);
        div.className = "dataRow";
        div.innerHTML = `
        <label for="" class="labelText">Order Number</label>
        <label for="" class="labelText" style="color:gray">${updateOrder}</label>
       
        `;
    }


    main();
   












    

