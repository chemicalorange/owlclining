let addOne = document.querySelector("#add_one");
let delOne = document.querySelector("#del_one");
let totalArea = document.querySelector("#total_area"); //+
let areaSelect = document.querySelectorAll(".area__select");
let areaService = document.querySelector(".area__service");
let areaServiceItem = areaService?.querySelectorAll(".area__service-item");
let areaPrice = document.querySelector(".area__score-sum span");

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
      areaSelectInput.innerText = event.target.innerText;
      areaSelectInput.setAttribute(
        "data-price",
        option.getAttribute("data-price")
      );
      options.classList.remove("active");
      price();
    });
  });
});

addOne.addEventListener("click", () => {
  let result = Number(totalArea.value);
  totalArea.value = result + 1;
  price();
});

delOne.addEventListener("click", () => {
  let result = Number(totalArea.value);
  totalArea.value = result - 1;
  if (result > 1) {
    totalArea.value = result - 1;
  } else {
    totalArea.value = 0;
  }
  price();
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
    sum += +areaSelectInputItem.dataset.price * +totalArea.value;
  });

  service1Value.forEach((serviceItem) => {
    sum += +serviceItem.dataset.price * +serviceItem.innerText;
  });
  areaPrice.innerText = sum;
  sum = 0;
};
