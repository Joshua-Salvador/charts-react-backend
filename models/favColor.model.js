import mongoose from "mongoose";

const favColorSchema = mongoose.Schema({
  name: String,
  voteCount: Number,
});

favColorSchema.methods.addVote = function () {
  this.voteCount + 1;
};

export default mongoose.model("FavColor", favColorSchema);
