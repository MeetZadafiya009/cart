function count(){
    document.getElementById('count-cart-item').innerHTML=JSON.parse(localStorage.getItem('cartItem')).length;
}
let data;
const loadData=()=>{
    data=localStorage.getItem('cartItem');
    data=JSON.parse(data);
    let cartData=``;
    var i=1;
    data.forEach((element)=>{
        cartData+=`<tr>
                    <td>${i}</td>
                    <td><img style='width:100px;' class='img-fluid' src="images/${element.product_image}" /></td>
                    <td>${element.product_name}</td>
                    <td>${element.product_price}</td>
                    <td><button data-id='${element.id}'  class='remove-to-cart btn btn-success'>REMOVE</button></td>
                </tr>`;
            i++;
        });
        document.getElementById('cartTable').innerHTML=cartData;
}
loadData();
let removeItem=document.querySelectorAll('.remove-to-cart');
removeItem.forEach((element)=>{
    element.addEventListener("click",()=>{
        var id=element.getAttribute('data-id');
        var newCart=new Array();
        console.log(data);
        data.forEach((v)=>{
            if(!(v.id==id)){
                newCart.push(v);
            }
        });
        window.location.reload();
        localStorage.setItem('cartItem',JSON.stringify(newCart));
        loadData();
        count();
    });
})