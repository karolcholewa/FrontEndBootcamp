(function () {

    'use strict';

    //checking whether such method already exists
    if (String.prototype.repeatt) {
        return;
    }

    //extending a String object prototype - adding a new, custom method
    String.prototype.repeatt = function (count) {

        //checking an exception; sometimes a value passed to the function can be calculated and returned by another function
        if (count < 0) {
            throw new Error("Invalid countr value. The countr value must be positive.");
        }

        var output = "",
            myString = this.toString(); //this returns a string object - as it is converted by the interpreter; it is a good practice to convert it in the code to avoid ambiguity


        for (var i = 0; i < count; i++) {

            output += myString;
        }

        return output;

    };

    //shortened 'hack' version for the entire polyfill
    //return (new Array(count + 1)).join( this.toString() ); 

}());