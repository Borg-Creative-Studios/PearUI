document.getElementById("usrnamecreate").value =
  localStorage["usrname"] || ""; // 

  document.getElementById("welcome").innerHTML =
  localStorage["usrname"] || ""; // 

  document.getElementById("app1name").value =
  localStorage["app1name"] || ""; // 

  document.getElementById("app1").innerHTML =
  localStorage["app1"] || ""; // 

  document.getElementById("app1input").value =
  localStorage["app1input"] || ""; // 

  document.getElementById("app1link").href =
  localStorage["app1input"] || ""; // 


  


  document.getElementById("app2name").value =
  localStorage["app2name"] || ""; // 

  document.getElementById("app2").innerHTML =
  localStorage["app2"] || ""; // 

  document.getElementById("app1input2").value =
  localStorage["app2input"] || ""; // 

  document.getElementById("app2link").href =
  localStorage["app2input"] || ""; // 

  



  document.getElementById("app3name").value =
  localStorage["app3name"] || ""; // 

  document.getElementById("app3").innerHTML =
  localStorage["app3"] || ""; // 

  document.getElementById("app1input3").value =
  localStorage["app3input"] || ""; // 

  document.getElementById("app3link").href =
  localStorage["app3input"] || ""; // 


setInterval(function() {

  localStorage["app1name"] = document.getElementById("app1name").value; // 
  localStorage["app1"] = document.getElementById("app1").innerHTML; // 
  localStorage["app1input"] = document.getElementById("app1input").value; // 
  localStorage["app1input"] = document.getElementById("app1link").href; // 

  localStorage["app2name"] = document.getElementById("app2name").value; // 
  localStorage["app2"] = document.getElementById("app2").innerHTML; // 
  localStorage["app2input"] = document.getElementById("app2input").value; // 
  localStorage["app2input"] = document.getElementById("app2link").href; // 

  localStorage["app3name"] = document.getElementById("app3name").value; // 
  localStorage["app3"] = document.getElementById("app3").innerHTML; // 
  localStorage["app3input"] = document.getElementById("app3input").value; // 
  localStorage["app3input"] = document.getElementById("app3link").href; // 
 
}, 1000);





setInterval(function() {

  localStorage["usrname"] = document.getElementById("usrnamecreate").value; // 
  localStorage["usrname"] = document.getElementById("welcome").innerHTML; // 

 
}, 1000);


function save1(){
  document.getElementById("welcome").innerHTML = document.getElementById("usrnamecreate").value;
  localStorage.setItem("usrname", document.getElementById("usrnamecreate").value);


}







function showsettings(){
  document.getElementById("controlbarsettings").style.visibility = "visible";
}
function hidesettings(){
  document.getElementById("controlbarsettings").style.visibility = "hidden";
}

function settingsbuttonshow2(){
  document.getElementById("settingsbutton2").style.visibility = "visible";
}

function settingsbuttonhide2(){
  document.getElementById("settingsbutton2").style.visibility = "hidden";
  
}

function settingsbuttonshow1(){
  document.getElementById("settingsbutton1").style.visibility = "visible";
}

function settingsbuttonhide1(){
  document.getElementById("settingsbutton1").style.visibility = "hidden";
}


function appsave1(){

  localStorage.setItem("app1name", document.getElementById("app1name").value);


  localStorage.setItem("app1input", document.getElementById("app1input").value);



  localStorage.setItem("app1input", document.getElementById("app1link").href);



}

function appsave2(){

  localStorage.setItem("app2name", document.getElementById("app2name").value);


  localStorage.setItem("app2input", document.getElementById("app2input").value);



  localStorage.setItem("app2input", document.getElementById("app2link").href);



}


function appsave3(){

  localStorage.setItem("app3name", document.getElementById("app3name").value);


  localStorage.setItem("app3input", document.getElementById("app3input").value);



  localStorage.setItem("app3input", document.getElementById("app3link").href);



}

function loaddata(){
  document.getElementById("welcome").innerHTML = localStorage["usrname"]


  document.getElementById("usrname").value = localStorage["usrname"]


}