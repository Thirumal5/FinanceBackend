import express from "express";
import { usercontrollers, getusercontrollers, updateUser, deleteUser } from "../Controllers/UserControllers.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post('/Users', allowRoles('admin'), usercontrollers);
router.get('/Users', allowRoles('admin'), getusercontrollers);
router.put('/Users/:id', allowRoles('admin'), updateUser);
router.delete('/Users/:id', allowRoles('admin'), deleteUser);

export default router;