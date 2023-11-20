function addProductToLocal(data) {
  if (isLogin) {
    let cartArr = JSON.parse(localStorage.getItem("CART")) || [];
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const productExists = cartArr.some((item) => item.id === data.id);
    if (!productExists) {
      cartArr.push(data);
      localStorage.setItem("CART", JSON.stringify(cartArr));
    }
  } else {
    console.log("Chưa đăng nhập nên chưa lưu");
  }
}

function addToCart() {
  const addToCartBnt = document.querySelectorAll(".addtocart-btn");
  if (
    JSON.parse(localStorage.getItem("addedProduct")) ||
    JSON.parse(localStorage.getItem("deleteAdmin")) ||
    JSON.parse(localStorage.getItem("updateAdmin"))
  ) {
    productsLocal2 = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal2 = products;
  }
  addToCartBnt.forEach((item, index) => {
    item.addEventListener("click", () => {
      const dataProduct = item.attributes.data.value;
      productsLocal2.forEach((item, index) => {
        if (dataProduct == index) {
          renderNotificationAddToCart();
          localStorage.setItem("product-cart", JSON.stringify(item));
          addProductToLocal(item);
          renderTotalPrice("CART", totalPrice);
          return;
        }
      });
    });
  });
}

function deleteProduct(index) {
  const cartLocal = JSON.parse(localStorage.getItem("CART"));

  var cartCopy = cartLocal.slice();
  cartCopy.splice(index, 1);
  localStorage.setItem("CART", JSON.stringify(cartCopy));
  renderCartPage();
  renderTotalPrice("CART", totalPrice);
  if (cartCopy.length == 0) {
    localStorage.removeItem("CART");
    renderCartPage();
  }
}
