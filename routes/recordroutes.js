import express from "express";
import { recordControllers, getRecords, singlerecord, updaterecord, deleteRecord } from "../Controllers/RecordController.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();


router.post('/records', allowRoles('admin'), recordControllers);
router.put('/records/:id', allowRoles('admin'), updaterecord);
router.delete('/records/:id', allowRoles('admin'), deleteRecord);


router.get('/records', allowRoles('admin', 'analyst'), getRecords);
router.get('/records/:id', allowRoles('admin', 'analyst'), singlerecord);

export default router;