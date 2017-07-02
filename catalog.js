/**
 * Created by championswimmer on 30/06/17.
 */

function add(prodId) {
  addToCart(prodId);
  displayCatalog();
}

function displayCatalog() {
  let catContainer = $('#catalog-container');
  catContainer.empty();
  for (let product of catalog) {
    let cartQty = getQtyInCart(product.id);
    catContainer.append(
      $(
        `<div class="col-4 p-3">
            <img class="img-thumbnail" 
            src="http://via.placeholder.com/300x300/${product.color}?text=${product.name}">
            <div class="product-data">
              <div class=""> Rs. ${product.price} </div>
              <button onclick="add(${product.id})" class="btn btn-outline-primary">
                  Add To Cart
              </button>
              <span>${cartQty} in Cart</span>
            </div>
            
        </div>`
      )
    )
  }
}

$(function () {
  getCatalog(function () {
    fetchCart();
    displayCatalog()
  })
});