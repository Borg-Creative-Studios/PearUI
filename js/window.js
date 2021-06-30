function findheight(){
    height=window.screen.height;
    console.log(window.screen.height);
}
function inputheight(){
    tallinput=window.screen.height;
    talloutput = tallinput-400;
    document.getElementById("appwindow").height = talloutput;
    console.log(talloutput);
}