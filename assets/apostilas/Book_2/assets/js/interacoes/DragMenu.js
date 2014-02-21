function DragMenu(canvas,imgSrc,arrayButtons,imgWidth){
    /**/
    this.debugDraw = false;
    /**/
    this.touchEnabled = 'ontouchstart' in document.documentElement;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.criaAudio = 0;
    this.iniX=0;
    this.menuX =0;
    
    this.dragging =false;
    
    this.backgroundImage = new Image();
    if(Apostila.source != null && Apostila.source != undefined){
        this.backgroundImage.src = Apostila.source+imgSrc;
    }else{
        this.backgroundImage.src = imgSrc;
    }
    
    this.maxX = 10;
    if(imgWidth != null && imgWidth != undefined && imgWidth!=''){
        this.minX = -(imgWidth-this.canvas.width);
    
    }else{
       this.minX = -this.canvas.width; 
    }
    
    
    
   
    this.buttons = arrayButtons;
    
    this.currentDrag = false;
    
    if(this.touchEnabled){
		this.mouseStart = "touchstart";
		this.mouseMove = "touchmove";
		this.mouseEnd  = "touchend";
	}else{
		this.mouseStart = "mousedown";
		this.mouseMove = "mousemove";
		this.mouseEnd  = "mouseup";
	}
    
    this.addListeners();
}

DragMenu.prototype.addListeners = function(){
    var _self =this;
      
/**
*onMouseDown
*/
    this.canvas.addEventListener(this.mouseStart,function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onMouseStart(event);
    },false);
   
/**
*onMouseMove
*/  
    this.canvas.addEventListener( this.mouseMove, function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onMouseMove(event)
    
    },false);
    
    /**
*onMouseEnd
*/  
    this.canvas.addEventListener( this.mouseEnd, function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onMouseEnd(event)
    
    },false);
    
    /**
*onMouseDown
*/
    this.canvas.addEventListener(this.onMouseOut,function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onMouseOut(event);
    },false);	
    

}



DragMenu.prototype.onMouseStart = function(event){
    event.stopPropagation();
    event.preventDefault();
    var offsetX;
    var offsetY;
    
	var child;
    
    if(this.touchEnabled){
          offsetX = event.targetTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
				
    }else{
         offsetX = event.offsetX;
         
    }
    this.iniX= offsetX;
    this.dragging =true;
    
    offsetX = null;
    offsetY = null;
	child = null;
}

DragMenu.prototype.onMouseMove = function( event ){
    event.stopPropagation();
    event.preventDefault();
    
    if(this.dragging){
        var offsetX
        var offsetY;
        
        if(this.touchEnabled){
    	    offsetX = event.targetTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
            
        }else{
            offsetX = event.offsetX;
            
        }
       
       
        this.menuX += offsetX - this.iniX;
       
        if((offsetX - this.iniX)>2 || (offsetX - this.iniX)<-2  ){
            this.criaAudio = 1
        }else{
            this.criaAudio = 0;
        }
        
        if(this.menuX < this.minX){
            this.menuX = this.minX;
        }else if(this.menuX > this.maxX){
            this.menuX = this.maxX;
        }else{
            for(var j=0;j<this.buttons.length;j++){
                this.buttons[j].rect.x += offsetX - this.iniX;
            }
        }
        this.iniX = offsetX;
        console.log("offsetX " + offsetX);
        console.log("canvas.width " + canvas.offsetLeft);
        if(offsetX<= (0) || offsetX>= canvas.width*0.9 + canvas.offsetLeft){
            
            this.dragging = false;
        }
    }
}

DragMenu.prototype.onMouseEnd = function(){
    event.stopPropagation();
    event.preventDefault();
    var offsetX;
    var offsetY;
	var child;
    var mousePos = this.getMousePos(this.canvas, event);
   
    if(this.touchEnabled){
            offsetX = event.targetTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
            offsetY = event.targetTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop ;
    }else{
         offsetX = event.offsetX;
         offsetY = event.offsetY;
    }
    
    for(var j=0;j < this.buttons.length; j++){
        child = this.buttons[j];
        
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                
                if(this.criaAudio == 0){
                    child.onClick();
                }
                
            }
        }
    }
    this.dragging = false;
    offsetX = null;
    offsetY = null;
	child = null;  
    
}

DragMenu.prototype.renderiza= function(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.context.drawImage(this.backgroundImage,this.menuX,0);
    
    if(this.debugDraw){
        for(var j=0;j < this.buttons.length; j++){
            this.buttons[j].renderiza(this.context);
      
        
        }
    }
}

DragMenu.prototype.onMouseOut= function(){
     this.dragging = false;
}


DragMenu.prototype.getMousePos = function(canvas, evt) {
    
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}
