# Zadania na tydzień 2

## Z1) Polyfill metody repeat dla String

W standardzie EcmaScript 2015 pojawiła się nowa metoda dostępna na obiektach typu
String o nazwie repeat. Jej użycie wygląda następująco:

        “hej ”.repeat(3) // zwraca “hej hej hej ”
    
Metoda ta jest dostępna we wszystkich nowoczesnych przeglądarkach internetowych, ale
aby poćwiczyć rozszerzanie wbudowanych typów, utwórz jej polyfill. W kodzie sprawdź
najpierw czy taka metoda już w przeglądarce została zaimplementowana, a jeśli nie, to
dopisz własną funkcję, która będzie mogła być na dowolnym stringu wywołana w podany
wyżej sposób.

>Podpowiedź: rozszerzaj prototyp konstruktora String. Przy sprawdzeniu czy
taka metoda już istnieje, w nowoczesnych przeglądarkach otrzymasz odpowiedź
pozytywną. Jeśli zatem napiszesz odpowiedni warunek, to nie będzie można przetestować
Twojej metody. Z tego powodu, zamiast repeat możesz ją nazwać repeatt.


## Z2) Dziedziczenie z klasy EventEmitter

Przygotowany pod adresem http://pastebin.com/YEBncx0d kod zmodyfikuj tak, aby obiekty
tworzone z klasy _Database_ mogły korzystać z wszystkich metody klasy _EventEmitter_. Na
chwilę obecną, podany kod wygeneruje błąd, gdyż klasa _Database_ nie zawiera metody on
oraz emit. Skorzystaj z dziedziczenia prototypowego aby klasą nadrzędną dla _Database_
stała się klasa _EventEmitter_.

## Z3) Ajaxowy polyfill dla funkcji fetch

Napisz polyfill dla funkcji fetch (nie będziemy się tutaj trzymać dokładnie tego, w jaki
sposób ona działa, stworzysz jedynie prostą jej wersję). Wykorzystaj obiekt
XMLHttpRequest w ten sposób, aby docelowo korzystanie z funkcji fetch wyglądało
następująco:

        fetch("url", function(data) {
        console.log("Sukces");
        console.log(data);
        }, function(err) {
        console.log("Wystąpił błąd!");
        console.log(err);
        });
    
a zatem jako pierwszy argument przekazujemy adres URL (wyślij pod niego zapytanie
"GET"), jako drugi funkcję, którą należy wykonać jeśli wszystko się powiedzie (przekaż jej
pobrane dane), a jako trzeci funkcję, która wykona się na wypadek błędu (przekaż jej
obiekt z błędem lub komunikat tekstowy). W nowoczesnych przeglądarkach istnieje już
funkcja fetch, a zatem aby jej nie nadpisywać, możesz nadać jej inną nazwę. Jako adres
URL, z którego pobierane bedą dane, możesz wykorzytać https://
jsonplaceholder.typicode.com/user

## Z4) Prywatność za pomocą domknięcia

Dokończ pisanie przygotowanego pod adresem http://pastebin.com/aNKyCt3N kodu tak,
aby nie generował błędów. Stwórz metody get oraz set nie korzystając z prototypów. Istotą
działania funkcji createData jest zwrócenie obiektu, który zawierał będzie metody get oraz
set. Metoda get powinna przyjmować klucz, np. “name” oraz zwracać wartość np.
data[“name”], natomiast metoda set powinna przyjmować klucz i wartość, sprawdzać czy
oba te parametry zostały podane, a następnie powinna ustawiać np. data[“name”] =
“Janek”.

## Z5) Wrapper Toggler dla elementów z drzewa DOM

Do przygotowanego pod adresem http://pastebin.com/hUK5tnh3 kodu dodaj konstruktor
(klasę) o nazwie Toggler. Przy tworzeniu nowych jej instancji z użyciem słowa kluczowego
new (jak możesz zobaczyć w przygotowanym kodzie) przekazywać będziemy selektor. Za
jego pomocą należy znaleźć na stronie odpowiedni element (skorzystaj z metody
document.querySelector) i zapisać go w nowo stworzonym obiekcie. Następnie dodaj 3
metody. Pierwsza z nich o nazwie getElem powinna po prostu zwrócić znaleziony
wcześniej element. Metoda show i hide powinny kolejno pokazywać i ukrywać element.
Jeśli wszystko wykonasz poprawnie, kod który został już napisany powinien działać bez
żadnych modyfikacji. Zauważ, że do elementu o identyfikatorze button zostało przypisane
zdarzenie kliknięcia. Taki element musisz wstawić na stronę, podobnie jak i element,
którego selektor zostanie przekazany przy tworzeniu nowego obiektu klasy Toggler.