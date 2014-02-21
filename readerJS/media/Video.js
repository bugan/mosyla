/*
@autor Ricardo Bugan
Classe Video irá adicionar o video na tela assim que for chamada
*/
function Video(object){
	var _self = this;
	
	this.closeButton = new Image();
	this.closeButton.src = object.closeImg ? object.closeImg : 'assets/images/default/close.png';
	
	this.lightbox =  document.createElement('div');
	this.lightbox.id = 'lightbox';

	Media.call(this,object.src,'video');
	
	this.element.controls = true;
	
	
	//addListerner
	this.closeButton.addEventListener('click',function(){
		event.stopPropagation();
		event.preventDefault();
		_self.closeMedia();
	},false);
	
	//initialize Video
	this.lightbox.appendChild(this.element);
    this.lightbox.appendChild(this.closeButton);
    document.body.appendChild(this.lightbox);
}
Utils.extend(Media,Video);

Video.prototype.play = function(){
	this.element.load();
	this.element.play();
}

//@override
Video.prototype.closeMedia = function(){
	document.body.removeChild(this.lightbox);
	this.lightbox = null;
	this.element = null;
	this.closeButton = null;
}