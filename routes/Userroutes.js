import express from "express";
import { usercontrollers, getusercontrollers, updateUser, deleteUser } from "../Controllers/UserControllers.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post('/Users', authorize(['admin']), usercontrollers);
router.get('/Users', authorize(['admin']), getusercontrollers);
router.put('/Users/:id', authorize(['admin']), updateUser);
router.delete('/Users/:id', authorize(['admin']), deleteUser);

export default router;