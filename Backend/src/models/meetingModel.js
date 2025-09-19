import mongoose from "mongoose";

const { Schema, model } = mongoose;

const meetingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  meetingCode: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true }
});

export default model("Meeting", meetingSchema);
