// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyCart.classList.remove('hidden');
        return;
    }

    emptyCart.classList.add('hidden');
    let cartHTML = '';
    let subtotalAmount = 0;

    cart.forEach((item, index) => {
        subtotalAmount += item.price * item.quantity;
        cartHTML += `
            <div class="flex items-center border-b pb-4">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded">
                <div class="flex-1 ml-4">
                    <h3 class="font-medium">${item.name}</h3>
                    <p class="text-gray-500 text-sm">${item.description}</p>
                    <div class="flex items-center mt-2">
                        <button onclick="updateQuantity(${index}, -1)" class="text-gray-500 hover:text-primary">
                            <i class="ri-subtract-line"></i>
                        </button>
                        <span class="mx-2">${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" class="text-gray-500 hover:text-primary">
                            <i class="ri-add-line"></i>
                        </button>
                    </div>
                </div>
                <div class="text-right ml-4">
                    <p class="font-medium">₹${(item.price * item.quantity).toFixed(2)}</p>
                    <button onclick="removeItem(${index})" class="text-red-500 text-sm hover:text-red-700 mt-2">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = cartHTML;
    
    const taxAmount = subtotalAmount * 0.18;
    const totalAmount = subtotalAmount + taxAmount + 50; // 50 is shipping

    subtotal.textContent = `₹${subtotalAmount.toFixed(2)}`;
    tax.textContent = `₹${taxAmount.toFixed(2)}`;
    total.textContent = `₹${totalAmount.toFixed(2)}`;

    // Update cart badge
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (total > 0) {
        badge.textContent = total;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function updateQuantity(index, change) {
    const newQuantity = cart[index].quantity + change;
    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Initialize cart on page load
updateCart();
