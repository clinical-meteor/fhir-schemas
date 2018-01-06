var Code = require('../datatypes/Code');

exports.DomainResourceSchema = new SimpleSchema({
  "text.status" : {
    type: Code,
    optional: true,
    defaultValue: 'additional'
  },
  "text.div" : {
    type: String,
    optional: true
  },
  "contained" : {
    type: Object,
    optional: true
  },
  "extension" : {
    type: [Object],
    optional: true
  }
});
