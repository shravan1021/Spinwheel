function closeloadingpage()
{
    document.getElementById("loading").style.display="none"
}
function rotatewheel()
{
    var randomNum=Math.floor(Math.random()*360);
    document.getElementById("wheel").style.transition="rotate 10s"
    document.getElementById("wheel").style.rotate=randomNum*50+"deg"
}