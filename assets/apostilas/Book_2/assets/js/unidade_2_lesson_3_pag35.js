var LiguePontos;
var DragMenu;
var arrayButtons;
var canvasLigue = document.getElementById('pag35_ex3');

setTimeout(init(),4500);

var touchEnabled = 'ontouchstart' in document.documentElement;


function init(){
    var arrayRectLigue = new Array();
    arrayButtons = new Array();
    var rect;
    var nextY=0;
    var audioButton
    var canvasMenu = document.getElementById('pag35_ex2');
    var arrayAudioButtons = new Array();
    var arrayOrdem = new Array();
    if(touchEnabled){
        var mouseUp = 'touchend';
    }else{
         var mouseUp = 'mouseup';
    }
    for(var i=0;i<6;i++){
       
            rect = new Rect(parseInt(i%2)*138,nextY ,138,212);
            rect.x = 155 + parseInt(i%2)*400;
            rect.y = nextY +50;
            
       
            arrayRectLigue.push(rect);
           
            if(i%2 ==1){
                nextY +=212; 
            }
    }
    arrayOrdem[0] = arrayRectLigue[0]
    arrayOrdem[1] = arrayRectLigue[5]
    arrayOrdem[2] = arrayRectLigue[2]
    arrayOrdem[3] = arrayRectLigue[1]
    arrayOrdem[4] = arrayRectLigue[4]
    arrayOrdem[5] = arrayRectLigue[3]
    
    liguePontos = new LiguePontos('pag35_ex3','assets/images/unidades/unidade_2/lesson_3/pag35_ex3.png',arrayOrdem)
    
    canvasLigue.addEventListener(mouseUp,onMouseUp,false);
    
    for(var j=0;j<arrayRectLigue.length;j++){
        if(j%2==0){
            rect =  arrayRectLigue[j];
            audioButton = new AudioButton(rect.x, rect.y,0,0,rect.width,rect.height,'assets/audio/unidade_2/lesson_3/exe3_'+j+'.mp3');
            arrayButtons.push(audioButton);
        }
    }
    
    for(var k =0;k<16;k++){
         audioButton = new AudioButton(139*k, 0,0,0,139,85,'assets/audio/unidade_2/lesson_3/exe2_'+(k+1)+'.mp3');
         arrayAudioButtons.push(audioButton);
    }
    //Drag Menu
    DragMenu = new DragMenu(canvasMenu,'assets/images/unidades/unidade_2/lesson_3/pag35_ex2.png',arrayAudioButtons,2200)
    setInterval(draw,1000/60);
    
}
function onMouseUp(){
    event.stopPropagation();
    event.preventDefault();
    var offsetX;
	var offsetY;
    var child;
    
    if(touchEnabled){
        offsetX = event.targetTouches[0].pageX  -  canvasLigue.offsetLeft - canvasLigue.offsetParent.offsetLeft;
		offsetY = event.targetTouches[0].pageY  -  canvasLigue.offsetTop - canvasLigue.offsetParent.offsetTop ;		
    }else{
        offsetX = event.offsetX ;
        offsetY = event.offsetY ;
    }	
    
    for(var i =0; i < arrayButtons.length; i++){
	  child = arrayButtons[i];
				
		  if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
              if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                    child.onClick();
              }
          }
    }
    
    child = null;
    offsetX =null;
    offsetY = null;
}

function draw(){
    liguePontos.renderiza();
    
    DragMenu.renderiza();
}