import { DataTypes, Model } from "sequelize";
import { sequelize } from "./../../DB/connection.db.js"
import { User } from "../user/user.model.js";
import { post } from "../post/post.model.js";

export class comment extends Model { }

comment.init({
    content:
    {
        type: DataTypes.TEXT
    }
},
    {
        sequelize
    })

comment.belongsTo(User)
User.hasMany(comment)

comment.belongsTo(post)
post.hasMany(comment)