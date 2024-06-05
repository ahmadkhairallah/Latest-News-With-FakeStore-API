document.addEventListener('DOMContentLoaded', fetchProducts);

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        
        listItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <a href="#">${product.title}</a>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
        `;

        productList.appendChild(listItem);
    });
}
