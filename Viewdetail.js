const customizeBtn = document.getElementById('customizeBtn');
    const modal = document.getElementById('customModal');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const checkboxes = document.querySelectorAll('input[name="item"]');
    const totalPriceEl = document.getElementById('totalPrice');

    let total = 0;

    // Open modal
    customizeBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    // Close modal
    const closeCustomizationModal = () => modal.classList.remove('active');
    closeModal.addEventListener('click', closeCustomizationModal);
    cancelBtn.addEventListener('click', closeCustomizationModal);

    // Update total price dynamically
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        total = 0;
        checkboxes.forEach(cb => {
          if (cb.checked) {
            total += parseInt(cb.value);
          }
        });
        totalPriceEl.textContent = `Total: ฿${total}`;
      });
    });

    // Handle form submit
    document.getElementById('customForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert(`Added to cart with total: ฿${total}`);
      closeCustomizationModal();
    });

  const authBtn = document.getElementById('authSignInBtn');
  const authModal = document.getElementById('auth-modal');
  const authClose = document.getElementById('authClose');
  const authTabBtns = document.querySelectorAll('.auth-tab-btn');
  const authForms = document.querySelectorAll('.auth-form');

  // Open Modal
  authBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
  });

  // Close Modal
  authClose.addEventListener('click', () => {
    authModal.style.display = 'none';
  });

  // Close when clicking outside the modal
  window.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.style.display = 'none';
    }
  });

  // Switch between Sign In and Sign Up tabs
  authTabBtns.forEach(button => {
    button.addEventListener('click', () => {
      authTabBtns.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const tab = button.getAttribute('data-tab');
      authForms.forEach(form => {
        form.classList.remove('active');
        if (form.id === `auth-${tab}-form`) {
          form.classList.add('active');
        }
      });
    });
  });

