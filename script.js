let button = document.querySelector(".add-to-cart");
let cartCounter = document.getElementById("cart-counter");
let counter = 0;

button.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Item added to cart");
  counter++;
  console.log(counter);
  cartCounter.innerHTML = counter;
});
