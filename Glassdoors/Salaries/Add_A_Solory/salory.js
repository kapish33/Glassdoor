// console.log("iam ");
btn = document.getElementsByClassName("sel");

// console.log(btn, "btn");
var even = "Company Review";
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    // console.log(e.target.value);
    even = e.target.value;
    //if (e.target.value === "Salary") {
    // console.log(0);
    document.querySelector("#lowerleftup").textContent =
      "Is this your current or former job?";
    document.querySelector("#lowerleftdown").textContent = e.target.value;
    // }
    //if (e.target.value === "Interview Review") {
    document.querySelector("#lowerleftup").style = "display: none";
    //}
  });
}

function current() {
  var current = document.getElementById("current");
  current.style.backgroundColor = "#1861BF";
  current.style.color = "white";

  var former = document.getElementById("former");
  former.style.backgroundColor = "white";
  former.style.color = "black";
}

function former() {
  var former = document.getElementById("former");
  former.style.backgroundColor = "#1861BF";
  former.style.color = "white";

  var current = document.getElementById("current");
  current.style.backgroundColor = "white";
  current.style.color = "black";
}

function redirect() {
  // console.log(even);
  if (even === "Company Review") {
    window.location.href = "./rateacompany.htm";
  } else if (even === "Salary") {
    window.location.href = "./Add_a_Salary.htm";
  } else if (even === "Interview Review") {
    window.location.href = "./InterviewReview.htm";
  } else if (even === "Benefits Review") {
    window.location.href = "./BenefitsReview.html";
  }
}
