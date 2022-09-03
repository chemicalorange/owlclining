var filter = document.querySelectorAll('.filter-item');
var galleryBlock = document.querySelector('.gallery-block');
var gallery = galleryBlock.querySelectorAll('.swiper-slide');


var swiper3 = new Swiper(".gallery-swiper__bottom", {
	loop: false,
	spaceBetween: 20,
	slidesPerView: 10,
	freeMode: true,
	watchSlidesProgress: true,
	observer: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		575: {
			slidesPerView: 7,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 10,
			spaceBetween: 30
		},
	}
});
var swiper2 = new Swiper(".gallery-swiper__top", {
	loop: false,
	allowTouchMove: false,
	observer: true,
	thumbs: {
		swiper: swiper3,
	},
});


filter.forEach((filterItem) => {
	filterItem.addEventListener("click", (event) => {
		let target = event.target;

		filter.forEach((filterActive) => {
			filterActive.classList.remove('filter-active');
		});

		target.classList.add('filter-active');

		gallery.forEach((galleryItem) => {
			if (target.getAttribute('data-gallery') == galleryItem.getAttribute('data-gallery')) {
				swiper3.destroy();
				swiper2.destroy();
				galleryItem.classList.add('non-swiper-slide');
				galleryItem.classList.remove('swiper-slide');
				swiper3 = new Swiper(".gallery-swiper__bottom", {
					loop: false,
					spaceBetween: 20,
					slidesPerView: 10,
					freeMode: true,
					watchSlidesProgress: true,
					observer: true,
					breakpoints: {
						// when window width is >= 320px
						320: {
							slidesPerView: 5,
							spaceBetween: 20,
						},
						575: {
							slidesPerView: 7,
							spaceBetween: 20
						},
						992: {
							slidesPerView: 10,
							spaceBetween: 30
						},
					}
				});
				swiper2 = new Swiper(".gallery-swiper__top", {
					loop: false,
					allowTouchMove: false,
					observer: true,
					thumbs: {
						swiper: swiper3,
					},
				});
			} else {
				swiper3.destroy();
				swiper2.destroy();
				galleryItem.classList.remove('non-swiper-slide');
				galleryItem.classList.add('swiper-slide');
				swiper3 = new Swiper(".gallery-swiper__bottom", {
					loop: false,
					spaceBetween: 20,
					slidesPerView: 10,
					freeMode: true,
					watchSlidesProgress: true,
					observer: true,
					breakpoints: {
						// when window width is >= 320px
						320: {
							slidesPerView: 5,
							spaceBetween: 20,
						},
						575: {
							slidesPerView: 7,
							spaceBetween: 20
						},
						992: {
							slidesPerView: 10,
							spaceBetween: 30
						},
					}
				});
				swiper2 = new Swiper(".gallery-swiper__top", {
					loop: false,
					allowTouchMove: false,
					observer: true,
					thumbs: {
						swiper: swiper3,
					},
				});
			}


		});




	});
});
