
// Creating our workouts model
module.exports = function(sequelize, DataTypes) {
  var workouts = sequelize.define("workouts", {
    // the stroke of the workouts
    workoutName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  workouts.associate = function(models) {
    models.workouts.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.workouts.hasMany(models.sets)

  };

  return workouts;
};
