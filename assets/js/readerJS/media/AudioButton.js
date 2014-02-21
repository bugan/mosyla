/*
@autor Ricardo Bugan
Classe Audio button servirá como um manager dos audios que são disparados por eventos de toque.


rectangle: Contem as informações para a criação de um rect como position/width/height
imageSrc : source da imagem do botão
*/

function AudioButton(object){
    if(arguments.length != 1) {
		throw new Error("AudioButton constructor called with " + arguments.length +
		" arguments, but expected exactly 1.");
	}
    
    //implementando a interface displayable e a interface debuglable
	Interface.ensureImplements(this, APIInterfaces.displayable);	
	Interface.ensureImplements(this, APIInterfaces.debugable);
    //Chamada ao construtor do pai da Classe
	Sound.call(this,object);
	
    //Criando RECT para verificação do click
	if(object.rectangle){
		this.width =  object.rectangle.width || 0;
		this.height = object.rectangle.height || 0;
		this.position = new Point(object.rectangle.x || 0,object.rectangle.y || 0);
		this.initialPosition = object.rectangle.initialPosition ? object.rectangle.initialPosition : null;
	}else{
		throw new Error("AudioButton: Constructor called without rectangle property.");
	}
    //Setando imagem do Obj
	if(object.imageSrc){
		this.img = new Image();
		this.img.src = object.imageSrc;
	}
	
}

//extendendo a Classe audio
Utils.extend(Sound,AudioButton);

//fun��o de render para imagens
AudioButton.prototype.draw = function(context){
    
    //Verificando se a imagem existe
	if(this.img != null && this.img != undefined){
		if(this.initialPosition != null && this.initialPosition != undefined){
            context.drawImage(this.img,this.initialPosition.x,this.initialPosition.y,this.getWidth(),this.getHeight(),this.getPosition().x,this.getPosition().y,this.getWidth(),this.getHeight());	
		}else{
			context.drawImage(this.img,this.getPosition().x,this.getPosition().y);
		}
	}else{
		throw new Error('AudioButton: draw function called without an image defined');
	}
}

//debug da posi��o do bot�o
AudioButton.prototype.debugDraw = function(context){
	context.beginPath();
	context.lineWidth = this.getLineWidth();
    context.strokeStyle = this.getLineColor();
	context.strokeRect(this.getPosition().x,this.getPosition().y,this.getWidth(),this.getHeight());
}

//verificando click
AudioButton.prototype.onClick = function(position){
    //Verificando Colisão do click com o rect
    if(Collision.hitTestPoint(this,position)){
        //iniciando áudio
        this.play();
    }
}

//fun��es auxiliares
AudioButton.prototype.getLineColor = function(){
	return Flags.lineColor.audioButton;
}
AudioButton.prototype.getLineWidth = function(){
	return Flags.lineWidth.audioButton;
}
AudioButton.prototype.verifyDebug = function(){
	return Flags.debug;
}
AudioButton.prototype.getPosition = function(){
	return this.position;
}
AudioButton.prototype.getWidth = function(){
	return this.width;
}
AudioButton.prototype.getHeight = function(){
	return this.height;
}
