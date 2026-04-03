import express from "express";
import recordControllers from "../Controllers/RecordController.js";

const router=express.Router();
router.post('/records',recordControllers);

export  default recordControllers;