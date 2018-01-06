var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/CodingSchema');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');
var QuantitySchema = require('../datatypes/Quantity');

exports.SampledDataSchema = new SimpleSchema({
  "origin" : {
    type: QuantitySchema
    },
  "period" : {
    type: Number
    },
  "factor" : {
    type: Number
    },
  "lowerLimit" : {
    type: Number
    },
  "upperLimit" : {
    type: Number
    },
  "dimensions" : {
    type: Number
    },
  "data" : {
    type: String
    }
});



exports.SampledData = {
  create: function(){
    var newSampledData = {

    };

    return newSampledData;
  }
}
