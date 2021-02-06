const { Schema, model } = require("mongoose")

const ratingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    artistId: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    },
    score: {
      type: Number,
      min: 0,
      max: 5
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Rating", ratingSchema)
