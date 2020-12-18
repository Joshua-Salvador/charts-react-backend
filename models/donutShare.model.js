import mongoose from "mongoose";

const donutShareSchema = mongoose.Schema({
  name: String,
  voteCount: Number,
});

export default mongoose.model("DonutShare", donutShareSchema);
