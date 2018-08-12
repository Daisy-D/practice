var box = document.getElementById("box")
var rectangle = box.getElementsByTagName("div")
var rectangleLength = rectangle.length
var rectangleWidth = rectangle[0].clientWidth
var angle = 360 / rectangleLength
var distance = rectangleWidth / (2 * Math.tan(Math.PI / rectangleLength)) - 2
for (var i = 0; i < rectangleLength; i++) {
	rectangle[i].style.background = 'url(./img/p' + (i + 1) + '.png) no-repeat'
	rectangle[i].style.transform = 'rotateY(' + angle * i + 'deg) translateZ(' + distance + 'px)'
}


var startX = 0,
	moveX = 0,
	endX = 0;
startY = 0,
	moveY = 0,
	endY = 0;
var flag = true;
$('#box').on('touchstart', function (event) {
	event.preventDefault();
	var touch = event.targetTouches[0];
	startX = touch.pageX + moveX;
	startY = touch.pageY - moveY;
})
$('#box').on('touchmove', function (event) {
	if (flag) {
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		moveX = startX - endX;
		endY = touch.pageY;
		moveY = endY - startY;
		box.style.transform = 'rotateX(' + moveY + 'deg) rotateY(' + moveX + 'deg)';
	} else {
		return false;
	}
})

window.addEventListener('deviceorientation', function (event) {
	var gamma = event.gamma;
	if (Math.abs(gamma) > 1) {
		flag = false;
		box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';
	} else {
		flag = true;
	}
})