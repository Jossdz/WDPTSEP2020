const { Schema, model } = require("mongoose")

const postSchema = new Schema(
  {
    title: String,
    body: String,
    img: String,
    likes: Number,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Post", postSchema)
