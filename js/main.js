(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Modal Video
  var $videoSrc;
  $(".btn-play").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  $("#videoModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });

  // Project and Testimonial carousel
  $(".project-carousel, .testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Switch
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
      document.getElementById("light").style.display = "none";
      document.getElementById("night").style.display = "block";
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      document.getElementById("light").style.display = "none";
      document.getElementById("night").style.display = "block";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      document.getElementById("night").style.display = "none";
      document.getElementById("light").style.display = "block";
    }
  }
  toggleSwitch.addEventListener("change", switchTheme, false);

  let map = document.querySelector("#line-map");

  map.addEventListener("click", function () {
    var latitude = "50.851603";
    var longitude = "4.392314";

    var googleMapsUrl =
      "https://www.google.com/maps?q=" + latitude + "," + longitude;
    window.open(googleMapsUrl, "_blank");
  });
})(jQuery);

function shareOnFacebook() {
  // Replace the URL with your own value
  var url = "https://example.com";

  // Create the Facebook share URL
  var shareUrl =
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);

  // Open the share URL in a new window or tab
  window.open(shareUrl);
}

function shareOnInstagram() {
  // Replace the URL with your own value
  var url =
    "https://www.nacion.com/el-pais/politica/liberal-progresista-plantea-mocion-de-censura/SYXS23Z5URDS3LNREFIOB3HYFQ/story/";

  // Create the Instagram share URL
  var shareUrl =
    "https://www.instagram.com/sharer.php?u=" + encodeURIComponent(url);

  // Open the share URL in a new window or tab
  window.open(shareUrl);
}

function shareOnWhatsApp() {
  // Replace the URL and text with your own values
  var url = window.location.href;
  alert(url);
  var text = "Découvrez ce site Web génial!";

  // Create the WhatsApp share URL
  var shareUrl =
    "https://api.whatsapp.com/send?text=" +
    encodeURIComponent(text + " " + url);

  // Open the share URL in a new window or tab
  window.open(shareUrl);
}
