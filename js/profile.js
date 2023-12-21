$(document).ready(function() {
    // Ẩn 3 ảnh 6, 7 và 8
    $(".img-hide-nghia img:nth-child(1)").hide();
    $(".img-hide-khai img:nth-child(1)").hide();
    $(".img-hide-hoang img:nth-child(1)").hide();
    $(".img-hide-quy img:nth-child(1)").hide();
  
    // Xử lý sự kiện khi nhấn vào nút "View More"
    $(".button_trannghia").click(function(event) {
      event.preventDefault();
      // Kiểm tra trạng thái của nút
      if ($(this).text() === "VIEW MORE") {
        // Hiển thị 3 ảnh 6, 7 và 8
        $(".img-hide-nghia img:nth-child(1)").fadeIn(300);
        $(this).text("VIEW LESS");
      } else {
        // Ẩn 3 ảnh 6, 7 và 8
        $(".img-hide-nghia img:nth-child(1)").fadeOut(300);
        $(this).text("VIEW MORE");
      }
    });
    // Xử lý sự kiện khi nhấn vào nút "View More"
    $(".button_khailuu").click(function() {
      // Kiểm tra trạng thái của nút
      if ($(this).text() === "VIEW MORE") {
        // Hiển thị 3 ảnh 6, 7 và 8
        $(".img-hide-khai img:nth-child(1)").fadeIn(300);
        $(this).text("VIEW LESS");
      } else {
        // Ẩn 3 ảnh 6, 7 và 8
        $(".img-hide-khai img:nth-child(1)").fadeOut(300);
        $(this).text("VIEW MORE");
      }
    });
    // Xử lý sự kiện khi nhấn vào nút "View More"
    $(".button_duyhoang").click(function() {
      // Kiểm tra trạng thái của nút
      if ($(this).text() === "VIEW MORE") {
        // Hiển thị 3 ảnh 6, 7 và 8
        $(".img-hide-hoang img:nth-child(1)").fadeIn(300);
        $(this).text("VIEW LESS");
      } else {
        // Ẩn 3 ảnh 6, 7 và 8
        $(".img-hide-hoang img:nth-child(1)").fadeOut(300);
        $(this).text("VIEW MORE");
      }
    });
    // Xử lý sự kiện khi nhấn vào nút "View More"
    $(".button_xuanquy").click(function() {
      // Kiểm tra trạng thái của nút
      if ($(this).text() === "VIEW MORE") {
        // Hiển thị 3 ảnh 6, 7 và 8
        $(".img-hide-quy img:nth-child(1)").fadeIn(300);
        $(this).text("VIEW LESS");
      } else {
        // Ẩn 3 ảnh 6, 7 và 8
        $(".img-hide-quy img:nth-child(1)").fadeOut(300);
        $(this).text("VIEW MORE");
      }
    });

  });
  
  