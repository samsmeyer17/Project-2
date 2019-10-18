$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.name);
  });

  var newWorkout = $("form.new-workout")
  var workoutName = $("input#workoutName");

  newWorkout.on("submit", function (event) {
    console.log("workout submitted");
    event.preventDefault();
    var workoutData = {
      workoutName: workoutName.val().trim(),
      workout: newWorkout.val().trim()
    };
    console.log(workoutData);
    if (!workoutData.workoutName) {
      return;
    }

    function logWorkout(workout) {
      console.log("function log Workout called");
      $.post("/api/newWorkout", {
        workoutName: workoutName,
        workout: workout
      }).then(function (data) {
        window.location.replace("/new_workout");
      })
        .catch(err => handleWorkoutErr(err))
    };

    function workoutDataRetrieval(workoutData) {
      $.get("/api/workoutDataRetieve", {
        workoutName: workoutName,
        workout: workout
      }).then(function(workoutData) {
        $("#workouts-area").append("<div>workoutName</div>")
      }).catch(function(err) {
        console.log(err)
      })
    };

    function handleWorkoutErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
    logWorkout(workoutData.workout, workoutData.workoutName);
    workoutDataRetrieval(workoutData.workout, workoutData.workoutName);
  })});
