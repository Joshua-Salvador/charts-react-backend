import mongoose from "mongoose";

const mvpSchema = mongoose.Schema({
  name: String,
  voteCount: Number,
});

export default mongoose.model("Mvp", mvpSchema);
