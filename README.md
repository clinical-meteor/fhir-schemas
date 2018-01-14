
# fhir-schemas
FHIR Resources implemented with `json-schemas` and `node-simple-schemas`.  The purpose of this package is to a) make the HL7 FHIR json-schemas available on NPM, and b) start migrating Meteor apps off of `meteor-simple-schema`.  Roughly speaking, the SimpleSchemas correspond to either `v1.6.0` of DST2, and the JsonSchemas correspond to `v3.0.1` or `STU3`.  


### Installation  

```bash
# the core schema libraries
npm install -save fhir-schemas

# if you're running a Meteor app, you'll also want to install the following conversion utility
meteor add bshamblen:json-simple-schema
```


### JsonSchema Usage    
Going forward, we recommend the Json Schama format, which is the official schema published by the HL7 FHIR working groups, has [low-level Mongo support](https://docs.mongodb.com/manual/core/schema-validation/#json-schema), and has cross-platform support across a wide rage of Node/NPM apps.  





**Client**  
```js
//-------------------------------------------------------------
// Auto Forms

import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import { PatientSchema } from 'fhir-schemas';

const log = (type) => console.log.bind(console, type);

render((
  <Form schema={PatientSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));


var simpleSchema = jsonSchema.toSimpleSchema();


//-------------------------------------------------------------
// Schema Validation

// The following is really annoying, and we're working on a way to improve it.
// The FHIR schemas have circular dependencies, which requires that we load the entire API 
// into the validator so it can parse across the entire dependency graph.

import { 
  IdentifierSchema,
  ElementSchema,
  HumanNameSchema,
  ContactPointSchema,
  AddressSchema,
  CodeableConceptSchema,
  AttachmentSchema,
  ReferenceSchema,
  MetaSchema,
  ExtensionSchema,
  BackboneElementSchema,
  NarrativeSchema,
  AnnotationSchema,
  CodingSchema,
  PeriodSchema,
  QuantitySchema,
  DurationSchema,
  DistanceSchema,
  CountSchema,
  MoneySchema,
  AgeSchema,
  RangeSchema,
  RatioSchema,
  SampledDataSchema,
  SignatureSchema,
  TimingSchema,
  ElementDefinitionSchema,
  ContactDetailSchema,
  ContributorSchema,
  DosageSchema,
  RelatedArtifactSchema,
  UsageContextSchema,
  DataRequirementSchema,
  ParameterDefinitionSchema,
  TriggerDefinitionSchema,
  ResourceListSchema,

  AccountSchema,
  ActivityDefinitionSchema,
  AdverseEventSchema,
  AllergyIntoleranceSchema,
  AppointmentSchema,
  AppointmentResponseSchema,
  AuditEventSchema,
  BasicSchema,
  BinarySchema,
  BodySiteSchema,
  BundleSchema,
  CapabilityStatementSchema,
  CarePlanSchema,
  CareTeamSchema,
  ChargeItemSchema,
  ClaimSchema,
  ClaimResponseSchema,
  ClinicalImpressionSchema,
  CodeSystemSchema,
  CommunicationSchema,
  CommunicationRequestSchema,
  CompartmentDefinitionSchema,
  CompositionSchema,
  ConceptMapSchema,
  ConditionSchema,
  ConsentSchema,
  ContractSchema,
  CoverageSchema,
  DataElementSchema,
  DetectedIssueSchema,
  DeviceSchema,
  DeviceComponentSchema,
  DeviceMetricSchema,
  DeviceRequestSchema,
  DeviceUseStatementSchema,
  DiagnosticReportSchema,
  DocumentManifestSchema,
  DocumentReferenceSchema,
  DomainResourceSchema,
  EligibilityRequestSchema,
  EligibilityResponseSchema,
  EncounterSchema,
  EndpointSchema,
  EnrollmentRequestSchema,
  EnrollmentResponseSchema,
  EpisodeOfCareSchema,
  ExpansionProfileSchema,
  ExplanationOfBenefitSchema,
  FamilyMemberHistorySchema,
  FlagSchema,
  GoalSchema,
  GraphDefinitionSchema,
  GroupSchema,
  GuidanceResponseSchema,
  HealthcareServiceSchema,
  ImagingManifestSchema,
  ImagingStudySchema,
  ImmunizationSchema,
  ImmunizationRecommendationSchema,
  ImplementationGuideSchema,
  LibrarySchema,
  LinkageSchema,
  ListSchema,
  LocationSchema,
  MeasureSchema,
  MeasureReportSchema,
  MediaSchema,
  MedicationSchema,
  MedicationAdministrationSchema,
  MedicationDispenseSchema,
  MedicationRequestSchema,
  MedicationStatementSchema,
  MessageDefinitionSchema,
  MessageHeaderSchema,
  NamingSystemSchema,
  NutritionOrderSchema,
  ObservationSchema,
  OperationDefinitionSchema,
  OperationOutcomeSchema,
  OrganizationSchema,
  ParametersSchema,
  PatientSchema,
  PaymentNoticeSchema,
  PaymentReconciliationSchema,
  PersonSchema,
  PlanDefinitionSchema,
  PractitionerSchema,
  PractitionerRoleSchema,
  ProcedureSchema,
  ProcedureRequestSchema,
  ProcessRequestSchema,
  ProcessResponseSchema,
  ProvenanceSchema,
  QuestionnaireSchema,
  QuestionnaireResponseSchema,
  ReferralRequestSchema,
  RelatedPersonSchema,
  RequestGroupSchema,
  ResearchStudySchema,
  ResearchSubjectSchema,
  ResourceSchema,
  RiskAssessmentSchema,
  ScheduleSchema,
  SearchParameterSchema,
  SequenceSchema,
  ServiceDefinitionSchema,
  SlotSchema,
  SpecimenSchema,
  StructureDefinitionSchema,
  StructureMapSchema,
  SubscriptionSchema,
  SubstanceSchema,
  SupplyDeliverySchema,
  SupplyRequestSchema,
  TaskSchema,
  TestReportSchema,
  TestScriptSchema,
  ValueSetSchema,
  VisionPrescriptionSchema,
} from 'fhir-schemas';

import Ajv from 'ajv';
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(PatientSchema);

var newPatient = {
    "name": {
        "family": 'Doe',
        "given": ['Jane']
    },
    "identifier": [{
        "value": 123
    }]
};

var isValid = validate(newPatient);
if(isValid){
    CurrentPatients.insert(newPatient);
}
```

**Server - Node**  
```js
import MongoClient from 'mongodb';
import { PatientSchema } from 'fhir-schemas';

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) { 
    const db = client.db(dbName);
 
    db.createCollection("Patients", {
        validator: {
            $jsonSchema: PatientSchema
        }
    });

    client.close();
});
```

**Server - Meteor**  

The following is an example for Meteor apps.  
```js
import { PatientSchema } from 'fhir-schemas';

// JSONSchema is provided as a global, since it's loaded from Atmosphere package repository
var jsonSchema = new JSONSchema(PatientSchema);

// convert to simple schema
var simpleSchema = jsonSchema.toSimpleSchema();

// create our server side cursor
CurrentPatients = new Mongo.Collection('CurrentPatients');

// and attach the cursor
CurrentPatients.attachSchema(SimpleSchemas.PatientSchema);

// for debugging
var props = jsonSchema.toSimpleSchemaProps();
console.log('props', props)
```

#### Json Schemas  

We provide Json Schemas for all of the following resources.  
[FHIR Resource Index](https://www.hl7.org/fhir/resourcelist.html)        



#### Notes & References (Delete Eventually)    
https://www.npmjs.com/package/node-simple-schema  
https://docs.npmjs.com/getting-started/creating-node-modules  
https://scotch.io/bar-talk/how-to-build-and-publish-a-npm-package  
https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738  
http://blog.teamtreehouse.com/build-npm-package  
https://www.guru99.com/node-js-modules-create-publish.html  

https://github.com/bshamblen/meteor-json-simple-schema  

https://docs.mongodb.com/manual/core/schema-validation/#json-schema  
https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod  
https://github.com/mozilla-services/react-jsonschema-form  
https://tools.ietf.org/html/draft-zyp-json-schema-04  