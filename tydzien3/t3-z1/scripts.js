(function () {
    
    var button = document.querySelector("#showMapLink");
    
    button.addEventListener("click", function(e){
        
        if(!navigator.geolocation) {
            
            return;
        }
        
        button.textContent = "Czekaj...";
        button.setAttribute("disabled", true);
        
        navigator.geolocation.getCurrentPosition(function(position){
           
            var coords = position.coords,
                maplink = document.createElement("a");
            
            maplink.classList.add("button");
            maplink.setAttribute("href", "http://bing.com/maps/defautl.aspx?cp=" + coords.latitude + "~" + coords.langitude);
            
            maplink.textContent = "Zobacz na mapie";
        button.parentNode.appendChild("div");
        });
    })
})();