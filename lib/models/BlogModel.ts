import mongoose, { Document, Schema } from "mongoose";

// 1. Define the Blog interface
export interface IBlog extends Document {
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  authorImg: string;
  date: Date;
}

// 2. Define the Schema using the interface
const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
});

// 3. Export the model
const BlogModel =
  mongoose.models.blog || mongoose.model<IBlog>("blog", BlogSchema);

export default BlogModel;
