function EventEmitter() {

    this.events = {};

}

EventEmitter.prototype.on = function(type, fn) {

    if(!type || !fn) return;

    this.events[type] = this.events[type] || [];
    this.events[type].push(fn);

}

EventEmitter.prototype.emit = function(type, data) {

    var fns = this.events[type];

    if(!fns || !fns.length) return;

    for(var i = 0; i < fns.length; i++) {
        fns[i](data);
    }

};

function Database(url) {
    
    //punkt 2 wywoluje konstruktor nadrzedny za pomoca .call przekazujac this .call(this)
    EventEmitter.call(this); //w tej metodzie mozemy zdefiniowac this

    this.url = url;

}

//to oznacza ze metoda Object.create zwroci obiekt, ktorego prototypem nie jest Object.prototype tylko Eventemmiter.prototype. Zatem nowy obiekt ma metody nalezace do EventEmitter. Wowczas sprawdzając łancuch dziedziczenia od Database, Database.prototype nastepnie EventEmitter.prototype.

//punkt 1 - napisuje prototyp
Database.prototype = Object.create(EventEmitter.prototype); 

//punkt 3 - przywracam konstruktor na oryginalny Database po powyzszym nadpisaniu jako Object.prototype.construktor
Database.prototype.constructor = Database;

Database.prototype.connect = function() {

    // fikcyjne podłączenie do bazy
    //aktualnie nie ma metody .emit na Database

    this.emit("connect", this.url);

}

Database.prototype.disconnect = function() {

    // fikcyjne zakończenie połączenia z bazą
     //aktualnie nie ma metody .emit na Database

    this.emit("disconnect", this.url);

}

// Użycie EventEmittera
var ev = new EventEmitter();

ev.on("hello", function(message) {
    console.log("Witaj " + message + "!");
});

ev.on("hello", function(message) {
    console.log("Siema " + message + ".");
});

ev.on("goodbye", function() {
    console.log("Do widzenia!");
});

ev.emit("hello", "Marek");
ev.emit("goodbye");
ev.emit("custom"); // nic się nie wydarzy

// DO ZROBIENIA!
// Docelowe użycie klasy Database
var db = new Database("db://localhost:3000"); // fikcyjny adres

db.on("connect", function(url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
});

db.on("disconnect", function(url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
});

db.connect();

// po 5 sekundach rozłączamy się
setTimeout(function() {
    db.disconnect();
}, 5000);