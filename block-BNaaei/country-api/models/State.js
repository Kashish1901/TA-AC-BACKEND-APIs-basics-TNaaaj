var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stateSchema = new Schema(
  {
    name: String,
    country: { type: Schema.Types.ObjectId, ref: "Country", required: true },
    population: String,
    area: String,
    neighbouring_states: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("State", stateSchema);
