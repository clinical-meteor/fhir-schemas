'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});


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

var _SimpleSchemas = {
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

const _AuditEvent = require('./fhir.schema.json/AuditEvent.schema.json');
const _CarePlan = require('./fhir.schema.json/CarePlan.schema.json');
const _Device = require('./fhir.schema.json/Device.schema.json');
const _Endpoint = require('./fhir.schema.json/Endpoint.schema.json');
const _Location = require('./fhir.schema.json/Location.schema.json');
const _Medication = require('./fhir.schema.json/Medication.schema.json');
const _Observation = require('./fhir.schema.json/Observation.schema.json');
const _Organization = require('./fhir.schema.json/Organization.schema.json');
const _Patient = require('./fhir.schema.json/Patient.schema.json');
const _Practitioner = require('./fhir.schema.json/Practitioner.schema.json');
const _Questionnaire = require('./fhir.schema.json/Questionnaire.schema.json');
const _QuestionnaireResponse = require('./fhir.schema.json/QuestionnaireResponse.schema.json');


exports.SimpleSchemas = _SimpleSchemas;
exports.AuditEvent = _AuditEvent['default'];
exports.CarePlan = _CarePlan['default'];
exports.Device = _Device['default'];
exports.Endpoint = _Endpoint['default'];
exports.Location = _Location['default'];
exports.Medication = _Medication['default'];
exports.Observation = _Observation['default'];
exports.Organization = _Organization['default'];
exports.Patient = _Patient['default'];
exports.Practitioner = _Practitioner['default'];
exports.Questionnaire = _Questionnaire['default'];
exports.QuestionnaireResponse = _QuestionnaireResponse['default'];
