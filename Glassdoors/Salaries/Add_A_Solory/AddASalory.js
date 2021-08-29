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
// checking per yera
var year = "";
document.querySelector(".experience").addEventListener("click", function (e) {
  // console.log(e.target.textContent == "Per Year");

  if (e.target.textContent == "Per Year") {
    year = "Per Year";
    document.getElementById("year").style =
      "background-color: #0C4085;color: white";

    document.getElementById("hour").style =
      "background-color: white;color: #0C4085";

    document.getElementById("month").style =
      "background-color: white;color: #0C4085";
  } else if (e.target.textContent == "Per Hour") {
    year = "Per Hour";
    document.getElementById("year").style =
      "background-color: white;color: #0C4085";

    document.getElementById("hour").style =
      "background-color: #0C4085;color: white";

    document.getElementById("month").style =
      "background-color: white;color: #0C4085";
  } else if (e.target.textContent == "Per Month") {
    year = "Per Month";
    document.getElementById("year").style =
      "background-color: white;color: #0C4085";

    document.getElementById("hour").style =
      "background-color: white;color: #0C4085";

    document.getElementById("month").style =
      "background-color: #0C4085;color: white";
  }
  // console.log(year); working
});
var commisions = "";
// Do you get bonuses, tips, or sales commission? js part
document.querySelector("#commision").addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  if (e.target.textContent == "Yes") {
    commisions = "Yes";
    document.getElementById("Yes").style =
      "background-color: #0C4085;color: white";
    document.getElementById("No").style =
      "background-color: white;color: #0C4085";
  } else if (e.target.textContent == "No") {
    commisions = "No";
    document.getElementById("No").style =
      "background-color: #0C4085;color: white";
    document.getElementById("Yes").style =
      "background-color: white;color: #0C4085";
  }
  // console.log(commisions); working commisions dont worry
});

//toggleing curent and former

var formeremploye = "";
document.querySelector("#former").addEventListener("click", function (e) {
  // console.log(e.target.textContent);
  if (e.target.textContent == "Current") {
    formeremploye = "Current";
    document.getElementById("Current").style =
      "background-color: #0C4085;color: white";
    document.getElementById("Former").style =
      "background-color: white;color: #0C4085";
  } else if (e.target.textContent == "Former") {
    formeremploye = "Former";
    document.getElementById("Former").style =
      "background-color: #0C4085;color: white";
    document.getElementById("Current").style =
      "background-color: white;color: #0C4085";
  }
  // console.log(formerempsloye); workignproperly no worry
});

// for genger
var gender = "";
document.querySelector("#gender").addEventListener("click", function (e) {
  // console.log(e.target.textContent == "Per Year");

  if (e.target.textContent == "Female") {
    gender = "Female";
    document.getElementById("Female").style =
      "background-color: #0C4085;color: white";

    document.getElementById("Male").style =
      "background-color: white;color: #0C4085";

    document.getElementById("Trans Gender").style =
      "background-color: white;color: #0C4085";
  } else if (e.target.textContent == "Male") {
    gender = "Male";
    document.getElementById("Female").style =
      "background-color: white;color: #0C4085";

    document.getElementById("Male").style =
      "background-color: #0C4085;color: white";

    document.getElementById("Trans Gender").style =
      "background-color: white;color: #0C4085";
  } else if (e.target.textContent == "Trans Gender") {
    gender = "Trans Gender";
    document.getElementById("Female").style =
      "background-color: white;color: #0C4085";

    document.getElementById("Male").style =
      "background-color: white;color: #0C4085";

    document.getElementById("Trans Gender").style =
      "background-color: #0C4085;color: white";
  }
  // console.log(gender); working
});

// makeing adata to backedn
var arraya = [];
function submitSalory() {
  var salary = document.getElementById("jobLoc").value;
  var jobtitle = document.getElementById("jobtitle").value;
  var experience = document.getElementById("exper").value;
  var locations = document.getElementById("locations").value;
  var employestatus = document.getElementById("employeest").value;
  var name = document.getElementById("employee").value;
  // per year and commision
  var val = new appenda(
    salary,
    year,
    commisions,
    jobtitle,
    experience,
    locations,
    employestatus,
    name,
    formeremploye,
    gender
  );
  arraya.push(val);
  addtoCart(val);
}

function appenda(a, b, c, d, e, f, g, h, i, j) {
  this.salary = a;
  this.year = b;
  this.commisions = c;
  this.jobtitle = d;
  this.experience = e;
  this.locations = f;
  this.employestatus = g;
  this.name = h;
  this.formeremploye = i;
  this.gender = j;
}
if (localStorage.getItem("salaryaddition") === null) {
  localStorage.setItem("salaryaddition", JSON.stringify([]));
}
function addtoCart(p) {
  let cart_data = JSON.parse(localStorage.getItem("salaryaddition"));
  cart_data.push(p);
  localStorage.setItem("salaryaddition", JSON.stringify(cart_data));
}
