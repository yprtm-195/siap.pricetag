const csvData = `Kategori,Produk,Barcode,Gambar
Yogurt Drink 240 ml,Blueberry 240 ml,899320066165,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Reguler-250ml-01.jpg
Yogurt Drink 240 ml,Strawberry 240 ml,899320066130,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Reguler-250ml-02.jpg
Yogurt Drink 240 ml,Mixed Fruit 240 ml,899320066135,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Reguler-250ml-06.jpg
Yogurt Drink 240 ml,Lychee 240 ml,899320066129,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Reguler-250ml-03.jpg
Yogurt Drink 240 ml,Mixed Berry 240 ml,899320066305,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Reguler-250ml-05.jpg
Yogurt Drink 240 ml,Original 240 ml,899320066306,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Reguler-250ml-07.jpg
Yogurt Drink 240 ml,LF Strawberry Mango 240 ml,899320066500,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Lowfat-250ml-05.jpg
Yogurt Drink 240 ml,LF Banana 240 ml,899320066499,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-CYD-Lowfat-250ml-03.jpg
Squeeze 120 gr,Original 120 gr,899320066693,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-Squeeze-140-g-03.jpg
Squeeze 120 gr,Strawberry 120 gr,899320066694,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-Squeeze-140-g-01.jpg
Squeeze 120 gr,Blueberry 120 gr,899320066695,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-Squeeze-140-g-02.jpg
Squeeze 120 gr,Mango Sticky Rice 120 gr,899320066134,https://c.alfagift.id/product/1/1_A7741890002167_20240920102547063_base.jpg
Squeeze 120 gr,Purple Taro 120 gr,899320066830,https://cimory.com/uploads/products/variant_claim_id_yyCiJD1631068524.png
Squeeze 120 gr,Brown Sugar 120 gr,899320066833,https://c.alfagift.id/product/1/1_A7748960002167_20240920102914703_base.jpg
Squeeze Bites 120 gr,Strawberry 120 gr,899320066940,https://c.alfagift.id/product/1/1_A8166180002167_20240729112116757_base.jpg
Squeeze Bites 120 gr,Blueberry 120 gr,899320066941,https://c.alfagift.id/product/1/1_A8166190002167_20240729112107465_base.jpg
Squeeze Bites 120 gr,Yuzu 120 gr,899320066924,https://c.alfagift.id/product/1/1_A8166200002167_20240729112202921_base.jpg
Squeeze Bites 120 gr,Strawberry Lychee 120 gr,899320066926,https://c.alfagift.id/product/1/1_A8166210002167_20240729112212806_base.jpg
Squeeze Bites 120 gr,Berry Blemd 120 gr,899320066927,https://c.alfagift.id/product/1/1_A8269630002167_20250326140553498_base.jpg
Squeeze Bites 120 gr,Strawberry Manggo 120 gr,899320066930,https://c.alfagift.id/product/1/1_A8269620002167_20250326140550195_base.jpg
Stick Yogurt 40 gr,Strawberry 40 gr,899320066891,https://c.alfagift.id/product/1/1_A8006350002167_20230922143547780_base.jpg
Stick Yogurt 40 gr,Blueberry 40 gr,899320066892,https://c.alfagift.id/product/1/1_A8006340002167_20230922143601946_base.jpg
Stick Yogurt 40 gr,Original 40 gr,899320066890,https://c.alfagift.id/product/1/1_A8130210002167_20240515095655362_base.jpg
Stick Yogurt 40 gr,Mango Sticky Rice 40 gr,899320066936,https://c.alfagift.id/product/1/1_A8130200002167_20240515094931491_base.jpg
Stick Yogurt 40 gr,Brown Sugar 40 gr,899320066946,https://c.alfagift.id/product/1/1_A8212140002167_20241025144858561_base.jpg
Eatmilk 80 gr,Chocolate 80 gr,899320066956,https://c.alfagift.id/product/1/1_A8279130002167_20250508164840255_base.jpg
Eatmilk 80 gr,Marie Biscuits 80 gr,899320066962,https://c.alfagift.id/product/1/1_A8279140002167_20250508164850278_base.jpg
Eatmilk 80 gr,Chocolate Hazelnut 80 gr,899320066959,https://c.alfagift.id/product/1/1_A8279120002167_20250508164830616_base.jpg
Kanzler Singles Sosis 60 gr,Singles Keju 60 gr,899320034631,https://cimory.com/uploads/products/variant_claim_id_9oWOvV1704246353.jpg
Kanzler Singles Sosis 60 gr,Singles Original 60 gr,899320034831,https://cimory.com/uploads/products/variant_claim_id_mVfetA1704246621.jpg
Kanzler Singles Sosis 60 gr,Singles Mini 60 gr,899320034731,https://cimory.com/uploads/products/meat_0027_KS-New-Packaging-Mini.jpg
Kanzler Singles Sosis 60 gr,Singles Hot 60 gr,899320034571,https://cimory.com/uploads/products/variant_claim_id_pRF1MO1704246501.jpg
Kanzler Singles Sosis 60 gr,Singles Gochujang 60 gr,899320066824,https://cimory.com/uploads/products/variant_claim_id_AvXrnk1704245879.jpg
Kanzler Singles Bakso 55 gr,Bakso Original 55 gr,899320066849,https://cimory.com/uploads/products/variant_claim_id_XjrEoN1704246302.jpg
Kanzler Singles Bakso 55 gr,Bakso Keju 55 gr,899320066850,https://cimory.com/uploads/products/variant_claim_id_WLFqEW1704246268.jpg
Kanzler Singles Bakso 55 gr,Bakso Hot 55 gr,899320066898,https://cimory.com/uploads/products/variant_claim_id_0hZtVH1704247446.jpg
Kanzler Singles Bakso 55 gr,Bakso Gochujang 55 gr,899320000000,https://c.alfagift.id/product/1/1_A8248640002167_20250122163637397_base.jpg
Mini Yogurt 4x65 ml,Blueberry 4x65 ml,899320066406,https://c.alfagift.id/product/1/1_A6880780001089_20250609095045752_base.jpg
Mini Yogurt 4x65 ml,Strawberry 4x65 ml,899320066405,https://c.alfagift.id/product/1/1_A6880770001089_20250609095035175_base.jpg
Milk 250 ml,Chocolate 250 ml,899320066613,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-02.jpg
Milk 250 ml,Bebas Laktosa 250 ml,899320066615,https://cimory.com/uploads/products/variant_claim_id_V6sClv1701335628.jpg
Milk 250 ml,Hazelnut 250 ml,899320066680,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-09.jpg
Milk 250 ml,Chocomalt 250 ml,899320066689,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-11.jpg
Milk 250 ml,Almond 250 ml,899320066683,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-12.jpg
Milk 250 ml,Cashew 250 ml,899320066686,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-10.jpg
Milk 250 ml,Marie Biscuits 250 ml,899320066692,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-13.jpg
Milk 250 ml,Strawberry 250 ml,899320066621,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-250ml-03.jpg
Milk 250 ml,Tiramisu 250 ml,899320066724,https://c.alfagift.id/product/1/1_A7806670002167_20220905132638209_base.jpg
Milk 250 ml,Salted Caramel 250 ml,899320066721,https://cimory.com/uploads/products/variant_claim_id_Yc692r1701336911.jpg
Milk 250 ml,Chocomint 250 ml,899320066834,https://cimory.com/uploads/products/variant_claim_id_pUIazJ1701334693.jpg
Milk 250 ml,Peanut Butter 250 ml,899320066718,https://cimory.com/uploads/products/variant_claim_id_faxBEE1701334288.jpg
Milk 250 ml,Matcha 250 ml,899320066620,https://c.alfagift.id/product/1/1_A8121880002167_20240405134230448_base.jpg
Milk 125 ml,Chocolate 125 ml,899320066626,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-125ml-01.jpg
Milk 125 ml,Strawberry 125 ml,899320066634,https://cimory.com/uploads/products/Preview---Claim-Products-(Indonesia)-UHT-125ml-02.jpg
Milk 750 ml,Almond 750 ml,899320066765,https://c.alfagift.id/product/1/1_A7942710002167_20250507140226800_base.jpg
Milk 750 ml,Chocolate 750 ml,899320066373,https://c.alfagift.id/product/1/1_A8279380002167_20250509134510212_base.jpg
Kanzler Nugget 450 gr,Chicken Nugget Original 450 gr,8993200664382,https://cimory.com/uploads/products/variant_claim_id_ysx5bt1704247772.jpg
Kanzler Nugget 450 gr,Crispy Chicken Nugget 450 gr,8993200664399,https://cimory.com/uploads/products/variant_claim_id_fOzKTa1704247715.jpg
Kanzler Nugget 450 gr,Crispy Chicken Stick 450 gr,8993200668076,https://cimory.com/uploads/products/variant_claim_id_3FUWM41704248035.jpg
Kanzler Nugget 450 gr,Chicken Nugget Spicy 450 gr,8993200669134,https://c.alfagift.id/product/1/1_A8175020002167_20240814134841794_base.jpg
Kanzler Sosis 250 gr,Beef Cocktail 250 gr,8993200667772,https://cimory.com/uploads/products/-Cocktail-Series---EN---FA-SKU-icon_CS6_Rev-Aug-21-14.jpg
`;

