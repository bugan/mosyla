function MouseEvent(){}
MouseEvent.touchEnabled = 'ontouchstart' in document.documentElement;           //Variavel Estatica que verifica se o browser possui touchEvents
MouseEvent.MOUSE_START = MouseEvent.touchEnabled ? "touchstart" : "mousedown";  //Constante de eventos para o inicio do click ou toque
MouseEvent.MOUSE_MOVE = MouseEvent.touchEnabled ? "touchmove" : "mousemove";    //Constante de eventos para o movimento do mouse ou toque
MouseEvent.MOUSE_END = MouseEvent.touchEnabled ? "touchend" : "mouseup";        //Constante de eventos para o fim do click ou toque


//Parametro para a função de eventos (contextp, tipo de evento,alvo do evento, função de tratamento do evento,metodo de captura )
MouseEvent.addEvent= function(_self,type,element,handle,capturing){
        //Verifica se é encontrada a função dentro do contexto passado
		if(typeof _self[handle] !== 'function' || !_self[handle]){
			throw new Error('Function MouseEvent.addEvent:' + handle +" method was not found on object " + _self);
		}
        //adicionando o evento ao elemento
		element.addEventListener(type,function(){
			event.stopPropagation();
			event.preventDefault();
			
			var click;
			var offsetX;
			var offsetY;
			
            //Calculando local do click do no Canvas
			if(this.touchEnabled){
				offsetX = event.targetTouches[0].pageX  -  this.canvas.offsetLeft - this.canvas.offsetParent.offsetLeft;
				offsetY = event.targetTouches[0].pageY  -  this.canvas.offsetTop - this.canvas.offsetParent.offsetTop ;
					
			}else{
				offsetX = event.offsetX;
				offsetY = event.offsetY;
			}
			click = new Point(offsetX,offsetY);
			
			//Retornamos a posição do click dentro do canvas
			_self[handle](click);
            click = null;
            offsetX =null;
			offsetY = null;
		},capturing);
}