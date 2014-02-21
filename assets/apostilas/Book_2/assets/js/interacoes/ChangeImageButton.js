function ChangeImageButton(image,rectBefore,rectAfter,soundSrc,id){
    this.img = image;
    this.rectAfter = rectAfter;
    this.rectBefore = rectBefore;
    
    this.currentRect = this.rectBefore;
    this.audioButton;
    if(soundSrc != undefined && soundSrc != null && soundSrc != ''){
        this.criaAudioButton(soundSrc);
    }
    this.id=id;
}

ChangeImageButton.prototype.criaAudioButton = function(soundSrc){
    this.audioButton = new AudioButton(this.currentRect.x,this.currentRect.y,0,0,this.currentRect.height,this.currentRect.width,soundSrc);
}

ChangeImageButton.prototype.onClick = function(){
    if(this.audioButton != undefined && this.audioButton != null){
         this.audioButton.onClick();
    }
     this.currentRect = this.rectAfter;
}

ChangeImageButton.prototype.renderiza = function(context){
    context.drawImage(this.img,this.currentRect.iniX,this.currentRect.iniY,this.currentRect.width,this.currentRect.height,this.currentRect.x,this.currentRect.y,this.currentRect.width,this.currentRect.height); 
} 