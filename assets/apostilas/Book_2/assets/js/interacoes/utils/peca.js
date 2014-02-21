function Peca(name,iniX,iniY,width,height,audioSrc) {
    this.name = name;
    this.audioButton;
	this.rect = new Rect(iniX,iniY,width,height);

    this.isActivated = true;
    this.audioSrc = audioSrc;
    if(audioSrc != undefined && audioSrc != null && audioSrc!= ''){
        this.criaAdioButton();
    }
}

Peca.prototype.criaAdioButton = function(){
    this.audioButton = new AudioButton(this.rect.x,this.rect.y,0,0,this.rect.height,this.rect.width,this.audioSrc);
}
Peca.prototype.onClick = function(){
    if(this.audioButton != null && this.audioButton != undefined){
        this.audioButton.onClick();
    }
}
