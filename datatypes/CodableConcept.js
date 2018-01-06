
var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');


exports.CodeableConceptSchema = new SimpleSchema({
  "coding" : {
    optional: true,
    type: [ CodingSchema ]
  },
  "text" : {
    optional: true,
    type: String
  }
});


exports.DefaultCodeableConcept = {
  create: function(text){
    var newCodeableConcept = {
      text: ''
    };

    if (text) {
      newCodeableConcept.text = text;
    }

    return newCodeableConcept;
  }
};
