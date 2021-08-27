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
var exper = document.getElementById("exper");
var experv = document.getElementById("experv");

exper.oninput = function (e) {
  if (Number(e.target.value) < 0) {
    e.target.style.background = "#FFF3F2";
    experv.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    experv.style.visibility = "hidden";
  }
};

// Location * --> done
var locations = document.getElementById("locations");
var locationvs = document.getElementById("locationvs");

locations.oninput = function (e) {
  if (e.target.value === "") {
    e.target.style.background = "#FFF3F2";
    locationvs.style.visibility = "visible";
  } else {
    e.target.style.background = "white";
    locationvs.style.visibility = "hidden";
  }
};

// Employment Status * -->done
var employeest = document.getElementById("employeest");
var employeestv = document.getElementById("employeestv");

employeest.oninput = function (e) {
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
