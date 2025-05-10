import mongoose, { Schema, model, models } from "mongoose";

const ReplySchema = new Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    like: { type: Number, default: 0 },
    replies: [this],
}, { _id: false });

const CommentSchema = new Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    like: { type: Number, default: 0 },
    replies: [ReplySchema],
}, { _id: false });

const BlogSchema = new Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    content: { type: String, required: true },
    comment: [CommentSchema],
    thumbnailImage: { type: String, required: true },
    publishedDate: {type: Date, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export const blogModel = models.Blog || model("Blog", BlogSchema);