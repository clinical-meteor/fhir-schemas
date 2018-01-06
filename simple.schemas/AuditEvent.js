var BaseSchema = require('../datatypes/Base');
var CodingSchema = require('../datatypes/Coding');
var DomainResourceSchema = require('../datatypes/DomainResource');
var CodeableConcept = require('../datatypes/CodeableConcept');
var IdentifierSchema = require('../datatypes/Identifier');
var ReferenceSchema = require('../datatypes/Reference');

exports.AuditEventSchema = new SimpleSchema([
  BaseSchema,
  DomainResourceSchema,
  {
  'resourceType' : {
    type: String,
    defaultValue: 'AuditEvent'
  },
  "type" : {
    optional: true,
    type: CodingSchema
  },
  "subtype" : {
    optional: true,
    type: [ CodingSchema ]
  },
  "action" : {
    optional: true,
    type: String
  },
  "recorded" : {
    optional: true,
    type: Date
  },
  "outcome" : {
    optional: true,
    type: String
  },
  "outcomeDesc" : {
    optional: true,
    type: String
  },
  "purposeOfEvent" : {
    optional: true,
    type: [ CodeableConcept ]
  },
  "agent.$.role" : {
    optional: true,
    type: [ CodeableConcept ]
  },
  "agent.$.reference" : {
    optional: true,
    type: Reference
  },
  "agent.$.userId" : {
    optional: true,
    type: IdentifierSchema
  },
  "agent.$.altId" : {
    optional: true,
    type: String
  },
  "agent.$.name" : {
    optional: true,
    type: String
  },
  "agent.$.requestor" : {
    optional: true,
    type: Boolean
  },
  "agent.$.location" : {
    optional: true,
    type: Reference
  },
  "agent.$.policy" : {
    optional: true,
    type: [ String ]
  },
  "agent.$.media" : {
    optional: true,
    type: Coding
  },
  "agent.$..network.address" : {
    optional: true,
    type: String
  },
  "agent.$..network.type" : {
    optional: true,
    type: String
  },
  "agent.$.purposeOfUse" : {
    optional: true,
    type: [ CodeableConcept ]
  },
  "source.site" : {
    optional: true,
    type: String
  },
  "source.identifier" : {
    optional: true,
    type: IdentifierSchema
  },
  "source.type" : {
    optional: true,
    type: [ CodingSchema ]
  },
  "entity.$.identifier" : {
    optional: true,
    type: IdentifierSchema
  },
  "entity.$.reference" : {
    optional: true,
    type: ReferenceSchema
  },
  "entity.$.type" : {
    optional: true,
    type: CodingSchema
  },
  "entity.$.role" : {
    optional: true,
    type: CodeableConcept
  },
  "entity.$.lifecycle" : {
    optional: true,
    type: CodingSchema
  },
  "entity.$.securityLabel" : {
    optional: true,
    type: [ CodeableConcept ]
  },
  "entity.$.name" : {
    optional: true,
    type: String
  },
  "entity.$.description" : {
    optional: true,
    type: String
  },
  "entity.$.query" : {
    optional: true,
    blackbox: true,
    type: Object
  },
  "entity.$.detail.$.type" : {
    optional: true,
    type: String
  },
  "entity.$.detail.$.value" : {
    optional: true,
    blackbox: true,
    type: Object
  }
}]);




