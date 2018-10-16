'use strict';

$(function () {
	// var IsEditMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
	// if (IsEditMode == "1") {
	// 	$('html').addClass('is-editMode');
	// }

	// if (IsEditMode != "1") {
	// 	$('html').addClass('is-displayMode');
	// }

	// ================ search box   
	var searchButton = $('.search-box__icon');
	var searchBox = $('.search-box');
	var searchTextBox = $('.search-box__input');

	searchButton.on('click', openSearchBox);

	function openSearchBox() {
		searchBox.addClass('is-open');
		searchTextBox.focus();
		searchTextBox.val("");
	}

	var searchPage = "/ar/Pages/Search.aspx?k=";

	searchTextBox.on("change keyup paste mouseup", function () {
		var searchKeyword = searchTextBox.val();
		var concatText = searchPage + searchKeyword;

		$(document).keypress(function (event) {
			if (event.which == 13) {
				event.preventDefault();
				if (searchKeyword != "") {
					window.location.href = concatText;
				}
			}
		});
	});

	$(document).mouseup(function (e) {
		if (!searchBox.is(e.target) && searchBox.has(e.target).length === 0) {
			searchBox.removeClass('is-open');
		}
	});
	// ================ /search box 

	// ================ global menu
	$('#mainMenuBtn, .global-menu__block .global-menu__close').on('click', function (event) {
		event.preventDefault();
		$('.global-menu__block').toggleClass('is-shown');
		$('body').toggleClass('u-overflow-hidden');
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.global-menu__block').removeClass('is-shown');
			$('body').removeClass('u-overflow-hidden');
			if ($(".dialog").length > 0) $(".dialog").removeClass("is-shown");
		}
	});
	// ================ /global menu  
});
//# sourceMappingURL=scripts.js.map
