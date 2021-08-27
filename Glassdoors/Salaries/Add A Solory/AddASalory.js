var locBox = document.getElementById("jobLoc");
var dang = document.getElementById("war");

locBox.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    dang.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    dang.style.visibility = "hidden";
  }
};

// for job title
var jobt = document.getElementById("jobtitle");
var dev = document.getElementById("dev");

jobt.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    dev.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    dev.style.visibility = "hidden";
  }
};

// for Years of Experience *
var jobt = document.getElementById("jobtitle");
var dev = document.getElementById("dev");

jobt.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    dev.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    dev.style.visibility = "hidden";
  }
};

// Location *
var jobt = document.getElementById("jobtitle");
var dev = document.getElementById("dev");

jobt.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    dev.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    dev.style.visibility = "hidden";
  }
};

// Employment Status *
var employeest = document.getElementById("employeest");
var employeestv = document.getElementById("employeestv");

jobt.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    employeestv.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    employeestv.style.visibility = "hidden";
  }
};

// Employer's Name * --> done
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
