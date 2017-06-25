(function ($) {

        'use strict';

        var myData = $("#data"),
            items = [],
            templateCode = $("#template").html(), // Pobieram HTML z szablonem
            template = Handlebars.compile(templateCode), //Kompiluje szablon
            DATA_URL = "https://jsonplaceholder.typicode.com/users";


        function showUsers(data) {



            var output = "";
            $.each(data, function (key, val) {
                output += template(val);
                
            });

            $("#data").append($("<ul>").html(output));

       

    }

    $("#button").on("click", function () {



        $.getJSON(DATA_URL)
            .done(function (data) {

                showUsers(data);

            })
            .fail(function () {
                alert("cos poszlo nie tak");
            });

    });

}(jQuery))