function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const products = {};

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(value => value.trim());
        const product = {};
        headers.forEach((header, index) => {
            product[header] = values[index];
        });

        const category = product['Kategori'];
        if (!products[category]) {
            products[category] = [];
        }
        // Map CSV fields to our expected product object structure
        products[category].push({
            id: product['Barcode'],
            name: product['Produk'],
            price: "", // Harga tidak ada di CSV yang diberikan, jadi kosongkan
            image: product['Gambar']
        });
    }
    return products;
}

const products = parseCSV(csvData);

const categoriesDiv = document.getElementById('categories');
const categoriesGridDiv = document.getElementById('categories-grid');
const productsListDiv = document.getElementById('products-list');
const selectedItemsList = document.getElementById('selected-items-list');
const productModal = document.getElementById('product-modal');
const barcodeModal = document.getElementById('barcode-modal');
const closeButton = document.querySelector('.close-button');
const selectAllProductsBtn = document.getElementById('select-all-products-btn');

let selectedProducts = [];
let currentCategory = null;
let currentBarcodeIndex = 0;

// Cache Management
const CACHE_NAME = 'product-images-cache-v1';
const IMAGE_CACHE_DB = 'image-cache-db';
const IMAGE_CACHE_STORE = 'images';

// Inisialisasi IndexedDB
function initImageCache() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(IMAGE_CACHE_DB, 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(IMAGE_CACHE_STORE)) {
                db.createObjectStore(IMAGE_CACHE_STORE, { keyPath: 'url' });
            }
        };
    });
}

