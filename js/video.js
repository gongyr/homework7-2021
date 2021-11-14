var video = document.querySelector("#player1");
var volume = document.querySelector("volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old speed: " + video.playbackRate);
	video.playbackRate -= 0.05;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old speed: " + video.playbackRate);
	video.playbackRate += 0.05;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
  		video.load();
 	}
	console.log("Current time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted === false) {
		video.muted = true;
		this.textContent = 'Unmute';
 	}
  	else {
 	 video.muted = false;
 	 this.textContent = 'Mute';
  }
 });
 
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});