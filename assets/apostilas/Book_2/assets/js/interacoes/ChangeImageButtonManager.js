function ChangeImageButtonManager(canvas,arrayImageButtons){
    this.canvas =canvas;

    this.context = this.canvas.getContext('2d');
   
    this.arrayImageButtons = arrayImageButtons;
    
    this.mouseUp;
    this.touchEnabled = 'ontouchstart' in document.documentElement
    if(this.touchEnabled){
        this.mouseUp = 'touchend';
    }else{
        this.mouseUp ='mouseup'
    }
    
    this.addListeners();
}
ChangeImageButtonManager.prototype.addListeners = function(){
   var _self = this;
   
   /**
   onClick
   */
   this.canvas.addEventListener(this.mouseUp,function(){
    event.stopPropagation();
    event.preventDefault();
    
    _self.onClick();
   },false);
}

ChangeImageButtonManager.prototype.onClick = function(){
       event.stopPropagation();
       event.preventDefault();
        var offsetX;
        var offsetY;
    	var child;
        
        if(this.touchEnabled){
            offsetX = event.changedTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
    	    offsetY = event.changedTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop;
        }else{
            offsetX = event.offsetX;
            offsetY = event.offsetY;
        }
         
        for(var j=0;j < this.arrayImageButtons.length; j++){
            child = this.arrayImageButtons[j];
             
            if(offsetX > child.currentRect.x && offsetX < child.currentRect.x + child.currentRect.width){
                if(offsetY > child.currentRect.y && offsetY < child.currentRect.y + child.currentRect.height){
                        child.onClick();
                }
            }
        }  
        
        offsetX = null;
        offsetY = null;
    	child = null;   
        
}

ChangeImageButtonManager.prototype.renderiza = function(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    
    for(var i =0 ; i < this.arrayImageButtons.length;i++){
 	  this.arrayImageButtons[i].renderiza(this.context);
    }
}