$(document).ready(function () {
  var newWorkoutsForm = $("form.workout");
  var strokeInput = $("input#stroke-input");
  var distanceInput = $("input#distance-input");
  var repsInput = $("input#reps-input");
  var intervalInput = $("input#time-input");

  newWorkoutsForm.on("submit", function (event) {
    console.log("sets submitted");
    event.preventDefault();
    var setsData = {
      stroke: strokeInput.val().trim(),
      distance: distanceInput.val().trim(),
      reps: repsInput.val().trim(),
      interval: intervalInput.val().trim()
    };
    console.log(setsData);
    if (!setsData.stroke || !setsData.distance) {
      return;
    }
    logsets(setsData.stroke, setsData.distance, setsData.reps, setsData.interval);
    strokeInput.val("");
    distanceInput.val("");
    repsInput.val("");
    intervalInput.val("");

    setsDataRetrieval(setsData.stroke, setsData.distance, setsData.reps, setsData.interval);
  });

  function logsets(stroke, distance, reps, interval) {
    console.log("function log sets called");
    $.post("/api/newsets", {
      stroke: stroke,
      distance: distance,
      reps: reps,
      interval: interval
    }).then(function (data) {
      console.log("yay sets logged");
      console.log(data)
    })
      .catch(err => handlesetsErr(err))
  }

  function handlesetsErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function setsDataRetrieval(setsData) {
    $.get("/api/setData", {
      stroke: setsData.stroke,
      distance: setsData.distance,
      reps: setsData.reps,
      interval: setsData.interval
    })
    .then(function (setsData) {
      $("#sets-slot").text(setsData.reps + " X " + setsData.distance + "'s " + setsData.stroke + " on " + setsData.interval)
    }).catch(function(err) {
      console.log(err)  
    });
  };

});