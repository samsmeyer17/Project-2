
// Creating our workouts model
module.exports = function(sequelize, DataTypes) {
  var workouts = sequelize.define("workouts", {
    // the stroke of the workouts
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
      type: DataTypes.STRING,
      allowNull: true
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
