const scroolSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const renderBarUser = () => {
  const htmls = `
    <a href="#" class="bar-item_link bar-user_link">
      <div class="bar-user_img">
        <img src="./assets/img/user.jpg" alt="bar-user" />
      </div>
      <span>${infoUser.username}</span>
    </a>`;
  barUser.innerHTML = htmls;
};

const renderNavaction = () => {
  const htmls = `
  <div class="action_item bell" onclick="notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
  </div>
  
  <div class="action_item user">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    <ul class="user_popup">
      <li class="popup_item">
        <p>Hello! ${infoUser.username}</p>
      </li>
      <li class="popup_item-line"></li>
      <li class="popup_item" onclick="notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')">
        <p>Sản phẩm yêu thích</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
      </li>
      <li class="popup_item" onclick="ordersFunction()">
        <p>Đơn hàng của bạn</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
      </li>
      <li class="popup_item" onclick="notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')">
        <p>Trung tâm hỗ trợ</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
      </li>
    </ul>
  </div>`;
  navAction.innerHTML = htmls;
};

const handleSideBarHome = () => {
  window.location.href = "index.html";
};

const barItem = document.querySelectorAll(".bar-item");

const barItemActive = (value) => {
  barItem.forEach((item, index) => {
    if (value == index) {
      document.querySelector(".bar-item.active").classList.remove("active");
      item.classList.add("active");
      console.log(this);
      return;
    }
    item.addEventListener("click", () => {
      document.querySelector(".bar-item.active").classList.remove("active");
      item.classList.add("active");
    });
  });
};
barItemActive();

/// Render ALL PRODUCT PAGE
const cartPage = document.querySelector(".cart-page");
const numberPage = document.querySelector(".number_page");
const slidePage = document.querySelector(".slide");
const productPage = document.querySelector(".product-page");
const ordersPage = document.querySelector(".orders-page");
const titlePage = document.querySelector(".title-product");

