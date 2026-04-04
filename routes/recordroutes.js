import express from "express";
import { recordControllers, getRecords,updaterecord,deleteRecord} from "../Controllers/RecordController.js";

const router = express.Router();
router.post('/records', recordControllers);
router.get('/records', getRecords);
router.put('/record:id',updaterecord);
router.delete('/record:id',deleteRecord);

export default router;