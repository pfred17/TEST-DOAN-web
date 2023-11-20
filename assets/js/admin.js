// 1. THÊM SẢN PHẨM
let pictureValue = document.getElementById("file_product_admin");
const addProduct = () => {
  let nameValue = document.getElementById("name_product_admin").value;
  let priceValue = document.getElementById("price_product_admin").value;

  let productsArr = JSON.parse(localStorage.getItem("PRODUCT")) || [];

  let prodtObject = {
    id: productsArr.length + 1,
    img: imgUrl,
    name: nameValue,
    price: Number(priceValue),
  };
  productsArr.push(prodtObject);

  localStorage.setItem("PRODUCTS", JSON.stringify(productsArr));
  localStorage.setItem("PRODUCT", JSON.stringify(productsArr));
  localStorage.setItem("addedProduct", true);
};

const navItemAdmin = document.querySelectorAll(".nav_item_admin");
navItemAdmin.forEach((item, index) => {
  item.onclick = function () {
    document.querySelector(".nav_item_admin.active").classList.remove("active");
    this.classList.add("active");
    if (index == 0) window.location.href = "index.html";
  };
});

// xử lí file ảnh người dùng tải lên
let imgUrl = "";
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

// xử lí ẩn hiện ảnh review
const handleImageReview = (url, flag) => {
  const imgReview = document.querySelector(".img_review_admin");
  console.log(imgReview);
  if (flag) {
    imgReview.setAttribute("src", url);
    imgReview.classList.remove("active");
    document.querySelector(".file_product_admin").classList.add("active");
  } else {
    imgReview.classList.add("active");
    document.querySelector(".file_product_admin").classList.remove("active");
  }
};

const formSubmit = (e) => {
  e.preventDefault();
};
const button = document.querySelector(".submit_admin");

button.addEventListener("click", (e) => {
  e.preventDefault();
  addProduct();
  notificationAdminSuccess("THÊM SẢN PHẨM THÀNH CÔNG");
  handleImageReview("", false);
  document.getElementById("name_product_admin").value = "";
  document.getElementById("price_product_admin").value = "";
});

// 2. XÓA SẢN PHẨM

const sigOutAdmin = document.getElementById("sigoutAdmin");
sigOutAdmin.addEventListener("click", () => {
  JSON.stringify(localStorage.setItem("isAdmin", false));
  window.location.href = "index.html";
});
