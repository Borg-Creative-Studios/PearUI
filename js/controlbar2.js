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

  document.getElementById("item1inpu2").value =
  localStorage["item2input"] || ""; // 

  document.getElementById("item2link").href =
  localStorage["item2input"] || ""; // 


setInterval(function() {

  localStorage["item1name"] = document.getElementById("item1name").value; // 
  localStorage["item1"] = document.getElementById("item1").innerHTML; // 
  localStorage["item1input"] = document.getElementById("item1input").value; // 
  localStorage["item1input"] = document.getElementById("item1link").href; // 

  localStorage["item2name"] = document.getElementById("item2name").value; // 
  localStorage["item2"] = document.getElementById("item2").innerHTML; // 
  localStorage["item2input"] = document.getElementById("item2input").value; // 
  localStorage["item2input"] = document.getElementById("item2link").href; // 
 
}, 1000);


function save1(){
  document.getElementById("item1").innerHTML = document.getElementById("item1name").value;
  document.getElementById("item2").innerHTML = document.getElementById("item2name").value;

}

function openitem1(){
  var z1 = document.getElementById("item1input").value;
  
  
  document.getElementById("appwindow").src = z1;
  console.log(x1)
  
  
}

function openitem2(){
  var z1 = document.getElementById("item2input").value;
  
  
  document.getElementById("appwindow").src = z1;
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
