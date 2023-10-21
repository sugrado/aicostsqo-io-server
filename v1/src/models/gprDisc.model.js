const Mongoose = require('mongoose');

const GprDiscSchema = Mongoose.Schema({
  siteId: {
    type: Mongoose.Types.ObjectId,
    ref: 'sites',
  },
  rectangleLineNumber: { type: Number },
  profileType: {
    type: String,
    enum: ['Longitudinal', 'Traversal'],
  },
  crackProfileNumber: Number,
  typeOfCrack: { type: String },
  typeOfDisc: { type: String },
  dip: { type: Number },
  dipDirection: { type: Number },
  mapReferenceSystem: { type: Number },
  startingVertexX: Number,
  startingVertexY: Number,
  startingVertexZ: Number,
  endVertexX: Number,
  endVertexY: Number,
  endVertexZ: Number,
});

const GprDiscModel = Mongoose.model('gprDiscs', GprDiscSchema);

module.exports = GprDiscModel;
