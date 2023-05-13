const Mongoose = require("mongoose");

const SiteBoundSchema = Mongoose.Schema(
  {
    siteId: {
      type: Mongoose.Types.ObjectId,
      ref: "sites",
      required: true,
    },
    mapReferenceSystem: {
      type: String,
      enum: ["WGS-84", "ECET"],
      required: true,
    },
    vertexes: [
      {
        vertexNumber: Number,
        coordX: {
          type: Number,
          required: true,
        },
        coordY: {
          type: Number,
          required: true,
        },
        coordZ: {
          type: Number,
          required: false,
        },
        _id: false,
      },
    ],
    positionN: {
      type: String,
    },
    positionE: {
      type: String,
    },
    positionLong: {
      type: String,
    },
    positionLat: {
      type: String,
    },
    heading: {
      type: Mongoose.Types.Decimal128,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("siteBounds", SiteBoundSchema);
