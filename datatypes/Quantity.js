var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');

// EXAMPLE
// whenRange: {
//   'low': {
//     'value': 40,
//     'unit': 'years',
//     'system': 'http://unitsofmeasure.org",
//     "code": "a"
//   },
//   "high": {
//     "value": 90,
//     "unit": "years",
//     "system": "http://unitsofmeasure.org",
//     "code": "a"
//   }
// }

exports.QuantitySchema = new SimpleSchema({
  'value' : {
    optional: true,
    type : Number,
    decimal: true
  },
  'comparator': {
    optional: true,
    type: Code
  },
  'unit' : {
    optional: true,
    type : String
  },
  'system' : {
    optional: true,
    type : String // Uri
  },
  'code' : {
    optional: true,
    type : Code
  }
});



exports.DefaultQuantity = {
  create: function(){
    var newQuantity = {

    };

    return newQuantity;
  }
}
