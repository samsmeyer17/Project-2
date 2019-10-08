$(document).ready(function() {
  var newWorkoutForm = $("form.workout");
  var strokeInput = $("input#stroke-input");
  var distanceInput = $("input#distance-input");
  var intervalInput = $("input#time-input");

  newWorkoutForm.on("submit", function(event) {
    console.log("workout submitted");
    event.preventDefault();
    var workoutData = {
      stroke: strokeInput.val().trim(),
      distance: distanceInput.val().trim(),
      interval: intervalInput.val().trim()
    };
    console.log(workoutData);
  })
})