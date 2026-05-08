import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        tech: [
            {
                type: String,
            },
        ],
        featured: {
            type: Boolean,
            default: false,
        },
        problem: {
            type: String,
        },
        solution: {
            type: String,
        },
        liveLink: {
            type: String,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema)