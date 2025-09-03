import { Router } from "express";
import * as postServices from "./post.services.js"
const router = Router()
router.post("/posts",postServices.addPost)
router.delete("/:postID",postServices.deletePost)
router.get("/details",postServices.getDetails)
export default router