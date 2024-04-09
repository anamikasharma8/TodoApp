import express from 'express';
const router = express.Router();
import taskModel from "../models/taskModel.js";
import userModel from "../models/userModel.js";

router.get("/getAllTasks", async (req, res) => {
    try {
        const tasks = await taskModel.find();
        const populatedTasks = await Promise.all(
            tasks.map(async (task) => {
                const user = await userModel.findById(task.userId);
                return { 
                    title: task.title,
                    description: task.description,
                    createdBy: user ? user.name : 'Unknown' 
                };
            })
        );
        res.json({ data: populatedTasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/getAllUsers", async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ data: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
