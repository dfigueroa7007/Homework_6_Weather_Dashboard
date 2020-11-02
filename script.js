$(document).ready(function() {

    var weatherCall = "http://api.openweathermap.org/data/2.5/weather?q=Anaheim&appid=724396a40151502c17ffc40b05161307";
    var forecastCall = "http://api.openweathermap.org/data/2.5/forecast?q=Anaheim&appid=724396a40151502c17ffc40b05161307";
    // var userLocationInput = $("#citySearchBar").val().trim();
    // var weatherDisplayAppend = $("#weatherDisplay").append();
    // var forecastDisplayAppend = $("#forecastDisplay").append();
    
    $.ajax({
        url: weatherCall,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
    
    $.ajax({
        url: forecastCall,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
    
});