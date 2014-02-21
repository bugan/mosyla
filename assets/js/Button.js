/*
    @autor Ricardo Bugan
    
    A Classe Button cria e gerencia todos os botões/efeitos/callBacks que usaremos em nossa interface do leitor de Apostilas
    Esses botões são utilizados apenas fora das apostilas, nao devendo ser usando dentro das paginas;
*/

function Button(imgSrc,effect,callBack,parent,className){
    this.parent = parent;
    this.img = new Image();
    this.img.src = imgSrc;
    this.effect = effect;
    this.click = callBack;
    this.onloadEffect;
    this.link = 'none';
    this.img.className = "button "+ className;
    this.className = className;
    this.addListeners();   
}

/*
Adiciona o evento relativo aos efeitos graficos que o botão possui assim que é instanciado
*/
Button.prototype.addListeners = function(){
    var self =  this;
    this.img.addEventListener('click',this.click,false);
     
      
    if(this.effect != null && this.effect != undefined && this.effect != "none"){
        this.img.addEventListener('load',this.onloadEffect = function(){
            if(self.effect == "pop"){
                
                self.img.className = "button pop-in-start " + self.className;
                setTimeout(function(){
                    self.img.className = "button pop-in " + self.className;
                },300);
            }
        },false);
    }
}
