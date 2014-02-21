var canvas = document.getElementById('pag22_ex5');
var context = canvas.getContext('2d');
var dragAndDrop;
var arrayAudioButtons;
setTimeout(init(),4500);

function init(){
    var arrayPontos = new Array();
    var arrayPecas = new Array();
    var arrayOrdem = new Array();
    arrayAudioButtons = new Array();
    var peca;

    
    
    arrayPontos.push(new Point(205,285 - 83));
    arrayPontos.push(new Point(205,530 - 83));
    arrayPontos.push(new Point(570,285- 85));
    arrayPontos.push(new Point(570,530- 82));
    
    
    for(var i=0;i<6;i++){
        peca = new Peca('a'+1,0,i*25,72,25);
        peca.rect.x = 400;
        peca.rect.y = 150+i*30;
        
        arrayPecas.push(peca);
    }
    
    arrayPecas[4].rect.y = 150+2*30;
    
    arrayOrdem[0] = arrayPecas[4];
    arrayOrdem[1] = arrayPecas[1];
    arrayOrdem[2] = arrayPecas[0];
    arrayOrdem[3] = arrayPecas[3];
    
    dragAndDrop = new DragAndDrop(canvas,'assets/images/unidades/unidade_1/lesson_4/pag22_ex5.png',arrayOrdem,arrayPontos);
    
    setInterval(gameLoop,1000/60);
    
    canvas.addEventListener('click',onClick,false);
    
    arrayAudioButtons.push(new AudioButton(155,125- 105,0,0,220,160,'assets/audio/unidade_1/lesson_4/22_MENINAA.mp3'));
    arrayAudioButtons.push(new AudioButton(520,125- 105,0,0,220,160,'assets/audio/unidade_1/lesson_4/22_MENINOC.mp3'));
    arrayAudioButtons.push(new AudioButton(155,375- 105,0,0,220,160,'assets/audio/unidade_1/lesson_4/22_MENINAB.mp3'));
    arrayAudioButtons.push(new AudioButton(520,375- 105,0,0,220,160,'assets/audio/unidade_1/lesson_4/22_MENINOD.mp3'));
    
    arrayPontos = null;
    arrayPecas  = null;
    arrayOrdem  = null;
    peca = null;
    constY = null;
}

function onClick(){
    event.stopPropagation();
    event.preventDefault();
    
    
    var offsetX;
    var offsetY;
   	var child;
        
    offsetX = event.offsetX;
    offsetY = event.offsetY;
        
         
    for(var j=0;j < arrayAudioButtons.length; j++){
        child = arrayAudioButtons[j];
             
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                child.onClick();
            }
        }
    }  
        
    offsetX = null;
    offsetY = null;
   	child = null;   
}

function gameLoop(){
    update();
    draw();
}

function update(){
    
}
function draw(){
    dragAndDrop.renderiza();
    
}