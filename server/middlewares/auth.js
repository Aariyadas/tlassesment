
import jwt from "jsonwebtoken";
import User from "../models/user.js";



export const requireSignin = (req, res, next) => {
    try {
      const decoded = jwt.verify(
        req.headers.authorization.split(" ")[1],
        secretKey
      );
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json(err);
    }
  };
  
  export const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(401).send("Unauthorized");
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  };
  