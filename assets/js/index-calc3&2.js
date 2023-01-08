let addOne = document.querySelector("#add_one");
let delOne = document.querySelector("#del_one");
let totalArea = document.querySelector("#total_area");
let addOneLength = document.querySelector(".add_one_length");
let delOneLength = document.querySelector(".del_one_length");
let totalLength = document.querySelector(".total_length"); //+
let areaRadioList = document.querySelector(".area__radio-list");
let areaSelect = document.querySelectorAll(".area__select");
let areaService = document.querySelector(".area__service");
let areaServiceItem = areaService?.querySelectorAll(".area__service-item");
let areaPrice = document.querySelector(".area__score-sum span");
let areaSelectTypes = document.querySelector(".area__select__types");



let typeService = areaSelectTypes.querySelector('.area__select-input');
let typeOptions = areaSelectTypes.querySelector('.options');

let matraces = [
	{ param: '0x50', prices: 100 },
	{ param: '1x50', prices: 200 },
	{ param: '2x50', prices: 300 },
];
let shtors = [
	{ param: '10x50', prices: 100 },
	{ param: '12x50', prices: 200 },
	{ param: '15x50', prices: 300 },
];
let covers = [
	{ param: '20x50', prices: 100 },
	{ param: '22x50', prices: 200 },
	{ param: '32x50', prices: 300 },
];

const funcGenerateOpt = function (nameArray, elemInput) {
	
while (typeOptions.firstChild) {
  typeOptions.removeChild(typeOptions.firstChild);
}

		typeService.setAttribute('data-price', nameArray[0].price);
		typeService.innerText = nameArray[0].param;
		
		nameArray.forEach((item) => {
			let typeOption = document.createElement('div');
			typeOption.classList.add('options__item');
			typeOption.setAttribute('data-price', item.prices);
			typeOption.innerText = item.param;
			
			typeOption.addEventListener("click", (event) => {
				elemInput.innerText = event.target.innerText;
	
				elemInput.setAttribute(
					"data-price",
					option.getAttribute("data-price")
				);
	
				elemInput.setAttribute(
					"data-type",
					option.getAttribute("data-type")
				);
	
				if (elemInput.getAttribute('data-type') == "cover") {
					funcGenerateOpt(covers, elemInput);
				}
				if (elemInput.getAttribute('data-type') == "shtor") {
					funcGenerateOpt(shtors, elemInput);
				}
				if (elemInput.getAttribute('data-type') == "matrac") {
					funcGenerateOpt(matraces, elemInput);
				}
	
				typeOption.classList.remove("active");
				price();
	
			});
			typeOptions.append(typeOption);
		})
} 


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

	areaSelectInput.addEventListener("click", () => {
		options.classList.toggle("active");
		document.addEventListener("click", hideOptions);
	});

	let options = item.querySelector(".options");
	let optionsItems = item.querySelectorAll(".options__item");

		optionsItems.forEach((option) => {
			option.addEventListener("click", (event) => {
				areaSelectInput.innerText = event.target.innerText;
	
				areaSelectInput.setAttribute(
					"data-price",
					option.getAttribute("data-price")
				);
	
				areaSelectInput.setAttribute(
					"data-type",
					option.getAttribute("data-type")
				);
	
				if (areaSelectInput.getAttribute('data-type') == "cover") {
					funcGenerateOpt(covers, areaSelectInput);
				}
				if (areaSelectInput.getAttribute('data-type') == "shtor") {
					funcGenerateOpt(shtors, areaSelectInput);
				}
				if (areaSelectInput.getAttribute('data-type') == "matrac") {
					funcGenerateOpt(matraces, areaSelectInput);
				}
	
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

addOneLength.addEventListener("click", () => {
	let result = Number(totalLength.value);
	totalLength.value = result + 1;
	price();
});

delOneLength.addEventListener("click", () => {
	let result = Number(totalLength.value);
	totalLength.value = result - 1;
	if (result > 1) {
		totalLength.value = result - 1;
	} else {
		totalLength.value = 0;
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
		sum +=
			+areaSelectInputItem.dataset.price *
			+(totalArea.value * totalLength.value);
	});

	service1Value.forEach((serviceItem) => {
		sum += +serviceItem.dataset.price * +serviceItem.innerText;
	});
	areaPrice.innerText = sum;
	sum = 0;
};
