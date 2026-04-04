import User from '../models/User.js';
import mongoose from 'mongoose';

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

export const usercontrollers = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        if (!name || !email || !role) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const finduser = await User.findOne({ email });
        if (finduser) {
            return res.status(409).json({ success: false, message: "Email is already registered" });
        }

        const user = new User({ name, email, role });
        await user.save();

        res.status(201).json({
            success: true,
            message: "User account created successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const getusercontrollers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            count: users.length,
            data: users
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId(id)) {
            return res.status(400).json({ success: false, message: "Invalid ID format" });
        }

        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}
