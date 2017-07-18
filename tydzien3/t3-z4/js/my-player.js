(function () {

	'use strict';

	//funkcja do wyszukiwania poszczególnych obiektów np. wideo, kontrolki w playerze

	function findIn(parent, elem) {
		return parent.querySelector(elem);
	}

	function Player(container) {

		//to co ma byc unikalne bedzie przypisane do THIS konstruktora - czyli nowo utworzonego obiektu. Wszystkie kontrolki zostana przypisane jako unikatowe

		this.video = findIn(container, "video");
		this.playPause = findIn(container, ".player__play");
		this.timeCurrent = findIn(container, ".player__time-current");
		this.timeTotal = findIn(container, ".player__time-total");
		this.timeline = findIn(container, ".player__timeline input");
		this.volume = findIn(container, ".player__volume input");


		//pozostałe współdzielone rzeczy będa na prototypie

		this.assignEvents();
		this.setCurrentVolume();

	}
	
	//przypisujemy do poszczegolnych elementow zdarzenia, np. klikniecie w ten element, przeciągniecie

	Player.prototype.assignEvents = function () {

		//this.playPause.onclick = this.play.bind(this);

		this.playPause.addEventListener("click", this.play.bind(this), false);
		this.video.ondurationchange = this.setDuration.bind(this);
		this.video.addEventListener("timeupdate", this.updatePlayingProgress.bind(this), false);
		this.video.addEventListener("timeupdate", this.updateCurrentTime.bind(this), false);
		this.video.onended = this.resetPlayer.bind(this);
		this.timeline.oninput = this.setCurrentPlayback.bind(this);
		this.volume.oninput = this.adjustVolume.bind(this);

	};

	Player.prototype.play = function () {

		//video API daje dostep do metody play
		if (this.video.paused) {
			this.video.play();
			this.playPause.classList.add("pause");
		} else {

			this.video.pause();
			this.playPause.classList.remove("pause");
		}


	};

	Player.prototype.setDuration = function () {

		this.timeTotal.textContent = this.formatTime(this.video.duration);
	};
	

	Player.prototype.updateCurrentTime = function () {

		this.timeCurrent.textContent = this.formatTime(this.video.currentTime);
	};
	
	Player.prototype.updatePlayingProgress = function () {

		var percentPlayed = (this.video.currentTime / this.video.duration) * 100;
		this.timeline.value = percentPlayed;

	};
	
		
	Player.prototype.setCurrentPlayback = function(e) {

        var newTime = this.video.duration * parseInt(e.target.value) / 100;

        this.video.currentTime = newTime;
    };
	
	Player.prototype.adjustVolume = function (e) {
		console.log(e);
		
		this.video.volume = parseInt(e.target.value) /100;
	};
	
	 Player.prototype.setCurrentVolume = function() {

        this.volume.value = (this.video.volume * 100);

    };
	

	Player.prototype.resetPlayer = function () {

		this.playPause.classList.remove("pause");
	};
	
	

	Player.prototype.formatTime = function (seconds) {

		var seconds = Math.round(seconds),
			minutes = Math.floor(seconds / 60),
			remainingSeconds = seconds - minutes * 60;

		if (remainingSeconds == 0)
			remainingSeconds = "00";
		else if (remainingSeconds < 10)
			remainingSeconds = "0" + remainingSeconds;
		return minutes + ":" + remainingSeconds;
	};



	window.VideoPlayer = Player;

}());