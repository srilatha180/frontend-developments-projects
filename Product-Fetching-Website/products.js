let loadproducts=document.getElementById("loadproducts");
let products=document.getElementById("products");

function getProducts(){
    console.log("products loading........")
    products.innerHTML="";
    fetch("https://fakestoreapi.com/products")
   .then (function(response){
    return response.json();
     

   })
   .then(function(data){
    console.log(data);
    data.forEach(function(items){
    let p=document.createElement("p");
    p.textContent=items.title;
    let im=document.createElement("img");
    im.src=items.image;
    let d=document.createElement("div");
    d.ClassName= "product-card";
    d.append(p);
    d.append(im);

   
    products.appendChild(d);
         

})
   })



   
}

loadproducts.addEventListener("click",function(){
    getProducts();

});
