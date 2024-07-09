function invoice() {
    var orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
    var orderNo = document.getElementById('OrderNo').value;
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].orderNo === orderNo) {
            var head = "<table border=1>\n            <tr>\n            <th colspan=2 >Name: ".concat(orders[i].name, "</th>\n            </tr>\n            <tr>\n            <th colspan=2 >Order No.: ").concat(orders[i].orderNo, "</th>\n            </tr>\n            <tr>\n            <td>Address:</td>\n            <td>").concat(orders[i].shippingAddress, "</td>\n            </tr>\n            <tr>\n            <th >Items</th>\n            <th>Cost</th>\n            </tr>");
            var body = "";
            for (var j = 0; j < orders[i].items.length; j++) {
                var str = "<tr>\n                <td>".concat(orders[i].items[j], "</td>\n                <td>").concat(orders[i].costs[j], "</td>\n                </tr>");
                body += str;
            }
            var foot = "<tr>\n            <td>Total Amount</td>\n            <td>".concat(orders[i].totalAmount, "</td>\n            </tr></table>");
            var table = document.getElementById('display');
            if (table) {
                table.innerHTML = head + body + foot;
            }
        }
    }
}
function ToUpdate() {
    window.location.href = "./Update.html";
}
function ToPlaceOrder() {
    window.location.href = "./index.html";
}
