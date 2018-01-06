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




export default LocationSchema = new SimpleSchema([
  BaseSchema,
  DomainResourceSchema,
  {
  "resourceType" : {
    type: String,
    defaultValue: "Location"
  },
  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  }, // Unique code or number identifying the location to its users
  "status" : {
    optional: true,
    type: Code
  }, // active | suspended | inactive
  "name" : {
    optional: true,
    type: String
  }, // Name of the location as used by humans
  "description" : {
    optional: true,
    type: String
  }, // Description of the location
  "mode" : {
    optional: true,
    type: Code
  }, // instance | kind
  "type" : {
    optional: true,
    type: CodeableConceptSchema
  }, // Type of function performed
  "telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
  }, // Contact details of the location
  "address" : {
    optional: true,
    type: AddressSchema
  }, // Physical location
  "physicalType" : {
    optional: true,
    type: CodeableConceptSchema
  }, // Physical form of the location
  "position.longitude" : {
    decimal: true,
    type: Number
  }, // R!  Longitude with WGS84 datum
  "position.latitude" : {
    decimal: true,
    type: Number
  }, // R!  Latitude with WGS84 datum
  "position.altitude" : {
    optional: true,
    type: Number
  }, // Altitude with WGS84 datum
  "managingOrganization" : {
    optional: true,
    type: ReferenceSchema
  }, // Organization responsible for provisioning and upkeep
  "partOf" : {
    optional: true,
    type: ReferenceSchema
  } // Another Location this one is physically part of
}]);