(function () {

    'use strict';

    var btn = document.querySelector("#btn"),
        output = document.querySelector("#output");

    btn.addEventListener("click", function (e) {


        function fecz(url, success, fail) {

            var xhr = new XMLHttpRequest(); //tworze nowy obiekt - typowy dla DOM a nie JS.

            xhr.open("GET", url, true); //zaczynamy od otwarcia zapytania; 

            xhr.addEventListener("load", function () {

                if (xhr.status >= 200 && xhr.status < 400) {

                    success(xhr.response);

                } else {

                    fail(new Error("Wystąpił błąd. Kod statusu http to " + xhr.status));
                }

            });

            xhr.addEventListener("error", function () {

                //wykonuje sie gdy jest blad w komunkacji sieciowej

              

                if (typeof fail === "function") {
                    fail(new Error("Wystąpił problem z komunikacją sieciową"));
                }

            });

            xhr.send(); //przegladarka wysle zapytanie http - na koncu
        }
       
        
        fecz("https://jsonplaceholder.typicode.com/users", function (data) {

           

            output.textContent = data;


        }, function (err) {
           
            console.log(err.message);
        }, false);


    });

}());