import express from "express";
import {usercontrollers,getusercontrollers} from "../Controllers/UserControllers.js";

const router=express.Router();

router.post('/Users',usercontrollers);
router.get('/Users',getusercontrollers)

export default router;