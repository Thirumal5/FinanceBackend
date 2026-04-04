import express from "express";
import { getDashboardSummary } from "../Controllers/DashboardController.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get('/dashboard', authorize(['admin', 'analyst', 'viewer']), getDashboardSummary);

export default router;
