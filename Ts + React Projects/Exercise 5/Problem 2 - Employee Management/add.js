function addEmployee() {
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
    var empType = document.getElementById('type').value;
    if (empType === 'part') {
        var hours = parseInt(document.getElementById('part').value);
        partTime.push({
            empName: eName,
            empId: eId,
            dept: eDept,
            salary: eSal,
            type: empType,
            hoursWorked: hours
        });
    }
    else if (empType === 'contract') {
        var hours = parseInt(document.getElementById('contract').value);
        contract.push({
            empName: eName,
            empId: eId,
            dept: eDept,
            salary: eSal,
            type: empType,
            contractTime: hours
        });
    }
    else {
        fullTime.push({
            empName: eName,
            empId: eId,
            dept: eDept,
            salary: eSal,
            type: empType
        });
    }
    localStorage.setItem('fullTime', JSON.stringify(fullTime));
    localStorage.setItem('contract', JSON.stringify(contract));
    localStorage.setItem('partTime', JSON.stringify(partTime));
}
