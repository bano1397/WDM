// Sample JSON Array
const products = [
  {
    id: 1,
    name: "Product no 01",
    description: "High-quality product with modern features.",
    price: 29.99,
    currency: "USD",
    inStock: true,
    category: "Electronics",
    tags: ["gadget", "tech", "new"],
    createdAt: "2025-05-16T10:00:00Z",
    updatedAt: "2025-05-16T10:00:00Z"
  },
  {
    id: 2,
    name: "Product no 02",
    description: "Durable and affordable item for everyday use.",
    price: 15.50,
    currency: "USD",
    inStock: false,
    category: "Home & Kitchen",
    tags: ["kitchen", "daily-use"],
    createdAt: "2025-05-15T12:30:00Z",
    updatedAt: "2025-05-15T12:30:00Z"
  }
];

// 1️⃣ Get the container to hold the cards
const container = document.getElementsByClassName('card-container')[0];

// 2️⃣ Loop through the products and create card elements
products.forEach(product => {
  // Create a card div
  const card = document.createElement('div');
  card.className = 'card';

  // Create the HTML structure for each card
  card.innerHTML = `
    <h3>${product.name}</h3>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Description:</strong> ${product.description}</p>
    <p><strong>Price:</strong> ${product.currency} ${product.price.toFixed(2)}</p>
    <p><strong>Tags:</strong> ${product.tags.join(', ')}</p>
    <p class="${product.inStock ? '' : 'out-of-stock'}">
      ${product.inStock ? 'In Stock' : 'Out of Stock'}
    </p>
  `;

  // 3️⃣ Append the card to the container
  container.appendChild(card);
});
