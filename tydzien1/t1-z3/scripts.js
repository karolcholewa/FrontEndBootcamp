(function () {

    'use strict';

    var nav = document.getElementById("nav"),
        btn = document.getElementById("toggle"),
        icon = document.querySelector("i");

    btn.addEventListener("click", function () {

        if (!nav.hasAttribute("class", "nav")) {

            nav.setAttribute("class", "nav");
            icon.removeAttribute("class", "fa fa-times");
            icon.setAttribute("class", "fa fa-bars");


        } else {
            icon.removeAttribute("class", "fa fa-bars");
            icon.setAttribute("class", "fa fa-times");
            nav.removeAttribute("class", "nav");

        }

    }, false)

}());