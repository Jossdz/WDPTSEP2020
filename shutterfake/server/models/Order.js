const { Schema, model } = require("mongoose")

const orderSchema = new Schema(
  {
    resources: [
      {
        type: Schema.Types.ObjectId,
        ref: "Coso"
      }
    ],
    price: Number,
    status: {
      type: String,
      enum: ["PENDING", "SUCCESSFUL"],
      default: "PENDING"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Order", orderSchema)