// Fungsi untuk menyimpan gambar ke cache
async function cacheImage(url) {
    try {
        // Cek apakah gambar sudah ada di cache
        const cachedImage = await getCachedImage(url);
        if (cachedImage) return cachedImage;

        // Jika belum ada, fetch dan cache gambar
        const response = await fetch(url);
        const blob = await response.blob();
        
        // Simpan ke IndexedDB
        const db = await initImageCache();
        const transaction = db.transaction([IMAGE_CACHE_STORE], 'readwrite');
        const store = transaction.objectStore(IMAGE_CACHE_STORE);
        
        await store.put({
            url: url,
            blob: blob,
            timestamp: Date.now()
        });

        return URL.createObjectURL(blob);
    } catch (error) {
        console.error('Error caching image:', error);
        return url; // Return original URL if caching fails
    }
}

// Fungsi untuk mengambil gambar dari cache
async function getCachedImage(url) {
    try {
        const db = await initImageCache();
        const transaction = db.transaction([IMAGE_CACHE_STORE], 'readonly');
        const store = transaction.objectStore(IMAGE_CACHE_STORE);
        const request = store.get(url);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                const data = request.result;
                if (data) {
                    // Periksa apakah cache masih valid (24 jam)
                    const cacheAge = Date.now() - data.timestamp;
                    if (cacheAge < 24 * 60 * 60 * 1000) {
                        resolve(URL.createObjectURL(data.blob));
                    } else {
                        // Hapus cache yang sudah expired
                        store.delete(url);
                        resolve(null);
                    }
                } else {
                    resolve(null);
                }
            };
            request.onerror = () => reject(request.error);
        });
    } catch (error) {
        console.error('Error getting cached image:', error);
        return null;
    }
}

