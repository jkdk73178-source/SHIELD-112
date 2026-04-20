// ---------------- REGISTER ----------------
function register(){

let userInput=document.getElementById("newuser");
let passInput=document.getElementById("newpass");

if(!userInput || !passInput) return false;

let username=userInput.value.trim();
let password=passInput.value.trim();

if(username==="" || password===""){
document.getElementById("msg").innerText="Please enter username and password";
return false;
}

localStorage.setItem("username",username);
localStorage.setItem("password",password);

document.getElementById("msg").innerText="Account created successfully";

setTimeout(function(){
window.location.href="index.html";
},1000);
return false;

}


// ---------------- LOGIN ----------------
function login(){

let userInput=document.getElementById("username");
let passInput=document.getElementById("password");

if(!userInput || !passInput) return false;

let username=userInput.value.trim();
let password=passInput.value.trim();

let storedUser=localStorage.getItem("username");
let storedPass=localStorage.getItem("password");

userInput.style.border="";
passInput.style.border="";

if(username===storedUser && password===storedPass){

window.location.href="index.html";

}else{

document.getElementById("message").innerText="Invalid username or password";

userInput.style.border="2px solid red";
passInput.style.border="2px solid red";

}

return false;

}


// ---------------- ARROW KEY NAVIGATION ----------------
document.addEventListener("keydown",function(e){

let active=document.activeElement;

if(e.key==="ArrowDown"){

if(active.id==="username"){
document.getElementById("password").focus();
}

if(active.id==="newuser"){
document.getElementById("newpass").focus();
}

}

if(e.key==="ArrowUp"){

if(active.id==="password"){
document.getElementById("username").focus();
}

if(active.id==="newpass"){
document.getElementById("newuser").focus();
}

}

});


// ---------------- LOGOUT ----------------
function logout(){
window.location.href="login.html";
}


// ---------------- SERVICES PAGE ----------------
if(document.getElementById("serviceList") && typeof services!=="undefined"){

displayServices(services);

function displayServices(list){

let container=document.getElementById("serviceList");

container.innerHTML="";

list.forEach(service=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`

<h3>${service.name}</h3>
<p>📞 ${service.number}</p>

<button class="call" onclick="callService('${service.number}')">
Call Now
</button>

<button class="map" onclick="findNearby('${service.name}')">
Find Nearby
</button>

`;

container.appendChild(card);

});

}


window.searchService=function(){

let input=document.getElementById("searchInput").value.toLowerCase();

let filtered=services.filter(service =>
service.name.toLowerCase().includes(input)
);

displayServices(filtered);

}


window.filterService=function(category){

if(category==="all"){
displayServices(services);
return;
}

let filtered=services.filter(service =>
service.category===category
);

displayServices(filtered);

}

}


// ---------------- CALL SERVICE ----------------
function callService(number){
window.location.href="tel:"+number;
}


// ---------------- FIND NEARBY ----------------
function findNearby(service){
window.open("https://www.google.com/maps/search/"+service+" near me");
}
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}