let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(name,price){
cart.push({name,price});
saveCart();
updateCartCount();
showMessage(name+" Added To Cart ✅");
}

function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
}

function updateCartCount(){
let count=document.getElementById("cartCount");
if(count)count.innerText=cart.length;
}

function loadCart(){
let container=document.getElementById("cartItems");
if(!container)return;

container.innerHTML="";
let total=0;

cart.forEach((item,index)=>{
total+=item.price;

container.innerHTML+=`
<div class="card">
<h3>${item.name}</h3>
<p>${item.price} EGP</p>
<button onclick="removeItem(${index})">Remove</button>
</div>
`;
});

container.innerHTML+=`
<div class="card">
<h3>Total: ${total} EGP</h3>
<button onclick="clearCart()">Clear Cart</button>
</div>
`;
}

function removeItem(index){
cart.splice(index,1);
saveCart();
loadCart();
updateCartCount();
}

function clearCart(){
cart=[];
saveCart();
loadCart();
updateCartCount();
}

function showMessage(text){
let msg=document.createElement("div");

msg.innerText=text;
msg.style.position="fixed";
msg.style.bottom="20px";
msg.style.right="20px";
msg.style.background="#22c55e";
msg.style.color="white";
msg.style.padding="15px 20px";
msg.style.borderRadius="12px";
msg.style.zIndex="9999";

document.body.appendChild(msg);

setTimeout(()=>{
msg.remove();
},2000);
}

function filterProducts(category){
let products=document.querySelectorAll(".products .card");

products.forEach(card=>{

if(category==="all"){
card.style.display="block";
}

else if(card.classList.contains(category)){
card.style.display="block";
}

else{
card.style.display="none";
}

});
}

window.onload=function(){
updateCartCount();
loadCart();
}
