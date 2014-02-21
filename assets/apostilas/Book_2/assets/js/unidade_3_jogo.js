var jogoMemoria;

setTimeout(init(),500);

function init(){
    jogoMemoria = new MemoryGame("jogoMemoria_unidade3",Apostila.source + "assets/images/unidades/unidade_3/lesson_2/pag53_ex8.png");
    setInterval(draw,1000/60);    
}

function draw(){
    jogoMemoria.renderiza();
}