
/* =========================================================
   BETTALUXE | PREMIUM BETTA FISH STORE
   Optimized JavaScript
   Catalog | Search | Filter | Cart | WhatsApp | Navigation
========================================================= */


/* =========================================================
   01. STORE CONFIGURATION
========================================================= */

const STORE = {
    name: "BETTALUXE",
    whatsapp: "6281234567890",
    currency: "IDR",
    locale: "id-ID",
    storageKey: "bettaluxe_cart",
    notificationDuration: 2600,
    searchDelay: 250
};


/* =========================================================
   02. PRODUCT DATABASE
========================================================= */

const products = [

    /* =====================================================
       HMPK BETTA
    ===================================================== */

    {
        id: 1,
        code: "BT-HMPK-001",
        name: "Red Dragon HMPK",
        category: "HMPK",
        price: 150000,
        stock: 3,
        size: "M",
        color: "Red Dragon",
        gender: "Jantan",
        image: "assets/products/red-dragon-hmpk.jpg",
        description: "HMPK dengan dominasi warna merah dan karakter dragon."
    },
    {
        id: 2,
        code: "BT-HMPK-002",
        name: "Blue Rim HMPK",
        category: "HMPK",
        price: 175000,
        stock: 2,
        size: "M",
        color: "Blue Rim",
        gender: "Jantan",
        image: "assets/products/blue-rim-hmpk.jpg",
        description: "HMPK dengan warna biru dan tepian sirip yang kontras."
    },
    {
        id: 3,
        code: "BT-HMPK-003",
        name: "Koi Galaxy HMPK",
        category: "HMPK",
        price: 180000,
        stock: 2,
        size: "M",
        color: "Koi Galaxy",
        gender: "Jantan",
        image: "assets/products/koi-galaxy-hmpk.jpg",
        description: "Corak koi galaxy dengan kombinasi warna yang menarik."
    },
    {
        id: 4,
        code: "BT-HMPK-004",
        name: "Black Copper HMPK",
        category: "HMPK",
        price: 200000,
        stock: 1,
        size: "M",
        color: "Black Copper",
        gender: "Jantan",
        image: "assets/products/black-copper-hmpk.jpg",
        description: "HMPK bernuansa gelap dengan kilau copper."
    },


    /* =====================================================
       PLAKAT BETTA
    ===================================================== */

    {
        id: 5,
        code: "BT-PLK-001",
        name: "Fancy Plakat",
        category: "Plakat",
        price: 85000,
        stock: 4,
        size: "M",
        color: "Fancy",
        gender: "Jantan",
        image: "assets/products/fancy-plakat.jpg",
        description: "Plakat dengan perpaduan warna fancy yang menawan."
    },
    {
        id: 6,
        code: "BT-PLK-002",
        name: "Nemo Plakat",
        category: "Plakat",
        price: 100000,
        stock: 3,
        size: "M",
        color: "Nemo",
        gender: "Jantan",
        image: "assets/products/nemo-plakat.jpg",
        description: "Plakat dengan kombinasi warna bergaya nemo."
    },
    {
        id: 7,
        code: "BT-PLK-003",
        name: "Avatar Plakat",
        category: "Plakat",
        price: 125000,
        stock: 2,
        size: "M",
        color: "Avatar",
        gender: "Jantan",
        image: "assets/products/avatar-plakat.jpg",
        description: "Plakat dengan nuansa warna avatar yang khas."
    },
    {
        id: 8,
        code: "BT-PLK-004",
        name: "Super Red Plakat",
        category: "Plakat",
        price: 110000,
        stock: 0,
        size: "M",
        color: "Super Red",
        gender: "Jantan",
        image: "assets/products/super-red-plakat.jpg",
        description: "Plakat dengan warna merah dominan."
    },


    /* =====================================================
       GIANT BETTA
    ===================================================== */

    {
        id: 9,
        code: "BT-GNT-001",
        name: "Giant Multicolor",
        category: "Giant",
        price: 200000,
        stock: 2,
        size: "Giant",
        color: "Multicolor",
        gender: "Jantan",
        image: "assets/products/giant-multicolor.jpg",
        description: "Cupang giant dengan perpaduan beberapa warna."
    },
    {
        id: 10,
        code: "BT-GNT-002",
        name: "Giant Super Red",
        category: "Giant",
        price: 225000,
        stock: 1,
        size: "Giant",
        color: "Super Red",
        gender: "Jantan",
        image: "assets/products/giant-super-red.jpg",
        description: "Giant dengan warna merah yang dominan."
    },
    {
        id: 11,
        code: "BT-GNT-003",
        name: "Giant Blue",
        category: "Giant",
        price: 210000,
        stock: 2,
        size: "Giant",
        color: "Blue",
        gender: "Jantan",
        image: "assets/products/giant-blue.jpg",
        description: "Giant dengan tampilan warna biru yang elegan."
    },
    {
        id: 12,
        code: "BT-GNT-004",
        name: "Giant Fancy",
        category: "Giant",
        price: 250000,
        stock: 1,
        size: "Giant",
        color: "Fancy",
        gender: "Jantan",
        image: "assets/products/giant-fancy.jpg",
        description: "Giant fancy dengan kombinasi warna menarik."
    },


    /* =====================================================
       HALFMOON BETTA
    ===================================================== */

    {
        id: 13,
        code: "BT-HM-001",
        name: "Red Halfmoon",
        category: "Halfmoon",
        price: 175000,
        stock: 2,
        size: "M",
        color: "Red",
        gender: "Jantan",
        image: "assets/products/red-halfmoon.jpg",
        description: "Halfmoon dengan warna merah dominan dan bukaan ekor lebar."
    },
    {
        id: 14,
        code: "BT-HM-002",
        name: "Blue Halfmoon",
        category: "Halfmoon",
        price: 185000,
        stock: 2,
        size: "M",
        color: "Blue",
        gender: "Jantan",
        image: "assets/products/blue-halfmoon.jpg",
        description: "Halfmoon dengan warna biru elegan dan sirip yang menawan."
    },


    /* =====================================================
       CROWNTAIL BETTA
    ===================================================== */

    {
        id: 15,
        code: "BT-CT-001",
        name: "Red Crowntail",
        category: "Crowntail",
        price: 125000,
        stock: 2,
        size: "M",
        color: "Red",
        gender: "Jantan",
        image: "assets/products/red-crowntail.jpg",
        description: "Crowntail merah dengan jari-jari sirip yang menonjol."
    },
    {
        id: 16,
        code: "BT-CT-002",
        name: "Blue Crowntail",
        category: "Crowntail",
        price: 135000,
        stock: 2,
        size: "M",
        color: "Blue",
        gender: "Jantan",
        image: "assets/products/blue-crowntail.jpg",
        description: "Crowntail biru dengan bentuk sirip menyerupai mahkota."
    }

];
    

