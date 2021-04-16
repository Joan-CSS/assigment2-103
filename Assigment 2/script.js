var productsName =prompt('Enter Products name:');
var quantity =prompt("Enter Quantity: ");
var price= prompt("Enter price of Products: ");

var priceFinal=Number(price)*.16;


document.getElementById('asg').innerHTML = `<h2> User information</h2>
<p><b> Products Name: </b> ${productsName}</p>
<p><b> Quantity:</b> ${quantity} </p>
<p><b> Price:</b> ${price} </p>
<p><b> final price with Mexico tax:</b> ${priceFinal} </p>`;