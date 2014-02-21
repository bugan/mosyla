var jogo;
var canvas = document.getElementById('jogoAdvinha')
setInterval(init(),2000);

function init(){
    var arrayRects = new Array();
    var rect;
    
    for(var i =0 ;i<9;i++){
        rect = new Rect(i*338,0,338,420);
        rect.x = 200;
        arrayRects.push(rect);
    }
    jogo = new JogoAdvinha(canvas,'assets/images/unidades/unidade_2/lesson_1/pag29_ex8.png',arrayRects);
    setInterval(gameLoop,1000/60);
}

function gameLoop(){
    update();
    draw();
}
function update(){
    jogo.update();
}
function draw(){
    jogo.renderiza();
}