/* =========================================================
   03. DOM ELEMENTS
========================================================= */

const DOM = {
    productList: document.getElementById("product-list"),
    searchInput: document.getElementById("search-input"),
    categoryFilter: document.getElementById("category-filter"),
    sortFilter: document.getElementById("sort-filter"),

    cartCount: document.getElementById("cart-count"),
    cartItems: document.getElementById("cart-items"),
    cartTotal: document.getElementById("cart-total"),

    cartSidebar: document.getElementById("cart-sidebar"),
    cartOverlay: document.getElementById("cart-overlay"),

    hamburger: document.getElementById("hamburger"),
    navMenu: document.getElementById("nav-menu"),

    scrollTop: document.getElementById("scrollTop")
};


/* =========================================================
   04. APPLICATION STATE
========================================================= */

const state = {
    cart: [],
    searchTimer: null,
    notificationTimer: null,
    lastFocusedElement: null
};


/* =========================================================
   05. HELPER FUNCTIONS
========================================================= */

function formatRupiah(value) {
    return new Intl.NumberFormat(STORE.locale, {
        style: "currency",
        currency: STORE.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}


function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}


function getProduct(id) {
    return products.find(product => product.id === Number(id));
}


function getCartItem(id) {
    return state.cart.find(item => item.id === Number(id));
}


function getCartQuantity() {
    return state.cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}


function getCartTotal() {
    return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}


/* =========================================================
   06. LOCAL STORAGE
========================================================= */

function loadCart() {
    try {
        const saved = localStorage.getItem(STORE.storageKey);
        const parsed = JSON.parse(saved || "[]");

        if (!Array.isArray(parsed)) return [];

        return parsed
            .map(item => {
                const product = getProduct(item.id);

                if (!product || product.stock <= 0) {
                    return null;
                }

                const quantity = Math.min(
                    product.stock,
                    Math.max(1, Math.floor(Number(item.quantity) || 1))
                );

                return {
                    ...product,
                    quantity
                };
            })
            .filter(Boolean);

    } catch (error) {
        console.warn("Cart storage error:", error);
        return [];
    }
}


function saveCart() {
    try {
        const data = state.cart.map(item => ({
            id: item.id,
            quantity: item.quantity
        }));

        localStorage.setItem(
            STORE.storageKey,
            JSON.stringify(data)
        );

    } catch (error) {
        console.warn("Unable to save cart:", error);
        showNotification("Keranjang gagal disimpan.");
    }
}


/* =========================================================
   07. PRODUCT FILTERING
========================================================= */

function getFilteredProducts() {
    const keyword = (
        DOM.searchInput?.value || ""
    ).trim().toLowerCase();

    const category = DOM.categoryFilter?.value || "all";
    const sorting = DOM.sortFilter?.value || "default";

    const result = products.filter(product => {
        const searchable = [
            product.name,
            product.code,
            product.category,
            product.color,
            product.size,
            product.gender,
            product.description
        ].join(" ").toLowerCase();

        const matchKeyword = searchable.includes(keyword);

        const matchCategory =
            category === "all" ||
            product.category === category;

        return matchKeyword && matchCategory;
    });

    switch (sorting) {
        case "low":
            result.sort((a, b) => a.price - b.price);
            break;

        case "high":
            result.sort((a, b) => b.price - a.price);
            break;

        case "name":
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    return result;
}


/* =========================================================
   08. PRODUCT CARD
========================================================= */

function createProductCard(product) {
    const available = product.stock > 0;

    return `
        <article class="product-card">

            <div class="product-image">

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    decoding="async"
                    onerror="this.onerror=null;this.style.display='none';"
                >

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <span class="product-stock ${available ? "" : "out"}">
                    ${available ? `Stok: ${product.stock}` : "Sold Out"}
                </span>

            </div>

            <div class="product-info">

                <div class="product-meta">
                    <span class="product-code">
                        ${escapeHTML(product.code)}
                    </span>
                </div>

                <h3>${escapeHTML(product.name)}</h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="product-specs">
                    <span>${escapeHTML(product.color)}</span>
                    <span>${escapeHTML(product.size)}</span>
                    <span>${escapeHTML(product.gender)}</span>
                </div>

                <div class="product-bottom">

                    <span class="product-price">
                        ${formatRupiah(product.price)}
                    </span>

                    <button
                        type="button"
                        class="add-cart"
                        data-action="add"
                        data-id="${product.id}"
                        ${available ? "" : "disabled"}
                    >
                        <i class="fa-solid fa-bag-shopping"></i>
                        ${available ? "Tambah" : "Habis"}
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   09. RENDER PRODUCT CATALOG
========================================================= */

function displayProducts() {
    if (!DOM.productList) return;

    const result = getFilteredProducts();

    if (result.length === 0) {
        DOM.productList.innerHTML = `
            <div class="no-products">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>Produk Tidak Ditemukan</h3>
                <p>Coba kata kunci atau kategori lainnya.</p>
            </div>
        `;

        return;
    }

    DOM.productList.innerHTML = result
        .map(createProductCard)
        .join("");
}


/* =========================================================
   10. SEARCH
========================================================= */

function handleSearch() {
    clearTimeout(state.searchTimer);

    state.searchTimer = setTimeout(() => {
        displayProducts();
    }, STORE.searchDelay);
}


/* =========================================================
   11. CATEGORY FILTER
========================================================= */

function filterCategory(category) {
    if (!DOM.categoryFilter) return;

    DOM.categoryFilter.value = category;
    displayProducts();
}


/* =========================================================
   12. ADD TO CART
========================================================= */

function addToCart(productId) {
    const product = getProduct(productId);

    if (!product || product.stock <= 0) {
        showNotification("Produk tidak tersedia.");
        return;
    }

    const existing = getCartItem(productId);

    if (existing) {
        if (existing.quantity >= product.stock) {
            showNotification("Stok produk sudah mencapai batas.");
            return;
        }

        existing.quantity++;

    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();

    showNotification(
        `${product.name} ditambahkan ke keranjang.`
    );
}


/* =========================================================
   13. CHANGE QUANTITY
========================================================= */

function changeQuantity(productId, amount) {
    const item = getCartItem(productId);
    const product = getProduct(productId);

    if (!item || !product) return;

    const nextQuantity = item.quantity + Number(amount);

    if (nextQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    if (nextQuantity > product.stock) {
        showNotification("Jumlah melebihi stok tersedia.");
        return;
    }

    item.quantity = nextQuantity;

    updateCart();
}


/* =========================================================
   14. REMOVE FROM CART
========================================================= */

function removeFromCart(productId) {
    const previousLength = state.cart.length;

    state.cart = state.cart.filter(
        item => item.id !== Number(productId)
    );

    if (state.cart.length === previousLength) return;

    updateCart();
    showNotification("Produk berhasil dihapus.");
}


/* =========================================================
   15. CART ITEM TEMPLATE
========================================================= */

function createCartItem(item) {
    return `
        <div class="cart-item">

            <div class="cart-item-info">

                <h4>${escapeHTML(item.name)}</h4>

                <p>${formatRupiah(item.price)}</p>

                <div class="cart-item-subtotal">
                    Subtotal:
                    ${formatRupiah(item.price * item.quantity)}
                </div>

                <button
                    type="button"
                    class="remove-item"
                    data-action="remove"
                    data-id="${item.id}"
                >
                    <i class="fa-solid fa-trash"></i>
                    Hapus
                </button>

            </div>

            <div class="cart-actions">

                <button
                    type="button"
                    class="quantity-button"
                    data-action="decrease"
                    data-id="${item.id}"
                    aria-label="Kurangi jumlah"
                >
                    −
                </button>

                <span class="quantity-number">
                    ${item.quantity}
                </span>

                <button
                    type="button"
                    class="quantity-button"
                    data-action="increase"
                    data-id="${item.id}"
                    aria-label="Tambah jumlah"
                >
                    +
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   16. RENDER CART
========================================================= */

function renderCart() {
    if (DOM.cartCount) {
        DOM.cartCount.textContent = getCartQuantity();
    }

    if (DOM.cartTotal) {
        DOM.cartTotal.textContent = formatRupiah(getCartTotal());
    }

    if (!DOM.cartItems) return;

    if (state.cart.length === 0) {
        DOM.cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Keranjang belanja masih kosong.</p>
                <span>Temukan ikan cupang favoritmu.</span>
            </div>
        `;

        return;
    }

    DOM.cartItems.innerHTML = state.cart
        .map(createCartItem)
        .join("");
}


function updateCart() {
    renderCart();
    saveCart();
}


/* =========================================================
   17. CART SIDEBAR
========================================================= */

function openCart() {
    if (!DOM.cartSidebar || !DOM.cartOverlay) return;

    if (DOM.cartSidebar.classList.contains("active")) return;

    state.lastFocusedElement = document.activeElement;

    DOM.cartSidebar.classList.add("active");
    DOM.cartOverlay.classList.add("active");

    DOM.cartSidebar.setAttribute("aria-hidden", "false");
    DOM.cartOverlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("cart-open");

    DOM.cartSidebar.querySelector(
        ".close-cart, [data-close-cart]"
    )?.focus();
}


function closeCart() {
    if (!DOM.cartSidebar || !DOM.cartOverlay) return;

    const wasOpen = DOM.cartSidebar.classList.contains("active");

    DOM.cartSidebar.classList.remove("active");
    DOM.cartOverlay.classList.remove("active");

    DOM.cartSidebar.setAttribute("aria-hidden", "true");
    DOM.cartOverlay.setAttribute("aria-hidden", "true");

    document.body.classList.remove("cart-open");

    if (wasOpen && state.lastFocusedElement?.isConnected) {
        state.lastFocusedElement.focus();
    }
}


function toggleCart() {
    const isOpen = DOM.cartSidebar?.classList.contains("active");

    if (isOpen) {
        closeCart();
    } else {
        openCart();
    }
}


/* =========================================================
   18. WHATSAPP CHECKOUT
========================================================= */

function checkout() {
    if (state.cart.length === 0) {
        showNotification("Keranjang belanja masih kosong.");
        return;
    }

    const invalidItem = state.cart.find(item => {
        const product = getProduct(item.id);

        return !product || product.stock < item.quantity;
    });

    if (invalidItem) {
        showNotification("Periksa kembali stok produk.");
        return;
    }

    const message = [
        `Halo ${STORE.name}, saya ingin memesan ikan cupang.`,
        "",
        "DETAIL PESANAN",
        "================================",

        ...state.cart.flatMap((item, index) => [
            `${index + 1}. ${item.name}`,
            `Kode: ${item.code}`,
            `Kategori: ${item.category}`,
            `Jumlah: ${item.quantity}`,
            `Harga: ${formatRupiah(item.price)}`,
            `Subtotal: ${formatRupiah(item.price * item.quantity)}`,
            ""
        ]),

        "================================",
        `TOTAL: ${formatRupiah(getCartTotal())}`,
        "================================",
        "",
        "Mohon konfirmasi ketersediaan stok dan informasi pengiriman.",
        "Terima kasih."
    ].join("\n");

    const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;

    const checkoutWindow = window.open(url, "_blank");

    if (checkoutWindow) {
        checkoutWindow.opener = null;
    } else {
        showNotification("WhatsApp tidak dapat dibuka. Periksa pengaturan pop-up browser.");
    }
}


/* =========================================================
   19. NOTIFICATION
========================================================= */

function showNotification(message) {
    let notification = document.getElementById("betta-notification");

    if (!notification) {
        notification = document.createElement("div");

        notification.id = "betta-notification";
        notification.className = "betta-notification";

        notification.setAttribute("role", "status");
        notification.setAttribute("aria-live", "polite");

        document.body.appendChild(notification);
    }

    notification.textContent = message;

    notification.classList.remove("show");

    // Restart notification animation.
    void notification.offsetWidth;

    notification.classList.add("show");

    clearTimeout(state.notificationTimer);

    state.notificationTimer = setTimeout(() => {
        notification.classList.remove("show");
    }, STORE.notificationDuration);
}


/* =========================================================
   20. HAMBURGER NAVIGATION
========================================================= */

function closeNavigation() {
    if (!DOM.hamburger || !DOM.navMenu) return;

    DOM.navMenu.classList.remove("active");
    DOM.hamburger.classList.remove("active");

    DOM.hamburger.setAttribute("aria-expanded", "false");
    DOM.hamburger.setAttribute("aria-label", "Buka menu");
}


function toggleNavigation() {
    if (!DOM.hamburger || !DOM.navMenu) return;

    const isOpen = DOM.navMenu.classList.toggle("active");

    DOM.hamburger.classList.toggle("active", isOpen);

    DOM.hamburger.setAttribute("aria-expanded", String(isOpen));

    DOM.hamburger.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );
}


/* =========================================================
   21. SCROLL TO TOP
========================================================= */

function initializeScrollTop() {
    if (!DOM.scrollTop) return;

    let ticking = false;

    function updateScrollButton() {
        DOM.scrollTop.classList.toggle(
            "show",
            window.scrollY > 300
        );

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollButton);
            ticking = true;
        }
    }, { passive: true });

    DOM.scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateScrollButton();
}


/* =========================================================
   22. EVENT LISTENERS
========================================================= */

function initializeEvents() {

    // Product buttons.
    DOM.productList?.addEventListener("click", event => {
        const button = event.target.closest('[data-action="add"]');

        if (!button || button.disabled) return;

        addToCart(button.dataset.id);
    });


    // Cart quantity and remove buttons.
    DOM.cartItems?.addEventListener("click", event => {
        const button = event.target.closest("[data-action]");

        if (!button) return;

        const id = Number(button.dataset.id);

        switch (button.dataset.action) {
            case "increase":
                changeQuantity(id, 1);
                break;

            case "decrease":
                changeQuantity(id, -1);
                break;

            case "remove":
                removeFromCart(id);
                break;
        }
    });


    // Search.
    DOM.searchInput?.addEventListener("input", handleSearch);


    // Category and sorting.
    DOM.categoryFilter?.addEventListener("change", displayProducts);
    DOM.sortFilter?.addEventListener("change", displayProducts);


    // Cart overlay: close only.
    // Jangan gunakan onclick="toggleCart()" pada overlay HTML.
    DOM.cartOverlay?.addEventListener("click", closeCart);


    // Cart close button.
    DOM.cartSidebar?.querySelector(".close-cart")?.addEventListener(
        "click",
        closeCart
    );


    // Hamburger.
    DOM.hamburger?.addEventListener("click", event => {
        event.stopPropagation();
        toggleNavigation();
    });


    // Close menu after selecting a navigation link.
    DOM.navMenu?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeNavigation);
    });


    // Close menu when clicking outside the navbar.
    document.addEventListener("click", event => {
        if (!event.target.closest(".navbar")) {
            closeNavigation();
        }
    });


    // Keyboard interactions.
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCart();
            closeNavigation();
        }
    });


    // Close mobile menu when returning to desktop.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeNavigation();
        }
    });
}


/* =========================================================
   23. INITIALIZE STORE
========================================================= */

function initializeStore() {
    state.cart = loadCart();

    displayProducts();
    renderCart();

    initializeEvents();
    initializeScrollTop();

    // Ensure cart starts closed when the page loads.
    closeCart();

    console.log(
        `%c${STORE.name} is ready!`,
        "color: #c9a45c; font-weight: bold; font-size: 14px;"
    );
}


/* =========================================================
   24. GLOBAL FUNCTIONS
========================================================= */

// Functions used by inline HTML onclick attributes.
window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;

window.openCart = openCart;
window.closeCart = closeCart;
window.toggleCart = toggleCart;

window.checkout = checkout;
window.filterCategory = filterCategory;
window.displayProducts = displayProducts;


/* =========================================================
   25. START APPLICATION
========================================================= */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeStore, {
        once: true
    });
} else {
    initializeStore();
}
