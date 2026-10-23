let count=0;
let total=0;
function addToCart(price){
    count++;
    total=total+price;
    document.getElementById("cartCount").innerText=count;
    document.getElementById("totalAmount").innerText=total;
}
function removeFromCart(price){
    document.getElementById("cartCount").innerText=count;
    count--;
    document.getElementById("totalAmount").innerText=total;
    total=total-price;
}

