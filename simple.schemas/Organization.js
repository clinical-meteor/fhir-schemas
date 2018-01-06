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


exports.OrganizationSchema = new SimpleSchema([
  BaseSchema,
  DomainResourceSchema,
  {
  "resourceType" : {
    type: String,
    defaultValue: "Organization"
  },
  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  }, // C? Identifies this organization  across multiple systems
  "active" : {
    optional: true,
    type: Boolean
  }, // Whether the organization's record is still in active use
  "type" : {
    optional: true,
    type: [ CodeableConceptSchema ]
  }, // Kind of organization
  "name" : {
    optional: true,
    type: String
  }, // C? Name used for the organization
  "telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
  }, // C? A contact detail for the organization
  "address" : {
    optional: true,
    type: [ AddressSchema ]
  }, // C? An address for the organization
  "partOf" : {
    optional: true,
    type: ReferenceSchema
  }, // (Organization) The organization of which this organization forms a part
  "contact.$.purpose" : {
    optional: true,
    type: CodeableConceptSchema
  }, // The type of contact
  "contact.$.name" : {
    optional: true,
    type: HumanNameSchema
  }, // A name associated with the contact
  "contact.$.telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
  }, // Contact details (telephone, email, etc.)  for a contact
  "contact.$.address" : {
    optional: true,
    type: AddressSchema
  }, // Visiting or postal addresses for the contact
  "alias" : {
    optional: true,
    type: [String]
  }, 
  "endpoint" : {
    optional: true,
    type: ReferenceSchema
  }
}]);