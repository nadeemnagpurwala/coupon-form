//Variable declaration
const couponColumns = document.querySelectorAll(".coupon-column");
const coupons = document.querySelectorAll(".copy-code");
const closeCoupon = document.getElementById("close-coupon");
const animateElement = document.getElementById("card-animation");

//Show card animation
window.addEventListener('load', function() { 
	downAnimation();
}, false);

//Slide down animation
function downAnimation() {
  	animateElement.classList.remove("card-animate");
  	animateElement.classList.add("card-animate-down");
}

//Slide up animation
closeCoupon.addEventListener("click", function() {
  	animateElement.classList.remove("card-animate-down");
	animateElement.classList.add("card-animate-up");
});

//Get coupon selected
for (let i = 0; i < coupons.length; i++) {
	coupons[i].addEventListener("click", function() {
		this.disabled = true;
		this.classList.add("button-disabled");
		var parentElement = this.parentElement;
		var couponElement = parentElement.querySelector(".code").innerText;
		copyCode(couponElement);
		revertElementData(i);
	});
}

//Copy the selected coupon
function copyCode(couponElement) {
	var copyArea = document.createElement("textarea");
    document.body.appendChild(copyArea);
    copyArea.value = couponElement;
    copyArea.select();
    document.execCommand("copy");
    document.body.removeChild(copyArea);
}

//Revert enable / disable element
function revertElementData(incrementVal) {
	var nextDivOne = couponColumns[incrementVal + 1];
	var nextDivTwo = couponColumns[incrementVal + 2];
	var prevDivOne = couponColumns[incrementVal - 1];
	var prevDivTwo = couponColumns[incrementVal - 2];

	var divsToConsider = [nextDivOne, nextDivTwo, prevDivOne, prevDivTwo];

	for(let i = 0; i < divsToConsider.length; i++) {
		if (divsToConsider[i]) {
			var revertElement = divsToConsider[i].getElementsByTagName("button")[0];
			if (revertElement.classList.contains('button-disabled')) {
				revertElement.classList.remove("button-disabled");
				revertElement.disabled = false;
			}
		}
	}
}