
// Creating our workouts model
module.exports = function(sequelize, DataTypes) {
  var workouts = sequelize.define("workouts", {
    // the stroke of the workout
    stroke: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interval: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return workouts;
};
