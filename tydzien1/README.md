# Zadania na tydzień 1
1. GIT i GitHub

Utwórz swoje pierwsze repozytorium kodu na GitHubie. To od Ciebie zależy, co w nim
umieścisz. Pamiętaj jednak, aby dokonać w swoim przykładowym projekcie kilku zmian, a
następnie commitów. Wszystko to wyślij do zdalnego repozytorium na GitHubie, a jako
rozwiązanie zadania podaj do niego link. UWAGA! Rozwiązania pozostałych zadań umieść
również na GitHubie, dla każdego tworząc nowe repozytorium.

2. Selektory w jQuery

Podaj przykłady selektorów, które pozwolą znaleźć na stronie następujące elementy:
- wszystkie elementy &lt;div&gt;, posiadające zarówno klasę “grid” oraz klasę “grid-12”.
- wszystkie elementy &lt;a&gt;, których atrybut “href" zaczyna się na “http”, znajdujące się w
elemencie o klasie “nav”
- wszystkie elementy &lt;input&gt;, których typ to “radio” lub “checkbox” oraz dodatkowo nie
są aktualnie zaznaczone (checked).
- wyłącznie pierwszy element &lt;p&gt;, który jest pusty (nie zawiera dzieci) oraz znajduje się w
elemencie &lt;div&gt; z identyfikatorem “text”
- wszystkie elementy z klasą “pagination-item”, które nie są elementem &lt;span&gt;

3. Pokazywanie elementów i animacje

Stwórz kontener z przykładową nawigacją, który domyślnie nie będzie widoczny. Może on
znajdować się na samej górze strony lub w sidebarze. Następnie umieść na stronie
przycisk typu “hamburger menu”, po kliknięciu którego wysunie się wcześniej ukryte
menu. Animacja, jaką zastosujesz, zależy od Ciebie. Ponowne kliknięcie przycisku powinno
chować nawigację.

4. Dynamiczne tworzenie elementów

Stwórz aplikację, która zawierać będzie prosty formularz z wyłącznie jednym polem
&lt;input&gt;, a także przyciskiem &lt;button&gt;. Napisz kod tak, aby po wpisaniu informacji do pola
i po wciśnięciu przycisku, wstawić wpisane informacje do nowego elementu &lt;li&gt;, a ten
element do wcześniej wstawionego elementu &lt;ul&gt;. W ten sposób, za każdym razem, gdy
zostanie wpisane np. jakieś imię, pojawi się ono na stronie. Dodatkowo możesz (nie
musisz) zadbać o to, by jeśli nic nie zostało wpisane do pola, nie wstawiać na stronę
pustego elementu &lt;li&gt;.

5. Praca z AJAX i JSON

Stwórz aplikację, która pozwoli po kliknięciu wybranego przycisku, np. “Załaduj”, pobrać
AJAXem dane typu JSON i wyświetlić je na stronie. Adres, pod który wyślesz zapytanie z
użyciem jQuery to https://jsonplaceholder.typicode.com/users
Otrzymane dane wyświetl na stronie w formie nieuporządkowanej listy &lt;ul&gt;, a każdego
użytkownika w tagu &lt;li&gt;. Z podanych danych wyłuskaj name, username, email oraz
phone. Sformatuj je według własnego uznania.
