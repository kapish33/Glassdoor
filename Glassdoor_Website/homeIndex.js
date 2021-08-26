var salaryButton = document.getElementById("t33");

salaryButton.addEventListener("click", () => {
    window.location = '../Glassdoors/Salaries/Salaries.htm';
    //window.location.href = 'Glassdoors/Salaries/Salaries.htm';
    //window.location.href = 
});

var locBox = document.getElementById('jobLoc');
var dang = document.getElementById('war');

locBox.oninput = function(e) {
    if (e.target.value === '') {
        e.target.style.background = "#FFF3F2"
        dang.style.visibility = "visible";
    }
    else {
        e.target.style.background = "white"
        dang.style.visibility = "hidden";
    }
}