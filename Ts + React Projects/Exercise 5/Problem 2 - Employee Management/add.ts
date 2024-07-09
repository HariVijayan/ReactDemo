interface emp{
    empName:string;
    empId:string;
    dept:string;
    salary:number;
    type:string;
}
interface partTimeEmp extends emp{
    hoursWorked:number;
}
interface contractEmp extends emp{
    contractTime:number;
}
function addEmployee(){
    let fullTime:emp[];
    let partTime:partTimeEmp[];
    let contract:contractEmp[];
    fullTime=localStorage.getItem('fullTime')?JSON.parse(localStorage.getItem('fullTime')!):[];
    partTime=localStorage.getItem('partTime')?JSON.parse(localStorage.getItem('partTime')!):[];
    contract=localStorage.getItem('contract')?JSON.parse(localStorage.getItem('contract')!):[];
    let eName=(document.getElementById('empName')as HTMLInputElement).value;
    let eId=(document.getElementById('empId')as HTMLInputElement).value;
    let eDept=(document.getElementById('dept')as HTMLInputElement).value;
    let eSal=parseInt((document.getElementById('salary')as HTMLInputElement).value);
    let empType=(document.getElementById('type')as HTMLInputElement).value;
    if(empType==='part'){
        let hours=parseInt((document.getElementById('part')as HTMLInputElement).value);
        partTime.push({
            empName:eName,
            empId:eId,
            dept:eDept,
            salary:eSal,
            type:empType,
            hoursWorked:hours
        })
    }
    else if(empType==='contract'){
        let hours=parseInt((document.getElementById('contract')as HTMLInputElement).value);
        contract.push({
            empName:eName,
            empId:eId,
            dept:eDept,
            salary:eSal,
            type:empType,
            contractTime:hours
        })
    }
    else{
        fullTime.push({
            empName:eName,
            empId:eId,
            dept:eDept,
            salary:eSal,
            type:empType
        })
    }
    localStorage.setItem('fullTime',JSON.stringify(fullTime));
    localStorage.setItem('contract',JSON.stringify(contract));
    localStorage.setItem('partTime',JSON.stringify(partTime));
    
}