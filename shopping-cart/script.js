// Store cart data with prices
const cartData = {
    1: { name: 'Wireless Headphones', price: 79.99, quantity: 1 },
    2: { name: 'USB-C Cable', price: 12.99, quantity: 2 },
    3: { name: 'Phone Case', price: 19.99, quantity: 1 },
    4: { name: 'Screen Protector', price: 9.99, quantity: 3 }
};

// Initialize the shopping cart
function initializeCart() {
    attachIncreaseQuantityListeners();
    attachDecreaseQuantityListeners();
    attachDeleteListeners();
    attachHeartListeners();
    calculateTotal();
}

// Increase quantity handler
function attachIncreaseQuantityListeners() {
    const increaseButtons = document.querySelectorAll('.increase-qty');
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            const quantityElement = document.querySelector(`.quantity[data-item-id="${itemId}"]`);
            const currentQuantity = parseInt(quantityElement.textContent);
            const newQuantity = currentQuantity + 1;
            
            // Update DOM
            quantityElement.textContent = newQuantity;
            
            // Update cart data
            cartData[itemId].quantity = newQuantity;
            
            // Update item total and overall total
            updateItemTotal(itemId);
            calculateTotal();
        });
    });
}

// Decrease quantity handler
function attachDecreaseQuantityListeners() {
    const decreaseButtons = document.querySelectorAll('.decrease-qty');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            const quantityElement = document.querySelector(`.quantity[data-item-id="${itemId}"]`);
            const currentQuantity = parseInt(quantityElement.textContent);
            
            // Prevent quantity from going below 1
            if (currentQuantity > 1) {
                const newQuantity = currentQuantity - 1;
                
                // Update DOM
                quantityElement.textContent = newQuantity;
                
                // Update cart data
                cartData[itemId].quantity = newQuantity;
                
                // Update item total and overall total
                updateItemTotal(itemId);
                calculateTotal();
            }
        });
    });
}

// Delete item handler
function attachDeleteListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            const cartItem = document.querySelector(`.cart-item[data-item-id="${itemId}"]`);
            
            // Remove item from cart data
            delete cartData[itemId];
            
            // Remove item from DOM with animation
            cartItem.style.opacity = '0';
            cartItem.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                cartItem.remove();
                
                // Check if cart is empty
                if (Object.keys(cartData).length === 0) {
                    showEmptyCartMessage();
                } else {
                    calculateTotal();
                }
            }, 300);
        });
    });
}

// Heart like button handler
function attachHeartListeners() {
    const heartButtons = document.querySelectorAll('.heart-btn');
    heartButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            
            // Change heart symbol based on state
            if (this.classList.contains('liked')) {
                this.textContent = '♥';
            } else {
                this.textContent = '♡';
            }
        });
    });
}

// Update item total price
function updateItemTotal(itemId) {
    const item = cartData[itemId];
    const itemTotalElement = document.querySelector(`.cart-item[data-item-id="${itemId}"] .item-total`);
    const itemTotal = (item.price * item.quantity).toFixed(2);
    itemTotalElement.textContent = `Total: $${itemTotal}`;
}

// Calculate and update total price
function calculateTotal() {
    let subtotal = 0;
    
    // Calculate subtotal from all items in cart
    for (const itemId in cartData) {
        const item = cartData[itemId];
        subtotal += item.price * item.quantity;
    }
    
    const tax = (subtotal * 0.10).toFixed(2);
    const total = (subtotal + parseFloat(tax)).toFixed(2);
    
    // Update DOM
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax}`;
    document.getElementById('total').textContent = `$${total}`;
}

// Show empty cart message
function showEmptyCartMessage() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const emptyMessage = document.querySelector('.empty-cart-message');
    
    cartWrapper.style.display = 'none';
    emptyMessage.style.display = 'block';
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
});
