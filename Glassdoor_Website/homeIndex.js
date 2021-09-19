var tex = document.getElementById('searc');

tex.onfocus = () => {
    var d = document.getElementById('searchcomponent2');
    d.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 1px 1px 5px 1px lightblue;`);
}

tex.onblur = () => {
    var d = document.getElementById('searchcomponent2');
    d.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 0px 0px 0px 0px;`);
}
var tex1 = document.getElementById('ta4');

tex1.onfocus = () => {
    tex1.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 1px 1px 5px 1px lightblue;`);
}

tex1.onblur = () => {
    tex1.setAttribute("style", `border: 1px solid lightgray;
    box-shadow: 0px 0px 0px 0px;`);
}

var salaryButton = document.getElementById("explore3");

salaryButton.addEventListener("click", () => {
    window.location = '../Glassdoors/Salaries/Salaries.htm';
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

 let roles = [];

 function addRole(r, c, l, d, i) {
    this.role = r;
    this.company = c;
    this.location = l;
    this.days = d;
    this.image = i;
 }

 roles.push(new addRole("Junior Full Stack Developer", "Dreamz Interactive", "Kolkata", 1, "non"));
 roles.push(new addRole("Junior Full Stack Developer", "Dreamz Interactive", "Kolkata", 2, "non"));
 roles.push(new addRole("Java Full Stack", "IBM", "Kolkata", 3, "https://media.glassdoor.com/sql/354/ibm-squareLogo-1626088539071.png"));
 roles.push(new addRole("Sr. Full Stack Developer", "Digital Avenues Pvt. Ltd.", "Kolkata", 9, "non"));
 roles.push(new addRole("Full Stack Developer", "Red Apple", "Delhi", 10, "non"));
 roles.push(new addRole("Junior Full Stack Developer", "Dreamz Interactive", "Delhi", 1, "non"));
 roles.push(new addRole("Junior Full Stack Developer", "Dreamz Interactive", "Delhi", 2, "non"));
 roles.push(new addRole("Application Developer : Java Full Stack", "IBM", "Delhi", 3, "https://media.glassdoor.com/sql/354/ibm-squareLogo-1626088539071.png"));
 roles.push(new addRole("Full Stack Developer", "Red Apple", "Delhi", 10, "non"));

 function doIt() {
    var count = 0;
    let a = document.getElementById("r1");
    let c = document.getElementById("r3");
    let d = document.getElementById("r4");
    let b = document.getElementById("r2");
    let proms = new Promise(function(resolve, reject){
        var cc = setInterval(() => {
            count++;
            if(count === 7) {
                resolve();
                clearInterval(cc);
            }
            if(Number(count) % 2 === 0) {
                a.style.opacity = "0.1";
                a.style.backgroundColor = "gray"
                b.style.opacity = "0.1";
                b.style.backgroundColor = "gray"
                c.style.opacity = "0.1";
                c.style.backgroundColor = "gray"
                d.style.opacity = "0.1";
                d.style.backgroundColor = "gray"
            }
            else {
                a.style.opacity = "0.9";
                a.style.backgroundColor = "black"
                b.style.opacity = "0.9";
                b.style.backgroundColor = "black"
                c.style.opacity = "0.9";
                c.style.backgroundColor = "black"
                d.style.opacity = "0.9";
                d.style.backgroundColor = "black"
            }
            document.getElementById("xplor").style.visibility = "hidden";
            document.getElementById("location").style.visibility = "hidden";
        }, 600);
    });

    proms.then(() => {
        a.style.opacity = "1";
        a.style.backgroundColor = "white";
        b.style.opacity = "1";
        b.style.backgroundColor = "white";
        c.style.opacity = "1";
        c.style.backgroundColor = "white";
        d.style.opacity = "1";
        d.style.backgroundColor = "white";
        document.getElementById("xplor").style.visibility = "visible";
        document.getElementById("location").style.visibility = "visible";
        addJobs();
    });
    
 }

 function appendToFrontend(index, r, c, l, d, i) {
     var zr = document.getElementById(`role${index}`);
     var zc = document.getElementById(`com${index}`);
     var zl = document.getElementById(`loca${index}`);
     var zd = document.getElementById(`day${index}`);
     var zi = document.getElementById(`img${index}`);

     zr.innerText = r;
     zc.innerText = c;
     zl.innerText = l;
     zd.innerText = d + "d";
     if (i !== "non") {
        zi.setAttribute('src', i);
     }
     else
     zi.setAttribute('src', `static/spa.JPG`);
 }

function addJobs() {
    let locationValue = document.getElementById("ta4");
    let count = 1;
    for (let i = 0; i < roles.length && count <= 4; i++) {
        const element = roles[i];
        if (element.location === locationValue.value) {
            appendToFrontend(count++, element.role, element.company, element.location, element.days, element.image)
        }
    }
}

let finButton = document.getElementById('finish');

finButton.addEventListener('click', function() {
    window.location = "../../../Finish.html";
})


login = JSON.parse(localStorage.getItem("userNow"));

 function loadActivity() {
    let locationValue = document.getElementById("ta4");
     let usr = document.getElementById("useremail");
     usr.innerText = login.email;
     locationValue.innerText = login.loc;
     doIt();   
 }

 window.onload = loadActivity();

 function moveToDashboard() {
    localStorage.setItem("userNow", JSON.stringify(null));
    window.location = "../Dashboard/demo.html"
}