type order={
    name:string;
    orderNo:string;
    items:string[];
    costs:number[];
    totalAmount:number;
    shippingAddress:string
}
let orders:order[]=localStorage.getItem('orders')?JSON.parse(localStorage.getItem('orders')!):[];
let num=0;
function placeOrder(){
    let name1:string=(document.getElementById('UserName')as HTMLInputElement).value;
    let orderNo1:string=(document.getElementById('OrderNo')as HTMLInputElement).value;
    let items1:string[];
    items1=[];
    let costs1:number[];
    costs1=[];
    let totalAmount1=0;
    for(let i=0;i<=num;i++)
    {
        let item1:string=(document.getElementsByClassName('items')[i]as HTMLInputElement).value;
        let cost1:number=parseInt((document.getElementsByClassName('cost')[i] as HTMLInputElement).value);
        items1.push(item1);
        costs1.push(cost1);
        totalAmount1+=cost1;
    }
    let shippingAddress1:string=(document.getElementById('addr')as HTMLInputElement).value;
    let temp:order={
        name:name1,
        orderNo:orderNo1,
        items:items1,
        costs:costs1,
        totalAmount:totalAmount1,
        shippingAddress:shippingAddress1
    }
    orders.push(temp);
    console.log(temp);
    localStorage.setItem('orders',JSON.stringify(orders));
    alert('Order Placed Successfully!!!');
    ToPlaceOrder();
}

function ToInvoice(){
    window.location.href="./Invoice.html";
}
function ToUpdate(){
    window.location.href="./Update.html";
}
function ToPlaceOrder(){
    window.location.href="./index.html"
}
function addMore(){
    const addMore=document.getElementById("items")as HTMLInputElement;
    const items=document.createElement('input');
    items.setAttribute('class','items');
    items.setAttribute('type','text');
    const cost=document.createElement('input');
    cost.setAttribute('class','cost');
    cost.setAttribute('type','number');
    addMore.appendChild(document.createElement('br'));
    addMore.append('Item: ');
    addMore.appendChild(items);
    addMore.append('Cost: ');
    addMore.appendChild(cost);
    num++;
}