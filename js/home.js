var texts1 = ["Professional Appraisal Services", "Avoid Bearing the Cost of PMI"];
var texts2 = ["Need your home appraised?", "Remove PMI and start saving today!"]
var headers = ["", "linear-gradient(rgba(0, 128, 128, 0.1), rgba(0, 128, 128, 1)), url('img/bg-house.jpeg')"]
var count = 0;
function changeText() {
	$target1 = $('#header-text');
	$target1.removeClass('fade-in-down');
	$target2 = $('#subheader-text');
	$target2.removeClass('fade-in-up');
	$target = document.getElementById('header');
	$target.classList.remove('fade-in');
    setTimeout("$target1.addClass('fade-in-down')", 1000);
    setTimeout("$target1.text(texts1[count])", 1000);
    setTimeout("$target2.addClass('fade-in-up')", 1000);
    setTimeout("$target2.text(texts2[count])", 1000);
    setTimeout("$target.classList.add('fade-in')", 1000);
    setTimeout("$target.style.background = headers[count]", 1000);
    count < 1 ? count++ : count = 0;
}
setInterval(changeText, 5000);
