/*
Classe com funções basicas para nos ajudar na limpeza do codigo
*/
function Utils(){}

Utils.foreEach = function(array,handle){
    for(var i=0;i<array.length;i++){
        handle(array[i]);
    }
}
Utils.map = function(array,handle){
    var result = new Array();
    for(var i=0;i<array.length;i++){
        result.push(handle(array[i]));
    }
    return result;
}
Utils.extend = function(superClass, subClass){
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}