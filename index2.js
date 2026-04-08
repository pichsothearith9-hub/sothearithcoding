let cart = [];
let total = 0;

function addCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeItem(${index})">❌</button>`;
    list.appendChild(li);
  });
  document.getElementById("total").innerText = total.toFixed(2);
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

// CHECKOUT
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  document.getElementById("order-items").innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    document.getElementById("order-items").appendChild(li);
  });
  document.getElementById("order-total").innerText = total.toFixed(2);
  showPage("order");
}

// FINISH ORDER
function finishOrder() {
  alert("Thank you! Your order has been placed.");
  cart = [];
  total = 0;
  renderCart();
  showPage("home");
}

// PAGE SWITCH
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// DARK MODE
document.getElementById("toggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
