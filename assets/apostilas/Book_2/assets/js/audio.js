/*
    @autor Ricardo Bugan
    
    Classe Sound, instancia um obj Audio e chama a função play automaticamente;
    Apos reproduzzido o som é automaticamente destarcado.
*/
function Sound(source,autoplay){ 
    
    if(Apostila.source != undefined && Apostila.source != null){
        this.source = Apostila.source+source;
    }else{
        this.source = source;
    }
    if(autoplay != null && autoplay != undefined){
        this.autoplay = autoplay;
    }else{
        this.autoplay = true;
    }
    this.audio = new Audio(this.source);
    this.addListeners();
    
    if(this.autoplay){
        this.play();    
    }
    
    
}
Sound.prototype.addListeners = function(){
    var _self = this;
    this.audio.addEventListener('ended',this.onEndSound,false);
}
Sound.prototype.play = function(){
    this.audio.load();
    this.audio.play();
}

Sound.prototype.onEndSound = function(){
    this.audio = null;
}