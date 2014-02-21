var littleStory;
setTimeout(init(),1500);

function init(){
    var canvas = document.getElementById('pag52_ex6');
    var arrayImg = new Array();
    var arrayAudioBnt = new Array();
    var image;
    var audioBnt;
    var audioBaseSrc;    
    for(var i=1; i <7;i++){
        image = new Image();
        if(Apostila != null && Apostila != undefined){
             image.src = Apostila.source + "assets/images/unidades/unidade_3/lesson_2/pag52_"+i+".png";
        }else{
             image.src = "assets/images/unidades/unidade_3/lesson_2/pag52_"+i+".png";
        }
        audioBaseSrc = "assets/audio/unidade_3/lesson_2/exercicio6_";
        arrayImg.push(image);
        audioBnt = new AudioButton(i*120-90,400,0,0,120,100,audioBaseSrc+i+".mp3");
        arrayAudioBnt.push(audioBnt);
    }
    
    littleStory = new LittleStory(canvas,arrayAudioBnt,arrayImg)
    
    setInterval(draw,1000/60);
}

function draw(){
    littleStory.renderiza();
}