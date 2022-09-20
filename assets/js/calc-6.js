const coefficient = {
	cof_0: 100,
	cof_1: 200,
	cof_2: 300,
	cof_3: 400,
}
let areaPrice = document.querySelector('.area__score-sum span');
let winds = document.querySelectorAll(".cardWind-num");
let areaCheckedCheckbox = document.querySelectorAll(".area__checked .custom-checkbox");

const getPrice = () => {
	let result = 0;
	winds.forEach((item, index) => {
		result = result + (Number(item.querySelector('input').value) * coefficient[`cof_${index}`])
	})

	return result
}

winds.forEach((windItem, index) => {
	let inpValue = windItem.querySelector("input");
	let addOne = windItem.querySelector(".ar_right");
	let delOne = windItem.querySelector(".ar_left");

	addOne.addEventListener("click", () => {
		let result = Number(inpValue.value);
		inpValue.value = result + 1;
		areaPrice.innerHTML = getPrice()

	});

	delOne.addEventListener("click", () => {
		let result = Number(inpValue.value);
		if (result > 1) {
			inpValue.value = result - 1;
			areaPrice.innerHTML = getPrice()
		} else {
			inpValue.value = 0;
			areaPrice.innerHTML = getPrice()
		}
	});

	windItem.addEventListener('change', () => {
		areaPrice.innerHTML = getPrice()
	})
});

areaCheckedCheckbox.forEach(checkbox => {
	checkbox.addEventListener('change', (event) => {
		let target = event.target
		let percent = target.getAttribute('data-add')
		let totalPrice = Number(areaPrice.innerHTML)
		let additionalPrice = getPrice() * percent
		console.log(target.checked)
		if (target.checked) {
			areaPrice.innerHTML = totalPrice + additionalPrice
		} else {
			areaPrice.innerHTML = totalPrice - additionalPrice
		}
	})
})