const renderProductPage = (value) => {
  scroolSmooth();
  product.innerHTML = "";
  cartPage.classList.add("active");
  slidePage.classList.add("active");
  numberPage.classList.add("active");
  ordersPage.classList.add("active");

  if (
    JSON.parse(localStorage.getItem("addedProduct")) ||
    JSON.parse(localStorage.getItem("deleteAdmin")) ||
    JSON.parse(localStorage.getItem("updateAdmin"))
  ) {
    productsLocal2 = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal2 = products;
  }
  if (!value) {
    titlePage.innerText = "TẤT CẢ SẢN PHẨM";
    const htmls = productsLocal2.map((item, index) => {
      const formattedTotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.price);
      return `<div class="product-item">
          <div class="product-img">
            <img src="${item.img}" alt="" />
          </div>
          <div class="product-detail">
            <h3 class="product-name">${item.name}</h3>
            <div class="product-price">
              <span class="">${formattedTotal}</span>
            </div>
            <div class="product-action">
              <button class="detail-btn" data="${index}" onclick="detailProduct()">THÔNG TIN</button>
              <button class="addtocart-btn" data="${index}" onclick="addToCart()">THÊM GIỎ HÀNG</button>
            </div>
          </div>
        </div>`;
    });
    product.innerHTML = htmls.join("");
    product.classList.remove("active");
  } else {
    if (value == null) {
      const htmls = `<h1>Không tìm thấy sản phẩm nào</h1>`;
      product.innerHTML = htmls;
      product.classList.remove("active");
    } else {
      const htmls = value.map((item, index) => {
        titlePage.innerText = "KẾT QUẢ TÌM KIẾM";
        const formattedTotal = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(item.price);
        return `<div class="product-item">
            <div class="product-img">
              <img src="${item.img}" alt="" />
            </div>
            <div class="product-detail">
              <h3 class="product-name">${item.name}</h3>
              <div class="product-price">
                <span class="">${formattedTotal}</span>
              </div>
              <div class="product-action">
                <button class="detail-btn" data=${
                  item.id - 1
                } onclick="detailProduct(${item.id})">THÔNG TIN</button>
                <button class="addtocart-btn" data=${
                  item.id - 1
                } onclick="addToCart()">THÊM GIỎ HÀNG</button>
              </div>
            </div>
          </div>`;
      });
      product.innerHTML = htmls.join("");
      product.classList.remove("active");
    }
  }
};
document.addEventListener("click", (event) => {
  if (event.target.matches(".addtocart-btn")) {
    addToCart();
  }
});
//// Render CART PAGE
const headerCart = document.querySelector(".header-cart");
const cartPlaceHolder = document.querySelector(".cart_place-order");
const cartContent = document.querySelector(".cart-content");
const renderCartPage = () => {
  scroolSmooth();
  let cartLocal = JSON.parse(localStorage.getItem("CART"));
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  cartPage.classList.remove("active");
  ordersPage.classList.add("active");
  slidePage.classList.add("active");
  numberPage.classList.add("active");
  product.classList.add("active");
  detailPage.classList.add("active");
  wrapperProd.classList.remove("active");
  titlePage.innerText = "GIỎ HÀNG";
  if (cartLocal === null || isLogin == false) {
    headerCart.classList.add("active");
    cartPlaceHolder.classList.add("active");
    const htmls = `<div class="no_product-cart">
    <div class="no_product-img">
      <img src="./assets/img/cart-img.png" alt="cart" />
    </div>
    <h2 class="no_product-title">
      KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG CỦA BẠN
    </h2>
    <a href="index.html" class="no_product-link">SHOPPING NGAY</a>
  </div>`;
    cartContent.innerHTML = htmls;
  } else {
    headerCart.classList.remove("active");
    cartPlaceHolder.classList.remove("active");
    const htmls = cartLocal.map((item, index) => {
      const formattedTotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.price);
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
        <input class="quanlity_product" id="quanlity_product" type="number" value="1" min="1" max="99"/>
      </div>
  
      <div class="cart-product_price">
        <span>${formattedTotal}</span>
      </div>
  
      <div class="cart-product_action">
        <button onclick="deleteProduct(${index})" class="cart_button">Delete</button>
      </div>
    </div>`;
    });
    cartContent.innerHTML = htmls.join("");
  }
};

//// ORDERS
const renderWhenClickBuy = (value) => {
  const cartContent = document.querySelector(".cart-content");
  const cartPlaceOrder = document.querySelector(".cart_place-order");
  const headerCart = document.querySelector(".header-cart");
  cartContent.innerHTML = `<h1 class="bought_render">Thank you for your trust</h1>`;
  cartPlaceOrder.classList.add("active");
  headerCart.classList.add("active");
  scroolSmooth();
};

// tính tổng tiền
const totalPrice = document.querySelector(".total_price");
const renderTotalPrice = (data, element) => {
  // const productCart = JSON.parse(localStorage.getItem("CART"));
  const productCart = JSON.parse(localStorage.getItem(data));
  if (productCart == null) {
    return;
  }
  const total = productCart.reduce(
    (total, productCart) => total + productCart.price,
    0
  );
  const formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(total);
  const htmls = `<span class="total">Tổng tiền:</span>
  <span class="price">${formattedTotal}</span>`;
  element.innerHTML = htmls;
};
/// RENDER TRANG ADMIN
const renderAdminPageAdd = () => {
  const wrapper = document.querySelector(".container_admin");
  document.querySelector(".header").classList.add("active");
  document.querySelector(".container").classList.add("active");
  const headerOrdersAdmin = document.getElementById("header_order-admin");
  headerOrdersAdmin.classList.add("active");

  const footerDiv = document.querySelector(".footer");
  footerDiv.style.display = "none";
  const htmls = `
    <form class="form_admin">
      <div class="form_controll_admin">
        <label for="file_product_admin" class="file_product_admin"
          >Ảnh sản phẩm
          </label>
          <input

          type="file"
          id="file_product_admin"
          accepts="image/*"
          placeholder="Chọn hình ảnh sản phẩm"
          />
          <img src="" alt="review ảnh" class="img_review_admin active"/>
      </div>

      <div class="form_controll_admin">
        <label for="name_product_admin">Tên sản phẩm</label>
        <input
          type="text"
          id="name_product_admin"
          placeholder="Nhập tên sản phẩm..."
        />
      </div>

      <div class="form_controll_admin">
        <label for="price_product_admin">Giá sản phẩm</label>
        <input
          type="text"
          id="price_product_admin"
          placeholder="Nhập giá sản phẩm..."
        />
      </div>

      <button class="submit_admin">THÊM</button>
    </form>`;
  wrapper.innerHTML = htmls;
};

/// handle xóa sản phẩm admin
deleteAdminPage.addEventListener("click", () => {
  const wrapper = document.querySelector(".container_admin");
  const footerDiv = document.querySelector(".footer");
  const headerOrdersAdmin = document.getElementById("header_order-admin");
  headerOrdersAdmin.classList.add("active");
  footerDiv.style.display = "none";
  console.log("renderAdminPageDelete");
  // xử lí render
  const htmls = `
    <form class="form_admin">

      <div class="form_controll_admin">
        <label for="name_product_admin-delete">ID sản phẩm</label>
        <input
          type="text"
          id="name_product_admin-delete"
          placeholder="Nhập id sản phẩm..."
        />
      </div>

      <button class="submit_admin" id="admin_delete">XÓA</button>
    </form>`;
  wrapper.innerHTML = htmls;
  // xử lí logic xóa sản phẩm
  const adminDeleteButton = document.getElementById("admin_delete");
  adminDeleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    const dataProductLocal =
      JSON.parse(localStorage.getItem("PRODUCTS")) ||
      JSON.parse(localStorage.getItem("PRODUCT"));
    const deleteValue = document.getElementById(
      "name_product_admin-delete"
    ).value;
    // cờ kiểm tra có id sản phẩm mà admin nhập vào hây khong ?
    let flag = true;
    for (var i = 0; i < dataProductLocal.length; i++) {
      if (dataProductLocal[i].id === Number(deleteValue)) {
        dataProductLocal.splice(i, 1); // Xóa phần tử khỏi mảng
        notificationAdminSuccess("XÓA SẢN PHẨM THÀNH CÔNG");
        flag = false;
        break; // Sau khi xóa xong, thoát khỏi vòng lặp
      }
    }
    localStorage.setItem("PRODUCTS", JSON.stringify(dataProductLocal));
    localStorage.setItem("deleteAdmin", JSON.stringify(true));
    // Kiểm tra có id admin nhập vào có trong danh sách sản phẩm không ?
    if (flag) notificationAdminFail(`ID "${deleteValue}" KHÔNG TỒN TẠI`);
  });
});

// hanlde chỉnh sửa sản phẩm
const updateAdminPage = document.getElementById("updateAdminPage");
updateAdminPage.addEventListener("click", () => {
  const wrapper = document.querySelector(".container_admin");
  const footerDiv = document.querySelector(".footer");
  const headerOrdersAdmin = document.getElementById("header_order-admin");
  headerOrdersAdmin.classList.add("active");
  footerDiv.style.display = "none";
  // xử lí render
  const htmls = `
    <form class="form_admin">

    <div class="form_controll_admin">
      <label for="file_product_admin" class="file_product_admin">Ảnh sản phẩm</label>
        <input 
          type="file"
          id="file_product_admin"
          accepts="image/*"
          placeholder="Chọn hình ảnh sản phẩm"
        />
      <img src="" alt="review ảnh" class="img_review_admin active"/>
    </div>

      <div class="form_controll_admin">
        <label for="id_product_admin-update">ID sản phẩm</label>
        <input
          type="text"
          id="id_product_admin-update"
          placeholder="Nhập id sản phẩm..."
        />
      </div>

      <div class="form_controll_admin">
        <label for="name_product_admin-update">Tên mới của sản phẩm</label>
        <input
          type="text"
          id="name_product_admin-update"
          placeholder="Nhập tên mới của sản phẩm..."
        />
      </div>

      <div class="form_controll_admin">
        <label for="price_product_admin-update">Giá mới của sản phẩm</label>
        <input
          type="text"
          id="price_product_admin-update"
          placeholder="Nhập tên mới của sản phẩm..."
        />
      </div>

      <button class="submit_admin" id="admin_update">XÁC NHẬN</button>
    </form>`;
  wrapper.innerHTML = htmls;
  // xử lí logic chỉnh sửa sản phẩm
  // 1. xử lí file ảnh người dùng tải lên
  let imgUrl = "";
  let pictureValue = document.getElementById("file_product_admin");
  console.log(pictureValue);
  pictureValue.addEventListener("change", (e) => {
    var file = e.target.files[0];
    const fr = new FileReader();
    fr.addEventListener("load", () => {
      const url = fr.result;
      imgUrl = url;
      handleImageReview(imgUrl, true);
    });
    fr.readAsDataURL(file);
  });
  // 2. xử lí chỉnh xử
  const adminUpdateButton = document.getElementById("admin_update");
  adminUpdateButton.addEventListener("click", (e) => {
    e.preventDefault();
    let flag = true;
    const dataProductLocal =
      JSON.parse(localStorage.getItem("PRODUCTS")) ||
      JSON.parse(localStorage.getItem("PRODUCT"));
    const id = document.getElementById("id_product_admin-update").value;
    const name = document.getElementById("name_product_admin-update").value;
    const price = document.getElementById("price_product_admin-update").value;
    // console.log(dataProductLocal);
    dataProductLocal.forEach((item, index) => {
      if (Number(item.id) == Number(id)) {
        item.name = name;
        item.price = Number(price);
        item.img = imgUrl;
        dataProductLocal.splice(index, 1, item);
        localStorage.setItem("PRODUCTS", JSON.stringify(dataProductLocal));
        localStorage.setItem("updateAdmin", JSON.stringify(true));
        notificationAdminSuccess("CHỈNH SỬA SẢN PHẨM THÀNH CÔNG");
        // làm mới ô input
        flag = false;
        document.getElementById("id_product_admin-update").value = "";
        document.getElementById("name_product_admin-update").value = "";
        document.getElementById("price_product_admin-update").value = "";
        handleImageReview("", false);
      }
    });
    if (flag) notificationAdminFail(`ID "${id}" KHÔNG TỒN TẠI`);
  });
});

// hanlde verify đơn hàng
const ordersAdminPage = document.getElementById("ordersAdminPage");
ordersAdminPage.addEventListener("click", () => {
  const wrapper = document.querySelector(".container_admin");
  const footerDiv = document.querySelector(".footer");
  document.querySelector("#header_order-admin").classList.remove("active");
  footerDiv.style.display = "none";
  // xử lí render
  const data = JSON.parse(localStorage.getItem("ORDERS"));
  console.log(data);
  const htmls = data.map((item, index) => {
    const formattedTotal = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(item.price);
    let verify = "";
    let verifyActive = "active";
    if (item.isVerify) {
      verify = "Đã xác thực";
    } else {
      verify = "Xác thực";
      verifyActive = "";
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
    <button class="order_button ${verifyActive}" id="verifyOrders" data="${item.id}">${verify}</button> 
  </div>
</div>`;
  });
  wrapper.innerHTML = htmls.join("");
  const ordersData = JSON.parse(localStorage.getItem("ORDERS"));
  console.log(ordersData);

  const checkInput = document.querySelectorAll("#verifyOrders");
  checkInput.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.add("active");
      let dataIndex = Number(item.getAttribute("data"));
      for (let i = 0; i < ordersData.length; i++) {
        if (ordersData[i].id == dataIndex) {
          ordersData[i].isVerify = true;
          localStorage.setItem("ORDERS", JSON.stringify(ordersData));
          ordersAdminPage.click();
        }
      }
    });
  });
});

