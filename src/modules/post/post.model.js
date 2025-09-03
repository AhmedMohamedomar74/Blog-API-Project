import { DataTypes, Model } from "sequelize";
import { sequelize } from "./../../DB/connection.db.js"
import { User } from "../user/user.model.js";

export class post extends Model{};

post.init(
    {
        title : 
        {
            type : DataTypes.STRING,
            validate : {
                notEmpty : true
            }
        },
        content : 
        {
            type : DataTypes.TEXT
        }
    },
    {
        sequelize,
        // Part 1
        // 1
        paranoid : true
    }
)

post.belongsTo(User , {foreignKey : {allowNull : false}})
User.hasMany(post)