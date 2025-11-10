// Shopping Cart (DOM Only — No Backend)
// A list of product cards with “Add to Cart”.
// A cart counter updates.
// Clicking “Add” again increases quantity.
// Show a mini-cart/sidebar (JS creates elements dynamically).
// ----------------XXX------------------------XXX-------------------XXXX------------
// Basic soluton only show count not add item 

// let itemCount = 0;
// let cartItem = document.querySelector("#cart-count");

// let cardButton = document.querySelectorAll(".add-to-cart");

// function handleButtonClick() {
//   itemCount++;
//   cartItem.innerHTML = itemCount;
// }

// cardButton.forEach((el) => {
//   if (el) {
//     el.addEventListener("click", handleButtonClick);
//   }
// });
// ----------------XXXXXXXXXXX--------------------XXXXXXXXXX-------------

// second and better way 

// ---- Minimal DOM-only Cart ----
const productList = document.getElementById("product-list");
const cartToggleBtn = document.getElementById("cart-toggle");
const cartCountEl = document.getElementById("cart-count");

// In-memory cart: Map<id, { id, title, price, qty, img }>
const cart = new Map();

let cartRoot;      // <aside> container
let cartItemsEl;   // list wrapper
let cartTotalEl;   // total ₹ element

// Create sidebar (once)
function ensureCartUI() {
  if (cartRoot) return;

  cartRoot = document.createElement("aside");
  cartRoot.id = "mini-cart";
  cartRoot.setAttribute("aria-label", "Mini cart");
  cartRoot.innerHTML = `
    <div class="cart-head">
      <h2>Cart</h2>
      <button class="cart-close" aria-label="Close cart">✕</button>
    </div>
    <div class="cart-items" role="list"></div>
    <div class="cart-foot">
      <div class="cart-total">Total: ₹<span id="cart-total">0</span></div>
      <button class="cart-clear">Clear</button>
    </div>
  `;
  document.body.appendChild(cartRoot);

  cartItemsEl = cartRoot.querySelector(".cart-items");
  cartTotalEl = cartRoot.querySelector("#cart-total");

  // Sidebar internal events (delegated)
  cartRoot.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-close")) {
      toggleCart(false);
    }
    if (e.target.classList.contains("inc")) {
      const id = e.target.dataset.id;
      changeQty(id, +1);
    }
    if (e.target.classList.contains("dec")) {
      const id = e.target.dataset.id;
      changeQty(id, -1);
    }
    if (e.target.classList.contains("remove")) {
      const id = e.target.dataset.id;
      cart.delete(id);
      sync();
    }
    if (e.target.classList.contains("cart-clear")) {
      cart.clear();
      sync();
    }
  });
}

function toggleCart(forceOpen) {
  ensureCartUI();
  const open = typeof forceOpen === "boolean" ? forceOpen : !cartRoot.classList.contains("open");
  cartRoot.classList.toggle("open", open);
}

// Add or increase item
function addToCart(data) {
  const existing = cart.get(data.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(data.id, { ...data, qty: 1 });
  }
  sync();
}

// Change qty (remove if becomes 0)
function changeQty(id, delta) {
  const item = cart.get(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart.delete(id);
  sync();
}

// Update counter, list, and total
function sync() {
  // counter
  const count = [...cart.values()].reduce((sum, it) => sum + it.qty, 0);
  cartCountEl.textContent = count;

  ensureCartUI();

  // list render
  cartItemsEl.innerHTML = "";
  for (const it of cart.values()) {
    const li = document.createElement("div");
    li.className = "cart-item";
    li.setAttribute("role", "listitem");
    li.innerHTML = `
      <img src="${it.img}" alt="${it.title}">
      <div class="meta">
        <p class="title">${it.title}</p>
        <p class="line">₹${it.price} × ${it.qty} = ₹${it.price * it.qty}</p>
        <div class="qty">
          <button class="dec" data-id="${it.id}" aria-label="Decrease">−</button>
          <span aria-live="polite">${it.qty}</span>
          <button class="inc" data-id="${it.id}" aria-label="Increase">+</button>
          <button class="remove" data-id="${it.id}" aria-label="Remove">Remove</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(li);
  }

  // total
  const total = [...cart.values()].reduce((sum, it) => sum + it.price * it.qty, 0);
  cartTotalEl.textContent = total;

  // auto-open when adding first item
  if (count > 0) toggleCart(true);
}

// Product list: handle Add to Cart (event delegation)
productList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-to-cart")) return;

  const card = e.target.closest(".product");
  if (!card) return;

  const id = card.dataset.id;
  const title = card.dataset.title;
  const price = Number(card.dataset.price);
  const img = card.querySelector("img")?.src || card.dataset.img || "";

  addToCart({ id, title, price, img });
});

// Toggle button
cartToggleBtn.addEventListener("click", () => toggleCart());
