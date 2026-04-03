import Record from "../models/Record.js";


const recordControllers = async (req, res) => {

    try {
        const { amount, type, category, note, date, userId } = req.body;
        if (!amount || !type || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const record = new Record(
            {
                amount,
                type,
                category,
                note,
                date,
                createdBy: userId
            });
        await record.save();

        res.status(201).json({ success: true, message: "New record created Successfully", record });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export default recordControllers;