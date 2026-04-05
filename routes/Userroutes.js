import express from "express";
import { usercontrollers, getusercontrollers, updateUser, deleteUser } from "../Controllers/UserControllers.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post('/users', allowRoles('admin'), usercontrollers);
router.get('/users', allowRoles('admin'), getusercontrollers);
router.put('/users/:id', allowRoles('admin'), updateUser);
router.delete('/users/:id', allowRoles('admin'), deleteUser);

export default router;