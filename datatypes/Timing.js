var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');
var QuantitySchema = require('../datatypes/Quantity');

exports.TimingSchema = new SimpleSchema({
  "resourceType": {
    type: String,
    defaultValue: "Timing"
  },
  "event": {
    optional: true,
    type: [ Date ]
  },
  "repeat.boundsQuantity": {
    optional: true,
    type: QuantitySchema
  },
  "repeat.boundsRange": {
    optional: true,
    type: RangeSchema
  },
  "repeat.boundsPeriod": {
    optional: true,
    type: PeriodSchema
  },
  "repeat.count": {
    optional: true,
    type: Number
  },
  "repeat.duration": {
    optional: true,
    decimal: true,
    type: Number
  },
  "repeat.durationMax": {
    optional: true,
    decimal: true,
    type: Number
  },
  "repeat.durationUnit": {
    optional: true,
    type: Code
  },
  "repeat.frequency": {
    optional: true,
    type: Number
  },
  "repeat.frequencyMax": {
    optional: true,
    type: Number
  },
  "repeat.period": {
    optional: true,
    decimal: true,
    type: Number
  },
  "repeat.periodMax": {
    optional: true,
    decimal: true,
    type: Number
  },
  "repeat.periodUnit": {
    optional: true,
    allowedValues: ['s', 'min', 'h', 'd', 'wk', 'mo', 'a'],
    type: Code
  },
  "repeat.dayOfWeek": {
    optional: true,
    allowedValues: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    type: Code
  },
  "repeat.when": {
    optional: true,
    type: Code
  },
  "repeat.offset": {
    optional: true,
    type: Number
  },
  "code": {
    optional: true,
    type: [ CodeableConceptSchema ]
  },  
});

exports.DefaultTiming = {
  create: function(){
    var newTiming = {

    };

    return newTiming;
  }
}
