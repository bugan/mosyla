var canvas_04 = document.getElementById('pag10_ex4');
var canvas_06 = document.getElementById('pag10_ex6');

var dragAndDropEx;
var dragMenu

setTimeout(init(),4500);


function init(event){
    var arrayButtons = new Array();
    var arrayPontos = new Array();
    var arrayPecas = new Array();
    var peca;
    var button;
    
    for(var i=0;i<6;i++){
        button = new AudioButton(0+(i*177),0,i*177,0,177,235,'assets/audio/unidade_1/lesson_1/exercicio4_0'+i+'.mp3');
        arrayButtons.push(button);
    }
    dragMenu = new DragMenu(canvas_04,'assets/images/unidades/unidade_1/lesson_1/Pag10_ex4.png',arrayButtons);
    
    
    arrayPontos.push(new Point(206+73,269-47)); //morning
    arrayPontos.push(new Point(698-45,269-46)); //good bye
    arrayPontos.push(new Point(445+24,269-46)); //afternoon
    
    for(var i=0;i<3;i++){
        peca = new Peca('a'+i,(i*58.5),0,58.5,45,'assets/audio/unidade_1/lesson_1/exercicio6_'+i+'.mp3')
        arrayPecas.push(peca);
        peca.rect.x = 25;
        peca.rect.y = 85 + i*60;
    }

    dragAndDropEx = new DragAndDrop(canvas_06,'assets/images/unidades/unidade_1/lesson_1/pag10_ex6_01.png',arrayPecas,arrayPontos);
    
    
    button = null;
    setInterval(gameLoop,1000/60);
}

function gameLoop(){
    update();
    draw();
}
function update(){

}

function draw(){
    dragMenu.renderiza();
    dragAndDropEx.renderiza();
}