const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}
//Handle <span>, .social, .circle tag color
document.getElementById("changeGreen").onclick = function(){
	document.getElementById("output").style.color = '#017143';
	document.getElementById("social").style.background = '#017143';
	document.getElementById("learnmore").style.background = '#017143';
	document.getElementById('.starbucks').style.backgroundImage="url('images/frap1.png')";
    document.querySelector('.circle').style.background = '#017143';
}

document.getElementById("changePink1").onclick = function(){
	document.getElementById("output").style.color = '#eb7495';
	document.getElementById("social").style.background = '#eb7495';
	document.getElementById("learnmore").style.background = '#eb7495';
	document.getElementById('.starbucks').style.backgroundImage="url('images/frap2.png')";
    document.querySelector('.circle').style.background = '#eb7495';
}
document.getElementById("changePink2").onclick = function(){
	document.getElementById("output").style.color = '#d752b1';
	document.getElementById("social").style.background = '#d752b1';
	document.getElementById("learnmore").style.background = '#d752b1';
	document.getElementById(".starbucks").style.backgroundImage="url('images/frap3.png')";
    document.querySelector('.circle').style.background = '#d752b1';
}

const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






