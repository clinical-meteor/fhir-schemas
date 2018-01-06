var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');
var QuantitySchema = require('../datatypes/Quantity');

exports.SignatureSchema = new SimpleSchema({
  "type" : {
    type: [ CodingSchema ]
    },
  "when" : {
    type: Date
    },
  "whoUri" : {
    optional: true,
    type: String
    },
  "whoReference" : {
    optional: true,
    type: ReferenceSchema
    },
  "contentType" : {
    optional: true,
    type: String
  },
  "onBehalfOfUri" : {
    optional: true,
    type: String
    },
  "onBehalfOfReference" : {
    optional: true,
    type: ReferenceSchema
    },
  "blob" : {
    optional: true,
    blackbox: true,
    type: Object
    }  
});


exports.DefaultSignature = {
  create: function(){
    var newSignature = {

    };

    return newSignature;
  }
}
