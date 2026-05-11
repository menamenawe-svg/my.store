let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */

function addToCart(name, price){

  cart.push({
    name:name,
    price:price
  });

  saveCart();

  updateCartCount();

  alert(name + " Added To Cart");
}

/* SAVE */

function saveCart(){

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}

/* UPDATE COUNT */

function updateCartCount(){

  let count =
  document.getElementById("cartCount");

  if(count){

    count.innerText = cart.length;
  }
}

/* LOAD CART */

function loadCart(){

  let container =
  document.getElementById("cartItems");

  if(!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    container.innerHTML += `

      <div class="item">

        <h2>${item.name}</h2>

        <p>${item.price} EGP</p>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>

    `;
  });

  container.innerHTML += `

    <div class="item">

      <h2>Total: ${total} EGP</h2>

      <button onclick="clearCart()">
        Clear Cart
      </button>

    </div>

  `;
}

/* REMOVE ITEM */

function removeItem(index){

  cart.splice(index,1);

  saveCart();

  loadCart();

  updateCartCount();
}

/* CLEAR CART */

function clearCart(){

  cart = [];

  saveCart();

  loadCart();

  updateCartCount();
}

/* ON LOAD */

window.onload = function(){

  updateCartCount();

  loadCart();
}