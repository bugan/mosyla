var jogoMemoria;

setTimeout(init(),500);

function init(){
    jogoMemoria = new MemoryGame("jogoMemoria",Apostila.source + "assets/images/unidades/unidade_1/jogo/U1_L4_E3_1-01.png");
    setInterval(draw,1000/60);    
}

function draw(){
    jogoMemoria.renderiza();
}