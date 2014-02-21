/*
@autor Ricardo Bugan

Parametros:
    autoplay
    controls
    src
*/
function Sound(object){
    
    if(arguments.length != 1) {
		throw new Error("Sound constructor called with " + arguments.length +
		"arguments, but expected exactly 1.");
	}
	this.autoplay = object.autoplay ? object.autoplay : false;
	this.controls = object.controls ? object.controls : false;
	
    //Chamando construtor da classe pai
	Media.call(this,object.src,'audio');
	
    //log avisando que o parametro autoplay está falso
	this.autoplay?this.play(): console.log('[object] Sound source: "'+this.src+'" autoplay:'+ this.autoplay);
}
//Extendendo Classe Media
Utils.extend(Media,Sound);

//Sobreescrita do metodo play da classe pai
Sound.prototype.play = function(){
	this.element.load();
	this.element.play();
}