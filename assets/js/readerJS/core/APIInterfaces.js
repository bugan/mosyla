/*
@autor Ricardo Bugan

APIInterfaces é o conjunto de interfacces que utilizaremos no framework
*/
function APIInterfaces(){}
/*interface displayable nos fornecerá os metodos para renderizarmos no canvas nossas imagens
    inplementada nas seguintes classes
        AudioButton
        Circle
        Path
        Picture
*/
APIInterfaces.displayable = new Interface('displayable',['draw','getPosition','getWidth','getHeight']);

/*interface debuggable nos fornecerá os metodos necessarios para localizarmos o item na tela.
     inplementada nas seguintes classes
            AudioButton
            Answer
            DragAndDrop
            Picture
*/
APIInterfaces.debugable = new Interface('debugable',['debugDraw','getLineColor','getLineWidth','verifyDebug']);