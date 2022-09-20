let filter = document.querySelectorAll('.service-filter-panel li a');
let price = document.querySelectorAll('.price-card');

filter.forEach(filterItem => {

	filterItem.addEventListener('click', (event) => {

		let target = event.target;

		filter.forEach(filterRemove => {
			filterRemove.classList.remove('current-cat');
		});

		target.classList.add('current-cat');
		console.log(target);

		price.forEach(priceItem => {
			if (target.getAttribute('data-serv') == priceItem.getAttribute('data-serv')) {
				priceItem.classList.remove('qwe')
			} else {
				priceItem.classList.add('qwe')
			}
			if (target.getAttribute('data-serv') == "all") {
				priceItem.classList.remove('qwe')
			}

		})
	});


})

const hideShowOpt = (event) => {
	if (
		event.target.className !== "area__select-input" &&
		event.target.className !== "options__item"
	) {
		// areaSelect2.forEach((item) => {
		// 	item.querySelector(".options").classList.remove("active");
		// });

		document.removeEventListener("click", hideShowOpt);
	}
};



let areaSelect2 = document.querySelectorAll(".price-sidebar");

areaSelect2.forEach((item) => {
	let areaSelectInput2 = item.querySelector(".drop-select");
	let opt = item.querySelector(".service-filter-panel");
	let optItems = item.querySelectorAll("li a");

	areaSelectInput2.addEventListener("click", () => {
		opt.classList.toggle("active");
		document.addEventListener("click", hideShowOpt);
	});

	optItems.forEach((option) => {
		option.addEventListener("click", (event) => {
			areaSelectInput2.innerText = event.target.innerText;
			areaSelectInput2.setAttribute('data-price', option.getAttribute('data-price'));
			opt.classList.remove("active");
		});
	});
});