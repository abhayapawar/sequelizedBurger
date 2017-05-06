module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", 
  {
    burger_name: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: 
    {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
       freezeTableName: true,   //  prevents sequilize from making table name plural.
        timestamps: false  
  }

  
           //  prevents sequilize from adding `updatedAt` and `createdAt` columns. 
 );
  return burger;
};
