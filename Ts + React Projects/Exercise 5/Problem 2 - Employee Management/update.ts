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
const options=document.getElementById('type')as HTMLInputElement;
options.addEventListener('change',()=>{
            if(options.value==='part')
           {     (document.getElementById("part")as HTMLInputElement).disabled=false;
                (document.getElementById("contract")as HTMLInputElement).disabled=true;
            }
            else if(options.value==='contract'){
                (document.getElementById("part")as HTMLInputElement).disabled=true;
                (document.getElementById("contract")as HTMLInputElement).disabled=false;
            }
            else{
                (document.getElementById("part")as HTMLInputElement).disabled=true;
                (document.getElementById("contract")as HTMLInputElement).disabled=true;
            }
});
function updateEmployee(){
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
    console.log(eSal);
    
    let empType=(document.getElementById('type')as HTMLInputElement).value;
    if(empType==='part'){
        let hours=parseInt((document.getElementById('part')as HTMLInputElement).value);
        for(let i=0;i<partTime.length;i++){
            if(eId===partTime[i].empId){
                if(!(eName==="")) partTime[i].empName=eName;
                if(!(eDept==="")) partTime[i].dept=eDept;
                if(!Number.isNaN(eSal)) partTime[i].salary=eSal;
                if(!Number.isNaN(hours)) partTime[i].hoursWorked=hours;
                alert("Updated Successfully!!")
                break;
            }
        }
    }
    else if(empType==='contract'){
        let hours=parseInt((document.getElementById('contract')as HTMLInputElement).value);
        for(let i=0;i<contract.length;i++){
            if(eId===contract[i].empId){
                if(!(eName==="")) contract[i].empName=eName;
                if(!(eDept==="")) contract[i].dept=eDept;
                if(!Number.isNaN(eSal)) contract[i].salary=eSal;
                if(!(Number.isNaN(hours))) contract[i].contractTime=hours;
                alert("Updated Successfully!!")
                break;
            }
        }
    }
    else{
        for(let i=0;i<fullTime.length;i++){
            if(eId===fullTime[i].empId){
                if(!(eName==="")) fullTime[i].empName=eName;
                if(!(eDept==="")) fullTime[i].dept=eDept;
                if(!(Number.isNaN(eSal))) fullTime[i].salary=eSal;
                alert("Updated Successfully!!")
                break;
            }
        }
    }
    localStorage.setItem('fullTime',JSON.stringify(fullTime));
    localStorage.setItem('contract',JSON.stringify(contract));
    localStorage.setItem('partTime',JSON.stringify(partTime));
    

}