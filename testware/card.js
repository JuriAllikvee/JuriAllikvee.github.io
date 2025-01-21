document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateCartTotal() {
        let total = 0;
        cartItems.querySelectorAll("tr").forEach(row => {
            const price = parseFloat(row.children[1].textContent.replace("$", ""));
            const quantity = parseInt(row.querySelector(".quantity-input").value, 10);
            const totalCell = row.children[3];
            const rowTotal = price * quantity;
            total += rowTotal;
            totalCell.textContent = `$${rowTotal.toFixed(2)}`;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    cartItems.addEventListener("change", (e) => {
        if (e.target.classList.contains("quantity-input")) {
            updateCartTotal();
        }
    });

    cartItems.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            e.target.closest("tr").remove();
            updateCartTotal();
        }
    });

    updateCartTotal();
});
