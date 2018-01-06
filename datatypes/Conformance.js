var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConceptSchema = require('../datatypes/CodeableConcept');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');



exports.ConformanceSchema = new SimpleSchema({
  "resourceType" : {
    type: "Conformance",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
  },
  "url" : {
    optional: true,
    type: String  // Logical uri to reference this statement
  },
  "version" : {
    optional: true,
    type: String // Logical id for this version of the statement
  },
  "name" : {
    optional: true,
    type: String // Informal name for this conformance statement
  },
  "status" : {
    optional: true,
    type: Code // draft | active | retired
  },
  "experimental" : {
    optional: true,
    type: Boolean // If for testing purposes, not real usage
  },
  "publisher" : {
    optional: true,
    type: String // Name of the publisher (Organization or individual)
  },
  "contact.$.name" : {
    optional: true,
    type: String // Name of a individual to contact
  },
  // "contact.$.telecom" : {
  //   optional: true,
  //   type: [ ContactPoint ] // Contact details for individual or publisher
  // },
  "date" : {
    optional: true,
    type: Date // R!  Publication Date(/time)
  },
  "description" : {
    optional: true,
    type: String // C? Human description of the conformance statement
  },
  "requirements" : {
    optional: true,
    type: String // Why is this needed?
  },
  "copyright" : {
    optional: true,
    type: String // Use and/or publishing restrictions
  },
  "kind" : {
    optional: true,
    type: Code // R!  instance | capability | requirements
  },
  "software.name" : {
    optional: true,
    type: String // R!  A name the software is known by
  },
  "software.version" : {
    optional: true,
    type: String // Version covered by this statement
  },
  "software.releaseDate" : {
    optional: true,
    type: Date // Date this version released
  },
  "implementation.description" : {
    optional: true,
    type: String // R!  Describes this specific instance
  },
  "implementation.url" : {
    optional: true,
    type: String // Base URL for the installation
  },
  "fhirVersion" : {
    optional: true,
    type: String // R!  FHIR Version the system uses
  },
  "acceptUnknown" : {
    optional: true,
    type: Code // R!  no | extensions | elements | both
  },
  "format" : {
    optional: true,
    type: [Code] // R!  formats supported (xml | json | mime type)
  },
  "profile" : {
    optional: true,
    type: [ ReferenceSchema ] // (StructureDefinition) Profiles for use cases supported
  },
  "rest.$.mode" : {
    optional: true,
    type: Code // R!  client | server
  },
  "rest.$.documentation" : {
    optional: true,
    type: String // General description of implementation
  },
  "rest.$.security.cors" : {
    optional: true,
    type:Boolean // Adds CORS Headers (http://enable-cors.org/)
  },
  "rest.$.security.service" : {
    optional: true,
    type: [ CodeableConceptSchema ] // OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
  },
  "rest.$.security.description" : {
    optional: true,
    type: String // General description of how security works
  },
  "rest.$.security.certificate.$.type" : {
    optional: true,
    type: Code // Mime type for certificate
  },
  //"rest.$.security.certificate.$.blob" : "<base64Binary>" // Actual certificate
  "rest.$.resource.$.type" : {
    optional: true,
    type: Code // R!  A resource type that is supported
  },
  "rest.$.resource.$.profile" : {
    optional: true,
    type:  ReferenceSchema  // (StructureDefinition) Base System profile for all uses of resource
  },
  "rest.$.resource.$.interaction.$.code" : {
    optional: true,
    type: Code // R!  read | vread | update | delete | history-instance | validate | history-type | create | search-type
  },
  "rest.$.resource.$.interaction.$.documentation" : {
    optional: true,
    type: String // Anything special about operation behavior
  },
  "rest.$.resource.$.versioning" : {
    optional: true,
    type: Code // no-version | versioned | versioned-update
  },
  "rest.$.resource.$.readHistory" : {
    optional: true,
    type: Boolean // Whether vRead can return past versions
  },
  "rest.$.resource.$.updateCreate" : {
    optional: true,
    type: Boolean // If update can commit to a new identity
  },
  "rest.$.resource.$.conditionalCreate" : {
    optional: true,
    type: Boolean // If allows/uses conditional create
  },
  "rest.$.resource.$.conditionalUpdate" : {
    optional: true,
    type: Boolean // If allows/uses conditional update
  },
  "rest.$.resource.$.conditionalDelete" : {
    optional: true,
    type: Code // not-supported | single | multiple - how conditional delete is supported
  },
  "rest.$.resource.$.searchInclude" : {
    optional: true,
    type: [String] // _include values supported by the server
  },
  "rest.$.resource.$.searchRevInclude" : {
    optional: true,
    type: [String] // _revinclude values supported by the server
  },
  "rest.$.resource.$.searchParam.$.name" : {
    optional: true,
    type:  String // R!  Name of search parameter
  },
  "rest.$.resource.$.searchParam.$.definition" : {
    optional: true,
    type: String // Source of definition for parameter
  },
  "rest.$.resource.$.searchParam.$.type" : {
    optional: true,
    type: Code // R!  number | date | string | token | reference | composite | quantity | uri
  },
  "rest.$.resource.$.searchParam.$.documentation" : {
    optional: true,
    type: String // Server-specific usage
  },
  "rest.$.resource.$.searchParam.$.target" : {
    optional: true,
    type: [Code] // Types of resource (if a resource reference)
  },
  "rest.$.resource.$.searchParam.$.modifier" : {
    optional: true,
    type: [Code] // missing | exact | contains | not | text | in | not-in | below | above | type
  },
  "rest.$.resource.$.searchParam.$.chain" : {
    optional: true,
    type: [String] // Chained names supported
  },
  "rest.$.code" : {
    optional: true,
    type: Code // R!  transaction | search-system | history-system
  },
  "rest.$.documentation" : {
    optional: true,
    type: String // Anything special about operation behavior
  },
  "rest.transactionMode" : {
    optional: true,
    type: Code // not-supported | batch | transaction | both
  },
  "rest.searchParam" : {
    optional: true,
    blackbox: true,
    type: [ Object ] // Search params for searching all resources
  },
  "rest.operation.$.name" : {
    optional: true,
    type: String // R!  Name by which the operation/query is invoked
  },
  "rest.operation.$.definition" : {
    optional: true,
    type: ReferenceSchema  // (OperationDefinition) R!  The defined operation/query
  },
  "rest.compartment" : {
    optional: true,
    type: [String] // Compartments served/used by system
  },
  "messaging.$.endpoint.$.protocol" : {
    optional: true,
    type: CodingSchema  // R!  http | ftp | mllp +
  },
  "messaging.$.endpoint.$.address" : {
    optional: true,
    type: String // R!  Address of end-point
  //"messaging.$.reliableCache" : "<unsignedInt>" // Reliable Message Cache Length (min)
  },
  "messaging.$.documentation" : {
    optional: true,
    type: String // Messaging interface behavior details
  },
  "messaging.$.event.$.code" : {
    optional: true,
    type: CodingSchema  // R!  Event type
  },
  "messaging.$.event.$.category" : {
    optional: true,
    type: Code // Consequence | Currency | Notification
  },
  "messaging.$.event.$.mode" : {
    optional: true,
    type: Code // R!  sender | receiver
  },
  "messaging.$.event.$.focus" : {
    optional: true,
    type: Code // R!  Resource that's focus of message
  },
  "messaging.$.event.$.request" : {
    optional: true,
    type: ReferenceSchema  // (StructureDefinition) R!  Profile that describes the request
  },
  "messaging.$.event.$.response" : {
    optional: true,
    type: ReferenceSchema  // (StructureDefinition) R!  Profile that describes the response
  },
  "messaging.$.event.$.documentation" : {
    optional: true,
    type:  String // Endpoint-specific event documentation
  },
  "document.$.mode" : {
    optional: true,
    type: Code // R!  producer | consumer
  },
  "document.$.documentation" : {
    optional: true,
    type: String // Description of document support
  },
  "document.$.profile" : {
    optional: true,
    type: ReferenceSchema  // (StructureDefinition) R!  Constraint on a resource used in the document
  }
});




exports.DefaultConformance = {
  create: function(){
    var newConformance = {

    };

    return newConformance;
  }
}
