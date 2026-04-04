import express from "express";
import { recordControllers, getRecords, singlerecord, updaterecord, deleteRecord } from "../Controllers/RecordController.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only Admin can Create, Update, or Delete records
router.post('/records', authorize(['admin']), recordControllers);
router.put('/records/:id', authorize(['admin']), updaterecord);
router.delete('/records/:id', authorize(['admin']), deleteRecord);

// Admin and Analyst can view individual records or list them
router.get('/records', authorize(['admin', 'analyst']), getRecords);
router.get('/records/:id', authorize(['admin', 'analyst']), singlerecord);

export default router;