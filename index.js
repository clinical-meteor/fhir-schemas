
const AuditEventSchema = require('./simple-schemas/AuditEvent');
const CarePlanSchema = require('./simple-schemas/CarePlan');
const DeviceSchema = require('./simple-schemas/Device');
const EndpointSchema = require('./simple-schemas/Endpoint');
const LocationSchema = require('./simple-schemas/Location');
const MedicationSchema = require('./simple-schemas/Medication');
const ObservationSchema = require('./simple-schemas/Observation');
const OrganizationSchema = require('./simple-schemas/Organization');
const PatientSchema = require('./simple-schemas/Patient');
const PractitionerSchema = require('./simple-schemas/Practitioner');
const QuestionnaireSchema = require('./simple-schemas/Questionnaire');
const QuestionnaireResponseSchema = require('./simple-schemas/QuestionnaireResponse');

var SimpleSchemas = {
  AuditEventSchema, 
  CarePlanSchema, 
  DeviceSchema, 
  EndpointSchema, 
  LocationSchema, 
  MedicationSchema, 
  ObservationSchema, 
  OrganizationSchema, 
  PatientSchema, 
  PractitionerSchema, 
  QuestionnaireSchema, 
  QuestionnaireResponseSchema
}

const AuditEvent = require('./fhir.schema.json/AuditEvent.schema.json');
const CarePlan = require('./fhir.schema.json/CarePlan.schema.json');
const Device = require('./fhir.schema.json/Device.schema.json');
const Endpoint = require('./fhir.schema.json/Endpoint.schema.json');
const Location = require('./fhir.schema.json/Location.schema.json');
const Medication = require('./fhir.schema.json/Medication.schema.json');
const Observation = require('./fhir.schema.json/Observation.schema.json');
const Organization = require('./fhir.schema.json/Organization.schema.json');
const Patient = require('./fhir.schema.json/Patient.schema.json');
const Practitioner = require('./fhir.schema.json/Practitioner.schema.json');
const Questionnaire = require('./fhir.schema.json/Questionnaire.schema.json');
const QuestionnaireResponse = require('./fhir.schema.json/QuestionnaireResponse.schema.json');

export { SimpleSchemas, AuditEvent, CarePlan, Device, Endpoint, Location, Medication, Observation, Organization, Patient, Practitioner, Questionnaire, QuestionnaireResponse };

