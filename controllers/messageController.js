import Message from "../models/message.js";

export const sendMessage = async (req , res) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(201).json({ message: "Message sent successfully "});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};