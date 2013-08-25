console.log("hi");
var aboutMe = document.getElementById("aboutMeContainer");
var arrow = document.getElementById("arrow");
console.log(aboutMe, arrow);
arrow.onclick = function(){
	aboutMe.style.left = "10px"; 
	arrow.style.visibility = "hidden";
};