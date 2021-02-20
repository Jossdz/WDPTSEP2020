const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
  {
    name: String,
    description: String,
    // GeoJSON
    location: {
      // type es una propiedad de location de tipo string.
      type: { type: String },
      coordinates: [Number]
    }
  },
  {
    timestamps: true
  }
)
// Con index, le decimos A mongo que una propiedad (en este caso location) se va a comportar o representar de cierta forma (en este caso como un mapa 2D)

placeSchema.index({ location: "2dsphere" })

module.exports = model("Place", placeSchema)
