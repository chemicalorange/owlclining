const coefficient = {
	cof_0: 250,
	cof_1: 400,
	cof_2: 500,
	cof_3: 600,
}
let areaPrice = document.querySelector('.area__score-sum span');
let winds = document.querySelectorAll(".cardWind-num");
let areaCheckedCheckbox = document.querySelectorAll(".area__checked .custom-checkbox");
let sum = 0;

const getPrice = () => {
	let result = 0;
	winds.forEach((item, index) => {
		result = +result + +(Number(item.querySelector('input').value) * coefficient[`cof_${index}`])
	})

	return result
}



winds.forEach((windItem, index) => {
	let inpValue = windItem.querySelector("input");
	let addOne = windItem.querySelector(".ar_right");
	let delOne = windItem.querySelector(".ar_left");

	addOne.addEventListener("click", () => {
		let result = +Number(inpValue.value);
		inpValue.value = +result + 1;
		areaPrice.innerHTML = +getPrice()

	});

	delOne.addEventListener("click", () => {
		let result = Number(inpValue.value);
		if (result > 1) {
			inpValue.value = result - 1;
			areaPrice.innerHTML = +getPrice()
		} else {
			inpValue.value = 0;
			areaPrice.innerHTML = +getPrice()
		}
	});

	windItem.addEventListener('change', () => {
		areaPrice.innerHTML = +getPrice() + +sum;
	})
});


areaCheckedCheckbox.forEach(checkbox => {
	checkbox.addEventListener('change', (event) => {
		let target = event.target
		let percent = target.getAttribute('data-add')
		let additionalPrice = +percent
		console.log(target.checked)
		if (target.checked) {
			areaPrice.innerHTML = +additionalPrice + +areaPrice.innerHTML
		}
		else {
		    areaPrice.innerHTML = +additionalPrice + +''
		}
	})
			sum = +areaPrice.innerHtml
})