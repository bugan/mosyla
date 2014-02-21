/*
@autor Ricardo Bugan
A Classe interface cria novas iterfaces e verifica se a classe que as implementa possui os metodos que a interface exige
parametros
    Nome da inteface
    Array com metodos exigidos
*/
function Interface(name, methods) {
	if(arguments.length != 2) {
		throw new Error("Interface constructor called with " + arguments.length +
		"arguments, but expected exactly 2.");
	}
	this.name = name;
	this.methods = [];
	for(var i = 0, len = methods.length; i < len; i++) {
		if(typeof methods[i] !== 'string') {
			throw new Error("Interface constructor expects method names to be " 
			+ "passed in as a string.");
		}
		this.methods.push(methods[i]); 
	} 
};

// Static class method.
//EnsureImplements verifica se a classe possui os metodos necessarios
//parametros (classe que implementa a interface, obj interface)
Interface.ensureImplements = function(object) {
	if(arguments.length < 2) {
		throw new Error("Function Interface.ensureImplements called with " + 
		arguments.length + "arguments, but expected at least 2.");
	}
	for(var i = 1, len = arguments.length; i < len; i++) {
		var interface = arguments[i];
		if(interface.constructor !== Interface) {
				throw new Error("Function Interface.ensureImplements expects arguments" 
                + "two and above to be instances of Interface.");
			}
		for(var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
			var method = interface.methods[j];
			if(!object[method] || typeof object[method] !== 'function') {
				throw new Error("Function Interface.ensureImplements: object " 
				+ "does not implement the " + interface.name 
				+ " interface. Method " + method + " was not found.");
			}
		}
	} 
};