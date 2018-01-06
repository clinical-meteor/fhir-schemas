import AuditEventSchema from './simple-schemas/AuditEvent';
import CarePlanSchema from './simple-schemas/CarePlan';
import DeviceSchema from './simple-schemas/Device';
import EndpointSchema from './simple-schemas/Endpoint';
import LocationSchema from './simple-schemas/Location';
import MedicationSchema from './simple-schemas/Medication';
import ObservationSchema from './simple-schemas/Observation';
import OrganizationSchema from './simple-schemas/Organization';
import PatientSchema from './simple-schemas/Patient';
import PractitionerSchema from './simple-schemas/Practitioner';
import QuestionnaireSchema from './simple-schemas/Questionnaire';
import QuestionnaireResponseSchema from './simple-schemas/QuestionnaireResponse';

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

