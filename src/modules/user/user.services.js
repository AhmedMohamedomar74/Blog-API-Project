import { User } from "./user.model.js"
import { successResponce, failedResponse } from "./../services.js"
export const signup = async (req, res, next) => {
    try {
        const InsertedUser = await User.build(req.body)
        InsertedUser.save()
        successResponce({ res: res, status: 201, message: "Created", data: InsertedUser })
        return
    } catch (error) {
        if (error.errors[0].message === "U_email must be unique") {
            res.status(208).json({ message: "Email is aready exixt" })
            return
        }
        failedResponse({ error: error, res: res })
        return
    }
}


export const update_id = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const findUser = await User.findByPk(req.params.id)
        if (findUser) {
            findUser.update(req.body)
            successResponce({ res: res, message: "Found", data: findUser })
            return
        }
        else {
            throw new Error("not found this ID")
        }

    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}


export const Find_email = async (req, res, next) => {
    console.log(req.query.email)
    try {
        const searchUser = await User.findOne({
            where: {
                email: req.query.email
            }
        })
        if (searchUser) {
            successResponce({ res: res, message: "Found", data: searchUser })
            return
        }
        else {
            throw new Error("not found this email")
        }

    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}

export const find_id = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const findUser = await User.findByPk(req.params.id , {attributes : {
            exclude : "role"
        }})
        if (findUser) {
            successResponce({ res: res, message: "Found", data: findUser })
            return
        }
        else {
            throw new Error("not found this ID")
        }

    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}