import { Router } from "express";
import * as userServices from "./user.services.js"
const router =  Router()

router.post("/",userServices.signup)
router.put("/:id",userServices.update_id)
router.get("/:id",userServices.find_id)
router.get("/by-email",userServices.Find_email)

export default router