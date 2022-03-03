



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



function loadhome(){

  

  document.getElementById("app1").innerHTML = localStorage["app1name"]
  document.getElementById("app2").innerHTML = localStorage["app2name"]
  document.getElementById("app3").innerHTML = localStorage["app3name"]

  document.getElementById("app1name").value = localStorage["app1name"]
  document.getElementById("app2name").value = localStorage["app2name"]
  document.getElementById("app3name").value = localStorage["app3name"]

  document.getElementById("app1input").value = localStorage["app1input"]
  document.getElementById("app2input").value = localStorage["app2input"]
  document.getElementById("app3input").value = localStorage["app3input"]


    
}


