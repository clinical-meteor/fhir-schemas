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


ObservationSchema = new SimpleSchema({
    'resourceType' : {
      type: String,
      defaultValue: 'Observation'
    },
    'identifier' : {
      optional: true,
      type: [IdentifierSchema]
    }, // Id for external references to this report
    'status' : {
      optional: true,
      type: Code
    }, // R!  registered | partial | final | corrected | appended | cancelled | entered-in-error
    'category' : {
      optional: true,
      type: CodeableConceptSchema
    }, // Service category
    'code' : {
      optional: true,
      type: CodeableConceptSchema
    }, // R!  Name/Code for this diagnostic report
    'subject' : {
      optional: true,
      type: ReferenceSchema
    }, // R!  The subject of the report, usually, but not always, the patient
    'encounter' : {
      optional: true,
      type: ReferenceSchema
    }, // Health care event when test ordered
    'effectiveDateTime' : {
      optional: true,
      type: Date
    },
    'effectivePeriod' : {
      optional: true,
      type: PeriodSchema
    },
    'issued' : {
      optional: true,
      type: Date
    }, // R!  DateTime this version was released
    'performer' : {
      optional: true,
      type: ReferenceSchema
    }, // R!  Responsible Diagnostic Service
  
    'valueQuantity' : {
      optional: true,
      type: QuantitySchema
    },
    'valueCodeableConcept' : {
      optional: true,
      type: CodeableConceptSchema
    },
    'valueString' : {
      optional: true,
      type: String
    },
    'valueRange' : {
      optional: true,
      type: RangeSchema
    },
    'valueRatio' : {
      optional: true,
      type: RatioSchema
    },
    'valueSampledData' : {
      optional: true,
      type: SampledDataSchema
    },
    'valueAttachment' : {
      optional: true,
      type: AttachmentSchema
    },
    'valueTime' : {
      optional: true,
      type: Date
    },
    'valueDateTime' : {
      optional: true,
      type: Date
    },
    'valuePeriod' : {
      optional: true,
      type: PeriodSchema
    },
    'dataAbsentReason' : {
      optional: true,
      type: CodeableConceptSchema
    }, // C? Why the result is missing
    'interpretation' : {
      optional: true,
      type: CodeableConceptSchema
    }, // High, low, normal, etc.
    'comments' : {
      optional: true,
      type: String
    }, // Comments about result
    'bodySite' : {
      optional: true,
      type: CodeableConceptSchema
    }, // Observed body part
    'method' : {
      optional: true,
      type: CodeableConceptSchema
    }, // How it was done
    'specimen' : {
      optional: true,
      type: ReferenceSchema
    }, // Specimen used for this observation
    'device' : {
      optional: true,
      type: ReferenceSchema
    }, // (Measurement) Device
  
    'referenceRange.$.low' : {
      optional: true,
      type: QuantitySchema
    }, // C? Low Range, if relevant
    'referenceRange.$.high' : {
      optional: true,
      type: QuantitySchema
    }, // C? High Range, if relevant
    'referenceRange.$.meaning' : {
      optional: true,
      type: CodeableConceptSchema
    }, // Indicates the meaning/use of this range of this range
    'referenceRange.$.age' : {
      optional: true,
      type: RangeSchema
    }, // Applicable age range, if relevant
    'referenceRange.$.text' : {
      optional: true,
      type: String
    }, // Text based reference range in an observation
  
    'related.$.type' : {
      optional: true,
      type: Code
    }, // has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by
    'related.$.target' : {
      optional: true,
      type: ReferenceSchema
    }, // R!  Resource that is related to this one
  
    'component.$.code' : {
      optional: true,
      type: CodeableConceptSchema
    }, // C? R!  Type of component observation (code / type)
    'component.$.valueQuantity' : {
      optional: true,
      type: QuantitySchema
    },
    'component.$.valueCodeableConcept' : {
      optional: true,
      type: CodeableConceptSchema
    },
    'component.$.valueString' : {
      optional: true,
      type: String
    },
    'component.$.valueRange' : {
      optional: true,
      type: RangeSchema
    },
    'component.$.valueRatio' : {
      optional: true,
      type: RatioSchema
    },
    'component.$.valueSampledData' : {
      optional: true,
      type: SampledDataSchema
    },
    'component.$.valueAttachment' : {
      optional: true,
      type: AttachmentSchema
    },
    'component.$.valueTime' : {
      optional: true,
      type: Date
    },
    'component.$.valueDateTime' : {
      optional: true,
      type: Date
    },
    'component.$.valuePeriod' : {
      optional: true,
      type: PeriodSchema
    },
    'component.$.dataAbsentReason' : {
      optional: true,
      type: CodeableConceptSchema
    }
  
  });