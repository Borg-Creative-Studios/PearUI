let searchengine = "https://duckduckgo.com/?q="
let duckduckgosearch = "https://duckduckgo.com/?q="
let googlesearch = "https://www.google.com/?q="
let qwantsearch = "https://www.qwant.com/?q="
let bingsearch = "https://www.bing.com/?q="
let mojeeksearch = "https://www.mojeek.com/search?q="
let startpagesearch = "https://www.startpage.com/sp/search?query="


function go(){
    var searchcontent = document.getElementById("searchfield").value

    let searchtype = searchcontent.includes("https://", "http://")

    if (searchcontent.includes("https://", "http://")) {
        //  block of code to be executed if the condition is true
        window.location.href = searchcontent
        console.log(searchcontent)
      }else{
        window.location.href = searchengine+searchcontent
      }



}

function goddg(){
  var searchcontent = document.getElementById("searchfield").value

  let searchtype = searchcontent.includes("https://", "http://")

  if (searchcontent.includes("https://", "http://")) {
      //  block of code to be executed if the condition is true
      window.location.href = searchcontent
      console.log(searchcontent)
    }else{
      window.location.href = duckduckgosearch+searchcontent
    }



}

function gos(){
  var searchcontent = document.getElementById("searchfield").value

  let searchtype = searchcontent.includes("https://", "http://")

  if (searchcontent.includes("https://", "http://")) {
      //  block of code to be executed if the condition is true
      window.location.href = searchcontent
      console.log(searchcontent)
    }else{
      window.location.href = startpagesearch+searchcontent
    }



}

function gom(){
  var searchcontent = document.getElementById("searchfield").value

  let searchtype = searchcontent.includes("https://", "http://")

  if (searchcontent.includes("https://", "http://")) {
      //  block of code to be executed if the condition is true
      window.location.href = searchcontent
      console.log(searchcontent)
    }else{
      window.location.href = mojeeksearch+searchcontent
    }



}

function gog(){
  var searchcontent = document.getElementById("searchfield").value

  let searchtype = searchcontent.includes("https://", "http://")

  if (searchcontent.includes("https://", "http://")) {
      //  block of code to be executed if the condition is true
      window.location.href = searchcontent
      console.log(searchcontent)
    }else{
      window.location.href = googlesearch+searchcontent
    }



}

function goq(){
  var searchcontent = document.getElementById("searchfield").value

  let searchtype = searchcontent.includes("https://", "http://")

  if (searchcontent.includes("https://", "http://")) {
      //  block of code to be executed if the condition is true
      window.location.href = searchcontent
      console.log(searchcontent)
    }else{
      window.location.href = qwantsearch+searchcontent
    }



}

function gob(){
  var searchcontent = document.getElementById("searchfield").value

  let searchtype = searchcontent.includes("https://", "http://")

  if (searchcontent.includes("https://", "http://")) {
      //  block of code to be executed if the condition is true
      window.location.href = searchcontent
      console.log(searchcontent)
    }else{
      window.location.href = bingsearch+searchcontent
    }



}



function google(){
document.getElementById('searcharea').innerHTML = '<input spellcheck="false"  id="searchfield" class="ginput" type="text" value="" content="" placeholder="Search Google or enter URL..."><button onclick="gog()" id="searched" class="gbtn">go</button>'



}


function mojeek(){
  document.getElementById('searcharea').innerHTML = '<input spellcheck="false"  id="searchfield" class="minput" type="text" value="" content="" placeholder="Search Mojeek or enter URL..."><button onclick="gom()" id="searched" class="mbtn">go</button>'
  
  
  
  }

function qwant(){
  document.getElementById('searcharea').innerHTML = '<input spellcheck="false"  id="searchfield" class="qinput" type="text" value="" content="" placeholder="Search Qwant or enter URL..."><button onclick="goq()" id="searched" class="qbtn">go</button>'
  
  
  
  }

  function bing(){
    document.getElementById('searcharea').innerHTML = '<input spellcheck="false"  id="searchfield" class="binput" type="text" value="" content="" placeholder="Search Bing or enter URL..."><button onclick="gob()" id="searched" class="bbtn">go</button>'
    
    
    
    }

    function duckduckgo(){
      document.getElementById('searcharea').innerHTML = '<input spellcheck="false"  id="searchfield" class="dinput" type="text" value="" content="" placeholder="Search DuckDuckGo or enter URL..."><button onclick="go()" id="searched" class="dbtn">go</button>'
      
      
      
      }

      function startpage(){
        document.getElementById('searcharea').innerHTML = '<input spellcheck="false"  id="searchfield" class="sinput" type="text" value="" content="" placeholder="Search Startpage or enter URL..."><button onclick="gos()" id="searched" class="sbtn">go</button>'
        
        
        
        }

function clearsearch(){
    document.getElementById("searchfield").value = ''
}

