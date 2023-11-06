var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementsByClassName("video")[0];
	disableAutoplay(video)
	disableLoop(video)
	video.load()
});



function disableAutoplay(video) { 
	video.setAttribute('autoplay','false');

}

function disableLoop(video) { 
	video.setAttribute('autoplay','false');
}

function playVid(video) { 
	video.play();
}


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

