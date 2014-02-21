<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=0.95, maximum, maximum-scale=1" />
<link rel="stylesheet" href="assets/css/style.css"/>

<script type="text/javascript" src="assets/js/readerJS/core/Interface.js"></script>
<script type="text/javascript" src="assets/js/readerJS/core/Flags.js"></script>
<script type="text/javascript" src="assets/js/readerJS/core/APIInterfaces.js"></script>
<script type="text/javascript" src="assets/js/readerJS/utils/Utils.js"></script>
<script type="text/javascript" src="assets/js/readerJS/utils/Point.js"></script>
<script type="text/javascript" src="assets/js/readerJS/event/MouseEvent.js"></script>
<script type="text/javascript" src="assets/js/readerJS/collision/Collision.js"></script>
<script type="text/javascript" src="assets/js/readerJS/media/Media.js"></script>
<script type="text/javascript" src="assets/js/readerJS/media/Video.js"></script>
<script type="text/javascript" src="assets/js/readerJS/media/Sound.js"></script>
<script type="text/javascript" src="assets/js/readerJS/media/AudioButton.js"></script>
</head>
<body onload="start()">
<div id="conteiner">
    <div id="header">
        <span>Apostilas</span>
    </div>
    <div id="menu"></div>
    <canvas id="mycanvas" width="768px" height="500px" style="background-color: rgba(99,0,99,0.5);"></canvas>
</div>

</body>
<script type="text/javascript">

var peca;
var video;
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
function start(){
    MouseEvent.addEvent(this,MouseEvent.MOUSE_END,canvas,'onClick',false);
    
    peca =  new AudioButton({
        rectangle:{
            width:100
            ,height:100
            ,initialPosition:new Point(50,10)
            ,x:50
            ,y:80
        }
        ,src:'assets/apostilas/Book_2/assets/audio/default/correto.mp3'
        ,imageSrc:'assets/apostilas/Book_2/assets/images/default/U1_L4_E3_2.png'
    });

}
function onClick(position){
    peca.onClick(position);
}
function draw(){
    context.clearRect(0,0,canvas.width,canvas.height);
    peca.draw(context);
    peca.debugDraw(context)
}
setInterval(draw,1000/60);

</script>
</html>
