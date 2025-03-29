import User from "../model/userModel.js"

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"})
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const fetch = async (req, res) => {
    try {
        return res.json("Hello from fetch user controller");
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}