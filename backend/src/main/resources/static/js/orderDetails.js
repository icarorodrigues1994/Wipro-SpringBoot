

function moldAllBoxDetails(order) {

    const detailsBox = document.querySelector("#detailsBox");
    const personSend = order.personSend;
    const personReceived = order.personReceived;

    var headerOrderNumber = moldOrderNumber(order.orderNumber);
    var headerPersonSendDetails = moldPersonDetails("Sender Details", personSend);
    var headerPersonReceivedDetails = moldPersonDetails("Received Details", personReceived);
    var headerFeatureOrder = moldFeatureOrder(order);

    detailsBox.appendChild(headerOrderNumber);
    detailsBox.appendChild(headerPersonSendDetails);
    detailsBox.appendChild(headerPersonReceivedDetails);
    detailsBox.appendChild(headerFeatureOrder);

}

function home(){
    window.location.assign("index.html");
}

function moldOrderNumber(orderNumber) {
    var header = document.createElement("header");
    header.className = "orderDetails";
    header.innerHTML = `
        <div class="dataRow">
            <label for="" class="labelText">Order Number</label>
            <label for="" class="labelText">${orderNumber}</label>
        </div>
    `;
    return header;
}

function moldPersonDetails(personDetailsTitle, person) {

    var header = document.createElement("header");
    header.className = "orderDetails";
    header.innerHTML =
        `
        <span class="boxRotulo">${personDetailsTitle}</span>
    `;
    var divRowOne = document.createElement("div");
    divRowOne.className = "dataRow";
    divRowOne.appendChild(moldRowDetails("First Name", person.firstName));
    divRowOne.appendChild(moldRowDetails("Last Name", person.lastName));

    var divRowTwo = document.createElement("div");
    divRowTwo.className = "dataRow";
    divRowTwo.appendChild(moldRowDetails("Address", person.address.street));
    divRowTwo.appendChild(moldRowDetails("City", person.address.city));

    var divRowThree = document.createElement("div");
    divRowThree.className = "dataRow";
    divRowThree.appendChild(moldRowDetails("State", person.address.state));
    divRowThree.appendChild(moldRowDetails("Zip", person.address.zipCode));

    var divRowFour = document.createElement("div");
    divRowFour.className = "dataRow";
    divRowFour.appendChild(moldRowDetails("Age", person.age));
    divRowFour.appendChild(moldRowDetails("Mobile", person.mobile));

    header.appendChild(divRowOne);
    header.appendChild(divRowTwo);
    header.appendChild(divRowThree);
    header.appendChild(divRowFour);

    return header;

}

function moldFeatureOrder(order) {


    var statusDelivered = order.orderStatus === "delivered" ? order.deliveredDate : "";

    var header = document.createElement("header");
    header.className = "orderDetails";


    var divRowOne = document.createElement("div");
    divRowOne.className = "dataRow";
    divRowOne.appendChild(moldRowDetails("Weight", order.weight));
    divRowOne.appendChild(moldRowDetails("Cost", order.cost));

    var divRowTwo = document.createElement("div");
    divRowTwo.className = "dataRow";
    divRowTwo.appendChild(moldRowDetails("Status", order.orderStatus));

    var divRowThree = document.createElement("div");
    divRowThree.className = "dataRow";
    divRowThree.appendChild(moldRowDetails("Order Date", order.orderDate));
    divRowThree.appendChild(moldRowDetails("Delivered On", statusDelivered));

    header.appendChild(divRowOne);
    header.appendChild(divRowTwo);
    header.appendChild(divRowThree);

    return header;
}


function moldRowDetails(labelTitle, labelDetail) {

    var divRowDetails = document.createElement("div");
    divRowDetails.className = "rowDetails";
    divRowDetails.innerHTML = `
        <label for="" class="labelText">${labelTitle}</label>
        <label for="">${labelDetail}</label>
    `;
    return divRowDetails;
}


function main() {
   

    let orderDetails = localStorage.getItem('orderDetails');
    if (orderDetails != null) {
        orderDetails = JSON.parse(orderDetails);
        moldAllBoxDetails(orderDetails);
        localStorage.clear(); 
   
}
}

main();
