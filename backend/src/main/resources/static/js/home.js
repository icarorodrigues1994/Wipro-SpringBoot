
var inputOrderId = document.getElementById('orderId');
var divErr = document.getElementById('error');
var errText = document.getElementById('errorText');

function getOrder() {
    var input = inputOrderId.value.trim();

    if (input.length > 0) {
        divErr.style.display = 'none';

        if(isNaN(input)){
            showErr("Order Number should be numeric");
        }else{
            trackOrder(input);
        }

    } else  {

       showErr("Order Number should be Mandatory");
    }
}

function showErr(text){
    divErr.style.display = 'block'
    errText.textContent = text;
}

async function fecthOrderService(orderNumber) {
    const url_api = `http://localhost:8080/courierServices/${orderNumber}`;
    
    return await fetch(url_api).then(async (r) => r.json()).catch(
       () => showErr("Invalid Order Number") 
    )
}

async function trackOrder(orderNumber) {
    var order = await fecthOrderService(orderNumber);
    if (order != null) {
        const orderDetails = {
            "id": order.id,
            "orderNumber": order.orderNumber,
            "orderStatus": order.orderStatus,
            "orderDate": order.orderDate,
            "deliveredDate": order.deliveredDate,
            "weight": order.weight,
            "cost": order.cost,
            "personSend": order.personSend,
            "personReceived": order.personReceived
        }
        
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        
        inputOrderId.value = "";

        // Esse redirecionamento tem que melhorar na rota
        window.location.assign("orderDetails.html");
    }
}