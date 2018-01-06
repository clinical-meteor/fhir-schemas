import { AddressSchema } from '../datatypes/Address';
import { AnnotationSchema } from '../datatypes/Annotation';
import { BaseSchema } from '../datatypes/Base';
import { Code } from '../datatypes/Code';
import { CodingSchema } from '../datatypes/Coding';
import { CodeableConcept } from '../datatypes/CodableConcept';
import { ContactPointSchema } from '../datatypes/ContactPoint';
import { DomainResourceSchema } from '../datatypes/DomainResource';
import { HumanNameSchema } from '../datatypes/HumanName';
import { IdentifierSchema } from '../datatypes/Identifier';
import { PeriodSchema } from '../datatypes/Period';
import { QuantitySchema } from '../datatypes/Quantity';
import { ReferenceSchema } from '../datatypes/Reference';
import { TimingSchema } from '../datatypes/Timing';



export default PractitionerSchema = new SimpleSchema([
  BaseSchema,
  DomainResourceSchema,
  {
  "resourceType" : {
    type: String,
    defaultValue: "Practitioner"
  },
  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  },
  "active" : {
    optional: true,
    type: Boolean
  },
  "name" : {
    optional: true,
    type:  [ HumanNameSchema ]
  },
  "telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
  },
  "address" : {
    optional: true,
    type: [ AddressSchema ]
  },
  "gender" : {
    optional: true,
    type: String
  },
  "birthDate" : {
    optional: true,
    type: Date
  },
  "photo" : {
    optional: true,
    type: [ AttachmentSchema ]
  },
  "qualification.$.identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  },
  "qualification.$.code" : {
    optional: true,
    type: CodeableConceptSchema
  },
  "qualification.$.period" : {
    optional: true,
    type: PeriodSchema
  },
  "qualification.$.issuer" : {
    optional: true,
    type: ReferenceSchema
  }, // Organization)
  "communication" : {
    optional: true,
    type: [ CodeableConceptSchema ]
  }
}]);