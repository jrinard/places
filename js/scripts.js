// Constructor
function Place(location, landmarks, time, weather, occasion){
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.weather = weather;
  this.occasion = occasion;
}

//protype

// Front end
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTime = $("input#time").val();
    var inputtedWeather = $("input#weather").val();
    var inputtedOccasion = $("input#occasion").val();

    if (inputtedLocation === "") {
      alert("Please enter a location buddy!");
    }

    var newPlace = new Place(inputtedLocation,inputtedLandmarks,inputtedTime,inputtedWeather,inputtedOccasion);

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");


    $(".place").last().click(function(){
      $("#show-places").show();
      $("#show-places h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".time").text(newPlace.time);
      $(".weather").text(newPlace.weather);
      $(".occasion").text(newPlace.occasion);

    });

  });
});
