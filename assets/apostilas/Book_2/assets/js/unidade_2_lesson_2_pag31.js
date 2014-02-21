var canvasBotao = document.getElementById('audioButton');
var dragAndDrop;
var audioButon;
setTimeout(init(),4500);

function init(){
    var canvasDrag = document.getElementById('pag31_ex2');
    var arrayPecas = new Array();
    var arrayPontos = new Array();
    var peca;
    var ponto;
    var rectBefore;
    var rectAfter;
    var changeImgButton;
    var arrayChangeImgButton = new Array();
    var img= new Image();
    img.src =Apostila.source+'assets/images/unidades/unidade_2/lesson_2/pag31_ex2-02.png'
    
    audioButon = new AudioButton(0,0,0,0,150,200,'assets/audio/unidade_2/lesson_2/CRAYON.mp3');
    canvasBotao.addEventListener('click',onclick,false);
    
    for(var i=0;i<11;i++){
        peca = new Peca('',58*i,0,50,50,'assets/audio/unidade_2/lesson_2/exercicio2_'+(i+1)+'.mp3');   
        peca.rect.x = 86*(i%3) + 125;
        peca.rect.y = 75 * parseInt(i/3) + 50;
        arrayPecas.push(peca);
    }
    for(var j=0;j<11;j++){
        rectBefore = new Rect(j*84.85,50,84.85,18);
        rectBefore.x = 86*(j%3) + 370;
        rectBefore.y = 86 * parseInt(j/3) + 90;
        
        rectAfter = new Rect(j*84.85,73,84.85,18);
        rectAfter.x = 86*(j%3) + 370;
        rectAfter.y = 86 * parseInt(j/3) + 90;
        
        changeImgButton = new ChangeImageButton(img,rectBefore,rectAfter);
        
        arrayChangeImgButton.push(changeImgButton);
    }

    dragAndDrop = new DragAndChange(canvasDrag, 'assets/images/unidades/unidade_2/lesson_2/pag31_ex2-02.png',arrayPecas,arrayChangeImgButton);
   
    setInterval(draw,100/60);
}


function onclick(event){
    event.stopPropagation();
    event.preventDefault();
   
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    

        child = audioButon;
         
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                    child.onClick();
             
            }
        }
    
}

function draw(){
    dragAndDrop.renderiza();
}