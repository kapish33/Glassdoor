var currentORformer = "current";
var current = document.querySelector("#current");
current.addEventListener("click", function () {
  document.getElementById("current").style =
    "background-color: #0C4085;color: white";
  document.getElementById("former").style =
    "background-color: white;color: black";
  currentORformer = "current";
});

var former = document.querySelector("#former");
former.addEventListener("click", function () {
  document.getElementById("former").style =
    "background-color: #0C4085;color: white";
  document.getElementById("current").style =
    "background-color: white;color: black";
  //   document.getElementsByClassName("wrap").style = "display: contents;";
  document.getElementsByClassName("wrap").style = "display: contents";
  currentORformer = "former";
  //   console.log(document.getElementsByClassName("wrap").);
});
var arraya = [];
//getting data to backend
function ratecompany() {
  if (document.getElementById("ifcheck").checked === true) {
    var company = document.getElementById("Company").value;
    var overall = document.getElementById("overall").value;
    //take value of currentOrformer
    var lastteardropdown = document.getElementById("cars").value;
    var employestatus = document.getElementById("cars2").value;
    var jobtitle = document.getElementById("title").value;
    var reviewHeadline = document.getElementById("headline").value;
    var reviewHeadline = document.getElementById("headline").value;
    var pros = document.getElementById("pros").value;
    var cons = document.getElementById("cons").value;
    var management = document.getElementById("management").value;

    // adding to constructor function
    var val = new appenda(
      company,
      overall,
      currentORformer,
      lastteardropdown,
      employestatus,
      jobtitle,
      reviewHeadline,
      pros,
      cons,
      management
    );
    arraya.push(val);
    addtoCart(val);
  } else {
    console.log(false);
    alert("Please Provide all inforamion and click on check box!");
  }

  // console.log(
  // company,
  // overall,
  // currentORformer,
  // lastteardropdown,
  // employestatus,
  // jobtitle,
  // reviewHeadline,
  // pros,
  // cons,
  // management
  // );
}
function appenda(a, b, c, d, e, f, g, h, i, j) {
  this.company = a;
  this.overall = b;
  this.currentORformer = c;
  this.lastteardropdown = d;
  this.employestatus = e;
  this.jobtitle = f;
  this.reviewHeadline = g;
  this.pros = h;
  this.cons = i;
  this.management = j;
}
if (localStorage.getItem("rateACompany") === null) {
  localStorage.setItem("rateACompany", JSON.stringify([]));
}
function addtoCart(p) {
  let cart_data = JSON.parse(localStorage.getItem("rateACompany"));
  cart_data.push(p);
  localStorage.setItem("rateACompany", JSON.stringify(cart_data));
}
