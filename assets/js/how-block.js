let how = document.querySelectorAll('.how-info');
let howAll = [how];
console.log(howAll)

const toggoleClassTarget = (elem) => {
	elem.parentNode.classList.toggle('how-info__active');
	return;
}

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(howAll);
	if ( ! withinBoundaries ) {
		how.forEach((howActive) => {
			howActive.classList.remove('how-info__active');
		});
	}
})

how.forEach((howItem) => {
	howItem.addEventListener('click', (event) => {
		event.stopPropagation();
		let target = event.target;
	// условие при наличии класса у родителя
		if(target.parentNode.classList.contains('how-info__active')){
			target.parentNode.classList.remove('how-info__active');
		}
		//----------------------------
		target.parentNode.classList.toggle('how-info__active');
		how.forEach((howActive) => {
			howActive.classList.remove('how-info__active');
		});
		console.log(target.parentNode)
		toggoleClassTarget(target);
		// return;
	});


});


let howBox = document.querySelectorAll('.how-card');
var howTabs = document.querySelector('.how-tabs');
let howTab = document.querySelectorAll('.how-tabs__item');
let i = 1;


if (howTab.length === 0) {
	howTabs.style.display = "none";
} else {
	howTab[0].classList.add('how-tabs__item-active');
}

howBox[0].classList.add('how-card-active');

howTab.forEach(tabItem => {
	tabItem.setAttribute('data-index', i++);
	tabItem.addEventListener('click', (event) => {
		howTab.forEach((filterActive) => {
			filterActive.classList.remove("how-tabs__item-active");
		});
		let target = event.target;
		target.classList.add("how-tabs__item-active");
		howBox.forEach(items => {
			if (tabItem.getAttribute('data-index') == items.getAttribute('data-index')) {
				items.classList.add('how-card-active');
			} else {
				items.classList.remove('how-card-active');
			}
		})
	});
});
i = 1;
howBox.forEach(howItems => {
	howItems.setAttribute('data-index', i++);
	let howModal = howItems.querySelectorAll('.how-info');
	howModal.forEach(item => {
		if (item.style.left >= 70 + '%') {
			item.classList.add('how-info__right');
		}
		if (item.style.top <= 25 + '%') {
			item.classList.add('how-info__top');
		}
	})
})