function deleteEmployee() {
    var fullTime;
    var partTime;
    var contract;
    fullTime = localStorage.getItem('fullTime') ? JSON.parse(localStorage.getItem('fullTime')) : [];
    partTime = localStorage.getItem('partTime') ? JSON.parse(localStorage.getItem('partTime')) : [];
    contract = localStorage.getItem('contract') ? JSON.parse(localStorage.getItem('contract')) : [];
    var eId = document.getElementById('empId').value;
    var empType = document.getElementById('type').value;
    if (empType === 'part') {
        for (var i = 0; i < partTime.length; i++) {
            if (eId === partTime[i].empId) {
                partTime.splice(i, 1);
                alert("Deleted Successfully!!");
                break;
            }
        }
    }
    else if (empType === 'contract') {
        for (var i = 0; i < contract.length; i++) {
            if (eId === contract[i].empId) {
                contract.splice(i, 1);
                alert("Deleted Successfully!!");
                break;
            }
        }
    }
    else {
        for (var i = 0; i < fullTime.length; i++) {
            if (eId === fullTime[i].empId) {
                fullTime.splice(i, 1);
                alert("Deleted Successfully!!");
                break;
            }
        }
    }
    localStorage.setItem('fullTime', JSON.stringify(fullTime));
    localStorage.setItem('contract', JSON.stringify(contract));
    localStorage.setItem('partTime', JSON.stringify(partTime));
}
