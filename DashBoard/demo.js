function goPrivacy() {
    window.location.href = "https://hrtechprivacy.com/brands/glassdoor#privacypolicy";
}
 function show()
 {
    var list1=["Accountant Career Path",
               "Neurologist Career Path",
               "Executive Producer Career Path",
               "Actuary Career Path",
               "Copywriter Career Path"
             ];

             var list2=[" Career Path",
               "Neurologist Career Path",
               "Executive Producer Career Path",
               "Actuary Career Path",
               "Copywriter Career Path"
             ];
             var list3=["  Path",
               "Neurologist Career Path",
               "Executive Producer Career Path",
               "Actuary Career Path",
               "Copywriter Career Path"
             ];
         
            var point=document.getElementById("point")
            var display=document.createElement("div")
            display.className="display"
            point.appendChild(display);
            var ul =document.createElement("ul")
            ul.className="list1";
            var ul1 =document.createElement("ul")
            ul1.className="list2";
            var ul2 =document.createElement("ul")
            ul2.className="list3";

          
             
             for(var i=0;i<5;i++)
             {
                var ull1 =document.createElement("li")
                ul.appendChild(ull1)
                ull1.innerText=list1[i];
             }
             display.appendChild(ul)
             for(var i=0;i<5;i++)
             {
                 var ull2 =document.createElement("li")
                ul.appendChild(ull2)
                ull2.innerText=list2[i]; 
             }
             display.appendChild(ul1)

 }

 function terms()
 {
     window.location.href = "https://www.glassdoor.co.in/about/terms.htm";
 }

 function post_jobs()
 {
     window.location.href = "https://www.glassdoor.co.in/post-job/?src=below-form-locked-b2c";
 }

 function sign()
 {
    window.location.href="sign.html"
 }
 
//    if(localStorage.getItem("login_details"==null))
//    {
//          localStorage.setItem("login_details",JSON.stringify([]))
//    }

function addUser(m,p) {
this.mail = m;
this.password = p;
}

let users = [];
 function signup()
 {
     event.preventDefault();
     let mail = document.getElementById("mail").value;
     let pass = document.getElementById("password").value;

     let userDetails = JSON.parse(localStorage.getItem("login_details"));

     let usernow = {
         email: mail,
         loc: "Kolkata"
     }

    localStorage.setItem("userNow", JSON.stringify(usernow));

    if (userDetails === null) {
        localStorage.setItem("login_details", JSON.stringify(users));
    }

    if(mail === '' || pass === '') {
        alert('Enter a valid email and password!')
    }
    else if(pass.length < 8) {
        alert('Password should be atleast 8 characters.');
    }
    else if (userDetails.some( good => good['mail'] === mail)) {
        alert("User already registered!")
    } else {
        users.push(new addUser(mail, pass));
        localStorage.setItem("login_details", JSON.stringify(users));
        usernow = mail;  
        alert("Signup Successful!");
        window.location.href = "../Glassdoor_Website/homeIndex.htm"
    }


     /*
     //getting value and set in string
    var mail=document.querySelector("#mail").value;
    var pass=document.querySelector("#password").value;   
    var tobeadd={"mail":mail,"pass":pass};
    tobeadd=JSON.stringify(tobeadd)
  
 
     let data=JSON.parse(localStorage.getItem("login_details"));
     //adding data
 
    // console.log(tobeadd)
     //updating localstorage
     localStorage.setItem("login_details",JSON.stringify(data));
   //  console.log(data)

   var cnt=0;
   if(data!=null )
       {
        data.forEach(element =>cnt++);
        let b=false;
         for(var i=0;i<cnt;i++)
          {
            if( mail==data[i].mail)
             {
                 b=true;
               alert("Email already exist login");
               break;
             }
         }
          if(b==false)
          {
            data.push(tobeadd);
          }
       localStorage.setItem("login_details",JSON.stringify(data));
      }
      else
      {
        data.push(tobeadd);
        localStorage.setItem("login_details",JSON.stringify(data));

      }
      */
}
function usingFacebook()
{
     setTimeout(() => {
        window.location.href="facebook.html"
     }, 1000);
}
function usingGoogle()
{
    window.location.href = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.glassdoor.co.in%3Fid%3Dauth244977&response_type=code%20permission%20id_token&scope=openid%20profile%20email&openid.realm&client_id=141714232794-u9pltfkeb9skmomag53kf4dt3p4mgp1a.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.glassdoor.co.in&access_type=offline&include_granted_scopes=true&prompt=select_account&origin=https%3A%2F%2Fwww.glassdoor.co.in&gsiwebsdk=2&flowName=GeneralOAuthFlow";
}
function postJobs()
{
  window.location.href="https://www.glassdoor.co.in/post-job/?src=site-header-locked-b2c";
}

function check() {
    let subb = document.getElementById("continueEmail");
    subb.style.cursor = "pointer";
    subb.setAttribute('disabled', false);
}