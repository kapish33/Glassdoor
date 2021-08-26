var current = document.querySelector("#current");
current.addEventListener("click", function () {
  document.getElementById("current").style =
    "background-color: #0C4085;color: white";
  document.getElementById("former").style =
    "background-color: white;color: black";
});

var former = document.querySelector("#former");
former.addEventListener("click", function () {
  document.getElementById("former").style =
    "background-color: #0C4085;color: white";
  document.getElementById("current").style =
    "background-color: white;color: black";
  //   document.getElementsByClassName("wrap").style = "display: contents;";
  document.getElementsByClassName("wrap")[0].style.visibility =
    "display: contents";
  //   console.log(document.getElementsByClassName("wrap").);
});
