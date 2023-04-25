import express from "express";
import formidable from "express-formidable";

const router =express.Router();

import {create,list,read,photo,remove} from "../controllers/product.js"



router.post("/product",formidable(),create);
router.get("/products", list);
router.get("/product/:slug", read);
router.get("/product/photo/:productId", photo);
router.delete("/product/:productId", remove);




export default router;