function Answer(rect,right,audioCorretoSrc,audioErradoSrc){
    this.rect = rect;
    this.right = right;
    
    if(audioCorretoSrc != null && audioCorretoSrc != undefined && audioCorretoSrc != ''){
        this.audioCorreto =  new Sound(audioCorretoSrc,false);
    }else{
        this.audioCorreto =  new Sound('assets/audio/default/correto.mp3',false);
    }
    
    if(audioErradoSrc != null && audioErradoSrc != undefined && audioErradoSrc != ''){
        this.audioErrado =  new Sound(audioErradoSrc,false);
    }else{
        this.audioErrado =  new Sound('assets/audio/default/errado.mp3',false);
    }
    
    
}

Answer.prototype.onClick = function(){
    if(this.right){
        this.audioCorreto.play();
    }else{
        this.audioErrado.play();
    }
    
    return this.right;
}

Answer.prototype.renderiza =function(context){

            context.beginPath();
            context.lineWidth="4";
            context.strokeStyle="green";
            context.rect(this.rect.x,this.rect.y,this.rect.width,this.rect.height);
            context.stroke();
}
