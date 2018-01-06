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



export default DeviceSchema = new SimpleSchema({
  'resourceType' : {
    type: String,
    defaultValue: 'Device'
  },
  'identifier' : {
    optional: true,
    type: [ IdentifierSchema ]
  }, // Instance id from manufacturer, owner, and others
  'type' : {
    optional: true,
    type: CodeableConceptSchema
  }, // R!  What kind of device this is
  'note' : {
    optional: true,
    type: [ AnnotationSchema ]
  }, // Device notes and comments
  'status' : {
    optional: true,
    type: Code
  }, // available | not-available | entered-in-error
  'manufacturer' : {
    optional: true,
    type: String
  }, // Name of device manufacturer
  'model' : {
    optional: true,
    type: String
  }, // Model id assigned by the manufacturer
  'version' : {
    optional: true,
    type: String
  }, // Version number (i.e. software)
  'manufactureDate' : {
    optional: true,
    type: Date
  }, // Manufacture date
  'expiry' : {
    optional: true,
    type: Date
  }, // Date and time of expiry of this device (if applicable)
  'udi' : {
    optional: true,
    type: String
  }, // FDA mandated Unique Device Identifier
  'lotNumber' : {
    optional: true,
    type: String
  }, // Lot number of manufacture
  'owner' : {
    optional: true,
    type: ReferenceSchema
  }, // (Organization) Organization responsible for device
  'location' : {
    optional: true,
    type: ReferenceSchema
  }, // (Location)Where the resource is found
  'patient' : {
    optional: true,
    type: ReferenceSchema
  }, // (Patient) If the resource is affixed to a person
  'contact' : {
    optional: true,
    type: [ ContactPointSchema ]
  }, // Details for human/organization for support
  'url' : {
    optional: true,
    type: String
  } // Network address to contact device
});
