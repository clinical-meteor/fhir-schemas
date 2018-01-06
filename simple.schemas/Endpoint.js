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

exports.EndpointSchema = new SimpleSchema([
  BaseSchema,
  DomainResourceSchema,
  {
  "resourceType" : {
    type: String,
    defaultValue: "Endpoint"
  },
  "identifier" : {
    optiona: true,
    type: [ IdentifierSchema ]
  }, 
  "status" : {
    optiona: true,
    type: String
  }, 
  "connectionType" : {
    optiona: true,
    type: CodingSchema
  }, 
  "name" : {
    optiona: true,
    type: String
  }, 
  "managingOrganization" : {
    optiona: true,
    type: ReferenceSchema
  }, 
  "contact" : {
    optiona: true,
    type: [ ContactPoint ]
  }, 
  "period" : {
    optiona: true,
    type: Period 
  }, 
  "payloadType" : {
    optiona: true,
    type: [ CodeableConceptSchema ]
  }, 
  "payloadMimeType" : {
    optiona: true,
    type: [ String ]
  }, 
  "address" : {
    optiona: true,
    type: String
  }, 
  "header" : {
    optiona: true,
    type: [ String ] 
  }
}]);

