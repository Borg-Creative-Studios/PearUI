var searchengine = "https://duckduckgo.com/?q="



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

function clearsearch(){
    document.getElementById("searchfield").value = ''
}