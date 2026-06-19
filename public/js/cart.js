const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const clearCartBtn = document.getElementById("clearCartBtn");

async function loadCart() {
    const response = await fetch("/api/cart");
    const result = await response.json();
    renderCart(result.data);
}

function renderCart(cart) {
    cartItems.innerHTML = "";

    let subtotal = 0;
    let count = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image_path || "https://placehold.co/80x80"}" alt="${item.name}" width="60">
                <div>
                    <strong>${item.name}</strong>
                    <p>Qty: ${item.quantity}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <button class="remove-cart-btn" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
    });

    cartCount.textContent = count;
    cartSubtotal.textContent = subtotal.toFixed(2);

    document.querySelectorAll(".remove-cart-btn").forEach(button => {
        button.addEventListener("click", async () => {
            const productId = button.dataset.id;

            const response = await fetch(`/api/cart/items/${productId}`, {
                method: "DELETE"
            });

            const result = await response.json();
            renderCart(result.data);
        });
    });
}

document.querySelectorAll(".add-cart-btn").forEach(button => {
    button.addEventListener("click", async () => {
        const productId = button.dataset.id;

        const response = await fetch("/api/cart/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ productId })
        });

        const result = await response.json();
        renderCart(result.data);
    });
});

clearCartBtn.addEventListener("click", async () => {
    const response = await fetch("/api/cart/clear", {
        method: "POST"
    });

    const result = await response.json();
    renderCart(result.data);
});

loadCart();