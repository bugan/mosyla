/*
@autor Ricardo Bugan
Classe Collision possuirá os metodos de detecção de colisão, que utilizaremos no framework
*/
function Collision(){}

//Metodo de detecção de colisão entre um obj e um ponto
Collision.hitTestPoint = function(obj,point){
    //Verificamos se temos mais de 2 parametros na chamada do metodo e lançamos um erro
    if(arguments.length < 2) {
		throw new Error("Function Collision.hitTestPoint called with " + 
		arguments.length + "arguments, but expected 2.");
	}
    
    //verificamos se o obj possui a interfazer Displayable
    Interface.ensureImplements(obj,APIInterfaces.displayable);
    
    var position;
    var width;
    var height;
    
    position = obj.getPosition();
    width = obj.getWidth();
    height = obj.getHeight();
    
    //verificação por box collide
    if(point.x > position.x && point.x < position.x + width){
            if(point.y > position.y && point.y < position.y + height){
                position = null;
                width = null;
                height = null;
                return true;
            }
    }
    position = null;
    width = null;
    height = null;
    
    return false;
}

//hitTestObject verifica a colisão entre dois objetos
Collision.hitTestObject = function(obj,other){
    if(arguments.length < 2) {
		throw new Error("Function Collision.hitTestPoint called with " + 
		arguments.length + "arguments, but expected 2.");
	}
    //Verificamos se os dois possuem a interface displayable
    Interface.ensureImplements(obj,APIInterfaces.displayable);
    Interface.ensureImplements(other,APIInterfaces.displayable);
    
    var position,positionOther;
    var width,widthOther;
    var height,heightOther;
    
    position = obj.getPosition();
    width = obj.getWidth();
    height = obj.getHeight();
    
    positionOther = other.getPosition();
    widthOther = other.getWidth();
    heightOther = other.getHeight();
    
    //verificação por boxCollide
    if(positionOther.x + widthOther >= position.x && position.x + width > positionOther.x || position.x + widthOther >= positionOther.x && positionOther.x + width > position.x){
            if(positionOther.y + heightOther >= position.y && position.y + height > positionOther.y || position.y + heightOther >= positionOther.y && positionOther.y + height > position.y){
                
                positionOther = null;
                widthOther = null;
                heightOther = null;
                position = null;
                width = null;
                height = null;
                
                return true;
            }
    }
    
    positionOther = null;
    widthOther = null;
    heightOther = null;
    position = null;
    width = null;
    height = null;
    
    return false;
}