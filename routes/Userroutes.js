import express from "express";
import usercontrollers from "../Controllers/UserControllers.js";

const router=express.Router();

router.post('/Users',usercontrollers);

export default router;