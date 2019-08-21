var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var million = new Schema(
  {
    GlobalRank: { type: String },
    TldRank: { type: String },
    Domain: { type: String },
    TLD: { type: String },
    RefSubNets: { type: String },
    RefIPs: { type: String },
    IDN_Domain: { type: String },
    IDN_TLD: { type: String },
    PrevGlobalRank: { type: String },
    PrevTldRank: { type: String },
    PrevRefSubNets: { type: String },
    PrevRefIPs: { type: String }
  },
  { collection: "million" }
);
module.exports = mongoose.model("million", million);
