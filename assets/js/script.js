$(document).ready(function() {
		$('.icon-menu').click(function(event){
			$('.icon-menu,.menu__body').toggleClass('icon-menu-active');
			$('body').toggleClass('lock');
		});
});	

jQuery(document).ready(function() {
	$(".actions-header__icon").click(function() { // Тут класс твоей кнопки
   		$('.actions-header__languages').slideToggle();  // Тут класс твоего меню, предварительно оно "display:none"
  		});
});