// Centralized Product Data
// ================= PRODUCT DATA =================
const products = [
  {
    id: "blind-box",
    name: "Blind Box Surprise",
    price: 3650,
    oldPrice: 4000,
    image: "images/blindbox.jpg",
    description: "A mystery-themed box where the recipient doesn’t know what’s inside—perfect for thrill and excitement.",
    inclusions: [
      { item: "mini figurines or Blind Box", price: 2000 },
      { item: "Flower bouquet", price: 500 },
      { item: "snack or candy", price: 500 },
      { item: "Handwritten note", price: 300 },
      { item: "Wrapped big box", price: 350 },
    ],
    delivery: {
      "Delivery Time": "Within 10hrs",
      "Location": "Your provided location",
      "Service Area": "4 major cities in Thailand",
      "Delivery Fee": "Calculated at checkout"
    }
  },
  {
    id: "proposal",
    name: "Proposal Surprise",
    price: 3600,
    oldPrice: 4100,
    image: "images/red.jpg",
    description: "Mini romantic setup for a loved one, ideal for a proposal, anniversary, or just expressing love. The romantic micro-experience; surprise reveals thoughtfulness and effort.",
    inclusions: [
      { item: "Fresh flower bouquet", price: 700 },
      { item: "Tiny chocolate box", price: 500 },
      { item: "LED tealight", price: 300 },
      { item: "Handwritten love letter", price: 300 },
      { item: "Mini plush toy", price: 300 },
      { item: "Heart shaped mini decorated setup", price: 1500 },
    ],
    delivery: {
      "Delivery Time": "Same day delivery available",
      "Location": "Your provided location",
      "Service Area": "Only in Bangkok",
      "Delivery Fee": "Calculated at checkout"
    }
  },
  {
    id: "mini-outdoor",
    name: "Mini Outdoor Surprise",
    price: 2000,
    oldPrice: 2500,
    image: "images/outdoor.jpg",
    description: "Compact, ready-to-use picnic kit for small hangouts or romantic dates.",
    inclusions: [
      { item: "Mini foldable blanket", price: 250 },
      { item: "LED fairy lights", price: 500 },
      { item: "Snack pack", price: 500 },
      { item: "Reusable utensils", price: 200 },
      { item: "Setup with mini balloons, confetti bag", price: 550 },
    ],
    delivery: {
      "Delivery Time": "Same day delivery available",
      "Location": "Our provided area",
      "People"  : "3-5 people available",
      "Service Area": "Bangkok, Chiang Mai, Phuket",
      "Delivery Fee": "Calculated at checkout",
      "Service": "Our team included for extra services"
    }
  },
  {
  id: "magical-midnight",
  name: "Magical Midnight Surprise",
  price: 5200,
  oldPrice: 5800,
  image: "images/bdaysurprise.jpg",
  description: "A dreamy midnight setup with romantic lights, snacks, and heartfelt touches, perfect for late-night surprises or anniversaries.",
  inclusions: [
    { item: "Mini fairy light setup", price: 700 },
    { item: "Small candle set (LED tealights)", price: 300 },
    { item: "Midnight snack basket (drinks & treats)", price: 800 },
    { item: "Mini bouquet with ribbon", price: 600 },
    { item: "Personalized handwritten love note", price: 300 },
    { item: "Setup with balloons & rose petals", price: 500 }
    { item: "Personalized Gifts", price: 2000 }
  ],
  delivery: {
    "Delivery Time": "Same day or scheduled night delivery",
    "Location": "Indoor or outdoor setup area",
    "People": "Up to 2-4 people for surprise setup",
    "Service Area": "Bangkok, Pattaya, Phuket",
    "Delivery Fee": "Calculated at checkout",
    "Service": "Our team sets up and prepares everything for you"
  }
},
{
  id: "plant",
  name: "Plant Surprise",
  price: 2900,
  oldPrice: 3500,
  image: "images/plant.jpg",
  description: "A unique and eco-friendly proposal setup using beautiful potted plants and floral decor, perfect for nature lovers.",
  inclusions: [
    { item: "Personalized plant (engraved pot or tag)", price: 1000},
    { item: "Small succulent collection (3 mini plants)", price: 750 },
    { item: "Decor setup with floral elements and greenery", price: 850 },
    { item: "Custom message card with romantic design", price: 300 },
  ],
  delivery: {
    "Delivery Time": "Scheduled delivery (advance booking required)",
    "Location": "Indoor balcony, garden, or park area",
    "People": "2-4 people for setup and assistance",
    "Service Area": "Bangkok, ChiangMai, Phuket",
    "Delivery Fee": "Calculated at checkout",
    "Service": "Full setup with our team assistance"
  }
},
{
  id: "puzzle",
  name: "Solve the Puzzle Surprise",
  price: 5500,
  oldPrice: 6200,
  image: "images/puzzle box.jpg",
  description: "An interactive surprise experience where the recipient must solve fun puzzles and clues to reveal their gifts step-by-step.",
  inclusions: [
    { item: "Puzzle cards and riddles set", price: 500 },
    { item: "Personalized treasure box", price: 1500 },
    { item: "2-3 mini gifts inside the treasure box", price: 1000 },
    { item: "Decorative clue envelopes and accessories", price: 500 },
    { item: "QR code with digital message or video", price: 1500 },
    { item: "Setup with small props and decorations", price: 5000 }
  ],
  delivery: {
    "Delivery Time": "Same day delivery available",
    "Location": "Home, park, or restaurant setup area",
    "People": "Our team of 2-3 people to organize the puzzle experience",
    "Service Area": "Bangkok, Pattaya, Phuket",
    "Delivery Fee": "Calculated at checkout",
    "Service": "Puzzle experience fully guided and set up by our team"
  }
}
];

// ================= LOAD PRODUCT BASED ON URL =================
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Find product by ID
const product = products.find(p => p.id === productId);

if (product) {
  // Product Image & Description
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.description;

  // Pricing
  document.getElementById('product-price').textContent = `฿${product.price}`;
  const oldPriceElem = document.getElementById('product-old-price');
  if (product.oldPrice) {
    oldPriceElem.textContent = `฿${product.oldPrice}`;
    oldPriceElem.style.display = 'inline';
  }

  // Inclusions List
  const inclusionsList = document.getElementById('inclusions-list');
  inclusionsList.innerHTML = "";
  product.inclusions.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
       <strong>${item.item}</strong> 
      <span class="price">฿${item.price}</span>
    `;
    inclusionsList.appendChild(li);
  });

  // Delivery Info
  const deliveryList = document.getElementById('delivery-list');
  deliveryList.innerHTML = "";
  for (const [key, value] of Object.entries(product.delivery)) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${key}:</strong> ${value}`;
    deliveryList.appendChild(li);
  }

} else {
  // If no product found
  document.querySelector('.product-details').innerHTML = `
    <p>Sorry, the product you're looking for was not found.</p>
  `;
}



