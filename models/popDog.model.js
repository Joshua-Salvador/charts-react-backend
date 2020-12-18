import mongoose from "mongoose";

const popDogSchema = mongoose.Schema({
  name: String,
  voteCount: Number,
});

export default mongoose.model("PopDog", popDogSchema);
