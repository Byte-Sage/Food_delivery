// Updated sample restaurant data with actual names and descriptions
const restaurants = [
  {
    name: "TastyBites",
    description: "Serving delicious and diverse cuisines."
  },
  {
    name: "SpiceHub",
    description: "Bringing the best flavors from around the world."
  }
  // Add more restaurant data as needed
];

// Function to generate restaurant HTML content
function createRestaurantHTML(restaurant) {
  return `
    <section class="restaurant">
      <h2>${restaurant.name}</h2>
      <p>${restaurant.description}</p>
      <button class="order-btn">Order Now</button>
    </section>
  `;
}

// Function to display restaurants on the page
function displayRestaurants(restaurants) {
  const restaurantList = document.getElementById("restaurantList");
  restaurantList.innerHTML = restaurants.map(createRestaurantHTML).join("");
}

// Simulated order process
function orderNow() {
  alert('Your order has been placed!');
  // In a real scenario, this function would send an order request to the server
}

// Event listener for order buttons
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("order-btn")) {
    orderNow();
  }
});

// Display restaurants when the page loads
window.addEventListener("load", function() {
  displayRestaurants(restaurants);
});
