canvas =document.getElementById('pag21_ex2');
var imagesManager;
setInterval(init(),4500);

function init(){
    var arrayButtonImages = new Array();
    var rectAfter;
    var rectBefore;
    var image = new Image();
    image.src = Apostila.source + 'assets/images/unidades/unidade_1/lesson_4/pag21_ex2.png';
    
    for(var j=0;j<10;j++){
        rectAfter = new Rect(j*84,0,84,77);
        rectAfter.x = 200 + (84*(j%5));
        rectAfter.y = 50 + 80* parseInt(j/5);
        
        rectBefore = new Rect(j*84,77,84,77);
        rectBefore.x = 200 + (84*(j%5));
        rectBefore.y = 50 + 80* parseInt(j/5);
        
        arrayButtonImages.push(new ChangeImageButton(image,rectBefore, rectAfter,'assets/audio/unidade_1/lesson_4/pag21_ex2_'+(j+1)+'.mp3'));
    }
    
    imagesManager = new ChangeImageButtonManager(canvas, arrayButtonImages);
    
    
    
    setInterval(draw,1000/60);
    
}

function addAudio(source){
    var audio = new Sound(source);
}
function draw(){
    imagesManager.renderiza();
}