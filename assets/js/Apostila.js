/*
    @autor Ricardo Bugan
    
    Classe Apostila que irá conter os metodos para leitura das pagina,
    conterá um elemento Sidebar que servirá de menu.
    
*/
function Apostila(){
    //variavel que contem uma referencia direta para o Document, afim de melhorar performace.
    this.document = document;
    //variavel que contem um objeto do Tipo Sidebar, Servirá de menu
    this.sideBar;
    
    //Criando o Conteiner de nossa apostila. Ele exibirá as paginas no formato de Lista
    this.conteiner = this.document.createElement('ul');
    this.conteiner.id = "conteiner";
    
    //adicionando Conteiner ao DOM
    this.document.body.appendChild(this.conteiner);
}

/*
Metodo addSideBar recebe como parametro um objeto do tipo Sidebar e atribui a variavel sidebar da classe.
Adiciona tambem a Sidebar no DOM
*/
Apostila.prototype.addSideBar = function(sideBar){
    this.sideBar = sideBar;
    this.sideBar.parent = this;
    this.document.body.appendChild(this.sideBar.object);
}
/*
Metodo unloadContent recebe como parametro a URL para proxima pagina e o lado que a proxima pagina ira aparecer.
*/
Apostila.prototype.unloadContent = function(link,side){
    var self = this;
    this.conteiner.className = "out out-"+side;
    if(side == 'left'){
        side = 'right';
    }else{
        side = 'left';
    }
    
    /*limpando referencias a scripts ja que foram importados*/
    var headChildNodes = new Array();
    for(var j=11;j<25;j++){
        if(this.document.getElementsByTagName("head")[0].children[j] != undefined && this.document.getElementsByTagName("head")[0].children[j] != null){
           headChildNodes.push(this.document.getElementsByTagName("head")[0].children[j]);
            
        }
    }
    for(var k=0;k < headChildNodes.length;k++){
        this.document.getElementsByTagName("head")[0].removeChild(headChildNodes[k]);
    }
    
    for(var i=0;i<30;i++){
        //window.clearInterval(i);
    }
    /*
    Apos retirar a pagina da area de exibição, mostra inicia um Timer para chamar a função de Load
    */
    setTimeout(function(){
        self.loadContent(link,side);
    },1000);
}
/*
A função loadContent é chamada apos a função Unload e receber por parametro a URL da proxima pagina e o Lado que ela irá aparecer.
Uma uma chamada ajax para ler a proxima pagina e quando a pagina estiver pronta, ele chama a função addContent.
*/
Apostila.prototype.loadContent = function(link,side){
    var self = this;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status==200){
            self.addContent(xmlhttp.responseText,side);
            sef = null;
		}
	}
    
	xmlhttp.open("GET",link,true);
	xmlhttp.send();
}
/*
O metodo addContent recebe por parametro o Conteudo da pagina que será exibida e o lado que a pagina irá aparecer;
Ela adiciona o conteudo dentro da tag ul de id=Conteiner e ajusta o caminho relativo das imagens com o caminho do nosso leitor. 
*/
Apostila.prototype.addContent = function(content,side){

    this.conteiner.className = "hidden-"+side;
    
    //adicionando conteudo no conteiner da pagina
    this.conteiner.innerHTML = content;
    //percorre cada pagina da lista de exibição ajustando o caminho relativo de cada imagem 
    var lista = this.document.getElementsByTagName('li');
    for(var i=0;i<lista.length;i++){ 
        if(lista[i].className == 'page'){
           var imgs = lista[i].getElementsByTagName('img');
           for(var k=0;k<imgs.length;k++){
                imgs[k].setAttribute('src',Apostila.source + imgs[k].getAttribute('src'));
           }
        }        
    }
    
    /*
    Lendo Dinamicamente os Scripts
    */
    
    var scripts = this.document.getElementById('conteiner').getElementsByTagName('script');
    this.loadJs(scripts,0);
    
    
    /*
    alterando caminho dos arquivos css
    */
    var stylesheet = this.document.getElementById('conteiner').getElementsByTagName('link');
    for(var i=0;i<stylesheet.length;i++){
        stylesheet[i].href = Apostila.source +stylesheet[i].getAttribute('href');
    }
    /*
    Usamos a variavel _self para armazenar a referencia da prorpia classe antes de entrarmos na função anonima chamada pelo setTimeout
    Temos que armazenar a referencia dentro de uma variavel pois o JS utiliza a palavra chave this de forma dinamica, mudando o obj a que ela se refere
    dinamicamente, dependendo do contexto onde ela é inserida.
    */
    var _self = this;
    setTimeout(function(){
        //mudando o nome da classe do conteiner para que o CSS3 Transition cuide das transições entre as paginas
        this.conteiner.className = 'in';
        _self.setButtons();
    },400);
}

/*
O metodo setButtons atualiza a referencia dos botões que chamam a proxima pagina ou a anterior.
*/
Apostila.prototype.setButtons = function(){

    var menuList = this.document.getElementsByTagName("img");
    var item;
	var patternNext = /next/; //variavel do tipo RegExp ou expressão regular
	var patternPreview = /preview/; //variavel do tipo RegExp ou expressão regular
    
	var currentPage = this.document.getElementById("currentPage");
	
    for (var i =0;i< menuList.length;i++){
        item = menuList[i];
        if(item.className == "button pop-in sidebar-button"){
			if(patternNext.test(item.src)){
				item.setAttribute('link',Apostila.source +currentPage.getAttribute('linkNext')); //atualixa o caminho da proxima pagina, pegando o caminho relativo da apostila + o caminho das pastas internas
			}else if(patternPreview.test(item.src)){
				item.setAttribute('link',Apostila.source + currentPage.getAttribute('linkPreview'));  //atualixa o caminho da pagina anterior, pegando o caminho relativo da apostila + o caminho das pastas internas
			}
        }
    }
}
Apostila.prototype.loadJs = function(scripts,index){
    var _self = this;
    var script;
    if(scripts[index] != null && scripts[index] != undefined){
        script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "../assets/js/readerJS/" + scripts[index].getAttribute('src'); //buscando caminho relativo do src do script
        script.addEventListener('load',function(){
           _self.loadJs(scripts,index+1)
        },false);
        this.document.getElementsByTagName("head")[0].appendChild(script);
    }else{
        return;
    }
}
Apostila.source; //Variavel que guarda o caminho da pagina de exibição (index.php) até a pasta referente a apostila selecionada