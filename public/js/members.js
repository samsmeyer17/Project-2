$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.name);
  });

  $(document).ready(function() {
    var newWorkout = $("input#workoutName").val().trim();
    
    $(newWorkout).on("submit", function(event) {
      console.log("workout submitted");
      event.preventDefault();
      var workoutData = {
        workout: newWorkout.val() 
      };
      console.log(workoutData);
      if (!workoutData.workout) {
        return;
      }
      logWorkout(workoutData.workout);
    
      workoutDataRetrieval(workoutData.workout);
    });
    
    function logWorkout(workout) {
      console.log("function log Workout called");
      $.post("/api/newWorkout", {
        workout: workout
      }).then(function(data)  {
        window.location.replace("/new_workout");
      })
      .catch(err => handleWorkoutErr(err))
    }
  
    function handleWorkoutErr(err) { 
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

    
  });

});
