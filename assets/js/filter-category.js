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

					price.forEach(priceItem =>{
					if(target.getAttribute('data-serv') == priceItem.getAttribute('data-serv')){
						priceItem.classList.remove('qwe')
					} else {
						priceItem.classList.add('qwe')
					}
					if(target.getAttribute('data-serv') == "all"){
						priceItem.classList.remove('qwe')
					}
				
				})
				});

				
			})