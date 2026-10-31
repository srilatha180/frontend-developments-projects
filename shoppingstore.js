let count=0;
let total=0;

function addToCart(price){
    count++;
    total=total+price;
    document.getElementById("cartCount").innerText=count;
    document.getElementById("totalAmount").innerText=total;
    let toastele=document.getElementById("toastid");
    let toast1 = new bootstrap.Toast(toastele);  
    toast1.show();
    
}
function removeFromCart(price){
    document.getElementById("cartCount").innerText=count;
    count--;
    document.getElementById("totalAmount").innerText=total;
    total=total-price;
}
let confirmId=document.getElementById("confirm");
confirmId.onclick=function(){
    document.getElementById("ordermsg").textContent="order successfully placed"

    document.getElementById("confirm").style.display="none";
    document.getElementById("cancelBtn").style.display="none";

}
let tooltipElements =
    document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltipElements.forEach(function(element) {
    new bootstrap.Tooltip(element);
});


