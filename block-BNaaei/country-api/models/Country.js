var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var countrySchema = new Schema(
  {
    name: String,
    states: [Schema.Types.ObjectId],
    continent: String,
    population: String,
    ethnicity: [Stirng],
    neighbouring_countires: { type: Schema.Types.ObjectId },
    area: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Country", "countrySchema");
