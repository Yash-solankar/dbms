tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5',
                secondary: '#6B7280'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            }
        }
    }
}
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}
document.getElementById('addProductBtn').addEventListener('click', () => toggleModal('addProductModal'));
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
});
document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    toggleModal('addProductModal');
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
});
const categoryDropdown = document.getElementById('categoryDropdown');
categoryDropdown.addEventListener('click', (e) => {
    const menu = document.createElement('div');
    menu.className = 'absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10';
    menu.innerHTML = `
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">All Categories</a>
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Development Boards</a>
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sensors</a>
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Displays</a>
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Electronic Modules</a>
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</a>
`;
    document.body.appendChild(menu);
    const closeMenu = () => {
        menu.remove();
        document.removeEventListener('click', closeMenu);
    };
    setTimeout(() => {
        document.addEventListener('click', closeMenu);
    }, 0);
});
const profileDropdown = document.getElementById('profileDropdown');
profileDropdown.addEventListener('click', (e) => {
    const menu = document.createElement('div');
    menu.className = 'absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10';
    menu.innerHTML = `
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile Settings</a>
<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account Security</a>
<div class="border-t border-gray-100 my-1"></div>
<a href="#" class="block px-4 py-2 text-red-600 hover:bg-gray-100">Sign Out</a>
`;
    document.body.appendChild(menu);
    const closeMenu = () => {
        menu.remove();
        document.removeEventListener('click', closeMenu);
    };
    setTimeout(() => {
        document.addEventListener('click', closeMenu);
    }, 0);
});

// products
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#10b981'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            }
        }
    }
}



