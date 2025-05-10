import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    avatorImg: { type: String },
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
}, { timestamps: true });

export const userModel = models.User || model("User", UserSchema);