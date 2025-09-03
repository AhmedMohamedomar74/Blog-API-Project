import { Router } from "express";
import *as commentServices from "./comments.services.js"
const router = Router()

router.post("/",commentServices.addComments)
router.post("/find-or-create",commentServices.find_create)
router.patch("/:commentID",commentServices.updatecomment)
router.get("/details/:commentID",commentServices.find_comment)
router.get("/search",commentServices.search_with_word)
router.get("/newest/:postID",commentServices.find_with_Post)

export default router