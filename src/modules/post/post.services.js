import { post } from "./post.model.js"
import { successResponce, failedResponse } from "./../services.js"
import { User } from "../user/user.model.js"
import { comment } from "../comment/comment.model.js"

export const addPost = async (req, res, next) => {
    try {
        const newPost = new post(req.body)
        await newPost.save()
        successResponce({ res: res, status: 201, message: "post created successfuly", data: newPost })
    } catch (error) {
        failedResponse({ error: error, res: res })
    }

}

export const deletePost = async (req, res, next) => {
    try {
        const {userId} = req.body
        const SearchUser = await User.findByPk(userId)
        if (SearchUser) {
            const FindPost = await post.findByPk(req.params.postID)
            if (FindPost) {
                if (FindPost.userId == userId) {
                    await FindPost.destroy()
                    successResponce({res : res , status : 200 , message : "Deleted succefully", data : FindPost})
                    return
                }
                else
                {
                    throw new Error ("You are not authorized")
                    return
                }
            }
            else
            {
                throw new Error ("no post found")
                return
            }
        }
        else
        {
            throw new Error ("No user with this ID")
            return
        }    
    } catch (error) {
        failedResponse({ error: error, res: res })
        return
    }

}

export const getDetails = async (req, res, next) =>
{
    
    try {
        const foundPost = await post.findAll({attributes : ["title" , "id"],
            include : [
                {
                    model : User,
                    attributes : ["id" , "name"]
                },
                {
                    model : comment,
                    attributes : ["id" , "content"]
                }
            ]
        })
        successResponce({ res: res, status: 201, message: "Post", data: foundPost })
    } catch (error) {
        failedResponse({ error: error, res: res })
    }
}

export const getDetails_count_commnets = async (req, res, next) =>
{
    
    try {
        const foundPost = await post.findAll({attributes : ["title" , "id"],
            include : [
                {
                    model : comment,
                    attributes : ["id" , "content"]
                }
            ]
        })
        let count_comments = foundPost.comments.length 
        successResponce({ res: res, status: 201, message: "Post", data: foundPost })
    } catch (error) {
        failedResponse({ error: error, res: res })
    }
}