var liguePontos;
var arrayAudioBnt;
var canvas = document.getElementById('lesson3_pag76');
var context = canvas.getContext('2d');
setTimeout(init,1000);

function init(){
    var arrayRects = new Array();
    arrayAudioBnt = new Array();
    var arrayAudioSrc = new Array();
    var audioBtn;
    var rect;
    var aux =0;
    
    for(var i=0;i<8;i++){
        if(i%2==0){
            rect = new Rect(0,60*aux,130,60);
            rect.x = 300;
            rect.y = 80*aux+150;
            arrayAudioSrc.push('');
        }else{
            
            rect = new Rect(250*(aux)+130,0,250,250);
            rect.x = 380 *(aux%2) + 70 ;
            rect.y = 260*parseInt(aux/2) + 50;
            
             arrayAudioSrc.push('assets/audio/unidade_4/lesson_3/exe2_'+aux+'.mp3');
             aux++;
        }
       
        arrayRects.push(rect);
    }
    
    for(var j=0;j<4;j++){
        audioBtn = new AudioButton(170+320*(j%2),615+200*parseInt(j/2),0,0,210,200,'assets/audio/unidade_4/lesson_3/exe3_'+j+'.mp3');
        arrayAudioBnt.push(audioBtn);
    }
    
    liguePontos= new LiguePontos('lesson3_pag76','assets/images/unidades/unidade_4/lesson_3/exercicio_2.png',arrayRects,arrayAudioSrc);
    setInterval(draw,1000/60);
    
    canvas.addEventListener('click',function(){
        var offsetX = event.offsetX;
        var offsetY = event.offsetY;
        
        for(var k=0;k<arrayAudioBnt.length;k++){
            child = arrayAudioBnt[k];
            
            if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
                if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                    child.onClick();
                }
            }
            
        }
    },false);
}

function draw(){
    liguePontos.renderiza();
    
}