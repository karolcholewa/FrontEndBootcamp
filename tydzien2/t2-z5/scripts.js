var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
        button.textContent = button.dataset.hide;
    } else {
        elem.hide();
        button.textContent = button.dataset.show;
    }

}, false);


function Toggler(selector) {
    
    this.selector = document.querySelector(selector);
    
}

Toggler.prototype.getElem = function() {
    
    return this.selector;
}

Toggler.prototype.show = function() {
    
    this.selector.setAttribute("style", "");
    
}


Toggler.prototype.hide = function(selector) {
    
    this.selector.setAttribute("style", "display: none");
}
    