// Fungsi untuk mencegah refresh tidak sengaja
function preventAccidentalRefresh() {
    let hasUnsavedChanges = false;

    // Deteksi perubahan pada produk yang dipilih
    const originalSelectedProducts = JSON.stringify(selectedProducts);

    // Fungsi untuk mengecek perubahan
    function checkForChanges() {
        const currentSelectedProducts = JSON.stringify(selectedProducts);
        hasUnsavedChanges = currentSelectedProducts !== originalSelectedProducts;
    }

    // Tambahkan event listener untuk perubahan produk
    document.addEventListener('change', () => {
        checkForChanges();
    });

    // Event listener untuk beforeunload
    window.addEventListener('beforeunload', (e) => {
        if (hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });

    // Event listener untuk keydown (mencegah F5 dan Ctrl+R)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
            e.preventDefault();
            alert('Anda yakin ingin me-refresh halaman? Perubahan yang belum disimpan akan hilang.');
        }
    });
}

// Modifikasi fungsi saveSelectedProducts untuk menandai perubahan
function saveSelectedProducts() {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    checkForChanges(); // Panggil fungsi pengecekan perubahan
}

// Fungsi untuk memuat produk terpilih dari localStorage
function loadSelectedProducts() {
    const savedProducts = localStorage.getItem('selectedProducts');
    if (savedProducts) {
        selectedProducts = JSON.parse(savedProducts);
        renderSelectedProducts();
        updateCategoryCards();
    }
}

// Fungsi untuk memperbarui teks tombol 'Pilih Semua Produk'
function updateSelectAllButtonText() {
    if (currentCategory) {
        const categoryProducts = products[currentCategory];
        const allSelectedInCurrentCategory = categoryProducts.length > 0 && categoryProducts.every(product => 
            selectedProducts.some(p => p.id === product.id)
        );
        if (allSelectedInCurrentCategory) {
            selectAllProductsBtn.innerHTML = '<i class="fas fa-times-circle"></i> Batalkan Pilihan'; // Ikon untuk batalkan pilihan
        } else {
            selectAllProductsBtn.innerHTML = '<i class="fas fa-check-double"></i> Pilih Semua'; // Ikon untuk pilih semua
        }
    } else {
        selectAllProductsBtn.innerHTML = '<i class="fas fa-check-double"></i> Pilih Semua'; // Default jika tidak ada kategori aktif
    }
}

// Modifikasi fungsi displayCategories untuk menggunakan cache
async function displayCategories() {
    categoriesGridDiv.innerHTML = '';
    for (const category in products) {
        const card = document.createElement('div');
        card.classList.add('category-card');
        
        // Ambil gambar dari produk pertama di kategori tersebut
        const firstProduct = products[category][0];
        const cachedImageUrl = await cacheImage(firstProduct.image);
        
        card.innerHTML = `
            <img src="${cachedImageUrl}" alt="${category}" style="width: 100px; height: auto; margin-bottom: 10px;">
            <h3>${category}</h3>
        `;
        
        card.addEventListener('click', () => {
            displayProducts(category);
            updateSelectAllButtonText();
        });
        categoriesGridDiv.appendChild(card);
    }
}

