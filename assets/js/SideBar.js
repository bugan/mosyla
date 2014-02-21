/*
    @autor Ricardo Bugan
    
    A Classe SideBar Cria elementos graficos e possibilita a adi��o de bot�es para cria��o de menus e implementa��o de submenus
*/

function SideBar(){
    this.parent;
    this.object = document.createElement('ul');
    this.object.id = "side-bar";
    this.object.className="side-bar-close";
	this.arrayButtons = new Array();
    
    
}
/*
O metodo addButton recebe por parametro a imagem do botao, o tipo de efeito que ele possui (A ser implementado novos tipos de efeitos) e uma fun��o que ele chamar�
qunado for clicado

*/
SideBar.prototype.addButon = function(imgSrc,effect,callBack){
    var button = new Button(imgSrc,effect,callBack,this,'sidebar-button');
   
    var newItem = document.createElement('li');
    newItem.appendChild(button.img);
    this.object.appendChild(newItem);
    this.arrayButtons.push(button);
    newItem = null;
    button= null;
}
/*
O metodo change State altera o estado a sidebar para aberto ou fechado, aumentando seu tamanho quando  aberto e diminuindo quando fechado
Inutilizado por enquanto;
*/
SideBar.prototype.changeState = function(){
    if(this.object.className == "side-bar-open"){
        this.object.className ="side-bar-close";    
    }else{
        this.object.className ="side-bar-open";    
    }
}