function play(){
    var audio = new Audio('images/music.mp3');
    audio.play();
}

const start = document.querySelector(".talk"),
main = document.querySelector(".container"),
icon = document.querySelector(".fa-microphone");

start.addEventListener("click", function() {

main.style.display = "flex";
this.style.display = "none";
});
start.pause()




function hidediv(){
    document.querySelector('.container').style.visibility="hidden";
}
setTimeout('hidediv()',10000);

