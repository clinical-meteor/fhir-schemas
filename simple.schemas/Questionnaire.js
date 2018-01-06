var AddressSchema = require('../datatypes/Address');
var AnnotationSchema = require('../datatypes/Annotation');
var BaseSchema = require('../datatypes/Base');
var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConcept = require('../datatypes/CodableConcept');
var ContactPointSchema = require('../datatypes/ContactPoint');
var DomainResourceSchema = require('../datatypes/DomainResource');
var GroupSchema = require('../datatypes/Group');
var HumanNameSchema = require('../datatypes/HumanName');
var IdentifierSchema = require('../datatypes/Identifier');
var PeriodSchema = require('../datatypes/Period');
var QuantitySchema = require('../datatypes/Quantity');
var ReferenceSchema = require('../datatypes/Reference');
var TimingSchema = require('../datatypes/Timing');

exports.QuestionnaireSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Questionnaire"
    },
  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
    },
  "version" : {
    optional: true,
    type: String
    },
  "status" : {
    optional: true,
    type: String
    },
  "date" : {
    optional: true,
    type: Date
    },
  "publisher" : {
    optional: true,
    type: String
    },
  "telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
    },
  "subjectType" : {
    optional: true,
    type: [ String ]
    },
  "group" : {
    blackbox: true,
    optional: true,
    type: GroupSchema
    }
});