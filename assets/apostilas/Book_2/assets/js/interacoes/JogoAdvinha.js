function JogoAdvinha(canvas, imgSrc , arrayRects){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.arrayRects = arrayRects
    this.img = new Image();
    if(Apostila != undefined && Apostila != null){
        this.img.src = Apostila.source + imgSrc;
    }else{
        this.img.src = imgSrc;
    }
    this.opcao=0;
    this.addListeners();
    this.arrayImagens = new Array();
    this.render = false;
}

JogoAdvinha.prototype.addListeners = function(){
    var _self = this;
    this.canvas.addEventListener('click',function(){
        event.preventDefault();
        event.stopPropagation();
        _self.onClick();
    },false)
}

JogoAdvinha.prototype.onClick = function(){
    event.preventDefault();
    event.stopPropagation();
    this.aux = 0;
    this.opcao = parseInt(Math.random()* this.arrayRects.length);
    this.render = true;
    
}

JogoAdvinha.prototype.update = function(){
   this.aux++;
   if(this.aux>300){
        this.render = false;
   }  
}
JogoAdvinha.prototype.renderiza = function(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    if(this.render){
        var child = this.arrayRects[this.opcao];
        this.context.drawImage(this.img,(child.iniX + 0.5) | 0,(child.iniY+ 0.5) | 0,child.width,child.height,child.x,0,child.width,child.height);
    }    
}