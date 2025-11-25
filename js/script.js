// Page Loader
window.onload = function () {
  setTimeout(() => {
    const loader = document.getElementById("onload-loader");
    const content = document.getElementById("onload-content");

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.classList.add("onload-hidden");
      content.classList.remove("onload-hidden");
      // initCounterObserver();
    }, 500);
  }, 2000);
};
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $(".testimonial-img-slick").slick({
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0",
      asNavFor: ".testimonial-cntn-slider",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,

      prevArrow: `
      <button class="slick-prev custom-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
        </svg>
      </button>
    `,
      nextArrow: `
      <button class="slick-next custom-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
        </svg>
      </button>
    `,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".testimonial-cntn-slider").slick({
      dots: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      centerMode: true,
      arrows: false,
      infinite: true,
    });

    // Add next/prev classes
    $(".testimonial-img-slick .slick-center").next().addClass("sl-next");
    $(".testimonial-img-slick .slick-center").prev().addClass("sl-prev");

    $(".testimonial-img-slick").on("beforeChange", function () {
      $(".sl-next, .sl-prev").removeClass("sl-next sl-prev");
    });

    $(".testimonial-img-slick").on("afterChange", function () {
      $(".testimonial-img-slick .slick-center").next().addClass("sl-next");
      $(".testimonial-img-slick .slick-center").prev().addClass("sl-prev");
    });
  });
});
