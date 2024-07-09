function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function kilometersToMiles(kilometers) {
    return kilometers * 0.621371;
}

function milesToKilometers(miles) {
    return miles * 1.60934;
}

function inrToUsd(inr) {
    return inr * 0.010;
}

function usdToInr(usd) {
    return usd * 80.0;
}

function temperatureConversion() {
    var choice = prompt("Temperature Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
    switch (choice) {
        case '1':
            var celsius = parseFloat(prompt("Enter temperature in Celsius:"));
            if (!isNaN(celsius)) {
                var result = celsiusToFahrenheit(celsius);
                document.getElementById('output').innerHTML = `${celsius}°C is equal to ${result}°F`;
            } else {
                document.getElementById('output').innerHTML = "Invalid input";
            }
            break;
        case '2':
            var fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
            if (!isNaN(fahrenheit)) {
                var result = fahrenheitToCelsius(fahrenheit);
                document.getElementById('output').innerHTML = `${fahrenheit}°F is equal to ${result}°C`;
            } else {
                document.getElementById('output').innerHTML = "Invalid input";
            }
            break;
        default:
            document.getElementById('output').innerHTML = "Invalid choice.";
    }
}

function distanceConversion() {
    var choice = prompt("Distance Conversion:\n1. Kilometers to Miles\n2. Miles to Kilometers");
    switch (choice) {
        case '1':
            var kilometers = parseFloat(prompt("Enter distance in kilometers:"));
            if (!isNaN(kilometers)) {
                var result = kilometersToMiles(kilometers);
                document.getElementById('output').innerHTML = `${kilometers} kilometers is equal to ${result} miles`;
            } else {
                document.getElementById('output').innerHTML = "Invalid input";
            }
            break;
        case '2':
            var miles = parseFloat(prompt("Enter distance in miles:"));
            if (!isNaN(miles)) {
                var result = milesToKilometers(miles);
                document.getElementById('output').innerHTML = `${miles} miles is equal to ${result} kilometers`;
            } else {
                document.getElementById('output').innerHTML = "Invalid input";
            }
            break;
        default:
            document.getElementById('output').innerHTML = "Invalid choice.";
    }
}

function currencyConversion() {
    var choice = prompt("Currency Conversion:\n1. INR to USD\n2. USD to INR");
    switch (choice) {
        case '1':
            var inr = parseFloat(prompt("Enter amount in INR:"));
            if (!isNaN(inr)) {
                var result = inrToUsd(inr);
                document.getElementById('output').innerHTML = `₹${inr} is equal to $${result.toFixed(2)}`;
            } else {
                document.getElementById('output').innerHTML = "Invalid input";
            }
            break;
        case '2':
            var usd = parseFloat(prompt("Enter amount in USD:"));
            if (!isNaN(usd)) {
                var result = usdToInr(usd);
                document.getElementById('output').innerHTML = `$${usd} is equal to ₹${result.toFixed(2)}`;
            } else {
                document.getElementById('output').innerHTML = "Invalid input";
            }
            break;
        default:
            document.getElementById('output').innerHTML = "Invalid choice.";
    }
}
