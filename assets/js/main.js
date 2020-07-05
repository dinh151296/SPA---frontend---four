var menuResponsive = {
	init: function(){
		this.scrollMenu();
	},
	scrollMenu:function(){

		window.onscroll = () => {
			var topHeader = document.querySelector('.top-header');
			var header = document.querySelector('.header');
			var	currentScroll = window.pageYOffset;
			var menu = document.querySelector('.header-menu');
			var  menuColor= document.querySelectorAll('.menu-list li a');
			if(currentScroll > 150){
				menu.style.backgroundColor = '#fff';
				topHeader.style.display = "none";
				menuColor[0].classList.add('color-black');
				menuColor[1].classList.add('color-black');
				menuColor[2].classList.add('color-black');
				menuColor[3].classList.add('color-black');
				menuColor[4].classList.add('color-black');
				menuColor[5].classList.add('color-black');
				header.style.boxShadow = '0px 2px 10px 1px rgba(0,0,0,0.75)';
			}else{
				topHeader.style.display = "block";
				menu.style.backgroundColor = '#00000021';
				menuColor[0].classList.remove('color-black');
				menuColor[1].classList.remove('color-black');
				menuColor[3].classList.remove('color-black');
				menuColor[2].classList.remove('color-black');
				menuColor[4].classList.remove('color-black');
				menuColor[5].classList.remove('color-black');
				header.style.boxShadow = 'none';
			}
		}
	},
}

menuResponsive.init();