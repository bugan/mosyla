function AudioComboBox(canvas,arrayComboBoxElements){
    this.debugDraw = false;
    
    this.src;
   
    
    this.imgResposta = new Array();
    if(Apostila.source != null && Apostila.source != undefined){
        
        this.src = Apostila.source;
    }else{
        this.src = '';
    }
    
    this.imagemFinal = new Image();
    this.arrayImgs = new Array();
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    
    this.arrayComboBox = arrayComboBoxElements;
    
    this.addListeners();
    
    this.indiceImagens = new Array();
    
    
}

AudioComboBox.prototype.addListeners = function(){

var _self =this;    
/**
onClick
*/
this.canvas.addEventListener('click',function(){
    event.stopPropagation();
    event.preventDefault();
    _self.onClick(event);
},false)

}

AudioComboBox.prototype.onClick =function(){
    event.stopPropagation();
    event.preventDefault();
    var offsetX;
    var offsetY;
    var child;
    
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    
    for(var i=0;i<this.arrayComboBox.length;i++){
        child = this.arrayComboBox[i];
        if(offsetX > child.rect.x && offsetX < child.rect.x + child.rect.width){
            if(offsetY > child.rect.y && offsetY < child.rect.y + child.rect.height){
                
                if(child.onClick(offsetX,offsetY)){
                   
                   this.imgResposta.push(child.onClick(offsetX,offsetY));                    
                   this.arrayImgs.push(new Point(child.x,child.y));
                   this.indiceImagens.push(i);
                   
                }
                
            }
        }
    }
    
    offsetX = null;
    offsetY = null;
    child = null;
}

AudioComboBox.prototype.renderiza=function(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    if(this.debugDraw){
        for(var i=0;i<this.arrayComboBox.length;i++){
           
            this.arrayComboBox[i].renderiza(this.context);

        }
    }
    
    
    for(var i=0;i<this.arrayImgs.length;i++){
             
        if(this.imgResposta[i] == 1){   
            
            var imagem =  new Image();  
            imagem.src =  this.src + this.arrayComboBox[ this.indiceImagens[i]].imgCerto;             
            this.context.drawImage(imagem,this.arrayImgs[i].x  ,this.arrayImgs[i].y  );
            
        }else
        if(this.imgResposta[i] >= 1){
            
            
             var imagem =  new Image();  
            imagem.src =  this.src + this.arrayComboBox[this.indiceImagens[i]].imgErrado;  
            this.context.drawImage(imagem,this.arrayImgs[i].x  ,this.arrayImgs[i].y  );
            
            }
        //console.log(this.imagemFinal.width);
        }
}
