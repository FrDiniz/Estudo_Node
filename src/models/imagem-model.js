
const {docType} = require('./docType-enum')
const mongoose = require("mongoose");

const { Schema } = mongoose;

const ImageSchema = new Schema(
  {
    docType:  {
        type: Number,
        enum: Object.values(docType)
    },
    image: String,
  },
  { collection: "image" }
);

module.exports.ImageSchema = ImageSchema;
