

function inputitems(){
    localStorage["item1input"] = document.getElementById("item1input").value; 
    localStorage["item1name"] = document.getElementById("item1").innerHTML;

    localStorage["item2input"] = document.getElementById("item2input").value; 
    localStorage["item2name"] = document.getElementById("item2").innerHTML;

    localStorage["item3input"] = document.getElementById("item3input").value; 
    localStorage["item3name"] = document.getElementById("item3").innerHTML;
}





function setitem1() {
    var x1 = document.getElementById("item1input").value;

    localStorage["item1input"] = document.getElementById("item1input").value; 
  }

  function setitem1name() {
    var y1 = document.getElementById("item1name").value;
    document.getElementById("item1").innerHTML = y1;

    localStorage["item1name"] = document.getElementById("item1").innerHTML; // heading div
  }
  function openitem1(){
    var z1 = document.getElementById("item1input").value;
    
    document.getElementById("appwindow").src = z1;
    console.log(x1)
    
    
}







function setitem2() {
    var x2 = document.getElementById("item2input").value;
    
    localStorage["item2input"] = document.getElementById("item2input").value; 
  }

  function setitem2name() {
    var y2 = document.getElementById("item2name").value;
    document.getElementById("item2").innerHTML = y2;

    localStorage["item2name"] = document.getElementById("item2").innerHTML; // heading div
  }
  function openitem2(){
    var z2 = document.getElementById("item2input").value;
    
    document.getElementById("appwindow").src = z2;
    console.log(x2)
    
}







function setitem3() {
    var x3 = document.getElementById("item3input").value;
    
    localStorage["item3input"] = document.getElementById("item3input").value; 
  }

  function setitem3name() {
    var y3 = document.getElementById("item3name").value;
    document.getElementById("item3").innerHTML = y3;

    localStorage["item3name"] = document.getElementById("item3").innerHTML; // heading div
  }
  function openitem3(){
    var z3 = document.getElementById("item3input").value;
    
    document.getElementById("appwindow").src = z3;
    console.log(x3)
    
}
/*document.getElementById("item1").href = x;*/




document.getElementById("item1").innerHTML =
  localStorage["item1"] || ""; // default text

document.getElementById("item2").innerHTML =
  localStorage["item3"] || ""; // default text

  document.getElementById("item3").innerHTML =
    localStorage["item3"] || ""; // default text

    document.getElementById("item1input").value =
  localStorage["item1input"] || ""; 

document.getElementById("item2input").value =
  localStorage["item2input"] || ""; 

  document.getElementById("item3input").value =
    localStorage["item3input"] || ""; 



setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["item1name"] = document.getElementById("item1").innerHTML; // heading div
  localStorage["item2name"] = document.getElementById("item2").innerHTML; // content div
  localStorage["item3name"] = document.getElementById("item3").innerHTML; // content div

  localStorage["item1input"] = document.getElementById("item1input").value; 
  localStorage["item2input"] = document.getElementById("item2input").value; 
  localStorage["item3input"] = document.getElementById("item3input").value; 


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

function clear(){
    localStorage.clear();
    location.reload();

  }

function cleared(){
    alert("Clearing data");
}