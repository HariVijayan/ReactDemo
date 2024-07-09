var orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
var num = 0;
function placeOrder() {
    var name1 = document.getElementById('UserName').value;
    var orderNo1 = document.getElementById('OrderNo').value;
    var items1;
    items1 = [];
    var costs1;
    costs1 = [];
    var totalAmount1 = 0;
    for (var i = 0; i <= num; i++) {
        var item1 = document.getElementsByClassName('items')[i].value;
        var cost1 = parseInt(document.getElementsByClassName('cost')[i].value);
        items1.push(item1);
        costs1.push(cost1);
        totalAmount1 += cost1;
    }
    var shippingAddress1 = document.getElementById('addr').value;
    var temp = {
        name: name1,
        orderNo: orderNo1,
        items: items1,
        costs: costs1,
        totalAmount: totalAmount1,
        shippingAddress: shippingAddress1
    };
    orders.push(temp);
    console.log(temp);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Order Placed Successfully!!!');
    ToPlaceOrder();
}
function ToInvoice() {
    window.location.href = "./Invoice.html";
}
function ToUpdate() {
    window.location.href = "./Update.html";
}
function ToPlaceOrder() {
    window.location.href = "./index.html";
}
function addMore() {
    var addMore = document.getElementById("items");
    var items = document.createElement('input');
    items.setAttribute('class', 'items');
    items.setAttribute('type', 'text');
    var cost = document.createElement('input');
    cost.setAttribute('class', 'cost');
    cost.setAttribute('type', 'number');
    addMore.appendChild(document.createElement('br'));
    addMore.append('Item: ');
    addMore.appendChild(items);
    addMore.append('Cost: ');
    addMore.appendChild(cost);
    num++;
}
