
exports.BaseSchema = new SimpleSchema({
  "id" : {
    type: String,
    optional: true
  },
  "resourceType" : {
    type: String
  },
  "meta" : {
    type: MetaSchema
  },
  "implicitRules" : {
    type: String,
    optional: true
  },
  "language" : {
    type: Code,
    optional: true
  }
});
