function go(){
    var searchcontent = document.getElementById("searchfield").value

    let searchtype = searchcontent.includes("https://", "http://")

    if (searchtype = true) {
        //  block of code to be executed if the condition is true
        window.location.href = searchcontent

      } else {
        //  block of code to be executed if the condition is false
        window.location.href = "https://duckduckgo.com/?q="+searchcontent

      }


}