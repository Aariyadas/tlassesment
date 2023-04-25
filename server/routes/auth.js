import express from 'express';

const router = express.Router();
import { requireSignin,isAdmin } from '../middlewares/auth.js';

import { register,login,secret } from '../controllers/auth.js';

router.post("/register",register)

router.post("/login",login)

// testing
router.get("/secret",requireSignin ,secret);
 export default router;
