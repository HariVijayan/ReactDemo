var select = document.querySelectorAll('.currency');
var submit = document.getElementById('submit');
var amount = document.getElementById('amount');
fetch('https://api.frankfurter.app/currencies')
    .then(function (res) { return res.json(); })
    .then(function (res) { return displayDropDown(res); });
function displayDropDown(res) {
    var curr = Object.entries(res);
    for (var i = 0; i < curr.length; i++) {
        var opt = "<option value=\"".concat(curr[i][0], "\">").concat(curr[i][0], "</option>");
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}
if (submit) {
    submit.addEventListener('click', function () {
        var curr1 = select[0].value;
        var curr2 = select[1].value;
        var amtvalue = (amount === null || amount === void 0 ? void 0 : amount.value) || "0";
        if (curr1 === curr2) {
            alert("Choose different currencies");
        }
        else {
            convert(curr1, curr2, amtvalue);
        }
    });
}
function convert(curr1, curr2, amtvalue) {
    var host = 'api.frankfurter.app';
    fetch("https://".concat(host, "/latest?amount=").concat(amtvalue, "&from=").concat(curr1, "&to=").concat(curr2))
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
        var convertedValue = data.rates[curr2]; 
        var result = document.getElementById('results');
        if (result)
            result.value = convertedValue.toString();
    });
}
