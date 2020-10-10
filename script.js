function downAnimation() {
	let animateDownElement = document.getElementById("card-animation");
  	animateDownElement.classList.remove("card-animate");
  	animateDownElement.classList.add("card-animate-down");
}

function upAnimation() {
	let animateUpElement = document.getElementById("card-animation");
	animateUpElement.classList.remove("card-animate-down");
	animateUpElement.classList.add("card-animate-up");
}

