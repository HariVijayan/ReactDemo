function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function kilometersToMiles(kilometers: number): number {
    return kilometers * 0.621371;
}

function milesToKilometers(miles: number): number {
    return miles * 1.60934;
}

function inrToUsd(inr: number): number {
    return inr * 0.010;
}

function usdToInr(usd: number): number {
    return usd * 80.0;
}

function temperatureConversion(): void {
    const choice: string | null = prompt("Temperature Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
    switch (choice) {
        case '1':
            const celsius: number = parseFloat(prompt("Enter temperature in Celsius:") || '');
            if (!isNaN(celsius)) {
                const result: number = celsiusToFahrenheit(celsius);
                document.getElementById('output')!.innerHTML = `${celsius}°C is equal to ${result}°F`;
            } else {
                document.getElementById('output')!.innerHTML = "Invalid input";
            }
            break;
        case '2':
            const fahrenheit: number = parseFloat(prompt("Enter temperature in Fahrenheit:") || '');
            if (!isNaN(fahrenheit)) {
                const result: number = fahrenheitToCelsius(fahrenheit);
                document.getElementById('output')!.innerHTML = `${fahrenheit}°F is equal to ${result}°C`;
            } else {
                document.getElementById('output')!.innerHTML = "Invalid input";
            }
            break;
        default:
            document.getElementById('output')!.innerHTML = "Invalid choice.";
    }
}

function distanceConversion(): void {
    const choice: string | null = prompt("Distance Conversion:\n1. Kilometers to Miles\n2. Miles to Kilometers");
    switch (choice) {
        case '1':
            const kilometers: number = parseFloat(prompt("Enter distance in kilometers:") || '');
            if (!isNaN(kilometers)) {
                const result: number = kilometersToMiles(kilometers);
                document.getElementById('output')!.innerHTML = `${kilometers} kilometers is equal to ${result} miles`;
            } else {
                document.getElementById('output')!.innerHTML = "Invalid input";
            }
            break;
        case '2':
            const miles: number = parseFloat(prompt("Enter distance in miles:") || '');
            if (!isNaN(miles)) {
                const result: number = milesToKilometers(miles);
                document.getElementById('output')!.innerHTML = `${miles} miles is equal to ${result} kilometers`;
            } else {
                document.getElementById('output')!.innerHTML = "Invalid input";
            }
            break;
        default:
            document.getElementById('output')!.innerHTML = "Invalid choice.";
    }
}

function currencyConversion(): void {
    const choice: string | null = prompt("Currency Conversion:\n1. INR to USD\n2. USD to INR");
    switch (choice) {
        case '1':
            const inr: number = parseFloat(prompt("Enter amount in INR:") || '');
            if (!isNaN(inr)) {
                const result: number = inrToUsd(inr);
                document.getElementById('output')!.innerHTML = `₹${inr} is equal to $${result.toFixed(2)}`;
            } else {
                document.getElementById('output')!.innerHTML = "Invalid input";
            }
            break;
        case '2':
            const usd: number = parseFloat(prompt("Enter amount in USD:") || '');
            if (!isNaN(usd)) {
                const result: number = usdToInr(usd);
                document.getElementById('output')!.innerHTML = `$${usd} is equal to ₹${result.toFixed(2)}`;
            } else {
                document.getElementById('output')!.innerHTML = "Invalid input";
            }
            break;
        default:
            document.getElementById('output')!.innerHTML = "Invalid choice.";
    }
}
