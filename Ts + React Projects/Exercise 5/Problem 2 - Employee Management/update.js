var options = document.getElementById('type');
options.addEventListener('change', function () {
    if (options.value === 'part') {
        document.getElementById("part").disabled = false;
        document.getElementById("contract").disabled = true;
    }
    else if (options.value === 'contract') {
        document.getElementById("part").disabled = true;
        document.getElementById("contract").disabled = false;
    }
    else {
        document.getElementById("part").disabled = true;
        document.getElementById("contract").disabled = true;
    }
});
function updateEmployee() {
    var fullTime;
    var partTime;
    var contract;
    fullTime = localStorage.getItem('fullTime') ? JSON.parse(localStorage.getItem('fullTime')) : [];
    partTime = localStorage.getItem('partTime') ? JSON.parse(localStorage.getItem('partTime')) : [];
    contract = localStorage.getItem('contract') ? JSON.parse(localStorage.getItem('contract')) : [];
    var eName = document.getElementById('empName').value;
    var eId = document.getElementById('empId').value;
    var eDept = document.getElementById('dept').value;
    var eSal = parseInt(document.getElementById('salary').value);
    console.log(eSal);
    var empType = document.getElementById('type').value;
    if (empType === 'part') {
        var hours = parseInt(document.getElementById('part').value);
        for (var i = 0; i < partTime.length; i++) {
            if (eId === partTime[i].empId) {
                if (!(eName === ""))
                    partTime[i].empName = eName;
                if (!(eDept === ""))
                    partTime[i].dept = eDept;
                if (!Number.isNaN(eSal))
                    partTime[i].salary = eSal;
                if (!Number.isNaN(hours))
                    partTime[i].hoursWorked = hours;
                alert("Updated Successfully!!");
                break;
            }
        }
    }
    else if (empType === 'contract') {
        var hours = parseInt(document.getElementById('contract').value);
        for (var i = 0; i < contract.length; i++) {
            if (eId === contract[i].empId) {
                if (!(eName === ""))
                    contract[i].empName = eName;
                if (!(eDept === ""))
                    contract[i].dept = eDept;
                if (!Number.isNaN(eSal))
                    contract[i].salary = eSal;
                if (!(Number.isNaN(hours)))
                    contract[i].contractTime = hours;
                alert("Updated Successfully!!");
                break;
            }
        }
    }
    else {
        for (var i = 0; i < fullTime.length; i++) {
            if (eId === fullTime[i].empId) {
                if (!(eName === ""))
                    fullTime[i].empName = eName;
                if (!(eDept === ""))
                    fullTime[i].dept = eDept;
                if (!(Number.isNaN(eSal)))
                    fullTime[i].salary = eSal;
                alert("Updated Successfully!!");
                break;
            }
        }
    }
    localStorage.setItem('fullTime', JSON.stringify(fullTime));
    localStorage.setItem('contract', JSON.stringify(contract));
    localStorage.setItem('partTime', JSON.stringify(partTime));
}
