var AddressSchema = require('../datatypes/Address');
var AnnotationSchema = require('../datatypes/Annotation');
var BaseSchema = require('../datatypes/Base');
var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConcept = require('../datatypes/CodeableConcept');
var ContactPointSchema = require('../datatypes/ContactPoint');
var DomainResourceSchema = require('../datatypes/DomainResource');
var GroupSchema = require('../datatypes/Group');
var HumanNameSchema = require('../datatypes/HumanName');
var IdentifierSchema = require('../datatypes/Identifier');
var PeriodSchema = require('../datatypes/Period');
var QuantitySchema = require('../datatypes/Quantity');
var ReferenceSchema = require('../datatypes/Reference');
var TimingSchema = require('../datatypes/Timing');


exports.QuestionnaireResponseSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "QuestionnaireResponse"
    },
  "identifier" : {
    optional: true,
    type: IdentifierSchema
    },
  "questionnaire" : {
    optional: true,
    type: ReferenceSchema //Questionnaire
    },
  "status" : {
    optional: true,
    type: String
    },
  "subject" : {
    optional: true,
    type: ReferenceSchema // Any
    },
  "author" : {
    optional: true,
    type: ReferenceSchema // (Device|Practitioner|Patient|RelatedPerson)
    },
  "authored" : {
    optional: true,
    type: Date
    },
  "source" : {
    optional: true,
    type: ReferenceSchema //(Patient|Practitioner|RelatedPerson)
    },
  "encounter" : {
    optional: true,
    type: ReferenceSchema //(Encounter)
    },
  "group.linkId" : {
    optional: true,
    type: String
    },
  "group.title" : {
    optional: true,
    type: String
    },
  "group.text" : {
    optional: true,
    type: String
    },
  "group.subject" : {
    optional: true,
    type: ReferenceSchema //(Any)
    },
  "group.group" : {
    optional: true,
    blackbox: true,
    type: [ GroupSchema ]
    },
  "group.question.$.linkId" : {
    optional: true,
    type: String
    },
  "group.question.$.text" : {
    optional: true,
    type: String
    },
  "group.question.$.answer.$.valueBoolean" : {
    optional: true,
    type: Boolean
    },
  "group.question.$.answer.$.valueDecimal" : {
    optional: true,
    type: Boolean
    },
  "group.question.$.answer.$.valueInteger" : {
    optional: true,
    type: Number
    },
  "group.question.$.answer.$.valueDate" : {
    optional: true,
    type: Date
    },
  "group.question.$.answer.$.valueDateTime" : {
    optional: true,
    type: Date
    },
  "group.question.$.answer.$.valueInstant" : {
    optional: true,
    type: String
    },
  "group.question.$.answer.$.valueTime" : {
    optional: true,
    type: Date
    },
  "group.question.$.answer.$.valueString" : {
    optional: true,
    type: String
    },
  "group.question.$.answer.$.valueUri" : {
    optional: true,
    type: String
    },
  "group.question.$.answer.$.valueAttachment" : {
    optional: true,
    type: AttachmentSchema
    },
  "group.question.$.answer.$.valueCoding" : {
    optional: true,
    type: CodingSchema
    },
  "group.question.$.answer.$.valueQuantity" : {
    optional: true,
    type: QuantitySchema
    },
  "group.question.$.answer.$.valueReference" : {
    optional: true,
    type: ReferenceSchema //(Any)
    }
});