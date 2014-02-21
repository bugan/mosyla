function Video(source){
    //setando Obj Video que usaremos para exibir na tela;
    this.video = document.createElement('video');
    if(Apostila != undefined && Apostila != null){
        this.video.src = Apostila.source+source;
    }else{
        this.video.src = source;
    }
    this.video.id ='video';
    this.video.controls = true;
    
    
    //criando botao para fechar o video
    this.closeButton = new Image();
    if(Apostila.source != undefined && Apostila.source != null){
         this.closeButton.src = Apostila.source + 'assets/images/default/close.png';
    }else{
         this.closeButton.src = 'assets/images/default/close.png';
    }
    
    //criando LightBox que cobrirá o fundo da tela
    this.lightBox = document.createElement('div');
    this.lightBox.id = 'lightbox';
    
    this.addListeners();
    this.attachElements();
    this.video.play();
}

Video.prototype.addListeners = function(){
  var _self = this;
  this.closeButton.addEventListener('click',function(){
    event.stopPropagation();
    event.preventDefault();
    _self.close();
  },false);
}

Video.prototype.attachElements = function(){
    this.lightBox.appendChild(this.video);
    this.lightBox.appendChild(this.closeButton);
    
    document.body.appendChild(this.lightBox);  
}

Video.prototype.close = function(){
    document.body.removeChild(this.lightBox); 
}

