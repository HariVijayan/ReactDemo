function update() {
    var orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
    var orderNo = document.getElementById('OrderNo').value;
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].orderNo === orderNo) {
            orders[i].shippingAddress = document.getElementById('addr').value;
            alert('Address Updated Successfully');
            localStorage.setItem('orders', JSON.stringify(orders));
            ToUpdate();
        }
    }
    alert('No Order No. found!!');
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
