
import {testConnection,syncDB_connection} from "./DB/connection.db.js"
import express from "express"
import {comment} from "./modules/comment/comment.model.js"
import userController from "./modules/user/user.controller.js"
import postController from "./modules/post/post.controller.js"
import commentController from "./modules/comment/comments.controller.js"
async function bootstrap()  {
    const port = 3000
    const app = express()
    // DB connection 
    await testConnection()
    await syncDB_connection()
    // routers
    app.use(express.json())
    app.use("/user",userController)
    app.use("/post",postController)
    app.use("/comments",commentController)
    app.listen(port, () => {
        console.log(`Server is running on port = ${port}`)
    })
}


export default bootstrap