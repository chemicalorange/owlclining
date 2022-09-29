let how = document.querySelectorAll(".how-info");

const toggoleClassTarget = (elem) => {
  elem.classList.toggle("how-info__btn-active");
  elem.parentNode
    .querySelector(".how-info__text")
    .classList.toggle("how-info__text-active");
};

document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(howAll);
  if (!withinBoundaries) {
    how.forEach((howActive) => {
      howActive.classList.remove("how-info__active");
    });
  }
});

how.forEach((howItem) => {
  let howBtn = howItem.querySelector(".how-info__btn");
  let howText = howItem.querySelector(".how-info__text");
  howItem.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("how-info__btn-active")) {
      toggoleClassTarget(target);
      return;
    }
    how.forEach((howActive) => {
      howActive
        .querySelector(".how-info__btn")
        .classList.remove("how-info__btn-active");
      howActive
        .querySelector(".how-info__text")
        .classList.remove("how-info__text-active");
    });
    toggoleClassTarget(target);
  });
});

//

let howBox = document.querySelectorAll(".how-card");
var howTabs = document.querySelector(".how-tabs");
let howTab = document.querySelectorAll(".how-tabs__item");
let i = 1;

if (howTab.length === 0) {
  howTabs.style.display = "none";
} else {
  howTab[0].classList.add("how-tabs__item-active");
}

howBox[0].classList.add("how-card-active");

howTab.forEach((tabItem, index) => {
  tabItem.setAttribute("data-index", index++);
  tabItem.addEventListener("click", (event) => {
    howTab.forEach((filterActive) => {
      filterActive.classList.remove("how-tabs__item-active");
    });
    let target = event.target;
    target.classList.add("how-tabs__item-active");
    howBox.forEach((items) => {
      if (
        tabItem.getAttribute("data-index") == items.getAttribute("data-index")
      ) {
        items.classList.add("how-card-active");
      } else {
        items.classList.remove("how-card-active");
      }
    });
  });
});

howBox.forEach((howItems, index) => {
  howItems.setAttribute("data-index", index++);
  let howModal = howItems.querySelectorAll(".how-info");
  howModal.forEach((item) => {
    if (item.style.left >= 70 + "%") {
      item.classList.add("how-info__right");
    }
    if (item.style.top <= 25 + "%") {
      item.classList.add("how-info__top");
    }
  });
});
