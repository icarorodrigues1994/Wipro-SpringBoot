
var inputOrderId = document.getElementById('orderId');
var divErr = document.getElementById('err');
var errText = document.getElementById('errText');

function getOrder() {
    var input = inputOrderId.value.trim();

    if (input.length > 0) {
        divErr.style.display = 'none';

        if(isNaN(input)){
            showErr("O número do pedido deve ser numérico");
        }else{
            trackOrder(input);
        }

    } else  {
        console.log("Entrou aqui")
        showErr("O número do pedido deve ser obrigatório");
    }
}

function showErr(text){
    divErr.style.display = 'block'
    errText.textContent = text;
}

async function fecthOrderService(orderNumber) {
    const url_api = `http://localhost:8081/courierServices/${orderNumber}`;
    return await fetch(url_api).then(async (r) => r.json()).catch(
       () => showErr("Número de pedido inválido") // tenho que melhorar isso aqui
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
        console.log(orderDetails)
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        
        inputOrderId.value = "";

        // Esse redirecionamento tem que melhorar na rota
        window.location.assign("orderDetails.html");
    }
}