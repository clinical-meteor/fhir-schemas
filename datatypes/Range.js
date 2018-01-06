var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/CodingSchema');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');
var QuantitySchema = require('../datatypes/Quantity');


exports.RangeSchema = new SimpleSchema({
  "low" : {
    type: QuantitySchema
    },
  "high" : {
    type: QuantitySchema
    }
});



exports.DefaultRange = {
  create: function(){
    var newRange = {

    };

    return newRange;
  }
}
