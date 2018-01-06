var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');
var QuantitySchema = require('../datatypes/Quantity');


exports.RatioSchema = new SimpleSchema({
  "numerator" : {
    type: QuantitySchema
  },
  "denominator" : {
    type: QuantitySchema
  }
});


exports.DefaultRatio = {
  numerator: null,
  denominator: null
}