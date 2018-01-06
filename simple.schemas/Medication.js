var AddressSchema = require('../datatypes/Address');
var AnnotationSchema = require('../datatypes/Annotation');
var BaseSchema = require('../datatypes/Base');
var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var CodeableConcept = require('../datatypes/CodeableConcept');
var ContactPointSchema = require('../datatypes/ContactPoint');
var DomainResourceSchema = require('../datatypes/DomainResource');
var GroupSchema = require('../datatypes/Group');
var HumanNameSchema = require('../datatypes/HumanName');
var IdentifierSchema = require('../datatypes/Identifier');
var PeriodSchema = require('../datatypes/Period');
var QuantitySchema = require('../datatypes/Quantity');
var ReferenceSchema = require('../datatypes/Reference');
var TimingSchema = require('../datatypes/Timing');


exports.MedicationSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Medication"
  },
  "code" :  {
    optional: true,
    type: CodeableConceptSchema
  }, // Codes that identify this medication
  "isBrand" :  {
    optional: true,
    type: Boolean
  }, // True if a brand
  "manufacturer" :  {
    optional: true,
    type: ReferenceSchema
  },// (Organization) // Manufacturer of the item
  "product.form" :  {
    optional: true,
    type: CodeableConceptSchema
  }, // powder | tablets | carton +
  "product.ingredient" :  {
    type: [Object],
    optional: true,
    blackbox: true
  }, // (Substance|Medication) }, // R!  The product contained
  "product.batch.$.lotNumber" :  {
    optional: true,
    type: String
  },
  "product.batch.$.expirationDate" :  {
    optional: true,
    type: Date
  },
  "package.container" :  {
    optional: true,
    type: CodeableConceptSchema
   }, // E.g. box, vial, blister-pack
  "package.content.$.item" :  {
    optional: true,
    type: ReferenceSchema
  }, //(Medication) }, // R!  A product in the package
  "package.content.$.amount" :  {
    optional: true,
    type: QuantitySchema // (SimpleQuantity)
  }, // Quantity present in the package
  "url": {
    optional: true,
    type: String
  }
});
