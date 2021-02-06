const { Schema, model } = require("mongoose")

const cosoSchema = new Schema(
  {
    name: String,
    description: String,
    type: {
      type: String,
      enum: ["AUDIO", "VIDEO", "IMAGE"]
    },
    url: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      min: 0,
      defult: 0
    },
    downloads: {
      type: Number,
      min: 0,
      defult: 0
    },
    price: {
      type: Number,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Coso", cosoSchema)
