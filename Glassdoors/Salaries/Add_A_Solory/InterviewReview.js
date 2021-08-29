"use strict";
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "↓";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "↑";
    moreText.style.display = "inline";
  }
}

// employee on not filling == red
var employee = document.getElementById("employee");
var employeev = document.getElementById("employeev");

employee.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    employeev.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    employeev.style.visibility = "hidden";
  }
};

//smiles colour change
var smileselect = "";
document.querySelector(".smiles").addEventListener("click", function (e) {
  if (e.target.src === "https://img.icons8.com/ios/50/000000/happy--v1.png") {
    document.getElementById("smile").style = "background-color: #0CAA41";
    document.getElementById("neutral").style = "background-color: #FFFFFF";
    document.getElementById("sad").style = "background-color: #FFFFFF";
    smileselect = "smile";
  } else if (
    e.target.src ===
    "https://img.icons8.com/ios/50/000000/neutral-emoticon--v3.png"
  ) {
    document.getElementById("smile").style = "background-color: #FFFFFF";
    document.getElementById("neutral").style = "background-color: #F5C131";
    document.getElementById("sad").style = "background-color: #FFFFFF";
    smileselect = "neutral";
  } else if (e.target.src === "https://img.icons8.com/ios/50/000000/sad.png") {
    document.getElementById("smile").style = "background-color: #FFFFFF";
    document.getElementById("neutral").style = "background-color: white";
    document.getElementById("sad").style = "background-color: #D93E30";
    smileselect = "sad";
  }
});
// now getting data for backend
var arraya = [];
// now lets get data and print
function getdata() {
  var employer = document.getElementById("employee").value;
  //smile aready taekn
  var jobtotle = document.getElementById("jobtitle").value;
  var offer = document.getElementById("offer").value;
  var interiewQue = document.getElementById("interiewQue").value;
  // console.log(employer, smileselect, jobtotle, offer, interiewQue);

  // now we have data now we can append it toa array
  var val = new appenda(employer, jobtotle, offer, interiewQue, smileselect);
  arraya.push(val);
  addtoCart(val);
}

function appenda(a, b, c, d, s) {
  this.smileselect = s;
  this.employee = a;
  this.jobtotle = b;
  this.offer = c;
  this.interiewQue = d;
}

if (localStorage.getItem("interViewReviews") === null) {
  localStorage.setItem("interViewReviews", JSON.stringify([]));
}
function addtoCart(p) {
  let cart_data = JSON.parse(localStorage.getItem("interViewReviews"));
  cart_data.push(p);
  localStorage.setItem("interViewReviews", JSON.stringify(cart_data));
}
