let cart = [1200, 500, 800];
let sum = 0;

for (i = 0; i <= 2; i++) {
  // let productPrice = cart[i];
  let productPrice = cart[i] - (cart[i] * 3) / 100;
  sum = sum + productPrice;
}

alert(sum);
