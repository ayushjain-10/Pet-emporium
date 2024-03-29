"use strict";

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};

const PetSchema = new Schema({
  name: { type: String, required: true }
  , birthday: { type: String, required: true }
  , species: { type: String, required: true }
  , picUrl: { type: String }
  , picUrlSq: { type: String }
  , avatarUrl: { type: String, required: false}
  , favoriteFood: { type: String, required: true }
  , description: { type: String, minlength: 120, required: true }
  , price: {type: Number, required: true }
}, {
  timestamps: true
});

PetSchema.plugin(mongoosePaginate);

// without weights
PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' });

module.exports = mongoose.model('Pet', PetSchema);


