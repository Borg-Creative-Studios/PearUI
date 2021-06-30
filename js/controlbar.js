document.getElementById("item1").innerHTML =
  localStorage["item1name"] || ""; // default text

    document.getElementById("item1input").value =
  localStorage["item1input"] || ""; 





function inputitems(){
    localStorage["item1input"] = document.getElementById("item1input").value; 
    localStorage["item1name"] = document.getElementById("item1").innerHTML;

}

function saveitems(){
    document.getElementById("item1input").value = localStorage["item1input"]; 
    document.getElementById("item1").innerHTML = localStorage["item1name"];

}





function setitem1() {
    var x1 = document.getElementById("item1input").value;

    localStorage["item1input"] = document.getElementById("item1input").value; 
  }

  function setitem1name() {
    var y1 = document.getElementById("item1name").value;
    document.getElementById("item1").innerHTML = y1;

    localStorage["item1name"] = document.getElementById("item1").innerHTML; // heading div
    localStorage["item1name"] = document.getElementById("item1name").value;
  }
  function openitem1(){
    var z1 = document.getElementById("item1input").value;
    
    
    document.getElementById("appwindow").src = z1;
    console.log(x1)
    
    
}
/*document.getElementById("item1").href = x;*/








setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["item1name"] = document.getElementById("item1").innerHTML; // heading div

  localStorage["item1name"] = document.getElementById("item1name").value; // heading div

  localStorage["item1input"] = document.getElementById("item1input").value; 


}, 1000);














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

