var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/CodingSchema');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');


exports.IdentifierSchema = new SimpleSchema({
  "use" : {
    optional: true,
    type: String
  },
  "assigner" : {
    optional: true,
    type: ReferenceSchema
  },
  "type" : {
    optional: true,
    type: CodeableConceptSchema
  },
  "assigner.display" : {
    optional: true,
    type: String
  },
  "assigner.reference" : {
    optional: true,
    type: String
  },
  "system" : {
    optional: true,
    type: String
  },
  "value" : {
    optional: true,
    type: String
  },
  "period.start" : {
    optional: true,
    type: Date
  },
  "period.end" : {
    optional: true,
    type: Date
  }
});