// Modifikasi fungsi displayProducts untuk menggunakan cache
async function displayProducts(category) {
    productsListDiv.innerHTML = '';
    currentCategory = category;
    const categoryProducts = products[category];
    
    for (const product of categoryProducts) {
        const isSelected = selectedProducts.some(p => p.id === product.id);
        const cachedImageUrl = await cacheImage(product.image);
        
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        if (isSelected) {
            productItem.classList.add('selected');
        }
        productItem.dataset.productId = product.id;
        
        productItem.innerHTML = `
            <input type="checkbox" class="product-checkbox" data-id="${product.id}" ${isSelected ? 'checked' : ''}>
            <img src="${cachedImageUrl}" alt="${product.name}" style="width: 100px; height: auto; margin-bottom: 10px;">
            <h4>${product.name}</h4>
            <p>${product.id}</p>
        `;
        
        productItem.addEventListener('click', (event) => {
            if (event.target.classList.contains('product-checkbox')) {
                return;
            }
            const checkbox = productItem.querySelector('.product-checkbox');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });

        productsListDiv.appendChild(productItem);
    }
    addSelectProductListeners();
    productModal.style.display = 'block';
    // Tambahkan state ke history
    history.pushState(null, '', window.location.href);
}

// Fungsi untuk menambahkan event listener ke checkbox produk
function addSelectProductListeners() {
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
        checkbox.removeEventListener('change', handleProductSelectionChange); // Pastikan tidak ada duplikasi listener
        checkbox.addEventListener('change', handleProductSelectionChange);
    });
}

// Fungsi untuk memeriksa apakah ada produk yang dipilih dari kategori tertentu
function hasSelectedProductsInCategory(category) {
    return products[category].some(product => 
        selectedProducts.some(p => p.id === product.id)
    );
}

// Modifikasi fungsi updateCategoryCards untuk menggunakan cache
function updateCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const categoryName = card.querySelector('h3').textContent;
        if (hasSelectedProductsInCategory(categoryName)) {
            card.classList.add('has-selected-products');
        } else {
            card.classList.remove('has-selected-products');
        }
    });
}

// Modifikasi fungsi handleProductSelectionChange
function handleProductSelectionChange(event) {
    const checkbox = event.target;
    const productId = checkbox.dataset.id;
    const product = products[currentCategory].find(p => p.id === productId);
    const productItem = checkbox.closest('.product-item');

    if (checkbox.checked) {
        if (!selectedProducts.some(p => p.id === product.id)) {
            selectedProducts.push(product);
        }
        if (productItem) {
            productItem.classList.add('selected');
        }
    } else {
        selectedProducts = selectedProducts.filter(p => p.id !== product.id);
        if (productItem) {
            productItem.classList.remove('selected');
        }
    }
    renderSelectedProducts();
    updateSelectAllButtonText();
    updateCategoryCards();
    saveSelectedProducts(); // Simpan ke localStorage setiap kali ada perubahan
}

// Fungsi untuk menghitung jumlah produk yang dipilih per kategori
function getSelectedProductsCountByCategory() {
    const countByCategory = {};
    selectedProducts.forEach(product => {
        // Temukan kategori produk
        for (const category in products) {
            if (products[category].some(p => p.id === product.id)) {
                countByCategory[category] = (countByCategory[category] || 0) + 1;
                break;
            }
        }
    });
    return countByCategory;
}

