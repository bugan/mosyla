/*
@autor Ricardo Bugan
Classe Media possui as variaveis e metodos basicos para todos os filhos
Parametros
    source do arquivo de media
    tipo(atualmente Videos ou Audio)
*/
function Media(source,type){
	if(source == null || source == undefined ){
		throw new Error('Media constructor called with '+arguments.length+' arguments, but expected exactly 2.');
	}
    this.src = source;
    if(type == 'video'){
       this.element = document.createElement(type);
    }else if(type == 'audio'){
		this.element = new Audio(this.src);
	}else{
		 throw new Error('Media constructor called with type argument as '+type+', but expected to be as "video" or "audio" strings.');
	}
    
};
//Metodo de enserramente da midia, CloseMedia é um metodo abstrato
Media.prototype.closeMedia = function(){
    
};