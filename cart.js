function addToCart(land, pris) {
  // Get the cart from local storage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the item to the cart
  cart.push({
    land: land,
    pris: pris
  });

  // Save the updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Log the added item
  console.log(`Added ${land} to cart with price ${pris}.`);
}