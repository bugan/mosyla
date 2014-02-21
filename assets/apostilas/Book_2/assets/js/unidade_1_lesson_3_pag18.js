var canvas = document.getElementById('pag18_ex4');
var audioComboBox;

setTimeout(init(),4500);

function init(){
    var arrayComboBoxElement= new Array();
    
    var rect;
    var constY = 30;
    var arrayAnswer;
    
    
    //1 ComboBox
    arrayAnswer = new Array();
        
        rect = new Rect(0,0,30,30);
        rect.x = 145;
        rect.y =172+(parseInt(0/2)*210);
        arrayAnswer.push(new Answer(rect,true));
        rect = new Rect(0,0,30,30);
        rect.x =283;
        rect.y =172+(parseInt(0/2)*210);
        arrayAnswer.push(new Answer(rect,false));
        
        arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(185+((0%2)*300),45+(parseInt(0/2)*210),0,0,200,120,"assets/audio/unidade_1/lesson_3/A_Beautifulgarden.mp3")));
        
    //2 ComboBox
    arrayAnswer = new Array();
        
        rect = new Rect(0,0,30,30);
        rect.x = 160+((1%2)*300);
        rect.y =172
        arrayAnswer.push(new Answer(rect,false));
        rect = new Rect(0,0,30,30);
        rect.x =283+((1%2)*300);
        rect.y =172
        arrayAnswer.push(new Answer(rect,true));
        
        arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(185+((1%2)*300),45+(parseInt(1/2)*210),0,0,200,120,"assets/audio/unidade_1/lesson_3/B_Smallhouse.mp3")));
        
    //3 ComboBox
    arrayAnswer = new Array();
        
        rect = new Rect(0,0,30,30);
        rect.x = 160+((2%2)*300);
        rect.y =172+(parseInt(2/2)*210);
        arrayAnswer.push(new Answer(rect,true));
        rect = new Rect(0,0,30,30);
        rect.x =283
        rect.y =172+(parseInt(2/2)*210);
        arrayAnswer.push(new Answer(rect,false));
        
        arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(185+((2%2)*300),45+(parseInt(2/2)*210),0,0,200,120,"assets/audio/unidade_1/lesson_3/C_Right.mp3")));
        
    //4 ComboBox
    arrayAnswer = new Array();
        
        rect = new Rect(0,0,30,30);
        rect.x = 160+((3%2)*300);
        rect.y =172+(parseInt(3/2)*210);
        arrayAnswer.push(new Answer(rect,false));
        rect = new Rect(0,0,30,30);
        rect.x =283+((3%2)*300);
        rect.y =172+(parseInt(3/2)*210);
        arrayAnswer.push(new Answer(rect,true));
        
        arrayComboBoxElement.push(new ComboBoxElement(arrayAnswer,new AudioButton(185+((3%2)*300),45+(parseInt(3/2)*210),0,0,200,120,"assets/audio/unidade_1/lesson_3/D_Openthedoor.mp3")));
        
        
   
    audioComboBox = new AudioComboBox(canvas,arrayComboBoxElement);
    
 setInterval(gameLoop,1000/60);   
}

function gameLoop(){
    update();
    draw();
}

function update(){
    
}

function draw(){
    audioComboBox.renderiza();
}