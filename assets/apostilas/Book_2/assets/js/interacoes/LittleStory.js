function LittleStory(canvas, arrayAudioButtons,arrayImagens){
    this.debug = false;
    
    this.opcao =-1;
    this.arrayImagens = arrayImagens;
    this.buttons = arrayAudioButtons;
    
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    
    this.imagePosition = new Point(100,120);
    
    this.touchEnabled = 'ontouchstart' in document.documentElement;
    
    if(this.touchEnabled){
		this.mouseEnd  = "touchend";
	}else{
		this.mouseEnd  = "mouseup";
	}
    
    this.addListeners();
}

LittleStory.prototype.addListeners = function(){
    var _self = this;
    
    this.canvas.addEventListener(this.mouseEnd ,function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onClick();
    },false);   
}

LittleStory.prototype.onClick = function(){
    event.stopPropagation();
    event.preventDefault();
    var offsetX;
   	var offsetY;
    var child;
    if(this.touchEnabled){
        offsetX = event.changedTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
        offsetY = event.changedTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop ;
    }else{
        offsetX = event.offsetX ;
        offsetY = event.offsetY ;
    }
        
    for(var i =0 ; i< this.buttons.length;i++){  
        child = this.buttons[i];    
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                  child.onClick();
                  this.opcao = i;              
            }
        }    
    }
    
    offsetX = null;
    offsetY = null;
    child = null;
    
}

LittleStory.prototype.renderiza = function(){
     this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    if(this.arrayImagens[this.opcao] != null && this.arrayImagens[this.opcao] != undefined){
        this.context.drawImage(this.arrayImagens[this.opcao],this.imagePosition.x,this.imagePosition.y);
    }
    if(this.debug){
        for(var j=0;j < this.buttons.length; j++){
            this.buttons[j].renderiza(this.context);
        }
    }
}