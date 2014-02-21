function ComboBoxElement(arrayAnswers,audioButton, imgCerto, imgErrado){
    
    this.audioButton = audioButton;
    this.arrayAnswers = arrayAnswers;
    this.rect;
    
    this.criaRect();
    
    this.x;
    this.y;
    this.height;
    this.width;
    
    if(imgCerto != undefined && imgCerto != null && imgCerto != ""){
      this.imgCerto = imgCerto;  
    }else{this.imgCerto = "assets/images/default/certoerrado.png";}
    
     
    if(imgErrado != undefined && imgErrado != null && imgErrado != ""){
      this.imgErrado = imgErrado;  
    }else{this.imgErrado = "assets/images/default/errado.png";}
    
    console.log(this.imgCerto);
    console.log(this.imgErrado);
}

ComboBoxElement.prototype.onClick = function(offsetX,offsetY){
    for(var i=0;i<this.arrayAnswers.length;i++){
        
        child = this.arrayAnswers[i];
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                this.x = child.rect.x;
                this.y = child.rect.y;
                this.width = child.rect.width;
                this.height = child.rect.height;
                return child.onClick();
            }
        }
    }
    
     child = this.audioButton;
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
                if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                    child.onClick();
                }
        }
    child = null;
}

ComboBoxElement.prototype.criaRect = function(){
    var currentX;
    var currentY;
    var maxHeight;
    var maxWidth;
    var child;
    
    currentX = this.audioButton.rect.x;
    currentY = this.audioButton.rect.y;
    maxHeight = this.audioButton.rect.y + this.audioButton.rect.height;
    maxWidth = this.audioButton.rect.x + this.audioButton.rect.width;
    
    for(var i=0;i<this.arrayAnswers.length;i++){
        child = this.arrayAnswers[i];
        
        if(child.rect.x < currentX){
            currentX =child.rect.x;
        }
        if(child.rect.y < currentY){
            currentY =child.rect.y;
        }
        if(child.rect.x + child.rect.width > maxWidth){
            maxWidth = child.rect.x + child.rect.width;
        }
        if(child.rect.y + child.rect.height > maxHeight){
            maxHeight = child.rect.y + child.rect.height ;
        }
        
    }
    this.rect = new Rect(currentX,currentY,maxWidth,maxHeight);
    this.rect.x = currentX;
    this.rect.y = currentY;
    
    currentX = null;
    currentY= null;
    maxHeight= null;
    maxWidth= null;
    child= null;
    
}

ComboBoxElement.prototype.renderiza =function(context){
    this.audioButton.renderiza(context);
    for(var i=0;i<this.arrayAnswers.length;i++){
        this.arrayAnswers[i].renderiza(context);
    }
}



ComboBoxElement.prototype.getXdraw =function(){
    var x = this.x + this.width/2;
   console.log(x);
   return x; 
}

ComboBoxElement.prototype.getYdraw =function(i){
    var y = this.y + this.height/2; 
    console.log(y);
   return y;
}


