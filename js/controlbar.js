document.getElementById("item1name").value =
  localStorage["item1name"] || ""; // 

  document.getElementById("item1").innerHTML =
  localStorage["item1"] || ""; // 

  document.getElementById("item1input").value =
  localStorage["item1input"] || ""; // 

  document.getElementById("item1link").href =
  localStorage["item1input"] || ""; // 


  


  document.getElementById("item2name").value =
  localStorage["item2name"] || ""; // 

  document.getElementById("item2").innerHTML =
  localStorage["item2"] || ""; // 

  document.getElementById("item1input2").value =
  localStorage["item2input"] || ""; // 

  document.getElementById("item2link").href =
  localStorage["item2input"] || ""; // 

  



  document.getElementById("item3name").value =
  localStorage["item3name"] || ""; // 

  document.getElementById("item3").innerHTML =
  localStorage["item3"] || ""; // 

  document.getElementById("item1input3").value =
  localStorage["item3input"] || ""; // 

  document.getElementById("item3link").href =
  localStorage["item3input"] || ""; // 


setInterval(function() {

  localStorage["item1name"] = document.getElementById("item1name").value; // 
  localStorage["item1"] = document.getElementById("item1").innerHTML; // 
  localStorage["item1input"] = document.getElementById("item1input").value; // 
  localStorage["item1input"] = document.getElementById("item1link").href; // 

  localStorage["item2name"] = document.getElementById("item2name").value; // 
  localStorage["item2"] = document.getElementById("item2").innerHTML; // 
  localStorage["item2input"] = document.getElementById("item2input").value; // 
  localStorage["item2input"] = document.getElementById("item2link").href; // 

  localStorage["item3name"] = document.getElementById("item3name").value; // 
  localStorage["item3"] = document.getElementById("item3").innerHTML; // 
  localStorage["item3input"] = document.getElementById("item3input").value; // 
  localStorage["item3input"] = document.getElementById("item3link").href; // 
 
}, 1000);


function save1(){
  document.getElementById("item1").innerHTML = document.getElementById("item1name").value;
  localStorage.setItem("item1name", document.getElementById("item1name").value);

  localStorage["item1input"] = document.getElementById("item1input").value; // 
  localStorage.setItem("item1input", document.getElementById("item1input").value);


  localStorage["item1input"] = document.getElementById("item1link").href; // 
  localStorage.setItem("item1input", document.getElementById("item1link").href);



}

function save2(){
  document.getElementById("item2").innerHTML = document.getElementById("item2name").value;
  localStorage.setItem("item2name", document.getElementById("item2name").value);

  localStorage["item2input"] = document.getElementById("item2input").value; // 
  localStorage.setItem("item2input", document.getElementById("item2input").value);


  localStorage["item2input"] = document.getElementById("item2link").href; // 
  localStorage.setItem("item2input", document.getElementById("item2link").href);



}


function save3(){
  document.getElementById("item3").innerHTML = document.getElementById("item3name").value;
  localStorage.setItem("item3name", document.getElementById("item3name").value);

  localStorage["item3input"] = document.getElementById("item3input").value; // 
  localStorage.setItem("item3input", document.getElementById("item3input").value);


  localStorage["item3input"] = document.getElementById("item3link").href; // 
  localStorage.setItem("item3input", document.getElementById("item3link").href);



}

function loaddata(){
  document.getElementById("item1").innerHTML = localStorage["item1name"]
  document.getElementById("item2").innerHTML = localStorage["item2name"]
  document.getElementById("item3").innerHTML = localStorage["item3name"]

  document.getElementById("item1name").value = localStorage["item1name"]
  document.getElementById("item2name").value = localStorage["item2name"]
  document.getElementById("item3name").value = localStorage["item3name"]

  document.getElementById("item1input").value = localStorage["item1input"]
  document.getElementById("item2input").value = localStorage["item2input"]
  document.getElementById("item3input").value = localStorage["item3input"]

  document.getElementById("link1").href = localStorage["item1input"]
  document.getElementById("link2").href = localStorage["item2input"]
  document.getElementById("link3").href = localStorage["item3input"]

}

function openitem1(){
  var z1 = document.getElementById("item1input").value;
  
  
  document.getElementById("appwindow").src = z1;
  console.log(x1)
  
  
}

function openitem2(){
  var z2 = document.getElementById("item2input").value;
  
  
  document.getElementById("appwindow").src = z2;
  console.log(x1)
  
  
}

function openitem3(){
  var z3 = document.getElementById("item3input").value;
  
  
  document.getElementById("appwindow").src = z3;
  console.log(x1)
  
  
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
