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