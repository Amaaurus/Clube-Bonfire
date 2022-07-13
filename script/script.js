function slide1() {
  document.getElementById("slider").src = "assets/I2.png";
  setTimeout("slide2()", 1500);
}

function slide2() {
  document.getElementById("slider").src = "assets/I3.png";
  setTimeout("slide3()", 1500);
}

function slide3() {
  document.getElementById("slider").src = "assets/I4.png";
  setTimeout("slide1()", 1500);
}
