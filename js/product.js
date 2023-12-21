$(document).ready(function () {
  // Lấy các thẻ input range và number theo id
  var priceSlider = document.getElementById("price-slider");
  var priceInput = document.getElementById("price-input");
  var priceValue = document.getElementById("priceValue");
  // Function để cập nhật giá trị của priceValue khi input number thay đổi
  function updatePriceValue() {
    var maxValue = parseFloat(priceInput.max);
    var currentValue = parseFloat(priceInput.value);

    // Kiểm tra nếu giá trị hiện tại vượt quá giá trị max
    if (currentValue > maxValue) {
      priceInput.value = maxValue;
      priceSlider.value = maxValue;
      priceValue.innerHTML = maxValue;
    } else {
      priceValue.innerHTML = currentValue;
    }
  }

  // Gọi function để cập nhật giá trị ban đầu
  updatePriceValue();

  // Thêm event listener để gọi function cập nhật giá trị khi input number thay đổi
  priceInput.addEventListener('input', updatePriceValue);
  // Thêm sự kiện "input" vào thẻ input number để cập nhật giá trị của thẻ input range
  priceInput.addEventListener("input", function () {
    var value = parseFloat(priceInput.value);

    // Kiểm tra giá trị nhập vào có vượt quá giá trị max không, nếu có thì gán giá trị max
    if (value > priceSlider.max) {
      priceInput.value = priceSlider.max;
      value = parseFloat(priceSlider.max);
    }

    // Cập nhật giá trị của thẻ input range
    priceSlider.value = value;
    priceValue.value = value;
  });

  // Thêm sự kiện "input" vào thẻ input range để cập nhật giá trị của thẻ input number
  priceSlider.addEventListener("input", function () {
    var value = parseInt(priceSlider.value);

    // Kiểm tra giá trị nhập vào có vượt quá giá trị max không, nếu có thì gán giá trị max
    if (value > priceSlider.max) {
      priceSlider.value = priceSlider.max;
      value = parseInt(priceSlider.max);
    }

    // Cập nhật giá trị của thẻ input number
    priceInput.value = value;
  });
  

  // Ẩn/hiện các mục khi màn hình có kích thước khác nhau
  $(window).resize(function () {
    var screenWidth = $(window).width();

    if (screenWidth < 768) {
      $(".box_designer_product, .box_brand_product, .box_material_product, .box_shape_product").hide();
      // Xử lý khi nhấn nút "Advanced"
      $(".advanced").click(function () {
        $(".box_designer_product, .box_brand_product, .box_material_product, .box_shape_product").toggle();
      })
    }
    if (screenWidth >= 768) {
      $(".box_designer_product, .box_brand_product, .box_material_product, .box_shape_product").show();
    }
  });

  // Ẩn/hiện các mục bằng cách click vào tiêu đề của chúng
  $(".category_list, .features_list, .color_list").show();
  $(".brand_list, .shape_list, .designer_list, .material_list").hide();

  $(".box_category_product h3").click(function () {
    $(".category_list").toggle();
    $(".box_category_product i").toggleClass("fa-regular fa-chevron-up fa-regular fa-chevron-down")
  });

  $(".box_features_product h3").click(function () {
    $(".features_list").toggle();
    $(".box_features_product i").toggleClass("fa-regular fa-chevron-up fa-regular fa-chevron-down")
  });

  $(".box_color_product h3").click(function () {
    $(".color_list").toggle();
    $(".box_color_product i").toggleClass("fa-regular fa-chevron-up fa-regular fa-chevron-down")
  });

  $(".box_brand_product h3").click(function () {
    $(".brand_list").toggle();
    $(".box_brand_product i").toggleClass("fa-regular fa-chevron-down fa-regular fa-chevron-up")
  });

  $(".box_shape_product h3").click(function () {
    $(".shape_list").toggle();
    $(".box_shape_product i").toggleClass("fa-regular fa-chevron-down fa-regular fa-chevron-up")
  });

  $(".box_designer_product h3").click(function () {
    $(".designer_list").toggle();
    $(".box_designer_product i").toggleClass("fa-regular fa-chevron-down fa-regular fa-chevron-up")
  });

  $(".box_material_product h3").click(function () {
    $(".material_list").toggle();
    $(".box_material_product i").toggleClass("fa-regular fa-chevron-down fa-regular fa-chevron-up")
  });

  $(".box_price_product h3").click(function () {
    $(".input-range").toggle();
    $(".box_price_product i").toggleClass("fa-regular fa-chevron-up fa-regular fa-chevron-down")
  });

  // Ngăn chặn hành vi mặc định của trình duyệt khi click vào một liên kết
  const link = document.getElementById('toggle-colors');
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });

  // Hiệu ứng xuất hiện dần cho mục "color"
  const toggleColorBtn = document.getElementById('toggle-colors');
  const hiddenColorItems = document.querySelectorAll('.color.hidden');
  let isColorOpen = false;

  toggleColorBtn.addEventListener('click', () => {
    isColorOpen = !isColorOpen;

    if (isColorOpen) {
      hiddenColorItems.forEach((color, index) => {
        color.style.animationDelay = `${index * 0.1}s`;
        color.classList.remove('hidden');
        color.classList.add('slide-up');
      });
    } else {
      hiddenColorItems.forEach(color => {
        color.classList.remove('slide-up');
        color.classList.add('slide-down');
        setTimeout(() => {
          color.classList.add('hidden');
          color.classList.remove('slide-down');
        }, 500);
      });
    }
  });
  // Thực hiện hành động khi nhấn vào nút "show more" ở mục "colors"
  var myColorLink = document.getElementById("toggle-colors");
  var isColorShowMore = true;

  myColorLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (isColorShowMore) {
      myColorLink.innerHTML = "Show less"
      isColorShowMore = false;
    } else {
      myColorLink.innerHTML = "Show more <sup>+</sup>4";
      isColorShowMore = true;
    }
  });

  // Hiệu ứng xuất hiện dần cho mục "category"
  const toggleCategoryBtn = document.getElementById('toggle-category');
  const hiddenCategoryItems = document.querySelectorAll('.category.hidden');
  let isCategoryOpen = false;

  toggleCategoryBtn.addEventListener('click', () => {
    isCategoryOpen = !isCategoryOpen;

    if (isCategoryOpen) {
      hiddenCategoryItems.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
        category.classList.remove('hidden');
        category.classList.add('slide-up');
      });
    } else {
      hiddenCategoryItems.forEach(category => {
        category.classList.remove('slide-up');
        category.classList.add('slide-down');
        setTimeout(() => {
          category.classList.add('hidden');
          category.classList.remove('slide-down');
        }, 500);
      });
    }
  });

  // Thực hiện hành động khi nhấn vào nút "show more" ở mục "category"
  var myCategoryLink = document.getElementById("toggle-category");
  var isCategoryShowMore = true;

  myCategoryLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (isCategoryShowMore) {
      myCategoryLink.innerHTML = "Show less"
      isCategoryShowMore = false;
    } else {
      myCategoryLink.innerHTML = "Show more <sup>+</sup>3";
      isCategoryShowMore = true;
    }
  });

  // Hiệu ứng xuất hiện dần cho mục "brand"
  const toggleBrandBtn = document.getElementById('toggle-brand');
  const hiddenBrandItems = document.querySelectorAll('.brand.hidden');
  let isBrandOpen = false;

  toggleBrandBtn.addEventListener('click', () => {
    isBrandOpen = !isBrandOpen;

    if (isBrandOpen) {
      hiddenBrandItems.forEach((brand, index) => {
        brand.style.animationDelay = `${index * 0.1}s`;
        brand.classList.remove('hidden');
        brand.classList.add('slide-up');
      });
    } else {
      hiddenBrandItems.forEach(brand => {
        brand.classList.remove('slide-up');
        brand.classList.add('slide-down');
        setTimeout(() => {
          brand.classList.add('hidden');
          brand.classList.remove('slide-down');
        }, 500);
      });
    }
  });

  // Thực hiện hành động khi nhấn vào nút "show more" ở mục "brand"
  var myBrandLink = document.getElementById("toggle-brand");
  var isBrandShowMore = true;

  myBrandLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (isBrandShowMore) {
      myBrandLink.innerHTML = "Show less"
      isBrandShowMore = false;
    } else {
      myBrandLink.innerHTML = "Show more <sup>+</sup>3";
      isBrandShowMore = true;
    }
  });

  // Hiệu ứng xuất hiện dần cho mục "shape"
  const toggleShapeBtn = document.getElementById('toggle-shape');
  const hiddenShapeItems = document.querySelectorAll('.shape.hidden');
  let isShapeOpen = false;

  toggleShapeBtn.addEventListener('click', () => {
    isShapeOpen = !isShapeOpen;

    if (isShapeOpen) {
      hiddenShapeItems.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.1}s`;
        shape.classList.remove('hidden');
        shape.classList.add('slide-up');
      });
    } else {
      hiddenShapeItems.forEach(shape => {
        shape.classList.remove('slide-up');
        shape.classList.add('slide-down');
        setTimeout(() => {
          shape.classList.add('hidden');
          shape.classList.remove('slide-down');
        }, 500);
      });
    }
  });

  // Thực hiện hành động khi nhấn vào nút "show more" ở mục "shape"
  var myShapeLink = document.getElementById("toggle-shape");
  var isShapeShowMore = true;

  myShapeLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (isShapeShowMore) {
      myShapeLink.innerHTML = "Show less"
      isShapeShowMore = false;
    } else {
      myShapeLink.innerHTML = "Show more <sup>+</sup>3";
      isShapeShowMore = true;
    }
  });

  // Hiệu ứng xuất hiện dần cho mục "material"
  const toggleMaterialBtn = document.getElementById('toggle-material');
  const hiddenMaterialItems = document.querySelectorAll('.material.hidden');
  let isMaterialOpen = false;

  toggleMaterialBtn.addEventListener('click', () => {
    isMaterialOpen = !isMaterialOpen;

    if (isMaterialOpen) {
      hiddenMaterialItems.forEach((material, index) => {
        material.style.animationDelay = `${index * 0.1}s`;
        material.classList.remove('hidden');
        material.classList.add('slide-up');
      });
    } else {
      hiddenMaterialItems.forEach(material => {
        material.classList.remove('slide-up');
        material.classList.add('slide-down');
        setTimeout(() => {
          material.classList.add('hidden');
          material.classList.remove('slide-down');
        }, 500);
      });
    }
  });

  // Thực hiện hành động khi nhấn vào nút "show more" ở mục "material"
  var myMaterialLink = document.getElementById("toggle-material");
  var isMaterialShowMore = true;

  myMaterialLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (isMaterialShowMore) {
      myMaterialLink.innerHTML = "Show less"
      isMaterialShowMore = false;
    } else {
      myMaterialLink.innerHTML = "Show more <sup>+</sup>3";
      isMaterialShowMore = true;
    }
  });
});
$(document).ready(function() {
  $('.dropdown-item').click(function(e) {
    e.preventDefault();
    var product = $(this).data('product');
    $('.dropdown-toggle').text('Sản phẩm ' + product);
    $('.dropdown-toggle').dropdown('toggle'); // Hiển thị dropdown
    // Thực hiện các thay đổi khác liên quan đến sản phẩm đã chọn ở đây
  });
});
const priceInput = document.getElementById("price-slider");
const priceValue = document.getElementById("priceValue");

priceInput.addEventListener("input", function() {
  priceValue.innerText = priceInput.value;
});

