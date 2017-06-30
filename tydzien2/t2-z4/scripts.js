//Chcemy stworzyc pozorną prywatność poprzez ograniczenie dostepu do wlasciwosci. Zatem niech funkcja createData ma metody get i set. Jako funkcja ogranicza zakres zmiennych wewnątrz samej siebie - wiec jezeli nic nie zwroci, te dane będą niejako 'prywatne'. Ale bedziemy zwracac nowy obiekt ktory zawiera metody SET i GET. 
//Jezeli nie zwracamy obiektu, to Garbage Collector go usunie. Jednak jezeli zwracamy metody, obiekt nie bedzie usuwany. Funkcje mają dostęp do zmiennych tam gdzie byly zdefiniowane. Zatem metody (funkcje) wewnatrz funkcji createData mają dostęp do obiektu data wewnątrz siebie. Na zewnątrz nie ma dostepu do obiektu data. ALE dzieki zwracanym metoda, ktore de fakto maja dostep do obiektu data i odwoluja sie do wartosci data - mamy dostep do data - to sie nazywa Closure. Garbage collector w tym przypadku nie usuwa obiektu po wykonaniu sie tej funkcji.

function createData(){
    
    var data = {};
    
    return {
        
        set: function(key, value) {
            //poniewaz 0 jest wartoscia false to trzeba sprawdzic czy wartosc podana nie jest undefined...wowczas warunek bedzie prawdziwy rowniez dla 0
            
            if(key !==undefined && value !==undefined){
            data[key] = value;
            }
            
        },
    
        get: function(key){
            
            return data[key];
            
            
        }
    }
    
    
}

var data = createData();
data.set("name", "Karol");
console.log(data.get("name"));