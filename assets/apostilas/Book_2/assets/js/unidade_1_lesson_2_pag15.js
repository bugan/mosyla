var canvas =document.getElementById('pag15_ex6');
var audioComboBox;

setTimeout(init(),4500);

function init(){
    var arrayComboBoxElement= new Array();
    
    var rect;
    var constY = 30;
    //1 ComboBox
    var arrayAnswer = new Array();
    rect = new Rect(0,0,30,30);
    rect.x = 168;
    rect.y =115 +constY;
    arrayAnswer.push(new Answer(rect,true));
    rect = new Rect(0,0,30,30);
    rect.x = 168;
    rect.y =145+constY;
    arrayAnswer.push(new Answer(rect,false));
    
    arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(160,20,0,0,100,100,"assets/audio/unidade_1/lesson_2/15_hegrandpa_1.mp3")));
    
    //2 ComboBox
    var arrayAnswer = new Array();
    rect = new Rect(0,0,30,30);
    rect.x = 309;
    rect.y =158+constY;
    arrayAnswer.push(new Answer(rect,false));
    rect = new Rect(0,0,30,30);
    rect.x = 309;
    rect.y =188+constY;
    arrayAnswer.push(new Answer(rect,true));
    
     arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(290,60,0,0,100,100,"assets/audio/unidade_1/lesson_2/15_sheteacher_2.mp3")));
    
    //3 ComboBox
    var arrayAnswer = new Array();
    rect = new Rect(0,0,30,30);
    rect.x = 437;
    rect.y =115+constY;
    arrayAnswer.push(new Answer(rect,false));
    rect = new Rect(0,0,30,30);
    rect.x = 437;
    rect.y =145+constY;
    arrayAnswer.push(new Answer(rect,true));
    
     arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(425,20,0,0,100,100,"assets/audio/unidade_1/lesson_2/15_shemother_3.mp3")));
    
    //4 ComboBox
    var arrayAnswer = new Array();
    rect = new Rect(0,0,30,30);
    rect.x = 568;
    rect.y =158+constY;
    arrayAnswer.push(new Answer(rect,true));
    rect = new Rect(0,0,30,30);
    rect.x = 568;
    rect.y =188+constY;
    arrayAnswer.push(new Answer(rect,false));
    
    arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(555,60,0,0,100,100,"assets/audio/unidade_1/lesson_2/15_hedaddy_4.mp3")));
    
    
    audioComboBox = new AudioComboBox(canvas,arrayComboBoxElement);
    
    setInterval(gameLoop,1000/60);
}

function gameLoop(){
    renderiza();
}
function renderiza(){
    audioComboBox.renderiza();
}