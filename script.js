$(document).ready(function() {

    var weatherCall = "http://api.openweathermap.org/data/2.5/weather?q=Anaheim,California&appid=724396a40151502c17ffc40b05161307&units=imperial";
    var forecastCall = "http://api.openweathermap.org/data/2.5/forecast?q=Anaheim,California&appid=724396a40151502c17ffc40b05161307&units=imperial";
    // var userLocationInput = $("#citySearchBar").val().trim();
    // var weatherDisplayAppend = $("#weatherDisplay").append();
    // var forecastDisplayAppend = $("#forecastDisplay").append();
    
    $.ajax({
        url: weatherCall,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        $("#weatherDisplay").text(response.name);
        $("#tempValDisplay").text(response.main.temp);
        $("#humidityValDisplay").text(response.main.humidity);
        $("#windValDisplay").text(response.wind.speed);
        $("#uvValDisplay").text(response.visibility);
    });
    
    $.ajax({
        url: forecastCall,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });




// This is the closing brackets for the doc ready function.
});