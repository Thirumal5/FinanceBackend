import express from "express";
import { getDashboardSummary } from "../Controllers/DashboardController.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get('/dashboard', allowRoles('admin', 'analyst', 'viewer'), getDashboardSummary);

export default router;
