// Import Modules
import { products } from "./products.js";

// Listeners to access Product Buttons in html from Module
const productButtons = document.querySelectorAll('[id^="product-"]');
for (let i = 0; i < productButtons.length; i++) {
  let id = productButtons[i].id.substring(9);
  productButtons[i].addEventListener("click", () => buy(id));
}

// Listeners Functions in Module
document.getElementById("open_modal").addEventListener("click", open_modal);
document.getElementById("cleanCart").addEventListener("click", cleanCart);
document
  .getElementById("calculateTotal")
  .addEventListener("click", calculateTotal);
document.getElementById("generateCart").addEventListener("click", generateCart);
document
  .getElementById("applyPromotionsCart")
  .addEventListener("click", applyPromotionsCart);
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;
// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      cartList.push(products[i]);
      console.log(cartList);
    }
  }
}
// Exercise 2
function cleanCart() {
  cartList = [];
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  return console.log(total);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cartList.forEach((product) => {
    let productCart = cart.find((p) => p.id === product.id);
    if (productCart === undefined) {
      product.quantity = 1;
      cart.push(product);
    } else {
      productCart.quantity++;
    }
  });
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  cart.forEach((product) => {
    product.subtotal = Number(product.quantity * product.price);
    product.subtotalWithDiscount = 0;
    if (!product.offer || product.quantity < product.offer.number) {
      product.subtotalWithDiscount = product.subtotal;
    } else {
      let discount = Number(product.offer.percent) / 100;
      product.subtotalWithDiscount = Math.round(
        product.subtotal - product.subtotal * discount
      );
    }
  });
  console.log(cart);
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
