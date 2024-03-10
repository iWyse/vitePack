import { bodyLock, bodyUnlock } from "../functions/bodylock.js";

// Single menu
// const menu = document.querySelector(".menu"); // поиск элемента NAV MENU
// const menuList = menu.querySelector(".menu-list"); // поиск списка ul menu
// const menuClosed = menu.querySelector(".menu-mobile-close"); // поиск крестика
// const menuToggle = document.querySelector(".menu-mobile-toggle"); // поиск элемента - кнопка burger
// const menuOverlay = document.querySelector(".overlay"); //поиск overlay

// menuList.addEventListener("click", (e) => {
//   // происходит событие при клике
//   if (!menu.classList.contains("active")) {
//     // проверка на подменю
//     return;
//   }
//   if (e.target.closest(".menu-item")) {
//     toggleMenu();
//   }
// });

// // ОБРАБОТЧИК событий
// menuToggle.addEventListener("click", () => {
//   toggleMenu();
// });
// menuClosed.addEventListener("click", () => {
//   toggleMenu();
// });
// menuOverlay.addEventListener("click", () => {
//   toggleMenu();
// });

// // Открытие / закрытие меню
// function toggleMenu() {
//   menu.classList.toggle("active");
//   if (menu.classList.contains("active")) {
//     bodyLock();
//   } else {
//     bodyUnlock();
//   }
//   menuOverlay.classList.toggle("active");
// }

//========================================================================================================================================================
// Многоуровневое меню
/* 
const menu = document.querySelector('.menu'); // поиск элемента NAV MENU
const menuList = menu.querySelector('.menu-list'); // поиск списка ul menu
const menuArrow = menu.querySelector('.menu-mobile-arrow'); // поиск стрелочки
const menuClosed = menu.querySelector('.menu-mobile-close'); // поиск крестика
const menuToggle = document.querySelector('.menu-mobile-toggle'); // поиск элемента - кнопка burger
const menuOverlay = document.querySelector('.overlay'); //поиск overlay
let subMenu = document.querySelector('.menu-subs'); //поиск подменю

menuList.addEventListener('click', (e) => { // происходит событие при клике
	if (!menu.classList.contains('active')) { // проверка на подменю
		return;
	}
	if (e.target.closest('.menu-item-has-children')) {
		const hasChildren = e.target.closest('.menu-item-has-children'); // проверка на содержание подменю
		showSubMenu(hasChildren); //вывод подменю
	} if (e.target.closest('.menu-item')) {
		toggleMenu();
		setTimeout(() => {
			hideSubMenu();
		}, 300);
	}
});

// ОБРАБОТЧИК событий
menuArrow.addEventListener('click', () => {
	hideSubMenu(); // событие "клик"
});
menuToggle.addEventListener('click', () => {
	toggleMenu(); // событие "клик"
});
menuClosed.addEventListener('click', () => {
	toggleMenu(); // событие "клик"
});
menuOverlay.addEventListener('click', () => {
	toggleMenu(); // событие "клик"
});

// Открытие / закрытие меню
function toggleMenu() {
	menu.classList.toggle('active');  // добавление/удаление класса
	menuOverlay.classList.toggle('active');  // добавление/удаление класса
	menu.classList.contains('active') ? bodyLock() : bodyUnlock();
	if (subMenu.classList.contains('active')) {
		setTimeout(() => {
			subMenu.classList.toggle('active');  // добавление/удаление класса
		}, 500);
		menu.querySelector('.menu-mobile-title').innerHTML = '';
		menu.querySelector('.menu-mobile-header').classList.remove('active'); // удаление класс active
	} else {
		return;
	}
}

// Показать подменю
function showSubMenu(hasChildren) {
	subMenu = hasChildren.querySelector('.menu-subs'); //поиск подменю
	subMenu.classList.add('active'); // добавление класса
	subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;  //поиск стрелочки ( выход из подменю)
	menu.querySelector('.menu-mobile-title').innerHTML = menuTitle; //добавление заголовка
	menu.querySelector('.menu-mobile-header').classList.add('active'); //добавление стрелочки (выход из подменю)
}
// Выход из подменю
function hideSubMenu() {
	subMenu.style.animation = 'slideRight 0.2s ease-in-out forwards';
	setTimeout(() => {
		subMenu.classList.remove('active');
	}, 300);
	menu.querySelector('.menu-mobile-title').innerHTML = '';
	menu.querySelector('.menu-mobile-header').classList.remove('active'); // удаление класс active
}
*/

// Windows Screen Resizes Function
window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
};
