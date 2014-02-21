function DrawClick(rect,source, posX, posY){
    this.rect = rect;
    this.debugDraw = false;
    this.image = new Image();
    this.image.src = source;
}

Answer.prototype.onClick = function(context){
    if(context != undefined && context != null && context !=""){
        context.drawImage();
    }else{console.error("Canvas indefinido");}
}

DrawClick.prototype.renderiza =function(context){
    if(this.debugDraw){
        context.beginPath();
        context.lineWidth="4";
        context.strokeStyle="green";
        context.rect(this.rect.x,this.rect.y,this.rect.width,this.rect.height);
        context.stroke();  
    }
            
}
                                                                                                 