import { comment } from "./comment.model.js";
import { successResponce, failedResponse } from "../services.js";
import { Op } from "sequelize";
import { post } from "../post/post.model.js";
export const addComments = async (req, res, next) => {
    try {
        const newComments = await comment.bulkCreate(req.body.comment)
        successResponce({ res: res, message: "comments are created", data: newComments })
        return
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}

export const updatecomment = async (req, res, next) => {
    try {
        const findComment = await comment.findByPk(req.params.commentID)
        if (findComment) {
            if (findComment.userId == req.body.userId) {
                findComment.update(req.body)
                successResponce({ res: res, message: "updated", data: findComment })
            }
            else {
                throw new Error("not authorized")
            }
        } else {
            throw new Error("no comment found by this id")
        }
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}

export const find_create = async (req, res, next) => {
    try {
        const newComment = await comment.findOrCreate({ where: req.body })
        successResponce({ res: res, message: "comment are created", data: newComment })
        return
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}


export const search_with_word = async (req, res, next) => {
    console.log(`search with ${req.query.word}`)
    try {
        const foundcomments = await comment.findAndCountAll({
            where: {
                content: {
                    [Op.like]: `%${req.query.word}%`
                }
            }
        })
        if (foundcomments.count == 0) {
            throw new Error("no comments found")
            return
        }
        else {
            successResponce({ res: res, data: foundcomments })
            return
        }
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}


export const find_with_Post = async (req, res, next) => {
    try {
        const foundComments = await comment.findAll({
            attributes: ["id", "content", "createdAt"],
            where: {
                postId: req.params.postID
            },
            order: [["id", "DESC"]],
            limit: 3
        })
        successResponce({ res: res, message: "founded", data: foundComments })
        return
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}


export const find_comment = async (req, res, next) => {
    try {
        const foundComment = await comment.findByPk(req.params.commentID)
        if (foundComment) {
            successResponce({ res: res, message: "founded", data: foundComment })
            return
        }
        else {
            throw new Error("ID not found")
        }
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }
}