//  hanlde quản lí user
const userAdminPage = document.getElementById("userAdminPage");
userAdminPage.addEventListener("click", () => {
  const wrapper = document.querySelector(".container_admin");
  const footerDiv = document.querySelector(".footer");
  footerDiv.style.display = "none";
  const headerOrdersAdmin = document.getElementById("header_order-admin");
  headerOrdersAdmin.classList.add("active");
  wrapper.innerHTML = `<div class="wrapper_users-admin"></div>`;
  const wrapperUser = document.querySelector(".wrapper_users-admin");
  const dataUser = JSON.parse(localStorage.getItem("USER"));
  const htmls = dataUser.map((item, index) => {
    return `
      <div class="item_user">
        <div class="user_img-admin">
          <img src="./assets/img/user-login.jpg" alt="user_admin" />
        </div>
        <div class="user_info-admin">
          <h3 class="user_name-admin">${item.username}</h3>
          <div class="user_description-admin">Khách hàng</div>
        </div>
        <div class="item_user-action">
          <span data="${item.id}" id="delete_user-admin">&times;</span>
        </div>
      </div>`;
  });
  wrapperUser.innerHTML = htmls.join("");

  // xử lí logic ( xóa user )
  const deleteUser = document.querySelectorAll("#delete_user-admin");
  deleteUser.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].id == Number(item.getAttribute("data"))) {
          dataUser.splice(i, 1); // xóa đi user admin vừa click
          localStorage.setItem("USER", JSON.stringify(dataUser)); // set lại mảng user
          userAdminPage.click();
        }
      }
    });
  });
});

if (JSON.parse(localStorage.getItem("isAdmin"))) {
  renderAdminPageAdd();
}
