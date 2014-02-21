var jogo;
var canvas = document.getElementById('jogoAdvinha')
setInterval(init(),2000);

function init(){
    var arrayRects = new Array();
    var rect;
    
    for(var i =0 ;i<17;i++){
        rect = new Rect(173*i,0,173,250);
        rect.x = 280;
        rect.y = 45;
        arrayRects.push(rect);
    }
    jogo = new JogoAdvinha(canvas,'assets/images/unidades/unidade_4/lesson_4/pag83_ex8.png',arrayRects);
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