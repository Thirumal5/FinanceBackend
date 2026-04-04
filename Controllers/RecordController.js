import Record from "../models/Record.js";


export const recordControllers = async (req, res) => {

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
export const getRecords = async (req, res) => {
    try {
        const records = await Record.find()
            .populate("createdBy", "name email role");

        res.status(200).json({
            success: true,
            count: records.length,
            records
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

export const singlerecord=async(req,res)=>{

    try{
        
        const {id}=req.params;

        const record=Record.findId(id).populate('name email role','createdBy');

        if(!record)
        {
            return res.status(404).json({success:false,message:"No record found"});

        }
        res.status(200).json({success:false,message:"Record found",record});
    }
    catch(err)
    {
      res.status(500).json({success:false,message:err.message});
    }
}
export const updaterecord=async(req,res)=>{
     
    try {
        const { id } = req.params;

        const updatedRecord = await Record.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedRecord) {
            return res.status(404).json({
                success: false,
                message: "Record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Record updated",
            updatedRecord
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

export const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const record = await Record.findByIdAndDelete(id);

        if (!record) {
            return res.status(404).json({
                success: false,
                message: "Record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Record deleted"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
