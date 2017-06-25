(function ($) {

    'use strict';

    var myData = $("#data"),
        items = [],
        template = $("#template").html(),
        DATA_URL = "https://jsonplaceholder.typicode.com/users";


    function showUsers(data) {

        var output = "";

        $.each(data, function (key, val) {

            output += Mustache.render(template, val)

        });
        
        $("#data").append( $("<ul>").html(output));
        
        console.log(output);


    }

    $("#button").on("click", function () {

        console.log("klik");

        $.getJSON(DATA_URL)
            .done(function (data) {



                console.log(data);
                showUsers(data);



            })
            .fail(function () {
                alert("cos poszlo nie tak");
            });


    });

}(jQuery))