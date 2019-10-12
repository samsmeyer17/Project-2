module.exports = function(sequelize, DataTypes) {
  var sets = sequelize.define("sets", {
    // the stroke of the workout
    stroke: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distance: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    interval: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });

  sets.associate = function(models) {
    models.sets.belongsTo(models.workouts, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
  return sets;
};
