function AudioButton(x,y,iniX,iniY,width,height,audioSrc){
    this.debugDraw = true;
    this.rect = new Rect(0,0,width,height);
    this.rect.x = x;
    this.rect.y =  y;

    this.audioSrc = audioSrc;

}

AudioButton.prototype.onClick = function(){
    console.log(this.audioSrc)
    this.audioElement = new Sound(this.audioSrc,true);
}

AudioButton.prototype.renderiza = function(context){
    if(this.debugDraw){
            context.beginPath();
            context.lineWidth="4";
            context.strokeStyle="blue";
            context.rect(this.rect.x,this.rect.y,this.rect.width,this.rect.height);
            context.stroke();
    } 
}