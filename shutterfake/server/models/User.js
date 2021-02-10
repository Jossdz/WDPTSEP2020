const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: String,
    avatar: {
      type: String,
      default: "https://www.shankarainfra.com/img/avatar.png"
    },
    credits: {
      type: Number,
      default: 0,
      min: 0
    },
    isArtist: { type: Boolean, default: false },
    artist: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Artist"
      }
    ],
    cols: [
      {
        type: Schema.Types.ObjectId,
        ref: "Col"
      }
    ],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
)

const User = mongoose.model("User", userSchema)
module.exports = User
