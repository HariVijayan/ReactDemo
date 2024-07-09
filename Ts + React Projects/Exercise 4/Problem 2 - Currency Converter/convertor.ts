const select: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.currency');
const submit: HTMLElement | null = document.getElementById('submit');
const amount: HTMLInputElement | null = document.getElementById('amount') as HTMLInputElement;

fetch('https://api.frankfurter.app/currencies')
    .then(res => res.json())
    .then(res => displayDropDown(res));

function displayDropDown(res: Record<string, string>): void {
    const curr: [string, string][] = Object.entries(res) as [string, string][];
    for (let i = 0; i < curr.length; i++) {
        const opt: string = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}

if (submit) {
    submit.addEventListener('click', () => {
        const curr1: string = select[0].value;
        const curr2: string = select[1].value;
        const amtvalue: string = amount?.value || "0";

        if (curr1 === curr2) {
            alert("Choose different currencies");
        } else {
            convert(curr1, curr2, amtvalue);
        }
    });
}

function convert(curr1: string, curr2: string, amtvalue: string): void {
    const host: string = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amtvalue}&from=${curr1}&to=${curr2}`)
        .then(resp => resp.json())
        .then((data: { rates: Record<string, number> }) => {
            let convertedValue: number = data.rates[curr2];
            let result: HTMLInputElement | null = document.getElementById('results') as HTMLInputElement;
            if (result) result.value = convertedValue.toString();
        });
}
