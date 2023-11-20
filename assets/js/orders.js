const headerOrders = document.querySelector(".header-order");
const ordersContent = document.querySelector(".orders-content");
const totalPriceOrders = document.querySelector(".total_price-order");
const renderOrdersPage = (data) => {
  console.log("renderOrdersPage");
  ordersPage.classList.remove("active");
  wrapperProd.classList.remove("active");
  detailPage.classList.add("active");
  cartPage.classList.add("active");
  slidePage.classList.add("active");
  numberPage.classList.add("active");
  product.classList.add("active");
  titlePage.innerText = "ĐƠN HÀNG";
  scroolSmooth();
  if (data === null) {
    headerOrders.classList.add("active");
    cartPlaceHolder.classList.add("active");
    const htmls = `<div class="no_product-cart">
  <div class="no_product-img">
    <img src="./assets/img/cart-img.png" alt="cart" />
  </div>
  <h2 class="no_product-title">
    Bạn chưa có đơn hàng!
  </h2>
  <a href="index.html" class="no_product-link">GO SHOPPING</a>
</div>`;
    ordersContent.innerHTML = htmls;
  } else {
    headerOrders.classList.remove("active");
    cartPlaceHolder.classList.remove("active");
    const htmls = data.map((item, index) => {
      const formattedTotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.price);
      let verify = "";
      if (item.isVerify) {
        verify = "Đã xác thực";
      } else {
        verify = "Chưa xác thực";
      }
      return `<div class="cart-item" data="${index}">
    <div class="cart-product_info">
      <div class="cart-product_img">
        <img src="${item.img}" alt="" />
      </div>
      <div class="cart-product_name">
        ${item.name}
      </div>
    </div>

    <div class="cart-product_quanlity">
      <span class="quanlity_product" id="quanlity_product">1</span>
    </div>

    <div class="cart-product_price">
      <span>${formattedTotal}</span>
    </div>

    <div class="cart-product_action">
      <button">${verify}</button>
    </div>
  </div>`;
    });
    ordersContent.innerHTML = htmls.join("");
  }
};

// Xử lí logic
function ordersFunction() {
  const data = JSON.parse(localStorage.getItem("ORDERS"));
  console.log(data);
  renderOrdersPage(data);
  renderTotalPrice("ORDERS", totalPriceOrders);
  barItemActive(0);
}

function sendDataOrders() {
  let ordersArr = JSON.parse(localStorage.getItem("CART"));
  for (var i = 0; i < ordersArr.length; i++) {
    ordersArr[i].isVerify = false;
  }
  localStorage.setItem("ORDERS", JSON.stringify(ordersArr));
  localStorage.removeItem("CART");
  renderCartPage();
  placeOrderNotification();
}
