import { DataTypes } from "sequelize";
import { sequelize } from "./../../DB/connection.db.js"

export const User = sequelize.define(
    "user",
    {
        name:
        {
            type: DataTypes.STRING,
            allowNull: false,
            field: "U_name",
            validate: {
                notEmpty: true,
                // Part 1
                // 3
                checkNameLength(value)
                {
                    if (value.length >= 2) {
                        return value
                    } else {
                        throw new Error("Name less than 2 charaters")
                    }
                }
            }
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: "U_email",
            validate: {
                notEmpty: true,
                // Part1:
                // 1
                isEmail : true
            }
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false,
            field: "U_password",
            validate: {
                notEmpty: true ,
                // Part 1
                // 2
                checkPasswordLength(value)
                {
                    if (value.length >= 6) {
                        return value
                    } else {
                        throw new Error("Password less than 6 charaters")
                    }
                }
            }
        },
        role:
        {
            type: DataTypes.ENUM("user", "admin"),
            allowNull: false,
            field: "U_role",
            validate: {
                notEmpty: true
            }
        }
    },
    {

    })
