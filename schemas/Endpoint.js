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



export default EndpointSchema = new SimpleSchema([
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

