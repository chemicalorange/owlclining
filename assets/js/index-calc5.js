let areaRadioList = document.querySelector(".area__radio-list");
let areaSelect = document.querySelectorAll(".area__select");
let selectService = document.querySelector(".select_service");
let selectServiceItem = selectService.querySelectorAll(".options__item");
let areaService = document.querySelector(".area__service");
let areaServiceItem = areaService?.querySelectorAll(".area__service-item");
let areaPrice = document.querySelector(".area__score-sum span");
let areaSlider = document.querySelector(".area__slider");
let swiperSliderItem = areaSlider.querySelectorAll(".swiper-slide");

var swiper = new Swiper(".area__slider", {
  loop: true,
  pagination: {
    el: ".main-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".areaSwiper-button-next",
    prevEl: ".areaSwiper-button-prev",
  },
});

selectServiceItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    let dataPriceOption = item.getAttribute("data-price");
    swiperSliderItem.forEach((item, index) => {
      console.log("worj");
      swiper.destroy();
      if (item.getAttribute("data-category") === dataPriceOption) {
        item.classList.remove("swiper-slide");
        item.classList.add("hide");
        item.setAttribute("style", "display: none");
      } else {
        item.removeAttribute("style");
        item.classList.add("swiper-slide");
      }
    });
    swiper = new Swiper(".area__slider", {
      loop: true,
      pagination: {
        el: ".main-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".areaSwiper-button-next",
        prevEl: ".areaSwiper-button-prev",
      },
    });
  });
});

const hideOptions = (event) => {
  if (
    event.target.className !== "area__select-input" &&
    event.target.className !== "options__item"
  ) {
    areaSelect.forEach((item) => {
      item.querySelector(".options").classList.remove("active");
    });

    document.removeEventListener("click", hideOptions);
  }
};

areaSelect.forEach((item) => {
  let areaSelectInput = item.querySelector(".area__select-input");
  let options = item.querySelector(".options");
  let optionsItems = item.querySelectorAll(".options__item");

  areaSelectInput.addEventListener("click", () => {
    options.classList.toggle("active");
    document.addEventListener("click", hideOptions);
  });

  optionsItems.forEach((option) => {
    option.addEventListener("click", (event) => {
      let dataPriceOption = option.getAttribute("data-price");
      areaSelectInput.innerText = event.target.innerText;
      areaSelectInput.setAttribute("data-price", dataPriceOption);
      options.classList.remove("active");

      price();
    });
  });
});

areaServiceItem?.forEach((item, index) => {
  let serviceDel = item.querySelector(".area__service-del");
  let service1Value = item.querySelector(".area__service-value");
  let service1Add = item.querySelector(".area__service-add");

  serviceDel.addEventListener("click", () => {
    let value = Number(service1Value.innerText);
    if (value > 0) {
      service1Value.innerText = value - 1;
    }
    price();
  });
  service1Add.addEventListener("click", () => {
    let value = Number(service1Value.innerText);
    service1Value.innerText = value + 1;
    price();
  });
});

let sum = 0;
const price = () => {
  let areaSelectInput = document.querySelectorAll(".area__select-input");
  let service1Value = document.querySelectorAll(".area__service-value");

  areaSelectInput.forEach((areaSelectInputItem) => {
    sum += +areaSelectInputItem.dataset.price;
  });

  service1Value.forEach((serviceItem) => {
    sum += +serviceItem.dataset.price * +serviceItem.innerText;
  });
  areaPrice.innerText = sum;
  sum = 0;
};