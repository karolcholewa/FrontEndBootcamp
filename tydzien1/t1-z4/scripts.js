//Chce przechwycic tekst, ktory zostal wpisany i wstawic do listy w postaci elementu <li>. Dodatkowo podstawowa walidacja czy jest cos wpisane lub czy nie sa spacje wpisane (biale znaki)


(function ($) {

    "use strict";

    var form = $("#add-user"),
        text = form.find("input[name='user']"),
        list = $("#list");

    form.on("submit", function (e) {

        e.preventDefault(); //formularz nie bedzie sie wysylal domyslnie

        var user = text.val();
        $.trim(user); //pozbywam sie bialych znakow z przodu i z tylu. Mozna tez na stringu korzystajac z natywnego JS: user.trim(); 

        if (user === "") {

            text.addClass("invalid");
            return;
        }

        text.removeClass("invalid").val(""); //usuwam klase oraz resetuje zawartosc - w przypadku gdyby porzednio byla pusta wart
        $("<li>").text(user).appendTo(list);
    });
}(jQuery));