$(document).ready(function() {

  $.get("/api/burger", function(results) 
  {
    console.log(results);
    if ( $("#devouredItems").children().length == 0)  {
      $("#devouredItems").css("background-color", "inherit");
      $("#devouredItems").css("border-style", "inherit");
    };
  });
});