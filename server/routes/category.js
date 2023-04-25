import express from "express"

const router =express.Router()

// import { requireSignin,isAdmin } from "../middlewares/auth.js"

import {create,update,remove,list,read} from "../controllers/category.js"




// CRUD

router.post("/category" ,create)
router.put("/category/:categoryId",update)
router.delete("/category/:categoryId",remove)
router.get("/categories",list);
router.get("/category/:slug",read)


export default router;