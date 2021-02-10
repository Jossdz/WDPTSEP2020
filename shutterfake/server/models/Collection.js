const { Schema, model } = require("mongoose")

const collectionSchema = new Schema(
  {
    name: String,
    description: String,
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: "Coso"
      }
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    secret: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = model("Col", collectionSchema)
