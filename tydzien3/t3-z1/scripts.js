(function () {

	var button = document.querySelector("#showMapLink");

	button.addEventListener("click", function (e) {

		//checking if geolocalisation is supported by the browser
		if (!navigator.geolocation) {

			return;
		}

		this.textContent = "Czekaj...";
		this.setAttribute("disabled", true);

		navigator.geolocation.getCurrentPosition(function (position) {

			var coords = position.coords,
				maplink = document.createElement("a");

			maplink.classList.add("button");
			maplink.setAttribute("href", "https://www.bing.com/maps/default.aspx?cp=" + coords.latitude + "~" + coords.langitude);

			maplink.textContent = "Zobacz na mapie";
			button.parentNode.appendChild(maplink);
			button.parentNode.removeChild(button);

		});
	})
})();
