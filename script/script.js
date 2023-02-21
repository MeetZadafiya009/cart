let productData;
let cartArray=[];
hello();
var add_btn = document.querySelectorAll(".add-to-cart");
add_btn.forEach(element => {
    element.addEventListener("click", function () {
        var id = this.getAttribute('data-id');
        this.classList.add('disabled');
        this.innerHTML="Added To Cart";
        cartArray=JSON.parse(localStorage.getItem('cartItem'));
        cartArray.push(productData[id-1]);
        localStorage.setItem('cartItem',JSON.stringify(cartArray));
        count();
    })
});
function  hello () {
    fetch('data/product.json').then((response)=>{
         return response.json();
     }).then((data)=>{
         productData=data;
     });
}
function count(){
    document.getElementById('count-cart-item').innerHTML=JSON.parse(localStorage.getItem('cartItem')).length;
}
window.onload=()=>{
    count();
}
