(function(){
	
	//definiuje konstruktor    
    function localDB(name) {
        
        //do nowo utworzonego obiektu - this - przypisuję parametr przekazany przy tworzeniu obiektu
		this._dbName = name;
    }
    
    localDB.prototype.save = function(key, obj){
        
        window.localStorage.setItem(this._dbName + "." + key, JSON.stringify(obj))
    }
    
	localDB.prototype.get = function(key) {
		
		return JSON.parse(window.localStorage.getItem(this._dbName + "." + key));
	}
	
	window.localDB = localDB;//Ponieważ cały skrypt zamknięty jest w funkcji oplatającej, do obiektu poza funkcją nalezy odwolac sie przez obiekt globalny. Dzięki temu przypisaniu w index.html możemy się odwołać do localDB a nie window.localDB
    
}());