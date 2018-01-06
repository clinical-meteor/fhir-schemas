exports.ReferenceSchema = new SimpleSchema({
  "reference" : {
    optional: true,
    type: String
  },
  "display" : {
    optional: true,
    type: String
  }
});


exports.DefaultReference = {
  display: "",
  reference: ""
}