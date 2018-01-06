var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');

exports.HumanNameSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "HumanName"
    },
  "use" : {
    optional: true,
    type: Code
    },
  "text" : {
    optional: true,
    type: String
    },
  "family" : {
    optional: true,
    type: String
    },
  "given" : {
    optional: true,
    type: [String]
    },
  "prefix" : {
    optional: true,
    type: [String]
    },
  "suffix" : {
    optional: true,
    type: [String]
    },
  "preferred" : {
    optional: true,
    type: [String]
    },
  "period" : {
    optional: true,
    type: PeriodSchema
    }
});




exports.HumanName = {
  generate: function(){
    var newHumanName = {
      use: "official",
      text: "",
      family: [],
      given: []
    };
    return newHumanName;
  },
  clean: function(userName){
    if (userName) {

      HumanNameSchema.clean(userName);

      if (typeof userName.family === "string") {
        userName.family = [ userName.family ];
      } else {
        userName.family = userName.family;
      }
      if (typeof userName.given === "string") {
        userName.given = [ userName.given ];
      } else {
        userName.given = userName.given;
      }

    } else {
      userName = this.generate();
    }
  }
}
