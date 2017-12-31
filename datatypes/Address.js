/**
 * @summary Represents an Address
 * @class Address
 * @param {Object} document An object representing an address, ususally a Mongo document.
 * @example

 // Validate an object against the schema
obj = {address: "444 Somewhere St.", zip: "13456"};

isValid = AddressSchema.namedContext("AddressValidator").validate(obj);
// OR
isValid = AddressSchema.namedContext("AddressValidator").validateOne(obj, "keyToValidate");
// OR
isValid = Match.test(obj, AddressSchema);

 patientAddress = new Address({
 use: "home",
 text: "123 Main Street",
 city: "Somewhere",
 state: "Indiana",
 postalCode: "12345"
});
patientAddress.clean();
patientAddress.validate();
patientAddress.save();
 */


// //Address = BaseModel.extendAndSetupCollection('HL7.DataTypes.Addresses');
// Address = BaseModel.extend();
//
//
// //Assign a reference from Meteor.users to User.prototype._collection so BaseModel knows how to access it
// Address.prototype._collection = HL7.DataTypes.Addresses;
//
// // Create a persistent data store for addresses to be stored.
// HL7.DataTypes.Addresses = new Mongo.Collection('HL7.DataTypes.Addresses');
//
// //Add the transform to the collection since Meteor.users is pre-defined by the accounts package
// HL7.DataTypes.Addresses._transform = function (document) {
//   return new Address(document);
// };

Address = {
  create: function(line, city, state, postalCode, country){
    var newAddress = {
      line: [],
      city: '',
      state: '',
      postalCode: '',
      country: ''
    };

    if (line) {
      newAddress.line.push(line);
    }
    if (city) {
      newAddress.city = city;
    }
    if (state) {
      newAddress.state = state;
    }
    if (postalCode) {
      newAddress.postalCode = postalCode;
    }
    if (country) {
      newAddress.country = country;
    }

    return newAddress;
  }
}

// Add  the schema for a collection
export default AddressSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Address"
    },
  "use" : {
    optional: true,
    type: Code
    },
  "type" : {
    optional: true,
    type: Code
    },
  "text" : {
    optional: true,
    type: String
    },
  "line" : {
    optional: true,
    type: [String]
    },
  "city" : {
    optional: true,
    type: String
    },
  "district" : {
    optional: true,
    type: String
    },
  "state" : {
    optional: true,
    type: String
    },
  "postalCode" : {
    optional: true,
    type: String
    },
  "country" : {
    optional: true,
    type: String
    },
  "period" : {
    optional: true,
    type: PeriodSchema
    }
});
// AddressValidator = AddressSchema.namedContext("AddressValidator");
// HL7.DataTypes.Addresses.attachSchema(AddressSchema);
