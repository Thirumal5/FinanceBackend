import Record from "../models/Record.js";
import mongoose from "mongoose";

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

export const recordControllers = async (req, res) => {
    try {
        const { amount, type, category, note, date, userId } = req.body;
        if (!amount || !type || !category || !userId) {
            return res.status(400).json({ success: false, message: "All fields (amount, type, category, userId) are required" });
        }

        if (!isValidId(userId)) {
            return res.status(400).json({ success: false, message: "Invalid User ID format" });
        }

        const record = new Record({
            amount,
            type,
            category,
            note,
            date,
            createdBy: userId
        });
        await record.save();

        res.status(201).json({
            success: true,
            message: "New record created successfully",
            data: record
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getRecords = async (req, res) => {
    try {
        const { type, category } = req.query;
        let filter = {};

        if (type) filter.type = type;
        if (category) filter.category = category;

        const records = await Record.find(filter).populate("createdBy", "name email role");

        res.status(200).json({
            success: true,
            message: "Records retrieved successfully",
            count: records.length,
            data: records
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const singlerecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const record = await Record.findById(id).populate("createdBy", "name email role");
        if (!record) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }

        res.status(200).json({
            success: true,
            message: "Record found",
            data: record
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const updaterecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const updatedRecord = await Record.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }

        res.status(200).json({
            success: true,
            message: "Record updated successfully",
            data: updatedRecord
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const record = await Record.findByIdAndDelete(id);
        if (!record) {
            return res.status(404).json({ success: false, message: "Record not found" });
        }

        res.status(200).json({
            success: true,
            message: "Record deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
