const { Schema, model } = require("mongoose")

const artistSchema = new Schema(
  {
    nickname: String,
    country: String,
    genre: String,
    links: [String],
    likes: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 2.5
    },
    userRef: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    cosos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Coso"
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = model("Artist", artistSchema)
