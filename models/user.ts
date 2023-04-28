// import mongoose, { Document, Schema } from 'mongoose';

// export interface UserDocument extends Document {
//   username: string;
//   email: string;
//   password: string;
//   createdAt: Date;
//   comments: string[];
//   likedPosts: string[];
//   likedComments: string[];
//   watchlist: string[];
//   groups: string[];
//   createdGroups: string[];
// }

// const UserSchema: Schema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
//   likedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//   likedComments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
//   watchlist: [{ type: Schema.Types.ObjectId, ref: 'MovieOrTVShow' }],
//   groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
//   createdGroups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
// });

// export const UserModel = mongoose.model<UserDocument>('User', UserSchema);

import { Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    username: {
        type: String,
        required: [true, "Username name is required"],
        minLength: [4, "Username should be at least 4 characters long"],
        maxLength: [30, "Username should be less than 30 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    }
})

const User = models.User || model("User", UserSchema)

export default User
