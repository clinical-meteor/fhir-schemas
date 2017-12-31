import { AddressSchema } from '../datatypes/Address';
import { AnnotationSchema } from '../datatypes/Annotation';
import { BaseSchema } from '../datatypes/Base';
import { Code } from '../datatypes/Code';
import { CodingSchema } from '../datatypes/Coding';
import { CodeableConcept } from '../datatypes/CodableConcept';
import { ContactPointSchema } from '../datatypes/ContactPoint';
import { DomainResourceSchema } from '../datatypes/DomainResource';
import { GroupSchema } from '../datatypes/Group';
import { HumanNameSchema } from '../datatypes/HumanName';
import { IdentifierSchema } from '../datatypes/Identifier';
import { PeriodSchema } from '../datatypes/Period';
import { QuantitySchema } from '../datatypes/Quantity';
import { ReferenceSchema } from '../datatypes/Reference';
import { TimingSchema } from '../datatypes/Timing';


export default QuestionnaireSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Questionnaire"
    },
  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
    },
  "version" : {
    optional: true,
    type: String
    },
  "status" : {
    optional: true,
    type: String
    },
  "date" : {
    optional: true,
    type: Date
    },
  "publisher" : {
    optional: true,
    type: String
    },
  "telecom" : {
    optional: true,
    type: [ ContactPointSchema ]
    },
  "subjectType" : {
    optional: true,
    type: [ String ]
    },
  "group" : {
    blackbox: true,
    optional: true,
    type: GroupSchema
    }
});