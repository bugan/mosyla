/*
    @autor Ricardo Bugan
    
    Esse Script serve de entrada para a nossa apostila, ele recebe o parametro com o caminho relativo da pagina index.php ate a pasta da apostila selecionada
    para exibição.
    
    Cria uma instancia da classe apostila e uma instancia da classe sidebar, adicionando os botões para o menu
*/
var buttonBackward;
var lightbox;
var buttonOpen;
var sidebar;
var apostila;

function start(source){
    
    apostila = new Apostila();
    sidebar = new SideBar();

    //criando botões do menu.
    sidebar.addButon("../assets/images/default/next.png","pop",function(){
		sidebar.parent.unloadContent(event.target.getAttribute('link'),'left');
    });
    sidebar.addButon("../assets/images/default/preview.png","pop",function(){
        sidebar.parent.unloadContent(event.target.getAttribute('link'),'right'); 
    });
    sidebar.addButon("../assets/images/default/close.png","pop",function(event){
		window.location.assign('../index.php')
    });
    
    //chamando função da apostila que reseta o conteudo da pagina atual e le a pagina passa por parametro
    apostila.unloadContent(source + 'assets/html/menu.html',"left");
    //adicionando Sidebar na apostila
    apostila.addSideBar(sidebar);
    //setando source relativo da apostila
    Apostila.source = source;
}