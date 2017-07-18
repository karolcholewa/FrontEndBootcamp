(function() {

    var $ = function(selector) {
        return document.querySelector(selector);
    };

    var fileArea = $("#fileArea"),
        fileInput = $("#file"),
        preview = $("#preview"),
        copy = $("#copy");

    function showHTMLPreview() {

        var textarea = document.createElement("textarea");

        textarea.className = "textarea";
        textarea.innerHTML = preview.innerHTML;

        copy.appendChild(textarea);
        copy.style.display = "block";
        textarea.select();

        window.location.hash = copy.getAttribute("id");

        this.style.display = "none";

        var copied = document.execCommand("copy");

        if(copied) {
            console.log("Zawartość skopiowana do schowka");
        }

    }

    function appendCopyButton() {

        var button = document.createElement("button");

        button.className = "button";
        button.textContent = "Skopiuj kod HTML";
        button.onclick = showHTMLPreview;

        preview.parentNode.appendChild(button);

    }

    function renderHTML(markdown) {

        var converter = new showdown.Converter({
            noHeaderId: true
        });

        return converter.makeHtml(markdown);

    }

    function generatePreview(markdown) {

        var html = renderHTML(markdown);

        preview.innerHTML = html;

        fileArea.style.display = "none";

        appendCopyButton();

    }

    fileInput.addEventListener("change", function(e) {

        var file = e.target.files[0],
            reader = new FileReader();

        reader.onload = function() {
            generatePreview(this.result);
        };

        reader.readAsText(file);

    }, false);

})();