// Modifikasi fungsi renderSelectedProducts
function renderSelectedProducts() {
    selectedItemsList.innerHTML = '';
    const totalSelected = selectedProducts.length;
    
    const wrapper = document.querySelector('.selected-items-wrapper');
    if (totalSelected === 0) {
        wrapper.style.display = 'none';
        return;
    }
    
    wrapper.style.display = 'block';
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="selected-category-item">
            <span>${totalSelected} Produk dipilih</span>
            <div class="action-buttons">
                <button class="show-barcode-btn">Tampilkan Barcode</button>
                <button class="clear-all-btn">Hapus</button>
            </div>
        </div>
    `;
    
    // Event listener untuk tombol hapus
    listItem.querySelector('.clear-all-btn').addEventListener('click', () => {
        selectedProducts = [];
        renderSelectedProducts();
        // Perbarui status checkbox di pop-up
        if (currentCategory) {
            const checkboxes = productsListDiv.querySelectorAll('.product-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                const productItem = checkbox.closest('.product-item');
                if (productItem) {
                    productItem.classList.remove('selected');
                }
            });
        }
        updateSelectAllButtonText();
        updateCategoryCards();
        saveSelectedProducts(); // Simpan ke localStorage setelah menghapus
    });

    // Event listener untuk tombol tampilkan barcode
    listItem.querySelector('.show-barcode-btn').addEventListener('click', () => {
        if (selectedProducts.length > 0) {
            currentBarcodeIndex = 0;
            showBarcode();
        }
    });
    
    selectedItemsList.appendChild(listItem);
}

// Modifikasi fungsi showBarcode untuk menggunakan cache
async function showBarcode() {
    const product = selectedProducts[currentBarcodeIndex];
    
    const productImage = document.getElementById('product-image');
    const barcodeCanvas = document.getElementById('barcode-image');
    
    const cachedImageUrl = await cacheImage(product.image);
    productImage.src = cachedImageUrl;
    
    document.getElementById('barcode-title').textContent = product.name;
    
    try {
        JsBarcode("#barcode-image", product.id, {
            format: "EAN13",
    lineColor: "#000",
    width: 2,
    height: 100,
    displayValue: true
        });
    } catch (e) {
        console.error("Error generating barcode:", e);
    }
    
    const totalProducts = selectedProducts.length;
    const progress = ((currentBarcodeIndex + 1) / totalProducts) * 100;
    document.getElementById('barcode-counter').textContent = `${currentBarcodeIndex + 1}/${totalProducts}`;
    document.getElementById('barcode-progress-fill').style.width = `${progress}%`;
    
    document.getElementById('prev-barcode').disabled = currentBarcodeIndex === 0;
    document.getElementById('next-barcode').disabled = currentBarcodeIndex === totalProducts - 1;
    
    barcodeModal.style.display = 'block';
    // Tambahkan state ke history
    history.pushState(null, '', window.location.href);
}

// Event listener untuk tombol navigasi barcode
document.getElementById('prev-barcode').addEventListener('click', () => {
    if (currentBarcodeIndex > 0) {
        currentBarcodeIndex--;
        showBarcode();
    }
});

document.getElementById('next-barcode').addEventListener('click', () => {
    if (currentBarcodeIndex < selectedProducts.length - 1) {
        currentBarcodeIndex++;
        showBarcode();
    }
});

// Event listener untuk tombol tutup barcode modal
barcodeModal.querySelector('.close-button').addEventListener('click', () => {
    barcodeModal.style.display = 'none';
});

// Event listener untuk tombol 'Pilih Semua Produk'
selectAllProductsBtn.addEventListener('click', () => {
    if (currentCategory) {
        const categoryProducts = products[currentCategory];
        const allSelectedInCurrentCategory = categoryProducts.length > 0 && categoryProducts.every(product => 
            selectedProducts.some(p => p.id === product.id)
        );

        if (allSelectedInCurrentCategory) {
            // Jika semua sudah terpilih, batalkan pilihan semua
            selectedProducts = selectedProducts.filter(selectedProduct => 
                !categoryProducts.some(p => p.id === selectedProduct.id)
            );
        } else {
            // Jika belum semua terpilih, pilih semua
            categoryProducts.forEach(product => {
                if (!selectedProducts.some(p => p.id === product.id)) {
                    selectedProducts.push(product);
                }
            });
        }
        displayProducts(currentCategory);
        renderSelectedProducts();
        updateSelectAllButtonText();
        updateCategoryCards();
        saveSelectedProducts(); // Simpan ke localStorage setelah memilih/batalkan semua
    }
});

// Event listener untuk tombol tutup pop-up
closeButton.addEventListener('click', () => {
    productModal.style.display = 'none';
});

// Tutup pop-up produk jika mengklik di luar konten pop-up
window.addEventListener('click', (event) => {
    if (event.target == productModal) {
        productModal.style.display = 'none';
    }
});

// Fungsi untuk mencari produk
function searchProducts(keyword) {
    keyword = keyword.toLowerCase().trim();
    const results = [];
    
    // Jika keyword kosong, return array kosong
    if (!keyword) return results;
    
    // Iterasi melalui semua kategori
    for (const category in products) {
        // Cari produk dalam kategori
        const categoryProducts = products[category];
        const matchedProducts = categoryProducts.filter(product => {
            const productName = product.name.toLowerCase();
            const productId = product.id.toLowerCase();
            const categoryName = category.toLowerCase();
            
            // Pencarian yang lebih ketat
            // 1. Exact match untuk nama produk
            if (productName === keyword) return true;
            
            // 2. Exact match untuk barcode
            if (productId === keyword) return true;
            
            // 3. Exact match untuk kategori
            if (categoryName === keyword) return true;
            
            // 4. Match kata per kata yang lebih ketat
            const nameWords = productName.split(' ');
            const categoryWords = categoryName.split(' ');
            const keywordWords = keyword.split(' ');
            
            // Cek setiap kata kunci
            return keywordWords.every(keyword => {
                // Cek apakah ada kata dalam nama produk yang dimulai dengan keyword
                const nameMatch = nameWords.some(word => word.startsWith(keyword));
                // Cek apakah ada kata dalam kategori yang dimulai dengan keyword
                const categoryMatch = categoryWords.some(word => word.startsWith(keyword));
                // Cek apakah barcode mengandung keyword
                const barcodeMatch = productId.includes(keyword);
                
                return nameMatch || categoryMatch || barcodeMatch;
            });
        });

        // Tambahkan produk yang cocok ke hasil
        matchedProducts.forEach(product => {
            results.push({
                ...product,
                category: category
            });
        });
    }
    
    return results;
}

// Modifikasi fungsi displaySearchResults
async function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('search-results');
    const searchInput = document.getElementById('search-input');
    searchResultsDiv.innerHTML = '';
    
    if (results.length === 0) {
        searchResultsDiv.innerHTML = '<div class="search-result-item">Tidak ada hasil ditemukan</div>';
        searchResultsDiv.classList.add('active');
        return;
    }
    
    // Batasi jumlah hasil yang ditampilkan
    const maxResults = 10;
    const limitedResults = results.slice(0, maxResults);
    
    // Urutkan hasil berdasarkan relevansi
    limitedResults.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const keyword = searchInput.value.toLowerCase().trim();
        const keywordWords = keyword.split(' ');
        
        // Fungsi untuk menghitung skor relevansi
        const getRelevanceScore = (text) => {
            let score = 0;
            
            // Exact match mendapat skor tertinggi
            if (text === keyword) return 100;
            
            // Hitung jumlah kata yang cocok
            const words = text.split(' ');
            keywordWords.forEach(keyword => {
                if (words.some(word => word.startsWith(keyword))) {
                    score += 10;
                }
            });
            
            // Bonus untuk kata yang dimulai dengan keyword
            if (text.startsWith(keyword)) {
                score += 5;
            }
            
            return score;
        };
        
        const aScore = getRelevanceScore(aName);
        const bScore = getRelevanceScore(bName);
        
        // Urutkan berdasarkan skor
        if (aScore !== bScore) {
            return bScore - aScore;
        }
        
        // Jika skor sama, urutkan berdasarkan panjang nama
        return aName.length - bName.length;
    });
    
    for (const product of limitedResults) {
        const cachedImageUrl = await cacheImage(product.image);
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        
        // Highlight kata kunci dalam hasil pencarian
        const highlightedName = highlightKeyword(product.name, searchInput.value);
        const highlightedCategory = highlightKeyword(product.category, searchInput.value);
        
        resultItem.innerHTML = `
            <img src="${cachedImageUrl}" alt="${product.name}">
            <div class="search-result-info">
                <h4>${highlightedName}</h4>
                <p>${product.id}</p>
                <div class="search-result-category">${highlightedCategory}</div>
            </div>
        `;
        
        resultItem.addEventListener('click', () => {
            if (!selectedProducts.some(p => p.id === product.id)) {
                selectedProducts.push(product);
                renderSelectedProducts();
                updateCategoryCards();
                saveSelectedProducts();
            }
            
            // Kosongkan searchbar dan sembunyikan hasil pencarian
            searchInput.value = '';
            searchResultsDiv.classList.remove('active');
            searchResultsDiv.innerHTML = '';
        });
        
        searchResultsDiv.appendChild(resultItem);
    }
    
    // Tampilkan jumlah hasil yang lebih banyak jika ada
    if (results.length > maxResults) {
        const moreResults = document.createElement('div');
        moreResults.classList.add('search-result-item', 'more-results');
        moreResults.innerHTML = `<div class="search-result-info">+ ${results.length - maxResults} hasil lainnya</div>`;
        searchResultsDiv.appendChild(moreResults);
    }
    
    searchResultsDiv.classList.add('active');
}

// Fungsi untuk highlight kata kunci
function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Event listener untuk input pencarian dengan debounce yang lebih cepat
let searchTimeout;
document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.trim();
    const searchResultsDiv = document.getElementById('search-results');
    
    // Clear previous timeout
    clearTimeout(searchTimeout);
    
    // Set new timeout dengan delay yang lebih pendek
    searchTimeout = setTimeout(() => {
        if (query.length > 0) {
            const results = searchProducts(query);
            displaySearchResults(results);
        } else {
            searchResultsDiv.classList.remove('active');
            searchResultsDiv.innerHTML = '';
        }
    }, 150); // Delay 150ms untuk respons yang lebih cepat
});

// Tutup hasil pencarian ketika mengklik di luar
document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.getElementById('search-results');
    const searchInput = document.getElementById('search-input');
    
    if (!searchContainer.contains(e.target)) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        searchInput.value = '';
    }
});

// Event listener untuk search input
document.getElementById('search-input').addEventListener('click', function(e) {
    if (this.value) {
        this.setSelectionRange(0, this.value.length);
    }
});

// Fungsi untuk menyembunyikan address bar pada mobile
function hideAddressBar() {
    // Cek apakah perangkat mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Scroll ke atas untuk menyembunyikan address bar
        window.scrollTo(0, 1);
        
        // Tambahkan event listener untuk orientasi
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                window.scrollTo(0, 1);
            }, 100);
        });

        // Tambahkan event listener untuk resize
        window.addEventListener('resize', () => {
            setTimeout(() => {
                window.scrollTo(0, 1);
            }, 100);
        });

        // Tambahkan event listener untuk scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                window.scrollTo(0, 1);
            }
        });
    }
}

// Fungsi untuk menangani tombol back di mobile
function handleBackButton() {
    // Cek apakah perangkat mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Tambahkan event listener untuk popstate
        window.addEventListener('popstate', function(e) {
            // Cek apakah modal produk atau barcode sedang terbuka
            if (productModal.style.display === 'block') {
                e.preventDefault();
                productModal.style.display = 'none';
                // Tambahkan state baru ke history
                history.pushState(null, '', window.location.href);
            } else if (barcodeModal.style.display === 'block') {
                e.preventDefault();
                barcodeModal.style.display = 'none';
                // Tambahkan state baru ke history
                history.pushState(null, '', window.location.href);
            }
        });

        // Tambahkan state awal ke history
        history.pushState(null, '', window.location.href);
    }
}

// Inisialisasi aplikasi
displayCategories();
loadSelectedProducts();
preventAccidentalRefresh();
hideAddressBar(); // Tambahkan inisialisasi hide address bar
handleBackButton(); // Tambahkan inisialisasi handle back button
