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
document.querySelector(".smiles").addEventListener("click", function (e) {
  if (e.target.src === "https://img.icons8.com/ios/50/000000/happy--v1.png") {
    document.getElementById("smile").style = "background-color: #0CAA41";
    document.getElementById("neutral").style = "background-color: #FFFFFF";
    document.getElementById("sad").style = "background-color: #FFFFFF";
  } else if (
    e.target.src ===
    "https://img.icons8.com/ios/50/000000/neutral-emoticon--v3.png"
  ) {
    document.getElementById("smile").style = "background-color: #FFFFFF";
    document.getElementById("neutral").style = "background-color: #F5C131";
    document.getElementById("sad").style = "background-color: #FFFFFF";
  } else if (e.target.src === "https://img.icons8.com/ios/50/000000/sad.png") {
    document.getElementById("smile").style = "background-color: #FFFFFF";
    document.getElementById("neutral").style = "background-color: white";
    document.getElementById("sad").style = "background-color: #D93E30";
  }
});
// js for job title
