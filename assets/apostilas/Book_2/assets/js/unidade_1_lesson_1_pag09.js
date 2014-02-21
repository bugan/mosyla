var canvas = document.getElementById('pag09_ex2');
var dragAndDropEx;
setTimeout(init(),4500);

function init(){
    var arrayPontos = new Array();
    var arrayPecas = new Array();
    var peca;
    
    arrayPontos.push(new Point(550,209 - 15)); //Willy
    arrayPontos.push(new Point(248,221 - 13)); //Yuri
    arrayPontos.push(new Point(715,298 - 13)); //Kim
    arrayPontos.push(new Point(408,298 - 10)); //Candy
    
    
    for(var i=0;i<4;i++){
        peca = new Peca('a'+i,4+(i*85),0,85,81,'assets/audio/unidade_1/lesson_1/exercicio2_'+(i+1)+'.mp3')
        arrayPecas.push(peca);
        peca.rect.x = 110+ i*90;
        peca.rect.y = 0;
        
    }
    
    
    dragAndDropEx = new DragAndDrop(canvas,'assets/images/unidades/unidade_1/lesson_1/pag09_ex2.png',arrayPecas,arrayPontos);
    
    var interval = setInterval(gameLoop,1000/60);
    
    document.getElementById('conteiner').addEventListener('DOMSubtreeModified',function(){
        console.log(event);
        window.clearInterval(interval);
        dragAndDropEx.removeListeners();
        document.getElementById('conteiner').removeEventListener('DOMSubtreeModified',this);
        
    })
}

function gameLoop(){
    update();
    draw();
}
function update(){

}

function draw(){
    dragAndDropEx.renderiza();
}