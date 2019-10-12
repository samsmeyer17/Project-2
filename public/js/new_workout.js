$(document).ready(function() {
  var newWorkoutBtn = $("#newWorkoutBtn");
  
  $(newWorkoutBtn).on("click", function(event) {
    console.log("workout submitted");
    event.preventDefault();
    var workoutData = {
      set: newWorkoutBtn.val() 
    };
    console.log(workoutData);
    if (!workoutData.set) {
      return;
    }
    logWorkout(workoutData.set);
    
    
    workoutDataRetrieval(workoutData.set);
  });
  
  function logWorkout(set) {
    console.log("function log Workout called");
    $.post("/api/newWorkout", {
      set: set
    }).then(function(data)  {
      console.log("yay workout logged");
      window.location.replace("/new_workout");
    })
    .catch(err => handleWorkoutErr(err))
  }

  function handleWorkoutErr(err) { 
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function workoutDataRetrieval() {
    $.get("/api/workoutDataRetrieve").then(function(data) {
      $("#workout-area").text("You did: " + data.reps + " X " + data.distance + "'s " + data.stroke + ". On the " + data.interval + "! Nice Job!")
    });
  };
  
});

