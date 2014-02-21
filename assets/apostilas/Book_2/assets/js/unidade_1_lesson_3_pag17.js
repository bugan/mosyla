var canvas = document.getElementById('pag17_ex2');
var dragAndDrop;

setTimeout(init(),4500);

function init(){
    var arrayPontos = new Array();
    var arrayPecas = new Array();
    var peca;
    var constY = 58;
    
    arrayPontos.push(new Point(447,442- constY));     // bedroom
    arrayPontos.push(new Point(474,123- constY));     // bathroom
    arrayPontos.push(new Point(280,431- constY));     //livingroom
    arrayPontos.push(new Point(290,113 - constY));    // kitchen
    arrayPontos.push(new Point(464,298- constY));     // garden
    
    
    
    for(var i=0;i<5;i++){
        peca = new Peca('a'+i,0,i*68,78,68,'assets/audio/unidade_1/lesson_3/exercicio1_'+i+'.mp3');
        peca.rect.x = 670;
        peca.rect.y = i*80+50;
        
        arrayPecas.push(peca);
    }
    
    dragAndDrop = new DragAndDrop(canvas, 'assets/images/unidades/unidade_1/lesson_3/pag17_2.png',arrayPecas,arrayPontos);
    
 setInterval(gameLoop,1000/60);   
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