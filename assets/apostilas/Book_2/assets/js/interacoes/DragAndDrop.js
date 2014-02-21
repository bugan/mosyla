function DragAndDrop(canvas,letrasImgSrc,arrayPecas,arrayPontos){
    //set to true to view debug points
    /*
    *******************
    */
    this.debug = false; 
    /*
    *******************
    */
    this.touchEnabled = 'ontouchstart' in document.documentElement;
    
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    
    this.letrasImg =  new Image();
    
    if(Apostila.source != null && Apostila.source != undefined){
        this.letrasImg.src = Apostila.source+letrasImgSrc ;
    }else{
        this.letrasImg.src = letrasImgSrc ;
    }
    this.dragAtual = 1;
    
    this.arrayPonto = arrayPontos;
    this.arrayPecas = arrayPecas;
    
    this.currentDrag = null;
    this.radius = 15;
    
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
    this.loadCanvas();
    this.addListeners();
    
    if(Apostila != undefined && Apostila != null){
        this.srcPadrao = Apostila.source;
    }else{
         this.srcPadrao = "";
    }
}

DragAndDrop.prototype.loadCanvas = function(){
    if(this.debug){
        var childPoint;
        for(var i =0 ; i < this.arrayPonto.length;i++){
            
            childPoint = this.arrayPonto[i];
            
            this.context.arc(childPoint.x, childPoint.y, this.radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = 'green';
           
        }
    }
    childPoint = null;
};

DragAndDrop.prototype.addListeners = function(){
  var _self = this;
/**
onCLick
*/
this.canvas.addEventListener('click',function(){
        event.stopPropagation();
        event.preventDefault();
        _self.onClick(event);
    },false);
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
DragAndDrop.prototype.onClick = function(event){
    event.stopPropagation();
    event.preventDefault();
    
    var offsetX;
    var offsetY;
	var child;
    
    
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    
     
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
    
    offsetX = null;
    offsetY = null;
	child = null;
};

DragAndDrop.prototype.onMouseStart = function(event){
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
                    if(navigator.userAgent == 'ANDROID') { window.cpjs.startDragAndDrop(); }
                    this.iniX= child.rect.x;
                    this.iniY= child.rect.y;
                    this.currentDrag = child;
                    this.dragAtual = j;
                    
                }
            }
        }
    }  
    
    offsetX = null;
    offsetY = null;
	child = null;
};

DragAndDrop.prototype.onMouseMove = function( event ){
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

    
DragAndDrop.prototype.onMouseEnd =  function( event ){
    event.stopPropagation();
    event.preventDefault();
    if(this.currentDrag != null && this.currentDrag != undefined){
        if(navigator.userAgent == 'ANDROID') { window.cpjs.stopDragAndDrop(); }
        var offsetX;
   	    var offsetY;
        var child;
        var id = 0;
        var encontrados = 0;
    	if(this.touchEnabled){
            offsetX = event.changedTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
    	    offsetY = event.changedTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop ;
        }else{
    	    offsetX = event.offsetX ;
            offsetY = event.offsetY ;
    	}
        for(var i =0 ; i< this.arrayPonto.length;i++){
            
             child = this.arrayPonto[i];
           
            if(offsetX > child.x-this.radius && offsetX < child.x + this.radius){
                if(offsetY > child.y-this.radius && offsetY < child.y + this.radius){
                        
                    if(child.id != null && child.id != undefined && child.id != "" ){
                        var idPonto = child.id;
                    }else{
                        var idPonto = this.arrayPonto.indexOf(child);
                    }
                    if(idPonto == this.arrayPecas.indexOf(this.currentDrag)){
                        this.currentDrag.rect.x = child.x - this.currentDrag.rect.width /2;
                        this.currentDrag.rect.y = child.y - this.currentDrag.rect.height/2;
                        this.currentDrag.isActivated = false; 
                        id=id+1;                       
                                            
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
            }else{ }
            if(offsetY <= child.y-this.radius || offsetY >= child.y + this.radius ||
             offsetX <= child.x-this.radius || offsetX >= child.x + this.radius){encontrados = encontrados+1;} 
        }
        if(this.currentDrag.isActivated){
            this.currentDrag.rect.y = this.iniY;
            this.currentDrag.rect.x = this.iniX;
        }
        if(encontrados!=this.arrayPonto.length){
            console.log(encontrados+" encontrados" );
            console.log(this.arrayPonto.length+" this.arrayPonto.length" );
           this.criaAudio(id);  
                    
        }
        
        this.currentDrag = null;
        child = null;
        offsetX = null;
        offsetY = null;
        id = null;
        encontrados = null;
        
    }
};

DragAndDrop.prototype.renderiza = function(){
    var child;
    
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    
    for(var i =0 ; i < this.arrayPecas.length;i++){
   	    child =  this.arrayPecas[i];
		this.context.drawImage(this.letrasImg,(child.rect.iniX + 0.5) | 0,(child.rect.iniY+ 0.5) | 0,child.rect.width,child.rect.height,child.rect.x,child.rect.y,child.rect.width,child.rect.height);	
    }
    if(this.debug){
        this.context.fill();
    }
    child =null;
}


DragAndDrop.prototype.criaAudio = function(id){
    console.log(id);
    if(id>=1){
        var mySound = new Sound('assets/audio/default/correto.mp3'); 
    }else{
        var mySound = new Sound('assets/audio/default/errado.mp3'); 
    }
    
    
    
}

