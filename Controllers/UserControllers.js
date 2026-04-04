import User from '../models/User.js';



export const usercontrollers = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        if (!name || !email || !role) {
            return res.status(400).json({ message: "All feilds are required" });
        }

        const finduser = await User.findOne({ email });
        if (finduser) {
            return res.status(409).json({ success: false, message: "Email is already Registered" });
        }
        const user = new User({
            name,
            email,
            role
        });
        await user.save();

        res.status(201).json({ succes: true, message: "User account Created Succesful", user });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const getusercontrollers = async (req, res) => {

    try {
        const user = await User.find();

        return res.status(200).json(
            {
                success: true,
                length: user.length,
                user
            }
        );

    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

