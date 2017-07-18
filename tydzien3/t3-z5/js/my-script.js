(function () {


	'use strict';


	//nie korzystam z jQuery, dlatego moge utworzyc pomocniczą funkcję, która przechowuje obiekt - wyszukany element w DOM

	var $ = function (selector) {

			return document.querySelector(selector);

		},
		fileArea = $("#fileArea"),
		fileInput = $("#file"),
		preview = $("#preview"),
		copy = $("#copy");

	function showHTMLPreview() {

		var textarea = document.createElement("textarea");
		textarea.className = "textarea";
		textarea.innerHTML = preview.innerHTML;

		copy.appendChild(textarea);
		copy.style.display = "block";

		//skopiowany kod bedzie zaznaczony
		textarea.select();

		//zeby kursor przewinac do tego miejsca
		window.location.hash = copy.getAttribute("id");

		//ukrywam przycisk
		this.style.display = "none";
	}

	function appendCopyButton() {

		var button = document.createElement("button");
		button.className = "button";
		button.textContent = "Skopiuj kod HTML";
		button.onclick = showHTMLPreview;

		preview.parentNode.appendChild(button);
	}

	

	//funkcja otrzymuje odczytany plik markdown, ktory zostaje zamieniony na kod html. Za pomoca Showdown i dostepnej metody makeHtml()

	function renderHTML(markdown) {

		var converter = new showdown.Converter({
			noHeaderId: true
		});

		return converter.makeHtml(markdown);
	}

	function generatePreview(markdown) {

		var html = renderHTML(markdown);
		preview.innerHTML = html;
		fileArea.style.display = "none";
		

		//funkcja na skopiowanie tresci do systemowego schowka
		appendCopyButton();
	}



	//tworze zdarzenie na zmiane wartosci dla pola input. 
	fileInput.addEventListener("change", function (e) {
		console.log(e);

		var file = e.target.files[0],
			reader = new FileReader(); //obiekt, który umozliwia asynchroniczne zczytanie zawartosci pliku; nalezy go 

		console.log(reader.result);

		reader.onload = function () {

			console.log(reader.result);
			generatePreview(reader.result);

		};

		reader.readAsText(file);

	}, false);




}());