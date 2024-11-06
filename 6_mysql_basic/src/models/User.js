const User = (sqlz, DataTypes)=>{
  const userSchema = sqlz.define("User", {
    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  })
  return userSchema
}
