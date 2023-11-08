var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {

	if (video.duration < (video.currentTime + 10)) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}

	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (this.innerHTML == "Mute") {
		this.innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = 0 + "%";
		document.querySelector("#slider").value = 0;
	}
	else if (this.innerHTML == "Unmute") {
		this.innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = 100 + "%";
		document.querySelector("#slider").value = 100;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });