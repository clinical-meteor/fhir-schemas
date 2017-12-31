import { AddressSchema } from '../data"type"s/Address';
import { AnnotationSchema } from '../data"type"s/Annotation';
import { BaseSchema } from '../data"type"s/Base';
import { Code } from '../data"type"s/Code';
import { CodingSchema } from '../data"type"s/Coding';
import { CodeableConcept } from '../data"type"s/CodableConcept';
import { ContactPointSchema } from '../data"type"s/ContactPoint';
import { DomainResourceSchema } from '../data"type"s/DomainResource';
import { HumanNameSchema } from '../data"type"s/HumanName';
import { IdentifierSchema } from '../data"type"s/Identifier';
import { PeriodSchema } from '../data"type"s/Period';
import { QuantitySchema } from '../data"type"s/Quantity';
import { ReferenceSchema } from '../data"type"s/Reference';
import { TimingSchema } from '../data"type"s/Timing';


export default PatientSchema = new SimpleSchema([
  BaseSchema,
  DomainResourceSchema,
  {
  "resourceType" : {
    "label": "This is a Patient resource",
    "type": String,
    "defaultValue": "Patient",
  },
  "identifier" : {
    "label": "An identifier for this patient.",
    "optional": true,
    "type": [ IdentifierSchema ]
    },
  "active" : {
    "label": "Whether this patient record is in active use.",
    "type": Boolean,
    "optional": true,
    "defaultValue": true
    },
  "name" : {
    "label": "A name associated with the individual.",
    "optional": true,
    "type": [ HumanNameSchema ]
    },
  "telecom" : {
    "optional": true,
    "type": [ ContactPointSchema ]
    },
  "gender" : {
    "label": "Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.",          
    "optional": true,
    "allowedValues": ['male', 'female', 'other', 'unknown'],
    "type": String
    },
  "birthDate" : {
    "label": "The date of birth for the individual.",
    "optional": true,
    "type": Date
    },
  "deceasedBoolean" : {
    "label": "Indicates if the individual is deceased or not.",
    "optional": true,
    "type": Boolean
    },
  "deceasedDateTime" : {
    "label": "Indicates if the individual is deceased or not.",
    "optional": true,
    "type": Date
    },
  "address" : {
    "label": "Addresses for the individual.",
    "optional": true,
    "type": [ AddressSchema ]
    },
  "maritalStatus" : {
    "label": "This field contains a patient's most recent marital (civil) status.",          
    "optional": true,
    "type": CodeableConceptSchema
    },
  "multipleBirthBoolean" : {
    "label": "Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).",
    "optional": true,
    "type": Boolean
    },
  "multipleBirthInteger" : {
    "label": "Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).",
    "optional": true,
    "type": Number
    },
  "photo" : {
    "label": "Image of the patient.",
    "optional": true,
    "type": [ AttachmentSchema ]
    },
  "contact.$.relationship" : {
    "label": "The nature of the relationship between the patient and the contact person.",            
    "optional": true,
    "type": [ CodeableConceptSchema ]
    },
  "contact.$.name" : {
    "label": "A name associated with the contact person.",
    "optional": true,
    "type": HumanNameSchema
    },
  "contact.$.telecom" : {
    "label": "A contact detail for the person, e.g. a telephone number or an email address.",
    "optional": true,
    "type": [ ContactPointSchema ]
    },
  "contact.$.address" : {
    "label": "Address for the contact person.",
    "optional": true,
    "type": [ AddressSchema ]
    },
  "contact.$.gender" : {
    "label": "Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.",
    "optional": true,
    "allowedValues": ['male', 'female', 'other', 'unknown'],
    "type": Code
    },
  "contact.$.organization" : {
    "label": "Organization on behalf of which the contact is acting or for which the contact is working.",            
    "optional": true,
    "type": String
    },
  "contact.$.period" : {
    "label": "The period during which this contact person or organization is valid to be contacted relating to this patient.",
    "optional": true,
    "type": PeriodSchema
    },
  "animal.species" : {
    "label": "Identifies the high level taxonomic categorization of the kind of animal.",
    "optional": true,
    "type": String
    },
  "animal.breed" : {
    "label": "Identifies the detailed categorization of the kind of animal.",
    "optional": true,
    "type": CodeableConceptSchema
    },
  "animal.genderStatus" : {
    "label": "Indicates the current state of the animal's reproductive organs.",
    "optional": true,
    "type": CodeableConceptSchema
    },
  "communication.$.language" : {
    "label": "The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. \"en\" for English, or \"en-US\" for American English versus \"en-EN\" for England English.",
    "optional": true,
    "type": CodeableConceptSchema
    },
  "communication.$.preferred" : {
    "label": "Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).",
    "optional": true,
    "type": Boolean
    },
  "generalPractitioner" : {
    "label": "Patient's nominated care provider.",
    "optional": true,
    "type": [ ReferenceSchema ]
    },
  "managingOrganization" : {
    "label": "Organization that is the custodian of the patient record.",
    "optional": true,
    "type": ReferenceSchema
    },
  "link.$.other" : {
    "label": "The other patient resource that the link refers to.",                
    "optional": true,
    "type": ReferenceSchema
    },
  "link.$.type" : {
    "label": "The 'type' of link between this patient resource and another patient resource.",                
    "optional": true,
    "allowedValues": ['replaced-by', 'replaces', 'refer', 'seealso'],
    "type": Code
    }
  }
]);