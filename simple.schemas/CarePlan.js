import { BaseSchema } from '../datatypes/Base';
import { Code } from '../datatypes/Code';
import { CodingSchema } from '../datatypes/Coding';
import { CodeableConcept } from '../datatypes/CodableConcept';
import { DomainResourceSchema } from '../datatypes/DomainResource';
import { IdentifierSchema } from '../datatypes/Identifier';
import { PeriodSchema } from '../datatypes/Period';
import { ReferenceSchema } from '../datatypes/Reference';

import { TimingSchema } from '../datatypes/Timing';
import { AnnotationSchema } from '../datatypes/Annotation';
import { QuantitySchema } from '../datatypes/Quantity';


export default CarePlanSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "CarePlan"
  },
  "identifier" : {
    optional: true,
    type:  [ IdentifierSchema ]
    },
  "subject" : {
    optional: true,
    type: ReferenceSchema
    },
  "status" : {
    optional: true,
    type: Code
    },
  "context" : {
    optional: true,
    type: ReferenceSchema
    },
  "period" : {
    optional: true,
    type: PeriodSchema
    },
  "author" : {
    optional: true,
    type: [ ReferenceSchema ]
    },
  "modified" : {
    optional: true,
    type: Date
    },
  "category" : {
    optional: true,
    type: [ CodeableConceptSchema ]
    },
  "description" : {
    optional: true,
    type: String
    },
  "addresses" : {
    optional: true,
    type: [ ReferenceSchema ]
    },
  "support" : {
    optional: true,
    type: [ ReferenceSchema ]
    },

  "relatedPlan.$.code" :  {
    optional: true,
    type: Code
    },
  "relatedPlan.$.plan" :  {
    optional: true,
    type: ReferenceSchema
    },

  "participant.$.role" :  {
    optional: true,
    type: CodeableConceptSchema
    },
  "participant.$.member" :  {
    optional: true,
    type: ReferenceSchema
    },

  "goal" :  {
    optional: true,
    type: [ ReferenceSchema ]
    },

  "activity.$.actionResulting" :  {
    optional: true,
    type: [ ReferenceSchema ]
    },
  "activity.$.progress" :  {
    optional: true,
    type: [ AnnotationSchema ]
    },
  "activity.$.reference" :  {
    optional: true,
    type: ReferenceSchema
    },

  "activity.$.detail.category" :  {
    optional: true,
    type: CodeableConceptSchema
    },
  "activity.$.detail.code" :  {
    optional: true,
    type: CodeableConceptSchema
    },
  "activity.$.detail.reasonCode" :  {
    optional: true,
    type: [ CodeableConceptSchema ]
    },
  "activity.$.detail.reasonReference" :  {
    optional: true,
    type: [ ReferenceSchema ]
    },
  "activity.$.detail.goal" :  {
    optional: true,
    type: [ ReferenceSchema ]
    },
  "activity.$.detail.status" :  {
    optional: true,
    type: Code
    },
  "activity.$.detail.statusReason" :  {
    optional: true,
    type: CodeableConceptSchema
    },
  "activity.$.detail.prohibited" :  {
    optional: true,
    type: Boolean
    },
  "activity.$.detail.scheduledTiming" :  {
    optional: true,
    type: TimingSchema
    },
  "activity.$.detail.scheduledPeriod" :  {
    optional: true,
    type: PeriodSchema
    },
  "activity.$.detail.scheduledString" :  {
    optional: true,
    type: String
    },
  "activity.$.detail.location" :  {
    optional: true,
    type: ReferenceSchema
    },
  "activity.$.detail.performer" : {
    optional: true,
    type:  [ ReferenceSchema ]
    },
  "activity.$.detail.productCodeableConcept" :  {
    optional: true,
    type: CodeableConceptSchema
    },
  "activity.$.detail.productReference" :  {
    optional: true,
    type: ReferenceSchema
    },
  "activity.$.detail.dailyAmount" :  {
    optional: true,
    type: QuantitySchema
    },
  "activity.$.detail.quantity" :  {
    optional: true,
    type: QuantitySchema
    },
  "activity.$.detail.description" :  {
    optional: true,
    type: String
    },
  "note" :  {
    optional: true,
    type: AnnotationSchema
    }
});
