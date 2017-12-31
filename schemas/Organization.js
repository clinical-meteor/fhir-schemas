import { AddressSchema } from '../datatypes/Address';
import { AnnotationSchema } from '../datatypes/Annotation';
import { BaseSchema } from '../datatypes/Base';
import { Code } from '../datatypes/Code';
import { CodingSchema } from '../datatypes/Coding';
import { CodeableConcept } from '../datatypes/CodableConcept';
import { ContactPointSchema } from '../datatypes/ContactPoint';
import { DomainResourceSchema } from '../datatypes/DomainResource';
import { IdentifierSchema } from '../datatypes/Identifier';
import { PeriodSchema } from '../datatypes/Period';
import { QuantitySchema } from '../datatypes/Quantity';
import { ReferenceSchema } from '../datatypes/Reference';
import { TimingSchema } from '../datatypes/Timing';




export default OrganizationSchema = new SimpleSchema([
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