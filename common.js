/**
 * Created by championswimmer on 30/06/17.
 */

var catalog = [];
var cart = {};

function getCatalog(done) {
  $.getJSON('data/products.json', function (data) {
    catalog = data;
    done();
  });
}


function fetchCart() {
  let savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function addToCart(prodId) {
  if (cart[prodId]) {
    cart[prodId]++;
  } else {
    cart[prodId] = 1
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  fetchCart();
}

function getQtyInCart(prodId) {
  if (cart[prodId]) {
    return cart[prodId]
  } else {
    return 0;
  }
}

function removeFromCart(prodId) {
  if(cart[prodId]) {
    if(cart[prodId] <= 1) {
      delete cart[prodId]
    } else {
      cart[prodId]--;
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  fetchCart();

}

