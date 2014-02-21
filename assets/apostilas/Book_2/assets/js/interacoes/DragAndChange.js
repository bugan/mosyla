function DragAndChange(canvas,ImgSrc,arrayPecas,arrayChangeImgBnt){

    
    this.touchEnabled = 'ontouchstart' in document.documentElement;
    
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    
    this.letrasImg =  new Image();
    
    if(Apostila != null && Apostila != undefined){
        this.letrasImg.src = Apostila.source+ImgSrc ;
    }else{
        this.letrasImg.src = ImgSrc ;
    }
    
    
    this.arrayChangeImg = arrayChangeImgBnt;
    this.arrayPecas = arrayPecas;
    
    this.currentDrag = null;
    this.radius = 50;
    
    this.iniX=0;
    this.iniY=0;
    
    
    if(this.touchEnabled){
		this.mouseStart = "touchstart";
		this.mouseMove = "touchmove";
		this.mouseEnd  = "touchend";
	}else{
		this.mouseStart = "mousedown";
		this.mouseMove = "mousemove";
		this.mouseEnd  = "mouseup";
	}
    
    this.embaralharPecas();
    this.addListeners();
}




DragAndChange.prototype.embaralharPecas = function(){
    var child;
    var target;
    var aux;
    for(var i=0;i<this.arrayPecas.length;i++){
        child = this.arrayPecas[i];
        do{
            target = this.arrayPecas[parseInt(Math.random()*this.arrayPecas.length)];
        }while(target == undefined || target == null);
        
        aux = new Point(child.rect.x,child.rect.y)
        child.rect.x = target.rect.x;
        child.rect.y = target.rect.y;
        target.rect.x = aux.x;
        target.rect.y = aux.y;
    }
    
    child = null;
    target = null;
    aux = null;
}
DragAndChange.prototype.addListeners = function(){
  var _self = this;

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
*onMouseUp
*/
    this.canvas.addEventListener( this.mouseEnd,function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onMouseEnd(event);
            
    },false); 
};

DragAndChange.prototype.onMouseStart = function(event){
    event.stopPropagation();
    event.preventDefault();
    
    var offsetX;
    var offsetY;
	var child;
    
    if(this.touchEnabled){
          offsetX = event.targetTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
		  offsetY = event.targetTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop ;
				
    }else{
         offsetX = event.offsetX;
         offsetY = event.offsetY;
    }
     
    for(var j=0;j < this.arrayPecas.length; j++){
        child = this.arrayPecas[j];
         
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                if(child.isActivated){
                    this.iniX= child.rect.x;
                    this.iniY= child.rect.y;
                    this.currentDrag = child;
                }
            }
        }
    }  
    
    offsetX = null;
    offsetY = null;
	child = null;
};

DragAndChange.prototype.onMouseMove = function( event ){
    event.stopPropagation();
    event.preventDefault();
    if(this.currentDrag != null && this.currentDrag != undefined){
        var offsetX
        var offsetY;
        if(this.touchEnabled){
    	    offsetX = event.targetTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
            offsetY = event.targetTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop ;
        }else{
            offsetX = event.offsetX ;
    	    offsetY = event.offsetY ;
        }
        this.currentDrag.rect.x = offsetX - this.currentDrag.rect.width /2;
        this.currentDrag.rect.y = offsetY- this.currentDrag.rect.height /2;  
    }
};

    
DragAndChange.prototype.onMouseEnd =  function( event ){
    event.stopPropagation();
    event.preventDefault();
    if(this.currentDrag != null && this.currentDrag != undefined){}
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
        
        for(var i =0 ; i< this.arrayChangeImg.length;i++){
            
            child = this.arrayChangeImg[i];
            
            if(offsetX > child.currentRect.x   && offsetX < child.currentRect.x + child.currentRect.width){
                if(offsetY > child.currentRect.y && offsetY < child.currentRect.y + child.currentRect.height){
                    if(child.id != null && child.id != undefined && child.id != ""){
                        var idPonto = child.id;
                    }else{
                        var idPonto = this.arrayChangeImg.indexOf(child);
                    }
                   
                    if(idPonto == this.arrayPecas.indexOf(this.currentDrag)){
                      this.currentDrag.isActivated = false;
                        child.onClick();
                        
                        if(this.audioCorreto != null && this.audioCorreto != undefined){
                            this.audioCorreto.load();
                            this.audioCorreto.play();
                        }
                        
                    }else{
                        if(this.audioErro != null && this.audioErro != undefined){
                            this.audioErro.load();
                            this.audioErro.play();
                        }
                    }
                }
            }
            
        }
        
        if(this.currentDrag.isActivated){
            this.currentDrag.rect.y = this.iniY;
            this.currentDrag.rect.x = this.iniX;
        }
        
        for(var j=0;j < this.arrayPecas.length; j++){
            child = this.arrayPecas[j];
            if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
                if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                    if(child.isActivated){
                        child.onClick();
                    }
                }
            }
        }  
        
        this.currentDrag = null;
        child = null;
        offsetX = null;
        offsetY = null;
        
    
};

DragAndChange.prototype.renderiza = function(){
    var child;
    
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    
    for(var i =0 ; i < this.arrayPecas.length;i++){
   	    child =  this.arrayPecas[i];
        if(child.isActivated){
            this.context.drawImage(this.letrasImg,(child.rect.iniX + 0.5) | 0,(child.rect.iniY+ 0.5) | 0,child.rect.width,child.rect.height,child.rect.x,child.rect.y,child.rect.width,child.rect.height);	
        }
    }
    
    for(var j =0 ; j < this.arrayChangeImg.length;j++){
   	    this.arrayChangeImg[j].renderiza(this.context);
    }
    
    child =null;
}
